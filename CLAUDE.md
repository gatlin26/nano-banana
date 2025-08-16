# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nano Banana 是一个免费的 AI 图像编辑器和生成器 Web 应用，基于 Next.js 15 构建。该应用允许用户通过简单的文本提示来转换和编辑图像，支持角色一致性、一键编辑和场景保持功能。

## Development Commands

```bash
# 开发模式
pnpm dev

# 构建项目
pnpm build

# 生产环境启动
pnpm start

# 代码检查
pnpm lint

# 构建分析
pnpm analyze
```

## Architecture Overview

### Core Technologies
- **Next.js 15** - App Router 架构
- **React 18** - 前端框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **shadcn/ui** - UI 组件库
- **React Query** - 数据获取和状态管理
- **Zod** - 运行时类型验证
- **Framer Motion** - 动画库

### Project Structure

```
app/
├── layout.tsx          # 根布局，包含 SEO 元数据
├── page.tsx           # 主页面，包含所有核心 sections
├── providers.tsx      # React Query 等 providers
└── api/               # API 路由
    ├── generate-image/route.ts  # 核心图像生成 API
    └── upload-url/route.ts      # 文件上传 API

components/
├── generator.tsx      # 主要的图像生成界面组件
├── file-upload.tsx    # 文件上传组件
├── navigation.tsx     # 导航栏
├── hero.tsx          # 首页 hero section
└── ui/               # shadcn/ui 组件库

lib/
├── api-client.ts     # API 客户端，包含 generateImage 等核心函数
├── storage.ts        # 内存存储实现（IStorage 接口）
├── supabase.ts       # Supabase 配置
└── hooks/            # 自定义 hooks

shared/
└── schema.ts         # Zod schemas，包含类型定义
```

### Key Components

1. **Generator Component** (`components/generator.tsx`)
   - 主要的图像生成界面
   - 使用 React Query 管理 API 调用
   - 集成 FileUpload 组件用于图像上传

2. **Storage Layer** (`lib/storage.ts`)
   - 实现 IStorage 接口
   - 当前使用内存存储（MemoryStorage）
   - 包含图像生成记录的 CRUD 操作

3. **API Layer** (`app/api/generate-image/route.ts`)
   - 调用 Nano GPT API (https://nano-gpt.com/v1/images/generations)
   - 使用 'hidream' 模型
   - 管理生成状态：pending → completed/failed

### Data Flow

1. 用户在 Generator 组件中输入提示词和上传图像
2. 通过 `api-client.ts` 中的 `generateImage` 函数发送请求
3. API 路由 (`generate-image/route.ts`) 验证数据并调用外部 API
4. 响应通过 storage 层记录和管理
5. 前端通过 React Query 获取更新后的结果

### Environment Variables

```bash
NANO_GPT_API_KEY=     # Nano GPT API 密钥
SUPABASE_URL=         # Supabase 项目 URL
SUPABASE_ANON_KEY=    # Supabase 匿名密钥
```

### Import Paths

项目使用绝对路径导入：
- `@/components/*` - 组件
- `@/lib/*` - 工具库
- `@/shared/*` - 共享 schemas
- `@/hooks/*` - 自定义 hooks

### Key Features

- **无需注册的免费使用**
- **实时图像生成和编辑**
- **多种图像尺寸和风格支持**
- **响应式设计**
- **SEO 优化**

### Testing and Quality

运行 `pnpm lint` 进行代码质量检查。项目使用 TypeScript 严格模式和 ESLint 配置。

### Deployment

项目配置为部署到 Vercel，包含优化的图像处理和 webpack 配置，支持客户端和服务端渲染。