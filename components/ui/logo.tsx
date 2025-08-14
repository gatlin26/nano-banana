'use client'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Simple emoji logo */}
      <span className={textSizeClasses[size]}>🍌</span>
      
      {/* Brand text */}
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-gray-900`}>
          Nano Banana
        </span>
      )}
    </div>
  )
}