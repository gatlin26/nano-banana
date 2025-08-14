#!/usr/bin/env node

// Next.js development server launcher
// This file exists to satisfy the current workflow configuration while we transition to pure Next.js

import { spawn } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = dirname(__dirname)

console.log('🚀 Starting Next.js development server...')

// Start Next.js development server
const nextProcess = spawn('npx', ['next', 'dev', '--port', '5000'], {
  stdio: 'inherit',
  cwd: projectRoot,
  env: {
    ...process.env,
    NODE_ENV: 'development'
  }
})

// Handle process termination
const cleanup = (signal: NodeJS.Signals) => {
  console.log(`\n📴 Received ${signal}. Shutting down Next.js server...`)
  nextProcess.kill(signal)
  process.exit(0)
}

process.on('SIGINT', () => cleanup('SIGINT'))
process.on('SIGTERM', () => cleanup('SIGTERM'))

nextProcess.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`)
  process.exit(code || 0)
})

nextProcess.on('error', (error) => {
  console.error('Failed to start Next.js:', error)
  process.exit(1)
})