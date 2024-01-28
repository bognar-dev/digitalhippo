import colorField from '../color-picker/config'
import { CollectionConfig } from 'payload/types'

export const Shoots: CollectionConfig = {
  slug: 'shoots',
  fields: [
    {
        name: 'shootName', // required
        type: 'text', // required
        required: true,
    },
    {
        name: 'year', // required
        type: 'text', // required
        required: true,
    },
    {
        name:'Tag',
        type:'text',
        required: true,
    },
    {
        name: 'mainPicture', // required
        type: 'upload', // required
        relationTo: 'media',
        required: true,
    },
    {
        name: 'smallTop', // required
      type: 'upload', // required
      relationTo: 'media',
      required: true,
    },
    {
        name: 'middleSplit', // required
      type: 'upload', // required
      relationTo: 'media',
      required: true,
    },
    {
        name:'SplitWord',
        type:'text',
        required: true,
    },
    {
        name: 'row1', // required
      type: 'upload', // required
      relationTo: 'media',
      required: true,
    },
    {
        name: 'row2', // required
      type: 'upload', // required
      relationTo: 'media',
      required: true,
    },
    {
        name: 'row3', // required
      type: 'upload', // required
      relationTo: 'media',
      required: true,
    },

  ],
}