# Contributing to Langsapost

Terima kasih atas minat Anda untuk berkontribusi pada Langsapost! Kami menghargai kontribusi dari semua orang.

## 📋 Code of Conduct

Proyek ini mengadopsi code of conduct yang diharapkan untuk diikuti oleh semua kontributor. Mohon baca [Code of Conduct](CODE_OF_CONDUCT.md) sebelum berkontribusi.

## 🚀 Cara Berkontribusi

### 🐛 Melaporkan Bug

Sebelum membuat issue baru:
1. Pastikan bug belum pernah dilaporkan dengan mencari di [Issues](https://github.com/langsapost/website/issues)
2. Jika belum ada, buat issue baru dengan template Bug Report
3. Sertakan informasi detail seperti:
   - Langkah reproduksi bug
   - Perilaku yang diharapkan vs aktual
   - Screenshot/video jika memungkinkan
   - Browser dan versi OS
   - Console logs yang relevan

### 💡 Mengusulkan Feature

1. Buat issue dengan template Feature Request
2. Jelaskan masalah yang ingin diselesaikan
3. Berikan contoh use case
4. Sertakan mockup/wireframe jika ada

### 🔧 Mengembangkan Code

#### Prerequisites
- Node.js 18+
- npm/yarn
- Git
- Supabase account untuk development

#### Setup Development Environment

1. **Fork repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/langsapost.git
   cd langsapost
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local dengan konfigurasi development
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

#### Development Workflow

1. **Create branch untuk feature/bugfix**
   ```bash
   git checkout -b feature/nama-feature
   # atau
   git checkout -b bugfix/nama-bug
   ```

2. **Commit menggunakan Conventional Commits**
   ```bash
   git commit -m "feat: menambahkan fitur search artikel"
   git commit -m "fix: memperbaiki bug pagination"
   git commit -m "docs: update README.md"
   ```

3. **Push dan create Pull Request**
   ```bash
   git push origin feature/nama-feature
   ```

## 📝 Coding Standards

### TypeScript
- Gunakan TypeScript untuk semua file baru
- Definisikan types yang jelas dan reusable
- Hindari `any` type kecuali benar-benar diperlukan

### React/Next.js
- Gunakan functional components dengan hooks
- Implementasikan proper error boundaries
- Optimize performance dengan React.memo, useMemo, useCallback
- Gunakan Server Components ketika memungkinkan

### Styling
- Gunakan Tailwind CSS dengan konsisten
- Ikuti design system yang ada
- Responsive design untuk semua breakpoints
- Dark mode support

### Code Quality
```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check

# Run tests
npm test
```

## 🧪 Testing

### Unit Tests
- Tulis tests untuk utility functions
- Test React components dengan Testing Library
- Mock external dependencies

### Integration Tests
- Test API routes
- Test database operations
- Test authentication flows

### E2E Tests (Coming Soon)
- Critical user journeys
- Cross-browser testing

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── (public)/       # Public routes
│   ├── admin/          # Admin panel
│   ├── auth/           # Authentication
│   └── api/            # API routes
├── components/         # React components
│   ├── ui/            # Base UI components
│   ├── forms/         # Form components
│   └── layout/        # Layout components
├── lib/               # Utilities & configurations
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Helper functions
└── providers/         # React context providers
```

## 🎨 Design Guidelines

### UI/UX Principles
- **Accessibility First**: WCAG 2.1 AA compliance
- **Mobile First**: Responsive design
- **Performance**: Fast loading times
- **Usability**: Intuitive navigation

### Color Palette
- Primary: Blue (#2563eb)
- Secondary: Gray scale
- Accent: Red untuk breaking news
- Success: Green
- Warning: Yellow
- Error: Red

### Typography
- Primary: Inter
- Fallback: System fonts
- Hierarchy yang jelas dengan proper heading levels

## 🔧 Database Schema

### Main Tables
- `articles` - Artikel berita
- `categories` - Kategori artikel
- `tags` - Tag sistem
- `profiles` - User profiles
- `comments` - Comment system
- `media` - File uploads

### Conventions
- Use snake_case untuk column names
- Include `created_at` dan `updated_at` untuk audit
- Use UUIDs untuk primary keys
- Implement soft deletes dengan `deleted_at`

## 📦 Dependencies

### Adding New Dependencies
1. Evaluasi apakah dependency benar-benar dibutuhkan
2. Pilih package yang aktif maintenance
3. Check bundle size impact
4. Update documentation jika perlu

### Preferred Libraries
- **State Management**: React Context/Zustand
- **Forms**: React Hook Form + Zod
- **UI Components**: Radix UI
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Dates**: date-fns
- **Testing**: Jest + Testing Library

## 🚀 Deployment

### Staging
- Automatic deployment dari `develop` branch
- Testing environment untuk review

### Production
- Manual deployment dari `main` branch
- Requires approval dari maintainers
- Automated tests harus pass

## 📋 Pull Request Guidelines

### PR Title
Gunakan format: `type(scope): description`
```
feat(auth): add social login with Google
fix(admin): resolve pagination bug in articles list
docs(readme): update installation instructions
```

### PR Description Template
```markdown
## 📝 Description
Brief description of changes

## 🔧 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## 🧪 Testing
- [ ] Tests pass locally
- [ ] New tests added
- [ ] Manual testing completed

## 📷 Screenshots
Include screenshots for UI changes

## 📋 Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
```

### Review Process
1. Automated checks (lint, tests, build)
2. Code review oleh maintainers
3. Testing di staging environment
4. Merge setelah approval

## 🏷️ Versioning

Kami menggunakan [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

## 📞 Community

### Communication Channels
- **GitHub Issues**: Bug reports dan feature requests
- **Discussions**: General questions dan ideas
- **Email**: admin@langsapost.com untuk hal sensitif

### Getting Help
1. Check dokumentasi dan FAQ
2. Search existing issues
3. Join community discussions
4. Create new issue jika diperlukan

## 🎉 Recognition

Kontributor akan diakui dalam:
- CONTRIBUTORS.md file
- Release notes untuk contributions
- Social media shoutouts
- Potential job opportunities

## 📄 License

Dengan berkontribusi, Anda setuju bahwa kontribusi Anda akan dilisensikan di bawah [MIT License](LICENSE).

---

**Terima kasih telah berkontribusi untuk Langsapost! 🙏**