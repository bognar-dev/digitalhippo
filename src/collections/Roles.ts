import { CollectionConfig } from 'payload/types'

export const Roles: CollectionConfig = {
    slug: 'Roles',
    fields: [

        {
            name: 'Role', // required
            type: 'text', // required
            required: true,
        },
        
    ]

}