export default {
  name: 'settings',
  title: 'Pengaturan Global',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Nama Gerakan (Sub-Logo)',
      type: 'string',
      description: 'Teks yang muncul di bawah logo (Contoh: Banyumas)',
    },
    {
      name: 'heroHeadline',
      title: 'Headline Hero',
      type: 'string',
      description: 'Tulisan besar di halaman utama (Contoh: Hanya untuk Rakyat)',
    },
    {
      name: 'heroTagline',
      title: 'Tagline Hero',
      type: 'string',
      description: 'Tulisan hashtag (Contoh: #GotongRoyong)',
    },
    {
      name: 'contactInfo',
      title: 'Informasi Kontak',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Nomor WhatsApp', type: 'string' },
        { name: 'email', title: 'Email Resmi', type: 'string' },
        { name: 'address', title: 'Alamat Sekretariat', type: 'text' },
      ],
    },
    {
      name: 'socialMedia',
      title: 'Media Sosial',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'whatsapp', title: 'WhatsApp Group/Chat URL', type: 'url' },
      ],
    },
    {
      name: 'logos',
      title: 'Aset Logo',
      type: 'object',
      fields: [
        { name: 'mainLogo', title: 'Logo Utama (Navbar)', type: 'image', options: { hotspot: true } },
        { name: 'footerLogo', title: 'Logo Footer (Putih)', type: 'image', options: { hotspot: true } },
      ],
    },
  ],
};