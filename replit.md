# Overview

Nano Banana is a modern full-stack web application for AI-powered image editing and generation. The platform allows users to transform images using natural language prompts, leveraging the Nano Banana AI model which specializes in character consistency and scene preservation. Built with Next.js 15 using App Router, the application provides an intuitive interface for uploading images, describing desired transformations, and generating high-quality results.

## Recent Changes (August 14, 2025)
- **Architecture Migration**: Converted from Express/Vite setup to Next.js 15 with App Router
- **Directory Structure**: Removed client/ and server/ directories, consolidated into Next.js app/ directory
- **Configuration**: Updated next.config.js to use ES module syntax (export default)
- **Component Structure**: Moved components to root components/ directory with existing UI components
- **Deployment Fix**: Created proper Next.js deployment configuration
  - Added build.js and start.js scripts for Replit deployment compatibility
  - Updated next.config.js with standalone output for production builds
  - Fixed import paths for use-toast hook
  - Created server/index.ts bridge for development workflow compatibility
  - Configured Next.js to run on port 5000 for Replit environment
- **Architecture Cleanup**: Removed all Vite dependencies and configurations
  - Uninstalled vite, @vitejs/plugin-react, and Replit Vite plugins
  - Removed Vite-specific configurations while maintaining Next.js setup
  - Project now uses pure Next.js architecture without hybrid Vite/Next.js configuration
  - Build and deployment processes are fully Next.js native
- **Deployment Fixes Applied**: Fixed deployment issues with comprehensive Next.js configuration
  - Verified .replit configuration uses correct Next.js build and start commands
  - Enhanced next.config.js with production-ready settings for Replit deployment
  - Confirmed build process works successfully without Vite dependencies
  - Updated documentation to reflect Next.js-only architecture
  - All deployment scripts properly reference Next.js commands instead of Vite

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with Next.js 13+ using App Router and TypeScript:
- **Framework**: Next.js 13+ with App Router for modern React development
- **UI Framework**: React with TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent design
- **Routing**: Next.js App Router with file-based routing system
- **State Management**: TanStack Query for server state management and caching
- **Animations**: Framer Motion for smooth UI transitions and micro-interactions
- **Build Tool**: Next.js built-in compiler for optimized production builds

The frontend follows Next.js App Router structure with server and client components, API routes, and reusable UI components with enhanced animations.

## Backend Architecture
The server-side uses Next.js API Routes with TypeScript:
- **Framework**: Next.js App Router with API routes
- **Runtime**: Node.js with Next.js built-in TypeScript support
- **API Framework**: Next.js API routes with RESTful endpoints
- **Request Handling**: Native Next.js request/response handling
- **Error Handling**: Next.js error boundaries and middleware
- **Development**: Next.js hot-reload and fast refresh

The API provides endpoints for image generation, file uploads, and status tracking, with proper validation using Zod schemas and integration with external services.

## Data Storage
The application uses a flexible storage architecture:
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Development Storage**: In-memory storage implementation for rapid prototyping
- **Production Storage**: Database-backed storage with user management and image generation tracking

The schema includes users, image generations with metadata tracking, and support for various AI models and parameters.

## File Handling
Image uploads are processed through multiple strategies:
- **Frontend Upload**: File reading and base64 encoding for immediate preview
- **Cloud Storage**: Google Cloud Storage integration for scalable file hosting
- **Format Support**: JPEG, PNG, and WebP with size validation (5MB limit)
- **Uppy Integration**: Advanced file upload UI with drag-and-drop support

## AI Integration
The application integrates with the Nano GPT API for image generation:
- **Model Selection**: Support for multiple AI models including "hidream" for general use
- **Parameter Control**: Configurable dimensions, styles, and prompts
- **Image-to-Image**: Support for editing existing images with new prompts
- **Status Tracking**: Async generation with pending/completed/failed states

# External Dependencies

## Core AI Service
- **Nano GPT API**: Primary image generation service at `https://nano-gpt.com/v1/images/generations`
- **Authentication**: Bearer token authentication with API key management
- **Models**: Supports multiple AI models with "hidream" as the recommended default

## Database Infrastructure
- **Neon Database**: Serverless PostgreSQL hosting via `@neondatabase/serverless`
- **Drizzle ORM**: Type-safe database operations and migrations
- **Connection**: Environment variable-based database URL configuration

## Cloud Services
- **Google Cloud Storage**: File storage and hosting via `@google-cloud/storage`
- **Service Account**: JSON key-based authentication for cloud operations

## Development Tools
- **Replit Integration**: Next.js deployment configuration with custom build scripts for Replit compatibility
- **Runtime Error Overlay**: Development error handling and debugging support  
- **Cartographer**: Visual development mapping for Replit projects

## UI and Styling
- **Radix UI**: Comprehensive set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography throughout the application

## File Upload Enhancement
- **Uppy**: Advanced file upload handling with multiple upload strategies
- **React Dropzone**: Drag-and-drop file selection interface
- **AWS S3 Support**: Additional cloud storage integration capabilities