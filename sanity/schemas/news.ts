export default {
  name: 'news',
  title: 'Berita & Suara Rakyat',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Berita',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Aksi Sosial', value: 'Aksi Sosial' },
          { title: 'Internal', value: 'Internal' },
          { title: 'Politik', value: 'Politik' },
        ],
      },
    },
    {
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Isi Berita',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};