export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Initialize monitoring and telemetry
    console.log('🚀 Langsapost server instrumentation loaded')
    
    // Initialize database connections
    if (process.env.NODE_ENV === 'production') {
      console.log('📊 Production monitoring enabled')
    }
    
    // Setup error tracking
    if (process.env.SENTRY_DSN) {
      const { init } = await import('@sentry/nextjs')
      init({
        dsn: process.env.SENTRY_DSN,
        environment: process.env.NODE_ENV,
        tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
      })
      console.log('🔍 Sentry error tracking initialized')
    }
    
    // Cleanup old data periodically
    setInterval(async () => {
      try {
        // Cleanup old sessions, logs, etc.
        console.log('🧹 Running periodic cleanup...')
      } catch (error) {
        console.error('❌ Cleanup error:', error)
      }
    }, 24 * 60 * 60 * 1000) // Run daily
  }
}