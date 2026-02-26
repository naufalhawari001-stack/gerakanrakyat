export default {
  name: 'quote',
  title: 'Pesan Ketua Umum',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Nama Tokoh',
      type: 'string',
      initialValue: 'Sahrin Hamid',
    },
    {
      name: 'role',
      title: 'Jabatan',
      type: 'string',
      initialValue: 'Ketua Umum Gerakan Rakyat',
    },
    {
      name: 'quoteText',
      title: 'Isi Pesan/Quote',
      type: 'text',
      description: 'Kekuatan Utama Rakyat adalah Gotong Royong.',
    },
    {
      name: 'photo',
      title: 'Foto (PNG Transparan)',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};