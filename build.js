#!/usr/bin/env node

// Next.js build script for Replit deployment
// This replaces the problematic vite build command for proper Next.js deployment

import { spawn } from 'child_process'

console.log('🏗️  Building Next.js application for production...')

const buildProcess = spawn('npx', ['next', 'build'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'production'
  }
})

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Next.js build completed successfully!')
  } else {
    console.error(`❌ Build failed with exit code ${code}`)
    process.exit(code)
  }
})

buildProcess.on('error', (error) => {
  console.error('Failed to start build process:', error)
  process.exit(1)
})