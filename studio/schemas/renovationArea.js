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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Hero Video',
      description:
        'Input YouTube video ID e.g. ("hupk2bDoGQk" from https://youtu.be/hupk2bDoGQk)',
      name: 'heroVideoID',
      type: 'string',
    },
    {
      title: 'Hero image',
      description:
        'If Hero Video has input or enabled this image will be shown on mobile',
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
