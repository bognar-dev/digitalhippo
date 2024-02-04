import { CollectionConfig } from 'payload/types'

export const People: CollectionConfig = {
    slug: 'people',
    fields: [
        {
            name: 'FirstName', // required
            type: 'text', // required
            required: true,
        },
        {
            name: 'LastName', // required
            type: 'text', // required
            required: true,
        },
        {
            name: 'Role', // required
            type: 'text', // required
            hasMany: true,
            required: true,
        },
        {
            name: 'Instagram', // required
            type: 'text', // required
            required: false,
        },
        {
            name: 'photo', // required
            type: 'upload', // required
            relationTo: 'media',
            required: false,
        },

    ]
}