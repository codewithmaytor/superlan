'use client'

import { useState, useEffect, useRef, type KeyboardEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/lib/nav-items'

function BrandLink({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3 flex-shrink-0" aria-label="Superlan East Africa - Home">
      <div className="w-7 aspect-[322/437] relative">
        <Image src="/logo.svg" alt="Superlan East Africa Logo" fill className="object-contain" />
      </div>
      <div>
        <div className="text-2xl font-bold tracking-tight text-primary leading-none">
          SUPERLAN
        </div>
        <div className="text-[10px] font-medium text-on-secondary-container tracking-[0.2em] uppercase leading-none mt-0.5">
          EAST AFRICA
        </div>
      </div>
    </Link>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    const menu = menuRef.current
    if (!mobileOpen || !menu) return

    const desktop = window.matchMedia('(min-width: 1024px)')
    if (desktop.matches) {
      setMobileOpen(false)
      return
    }

    const previousBodyOverflow = document.body.style.overflow
    const previousHtmlOverflow = document.documentElement.style.overflow
    const menuButton = menuButtonRef.current
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    menu.showModal()
    closeButtonRef.current?.focus({ preventScroll: true })

    const closeOnDesktop = () => {
      if (desktop.matches) setMobileOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)

    return () => {
      desktop.removeEventListener('change', closeOnDesktop)
      menu.close()
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousHtmlOverflow
      if (desktop.matches) {
        document.querySelector<HTMLAnchorElement>('header nav[aria-label="Main navigation"] a[aria-current="page"]')?.focus({ preventScroll: true })
      } else {
        menuButton?.focus({ preventScroll: true })
      }
    }
  }, [mobileOpen])

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== 'Tab') return
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement | HTMLButtonElement>('a[href], button')
    if (!items?.length) return
    const first = items[0]
    const last = items[items.length - 1]

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const current = window.scrollY
      setScrolled(current > 10)
      if (current > lastScrollY && current > 80) {
        setVisible(false)
      } else {
        setVisible(true)
      }
      lastScrollY = current
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 h-[72px] bg-background transition-all duration-300',
          scrolled && 'shadow-md',
          visible || mobileOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="mx-auto max-w-[1280px] h-full flex items-center justify-between px-6 md:px-8 lg:px-10">
          <BrandLink />

          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap',
                    isActive
                      ? 'text-primary font-bold'
                      : 'text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container'
                  )}
                >
                  {isActive && (
                    <span className="mr-2 inline-block w-1.5 h-1.5 rounded-full bg-tertiary" />
                  )}
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              ref={menuButtonRef}
              type="button"
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-haspopup="dialog"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <dialog
        ref={menuRef}
        id="mobile-menu"
        className="fixed inset-0 m-0 h-dvh w-full max-h-none max-w-none border-0 bg-background p-0 text-foreground overflow-y-auto overscroll-contain scroll-pt-[88px] lg:hidden backdrop:bg-black/40"
        aria-label="Mobile navigation menu"
        aria-modal="true"
        onKeyDown={handleMenuKeyDown}
        onCancel={(event) => {
          event.preventDefault()
          setMobileOpen(false)
        }}
        onClose={() => setMobileOpen(false)}
      >
        <div className="sticky top-0 z-10 h-[72px] flex items-center justify-between bg-background px-6 md:px-8">
          <BrandLink onClick={() => setMobileOpen(false)} />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-6 md:px-8 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]" aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'px-6 py-3 rounded-m text-base font-medium transition-colors min-h-[48px] flex items-center',
                  isActive ? 'bg-surface-container text-primary' : 'hover:bg-surface-container'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
      </dialog>
    </>
  )
}

function cn(...inputs: (string | boolean | undefined | null)[]) {
  return inputs.filter(Boolean).join(' ')
}
