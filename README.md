# Awesome Coding Prompts

A comprehensive collection of professional development standards and architectural guidance for building production-ready TypeScript applications.

## 📋 Overview

This repository contains meticulously crafted prompts that enforce strict coding standards, clean architecture principles, and professional development practices. Each prompt serves as a specialized guide for different aspects of software development.

## 🏗️ Architecture

Following Clean Architecture principles, this collection is organized into focused domains:

- **Core Instructions** (`instructions.md`) - The foundational protocol for all development activities
- **Clean Architecture** - Strict separation of concerns and dependency inversion
- **TypeScript Excellence** - Zero-compromise typing and type-driven development
- **Feature Development** - Rigorous implementation workflow with phase-based planning
- **Frontend Excellence** - Modern React/Next.js with shadcn/ui standards

## 📚 Available Prompts

| Prompt | Focus | Description |
|--------|-------|-------------|
| `instructions.md` | Core Protocol | Rigorous step-by-step development protocol |
| `clean-architecture.md` | Architecture | Enforces 4-layer Clean Architecture with DDD principles |
| `clean-code-typescript.md` | Code Quality | TypeScript best practices and formatting standards |
| `typescript-wizard.md` | Type Safety | Advanced TypeScript patterns and generic usage |
| `feature-development.md` | Workflow | 5-phase feature implementation protocol |
| `frontend-react-shadcn.md` | UI/UX | Modern React/Next.js with shadcn/ui ecosystem |
| `nextjs-app-router.md` | Next.js App Router | Strict Next.js App Router development guidelines |

## 🚀 Quick Start

### Generate Consolidated Guide

Run the consolidation script to create a single comprehensive guide:

```bash
npm run consolidate
# or
node scripts/consolidate.js
```

This creates `CONSOLIDATED_PROMPTS.md` with all prompts combined in logical order.

### Using Individual Prompts

Each prompt is self-contained and can be used independently:

```bash
# Read specific guidance
cat prompts/clean-architecture.md
cat prompts/typescript-wizard.md
```

## 🛠️ Development Standards

### Core Principles

- **Zero `any` Types**: Strict TypeScript with comprehensive type safety
- **Clean Architecture**: Business logic isolated from infrastructure concerns
- **Production-Ready**: All code follows enterprise-grade standards
- **Domain-Driven Design**: Business rules protected at all costs

### Quality Gates

✅ **Must Have**:
- Compiles with `strict: true`
- No framework leakage into business logic
- Comprehensive error handling
- Type-safe throughout

❌ **Strictly Forbidden**:
- `any` types (exception: dynamically-loaded Payload CMS globals)
- Framework coupling in domain layer
- Raw browser APIs in production code
- Commented-out dead code

## 📖 Usage Examples

### Implementing a New Feature

1. **Read Context**: `instructions.md` and `feature-development.md`
2. **Plan Architecture**: Follow `clean-architecture.md` principles
3. **Type-First Development**: Apply `typescript-wizard.md` patterns
4. **Clean Implementation**: Follow `clean-code-typescript.md` standards
5. **UI Excellence**: Use `frontend-react-shadcn.md` for React components

### Code Review Checklist

- [ ] No `any` types present
- [ ] Business logic isolated from frameworks
- [ ] Proper dependency inversion implemented
- [ ] Type-safe public APIs
- [ ] Clean, readable code structure

## 🔧 Scripts

| Command | Description |
|---------|-------------|
| `npm run consolidate` | Generate consolidated prompts guide |
| `node scripts/consolidate.js` | Direct script execution |

## 📊 Project Structure

```
awesome-coding-prompts/
├── instructions.md                 # Core development protocol
├── prompts/                        # Individual prompt guides
│   ├── clean-architecture.md       # Architecture standards
│   ├── clean-code-typescript.md    # Code quality standards
│   ├── typescript-wizard.md        # TypeScript excellence
│   ├── feature-development.md      # Implementation workflow
│   └── frontend-react-shadcn.md     # Frontend standards
├── scripts/                        # Utility scripts
│   └── consolidate.js              # Prompt consolidation tool
├── CONSOLIDATED_PROMPTS.md         # Generated comprehensive guide
├── package.json                    # Project configuration
└── README.md                       # This file
```

## 🎯 Philosophy

These prompts enforce a **Senior Engineer Mindset** where:

- **Architecture First**: Design before coding
- **Type-Driven**: Types guide implementation
- **Quality Gates**: No compromises on standards
- **Domain Protection**: Business logic remains pure
- **Professional Excellence**: Enterprise-grade output

## 🤝 Contributing

When adding new prompts:

1. Follow the established frontmatter format
2. Include comprehensive examples (good/bad)
3. Reference Clean Architecture principles
4. Enforce strict TypeScript standards
5. Provide clear implementation guidance

## 📄 License

MIT License - see individual prompt files for specific authorship.

## 🙏 Acknowledgments

Created and maintained by Ahmed Badr with contributions from the TypeScript and Clean Architecture communities.

---

**Remember**: These are not suggestions—they are requirements for professional TypeScript development.
