export default {
  name: 'agenda',
  title: 'Agenda & KTA',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Agenda',
      type: 'string',
      description: 'Contoh: Peluncuran Kartu Tanda Anggota (KTA)',
    },
    {
      name: 'slogan',
      title: 'Slogan Agenda',
      type: 'string',
      description: 'Contoh: "Menyatukan Barisan, Mengawal Kesejahteraan"',
    },
    {
      name: 'registrationLink',
      title: 'Link Pendaftaran',
      type: 'url',
      description: 'Contoh: https://daftar.gerakanrakyat.org/',
    },
  ],
};