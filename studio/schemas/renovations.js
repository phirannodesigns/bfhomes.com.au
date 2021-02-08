export default {
  name: 'renovations',
  title: 'Renovations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Hero image',
      name: 'heroImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'renovation',
      title: 'Renovation Areas',
      type: 'array',
      of: [
        {
          type: 'renovationArea',
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return { title: 'Renovations' };
    },
  },
};
