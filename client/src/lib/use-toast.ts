// Toast hook for notifications
import { useState, useCallback } from 'react'

export interface Toast {
  title: string
  description?: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((newToast: Toast) => {
    setToasts(prev => [...prev, newToast])
    
    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.slice(1))
    }, 5000)
  }, [])

  const dismiss = useCallback((index: number) => {
    setToasts(prev => prev.filter((_, i) => i !== index))
  }, [])

  return {
    toast,
    dismiss,
    toasts,
  }
}