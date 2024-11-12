# Codebase for NestJS backend project

This template is used for creating codebase of NestJS Backend project.

## Workspace environment

Nodejs version requirement: 20.14.0

[Download NodeJS 20.14.0](https://nodejs.org/download/release/v20.14.0/)

Fast installing use nvm:

```bash
 nvm install 20.14.0
 nvm use 20.14.0
```

## Project setup

- Install dependencies:

```bash
 npm install
```

- Create database (PostgreSQL):

```bash
 docker-compose up -d
```

All information of database is inside docker-compose.yml

- Run database migrations:

```bash
 npx prisma migrate dev
```

- Seed the database (optional, contains dummy data from `prisma/seed.ts`):

```bash
 npm run seed
```

## Compile and run the project

```bash
# development
 npm run start

# watch mode
 npm run start:dev

# production mode
 npm run start:prod
```

## Run tests

```bash
# unit tests
 npm run test

# e2e tests
 npm run test:e2e

# test coverage
 npm run test:cov
```
