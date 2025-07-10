/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hubzero.in', // ✅ This is required
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin'], // optional
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/admin'] },
    ],
  },
};
