# Langsapost - Portal Berita Terpercaya

Portal berita terpercaya untuk Langsa dan sekitarnya yang dibangun dengan teknologi modern untuk memberikan informasi terkini yang akurat dan berimbang.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **State Management**: React Hooks + Context
- **Form Handling**: React Hook Form + Zod
- **UI Components**: Radix UI + Custom Components
- **Testing**: Jest + Testing Library
- **Deployment**: Vercel / Docker

## 📋 Features

### Public Features
- 🏠 **Homepage** dengan breaking news ticker dan featured articles
- 📰 **Article Management** dengan kategori, tags, dan search
- 🏷️ **Category System** untuk organisasi konten
- 👤 **Author Profiles** untuk kredibilitas
- 💬 **Comment System** dengan moderasi
- 🔍 **Advanced Search** dan filtering
- 📱 **Responsive Design** untuk semua perangkat
- 🌙 **Dark Mode** support
- 📊 **SEO Optimized** dengan structured data
- 🔔 **PWA Support** dengan offline capabilities

### Admin Features
- 📊 **Dashboard** dengan analytics
- ✍️ **Article Editor** dengan rich text
- 👥 **User Management** dan role-based access
- 🏷️ **Category & Tag Management**
- 💬 **Comment Moderation**
- 📧 **Newsletter Management**
- 📁 **Media Library** dengan cloud storage
- 📈 **Analytics & Reports**
- ⚙️ **System Settings**

### Technical Features
- 🚀 **Performance Optimized** dengan caching
- 🔒 **Security Best Practices**
- 📊 **Real-time Analytics**
- 🔄 **Auto Backup System**
- 📧 **Email Notifications**
- 🌐 **Multi-language Ready**
- 📱 **Social Media Integration**
- 🔍 **Full-text Search**

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm atau yarn
- Supabase account
- Git

### Installation

1. **Clone repository**
   ```bash
   git clone https://github.com/langsapost/website.git
   cd langsapost
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` dengan konfigurasi yang sesuai:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   
   SITE_URL=http://localhost:3000
   SITE_NAME=Langsapost
   ```

4. **Setup database**
   ```bash
   # Install Supabase CLI
   npm install -g @supabase/cli
   
   # Login to Supabase
   supabase login
   
   # Link project
   supabase link --project-ref your-project-ref
   
   # Run migrations
   npm run db:migrate
   
   # Seed database (optional)
   npm run db:seed
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
langsapost/
├── public/                 # Static assets
│   ├── icons/             # App icons & manifest
│   ├── images/            # Images & media
│   └── ads/               # Advertisement banners
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (public)/      # Public pages
│   │   ├── admin/         # Admin panel
│   │   ├── auth/          # Authentication
│   │   └── api/           # API routes
│   ├── components/        # Reusable components
│   ├── lib/              # Utility libraries
│   ├── hooks/            # Custom React hooks
│   ├── types/            # TypeScript types
│   ├── utils/            # Helper functions
│   └── providers/        # Context providers
├── docs/                 # Documentation
├── scripts/              # Build & utility scripts
└── tests/               # Test files
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Configure environment variables** di Vercel dashboard

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Docker

1. **Build image**
   ```bash
   npm run docker:build
   ```

2. **Run container**
   ```bash
   npm run docker:run
   ```

### Manual Server

1. **Build application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm run start:prod
   ```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run CI tests
npm run test:ci
```

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production version |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests |
| `npm run type-check` | Check TypeScript types |
| `npm run db:migrate` | Run database migrations |
| `npm run docker:dev` | Run with Docker Compose |

## 🔧 Configuration

### Database Schema

Database menggunakan Supabase dengan schema:

- **articles** - Artikel berita
- **categories** - Kategori artikel
- **tags** - Tag artikel
- **profiles** - Profile pengguna
- **comments** - Komentar artikel
- **media** - File media

### API Routes

- `/api/articles` - Article management
- `/api/categories` - Category management  
- `/api/comments` - Comment system
- `/api/auth` - Authentication
- `/api/admin` - Admin operations

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Development Guidelines

- Ikuti [Conventional Commits](https://conventionalcommits.org/)
- Tulis tests untuk feature baru
- Update documentation
- Pastikan CI/CD passed

## 📄 License

Project ini menggunakan [MIT License](LICENSE).

## 📞 Support

- 📧 Email: admin@langsapost.com
- 🌐 Website: [langsapost.com](https://langsapost.com)
- 📱 Social Media: [@langsapost](https://twitter.com/langsapost)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend as a Service
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Radix UI](https://radix-ui.com/) - UI components

## 📊 Status

![Build Status](https://github.com/langsapost/website/workflows/CI/badge.svg)
![Coverage](https://codecov.io/gh/langsapost/website/branch/main/graph/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

**Made with ❤️ by Tim Langsapost**
