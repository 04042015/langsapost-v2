import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beranda',
  description: 'Portal berita terpercaya untuk Langsa dan sekitarnya. Dapatkan informasi terkini seputar politik, ekonomi, olahraga, teknologi, dan berita lokal lainnya.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Langsapost</h1>
                <p className="text-xs text-muted-foreground">Portal Berita Terpercaya</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Beranda</a>
              <a href="/artikel" className="text-muted-foreground hover:text-primary transition-colors">Artikel</a>
              <a href="/kategori" className="text-muted-foreground hover:text-primary transition-colors">Kategori</a>
              <a href="/tentang" className="text-muted-foreground hover:text-primary transition-colors">Tentang</a>
              <a href="/kontak" className="text-muted-foreground hover:text-primary transition-colors">Kontak</a>
            </nav>
            
            <div className="flex items-center space-x-2">
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="md:hidden text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 text-sm font-bold rounded mr-4">
              BREAKING
            </span>
            <div className="overflow-hidden flex-1">
              <div className="breaking-ticker whitespace-nowrap">
                <span className="inline-block">
                  🚨 Pemkot Langsa Resmikan Jembatan Baru di Pusat Kota • 
                  📊 Inflasi Aceh Turun 0.2% Bulan Ini • 
                  ⚽ Tim Sepak Bola Langsa Juara Liga Regional • 
                  🌧️ BMKG: Waspadai Hujan Lebat 3 Hari Ke Depan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <article className="news-card group cursor-pointer">
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                    <span className="text-primary font-semibold">Featured Image</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">Politik</span>
                    <span>•</span>
                    <span>2 jam yang lalu</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                    Wali Kota Langsa Luncurkan Program Smart City untuk Meningkatkan Pelayanan Publik
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Program Smart City yang diluncurkan Pemkot Langsa bertujuan untuk digitalisasi layanan publik 
                    dan meningkatkan efisiensi birokrasi. Berbagai aplikasi dan sistem terintegrasi akan memudahkan 
                    masyarakat dalam mengakses layanan pemerintahan.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span>1,234</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <span>89</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                      </svg>
                      <span>45</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar Latest News */}
            <aside className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4 pb-2 border-b">Berita Terbaru</h3>
                <div className="space-y-4">
                  {[
                    'Festival Budaya Aceh 2024 Akan Digelar di Langsa',
                    'Harga BBM Turun, Pengusaha Transportasi Senang',
                    'Pembangunan Terminal Baru Capai 70 Persen',
                    'UMKM Langsa Raih Penghargaan Nasional',
                    'Cuaca Ekstrem, Warga Diminta Waspada'
                  ].map((title, index) => (
                    <article key={index} className="news-card group cursor-pointer">
                      <div className="flex space-x-3">
                        <div className="w-20 h-16 bg-muted rounded flex-shrink-0">
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 rounded flex items-center justify-center">
                            <span className="text-xs text-primary font-medium">IMG</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                            {title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{index + 1} jam yang lalu</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Kategori Berita</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { name: 'Politik', icon: '🏛️', color: 'bg-blue-500' },
              { name: 'Ekonomi', icon: '💼', color: 'bg-green-500' },
              { name: 'Olahraga', icon: '⚽', color: 'bg-orange-500' },
              { name: 'Teknologi', icon: '💻', color: 'bg-purple-500' },
              { name: 'Kesehatan', icon: '🏥', color: 'bg-red-500' },
              { name: 'Pendidikan', icon: '📚', color: 'bg-indigo-500' },
              { name: 'Hiburan', icon: '🎭', color: 'bg-pink-500' },
              { name: 'Lifestyle', icon: '✨', color: 'bg-yellow-500' },
            ].map((category) => (
              <a
                key={category.name}
                href={`/kategori/${category.name.toLowerCase()}`}
                className="group p-4 rounded-lg border hover:shadow-md transition-all"
              >
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center text-white text-xl mb-2 mx-auto group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <p className="text-center text-sm font-medium group-hover:text-primary transition-colors">
                  {category.name}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">L</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Langsapost</h3>
                  <p className="text-sm text-muted-foreground">Portal Berita Terpercaya</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Portal berita terpercaya untuk Langsa dan sekitarnya. Menyajikan informasi terkini 
                yang akurat dan berimbang untuk masyarakat.
              </p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a
                    key={social}
                    href={`https://${social}.com/langsapost`}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kategori</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/kategori/politik" className="hover:text-primary transition-colors">Politik</a></li>
                <li><a href="/kategori/ekonomi" className="hover:text-primary transition-colors">Ekonomi</a></li>
                <li><a href="/kategori/olahraga" className="hover:text-primary transition-colors">Olahraga</a></li>
                <li><a href="/kategori/teknologi" className="hover:text-primary transition-colors">Teknologi</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Informasi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
                <li><a href="/kontak" className="hover:text-primary transition-colors">Kontak</a></li>
                <li><a href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</a></li>
                <li><a href="/kebijakan-privasi" className="hover:text-primary transition-colors">Kebijakan Privasi</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Langsapost. Hak cipta dilindungi undang-undang.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
