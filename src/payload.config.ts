import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import path from 'path'
import dotenv from 'dotenv'

import { Media } from './collections/Media'

import { Shoots } from './collections/Shoot'
import Users from './collections/Users'
import { People } from './collections/People'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

const adapter = s3Adapter({
  config: {
    endpoint: process.env.NEXT_PUBLIC_S3_ENDPOINT,
  },
  bucket: process.env.NEXT_PUBLIC_S3_BUCKET as string,
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'model-site-wheat.vercel.app',
  collections: [Media, Shoots, Users, People],
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    webpack: (config) => {

      // This is to get rid of typescript error
      if (config.resolve?.fallback)
        config.resolve.fallback = { ...config.resolve.fallback, fs: false };

      return config;
    },
    meta: {
      titleSuffix: '- Niklas Bognar',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    push: true,
    pool: {
      connectionString: process.env.DATABASE_URL,
    }
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  plugins: [
    cloudStorage({
      collections: {
        'media': {
          adapter,
          disablePayloadAccessControl: true,
        }
      },
    }),
  ],
})
