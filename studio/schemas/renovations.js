export default {
  name: 'renovations',
  title: 'Renovations',
  type: 'document',
  fields: [
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
