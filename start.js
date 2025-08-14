#!/usr/bin/env node

// Next.js production start script for Replit deployment
// This replaces the old Express server start command

import { spawn } from 'child_process'

console.log('🚀 Starting Next.js production server...')

const startProcess = spawn('npx', ['next', 'start', '--port', process.env.PORT || '5000'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production'
  }
})

const cleanup = (signal) => {
  console.log(`\n📴 Received ${signal}. Shutting down production server...`)
  startProcess.kill(signal)
  process.exit(0)
}

process.on('SIGINT', () => cleanup('SIGINT'))
process.on('SIGTERM', () => cleanup('SIGTERM'))

startProcess.on('close', (code) => {
  console.log(`Production server exited with code ${code}`)
  process.exit(code || 0)
})

startProcess.on('error', (error) => {
  console.error('Failed to start production server:', error)
  process.exit(1)
})