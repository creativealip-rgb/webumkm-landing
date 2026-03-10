import React from 'react';

export const metadata = {
  title: 'WebUMKM - Jasa Pembuatan Website Profesional',
  description: 'Jasa pembuatan website untuk UMKM Indonesia. Harga terjangkau mulai 500 ribuan. Cepat 1-7 hari. Gratis hosting dan konsultasi.',
  keywords: 'website umkm, jasa bikin web, pembuatan website, web murah, landing page',
  authors: [{ name: 'WebUMKM' }],
  openGraph: {
    title: 'WebUMKM - Jasa Pembuatan Website Profesional',
    description: 'Website profesional untuk UMKM Indonesia. Mulai 500 ribuan.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebUMKM - Jasa Pembuatan Website Profesional',
    description: 'Website profesional untuk UMKM Indonesia. Mulai 500 ribuan.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
