# Project Setup: Bun + ElysiaJS + Drizzle + MySQL

## Overview
Buat project baru di folder ini menggunakan Bun sebagai runtime, dengan ElysiaJS sebagai web framework, Drizzle sebagai ORM, dan MySQL sebagai database.

## Objectives
- [ ] Initialize Bun project
- [ ] Setup ElysiaJS framework
- [ ] Configure Drizzle ORM dengan MySQL
- [ ] Create basic project structure

## High-Level Planning

### 1. Project Initialization
- Initialize new Bun project dengan `bun init` atau `bun create` command
- Setup `bunfig.toml` jika diperlukan
- Prepare `package.json` dengan necessary configurations

### 2. Dependencies Installation
- Install ElysiaJS sebagai main web framework
- Install Drizzle ORM dan MySQL driver
- Install type definitions dan development dependencies (TypeScript, types)

### 3. Project Structure Setup
- Create folder structure: `src/`, `src/routes/`, `src/db/`, `src/schemas/`
- Create entry point file (e.g., `src/index.ts`)
- Setup basic configuration files

### 4. Database Configuration
- Configure Drizzle connection ke MySQL database
- Setup environment variables untuk database credentials
- Create database connection file/module

### 5. ElysiaJS Setup
- Initialize ElysiaJS app instance
- Setup basic routing structure
- Configure middleware jika diperlukan

### 6. Build & Development Setup
- Configure build scripts dalam `package.json`
- Setup development server configuration
- Ensure project dapat dijalankan dengan `bun dev` atau `bun run`

## Success Criteria
- Project dapat dijalankan tanpa error
- ElysiaJS server dapat distart
- Drizzle dapat connect ke MySQL database
- Basic folder structure sudah siap untuk development
