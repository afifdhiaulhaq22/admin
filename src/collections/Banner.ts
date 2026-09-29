import type { CollectionConfig } from 'payload'

export const Banner: CollectionConfig = {
  slug: 'banners',

  admin: {
    useAsTitle: 'alt',
  },

  fields: [
    {
      name: 'gambar',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
