export default {
  name: 'renovationArea',
  title: 'Renovation Area',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
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
      name: 'renovations',
      title: 'Renovations',
      type: 'array',
      of: [
        {
          type: 'renovationType',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return { ...selection };
    },
  },
};
