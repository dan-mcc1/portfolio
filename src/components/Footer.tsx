export function Footer() {
  return (
    <footer className="border-t px-5 py-10 text-center text-[0.875rem] sm:px-6" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
      © {new Date().getFullYear()} Dan McCabe · Built with React, TypeScript &amp; Tailwind
    </footer>
  )
}
