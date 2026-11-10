import { createContext, useCallback, useContext, useRef, useState, type ComponentPropsWithoutRef, type ReactNode } from 'react'
import { ContactModal } from './ContactModal'

type ContactModalContextValue = {
  openContactModal: () => void
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null)

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)

  const openContactModal = useCallback(() => {
    triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    setIsOpen(true)
  }, [])

  const closeContactModal = useCallback(() => {
    setIsOpen(false)
    requestAnimationFrame(() => {
      if (triggerRef.current?.isConnected) {
        triggerRef.current.focus()
      } else {
        document.querySelector<HTMLElement>('[aria-controls="mobile-navigation"]')?.focus()
      }
    })
  }, [])

  return (
    <ContactModalContext.Provider value={{ openContactModal }}>
      {children}
      <ContactModal open={isOpen} onRequestClose={closeContactModal} />
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModal must be used inside ContactModalProvider')
  }
  return context
}

type ContactButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'type'>

export function ContactButton({ onClick, children, ...props }: ContactButtonProps) {
  const { openContactModal } = useContactModal()

  return (
    <button
      type="button"
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (!event.defaultPrevented) openContactModal()
      }}
    >
      {children}
    </button>
  )
}
