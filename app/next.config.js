module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' *.google-analytics.com *.youtube.com;"
          }
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/software-engineer',
        destination: '/',
        permanent: true,
      },
    ]
  }
} 