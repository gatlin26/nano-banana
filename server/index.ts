// Temporary bridge file to start Next.js from the workflow
// This file is created as a workaround since the package.json expects server/index.ts
import { spawn } from 'child_process';

console.log('Starting Next.js development server...');

const nextProcess = spawn('npx', ['next', 'dev'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

nextProcess.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
  process.exit(code);
});

process.on('SIGINT', () => {
  nextProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  nextProcess.kill('SIGTERM');
});