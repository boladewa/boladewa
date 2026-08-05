import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.boladewa.online',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Tambahkan halaman lain di sini jika ada (contoh: /register)
    {
      url: 'https://www.boladewa.online/register',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}