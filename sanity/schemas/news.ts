import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'news',
  title: 'Berita',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Berita',
      type: 'string',
      // Tambahkan ": any" atau tipe Rule agar TypeScript tidak protes
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Aksi Sosial', value: 'Aksi Sosial' },
          { title: 'Politik', value: 'Politik' },
          { title: 'Pemberdayaan', value: 'Pemberdayaan' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Isi Berita',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule: any) => Rule.required(),
    }),
  ],
});