import React from 'react';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-slate-900">WebUMKM</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#paket" className="text-slate-600 hover:text-blue-600 transition-colors">Paket</a>
              <a href="#portfolio" className="text-slate-600 hover:text-blue-600 transition-colors">Portfolio</a>
              <a href="#proses" className="text-slate-600 hover:text-blue-600 transition-colors">Proses</a>
              <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors">FAQ</a>
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20buat%20website" 
                className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Terima Pesanan Baru - Slot Terbatas
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Website Profesional untuk{' '}
              <span className="text-blue-600">UMKM Indonesia</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Bikin website bisnis kamu dalam 1-7 hari. Harga terjangkau mulai 500 ribuan. 
              Gratis konsultasi dan revisi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20konsultasi%20gratis" 
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Sekarang
              </a>
              <a 
                href="#paket" 
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl font-semibold border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Lihat Paket
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Gratis Konsultasi
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Revisi Sampai OK
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Garansi 30 Hari
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Gratis Hosting
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Masih Pakai Cara Lama?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Banyak UMKM kehilangan pelanggan karena tidak punya website profesional
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '📱',
                title: 'Cuma Andalan Medsos',
                problem: 'Followers bisa turun, algoritma berubah, akun bisa dibanned',
                impact: 'Bisnis nggak stabil, susah dijangkau customer baru'
              },
              {
                icon: '💸',
                title: 'Biaya Mahal',
                problem: 'Agency charge 10-50 juta untuk website',
                impact: 'UMKM nggak mampu, akhirnya nggak punya website'
              },
              {
                icon: '⏰',
                problem: 'Pengerjaan 1-3 bulan',
                title: 'Lama Selesainya',
                impact: 'Kesempatan bisnis hilang sambil nunggu website jadi'
              }
            ].map((item, index) => (
              <div key={index} className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-3">{item.problem}</p>
                <p className="text-red-600 font-medium">{item.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Solusi untuk UMKM
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Website profesional dengan harga terjangkau, cepat, dan berkualitas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '💰',
                title: 'Terjangkau',
                desc: 'Mulai 500 ribuan, bisa cicil'
              },
              {
                icon: '⚡',
                title: 'Cepat',
                desc: '1-7 hari sudah jadi'
              },
              {
                icon: '🎨',
                title: 'Profesional',
                desc: 'Desain modern, mobile-friendly'
              },
              {
                icon: '🔧',
                title: 'Gratis Maintenance',
                desc: '30 hari garansi full'
              }
            ].map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="paket" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pilih Paket Sesuai Kebutuhan
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Semua paket sudah termasuk hosting gratis 1 tahun
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-600 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">STARTER</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">Rp 500K</div>
              <p className="text-slate-500 mb-6">Untuk landing page simple</p>
              <ul className="space-y-3 mb-8">
                {[
                  '1 Halaman Landing Page',
                  'Mobile Responsive',
                  'WhatsApp Button',
                  'Google Maps Integration',
                  '1x Revisi',
                  '3-5 Hari Pengerjaan'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20paket%20Starter%20500K" 
                className="block w-full bg-slate-100 text-slate-700 text-center py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Pilih Paket
              </a>
            </div>

            {/* Standard */}
            <div className="border-2 border-blue-600 rounded-2xl p-8 relative shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                PALING LARIS
              </div>
              <div className="text-sm font-semibold text-blue-600 mb-2">BUSINESS</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">Rp 1.5Juta</div>
              <p className="text-slate-500 mb-6">Untuk bisnis yang serius</p>
              <ul className="space-y-3 mb-8">
                {[
                  '5 Halaman Website',
                  'Mobile Responsive',
                  'WhatsApp & Email Form',
                  'Google Maps & Analytics',
                  'SEO Basic',
                  '3x Revisi',
                  '5-7 Hari Pengerjaan',
                  'Gratis Domain 1 Tahun'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20paket%20Business%201.5Juta" 
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
              >
                Pilih Paket
              </a>
            </div>

            {/* Premium */}
            <div className="border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-600 transition-all">
              <div className="text-sm font-semibold text-blue-600 mb-2">PREMIUM</div>
              <div className="text-4xl font-bold text-slate-900 mb-2">Rp 3Juta</div>
              <p className="text-slate-500 mb-6">Untuk bisnis yang ingin lebih</p>
              <ul className="space-y-3 mb-8">
                {[
                  '10 Halaman Website',
                  'Mobile Responsive',
                  'CMS (Update Konten Sendiri)',
                  'SEO Optimization',
                  'Google Analytics & Search Console',
                  '5x Revisi',
                  '7-10 Hari Pengerjaan',
                  'Gratis Domain & Hosting 1 Tahun',
                  'Training Penggunaan'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20paket%20Premium%203Juta" 
                className="block w-full bg-slate-100 text-slate-700 text-center py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all"
              >
                Pilih Paket
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Contoh Website yang Sudah Dibuat
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Beberapa project yang sudah kami kerjakan untuk UMKM Indonesia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Toko Berkah', type: 'Toko Online', image: '🛒' },
              { name: 'Travel Jaya', type: 'Travel Agent', image: '✈️' },
              { name: 'Rental Mobil', type: 'Rental Service', image: '🚗' },
              { name: 'Cafe Senja', type: 'Restoran', image: '☕' },
              { name: 'Klinik Sehat', type: 'Healthcare', image: '🏥' },
              { name: 'Bengkel Auto', type: 'Service', image: '🔧' }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <span className="text-6xl">{item.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-900">{item.name}</h3>
                  <p className="text-slate-500 text-sm">{item.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proses" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Proses Pengerjaan Simple
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dari konsultasi sampai website live, semuanya mudah dan transparan
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Konsultasi',
                desc: 'Diskusi kebutuhan bisnis kamu via WhatsApp atau meeting online'
              },
              {
                step: '02',
                title: 'Pembayaran',
                desc: 'DP 50% di awal, pelunasan setelah website selesai'
              },
              {
                step: '03',
                title: 'Pengerjaan',
                desc: 'Kami bikin website sesuai kebutuhan, kamu bisa revisi'
              },
              {
                step: '04',
                title: 'Launching',
                desc: 'Website live, training penggunaan, garansi 30 hari'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Kata Mereka yang Sudah Pakai
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Testimoni dari pemilik UMKM yang sudah punya website
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Budi Santoso',
                business: 'Pemilik Toko Berkah',
                quote: 'Website jadi dalam 5 hari, pelanggan naik 30%. Recommended!',
                rating: 5
              },
              {
                name: 'Siti Aminah',
                business: 'Travel Jaya',
                quote: 'Harga terjangkau, hasil profesional. Customer service responsif.',
                rating: 5
              },
              {
                name: 'Ahmad Rizki',
                business: 'Rental Mobil',
                quote: 'Dari nggak punya website, sekarang bisa dapat order online. Mantap!',
                rating: 5
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 italic">"{item.quote}"</p>
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-slate-500 text-sm">{item.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-lg text-slate-600">
              Jawaban untuk pertanyaan umum seputar jasa pembuatan website
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Berapa lama pengerjaan website?',
                a: 'Tergantung paket: Starter 3-5 hari, Business 5-7 hari, Premium 7-10 hari. Bisa lebih cepat jika konten sudah siap.'
              },
              {
                q: 'Apakah ada biaya bulanan?',
                a: 'Tidak ada. Gratis hosting 1 tahun. Setelah itu bisa perpanjang dengan biaya Rp 300K/tahun (sudah termasuk domain).'
              },
              {
                q: 'Bisa bayar cicil?',
                a: 'Bisa! DP 50% di awal, 50% setelah website selesai. Untuk nominal di atas 2 juta bisa cicil 2x tanpa bunga.'
              },
              {
                q: 'Apakah bisa update konten sendiri?',
                a: 'Untuk paket Premium, ada CMS sehingga bisa update konten sendiri. Untuk paket lain, bisa request training atau pakai jasa update konten.'
              },
              {
                q: 'Garansi seperti apa?',
                a: 'Garansi 30 hari untuk bug atau error. Setelah itu tetap bisa konsultasi gratis, untuk perubahan besar ada biaya tambahan.'
              },
              {
                q: 'Domain pakai nama sendiri?',
                a: 'Ya, bisa pakai domain custom seperti namabisniskamu.com. Gratis domain 1 tahun untuk paket Business dan Premium.'
              }
            ].map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{item.q}</h3>
                <p className="text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Siap Punya Website Profesional?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Konsultasi gratis, nggak perlu ragu-ragu. Diskusikan kebutuhan bisnis kamu, 
            kami bantu carikan solusi terbaik.
          </p>
          <a 
            href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20konsultasi%20gratis%20buat%20website" 
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Konsultasi Gratis via WhatsApp
          </a>
          <p className="text-blue-200 text-sm mt-4">
            Response cepat • Tanpa spam • Gratis konsultasi
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="font-bold text-lg">WebUMKM</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-sm">
                Jasa pembuatan website profesional untuk UMKM Indonesia. 
                Harga terjangkau, kualitas premium.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.897 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.897-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Paket</h4>
              <ul className="space-y-2">
                <li><a href="#paket" className="text-slate-400 hover:text-white transition-colors">Starter</a></li>
                <li><a href="#paket" className="text-slate-400 hover:text-white transition-colors">Business</a></li>
                <li><a href="#paket" className="text-slate-400 hover:text-white transition-colors">Premium</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-slate-400">
                <li>WhatsApp: 0812-3456-7890</li>
                <li>Email: hello@webumkm.id</li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2026 WebUMKM. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
