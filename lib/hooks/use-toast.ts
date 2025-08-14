// Toast hook for notifications
"use client"

import { useState, useCallback } from 'react'

export interface Toast {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'destructive'
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = useCallback((newToast: Omit<Toast, 'id'>) => {
    const toastWithId = {
      ...newToast,
      id: Math.random().toString(36).substr(2, 9)
    }
    setToasts(prev => [...prev, toastWithId])
    
    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== toastWithId.id))
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