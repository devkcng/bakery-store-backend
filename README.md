# Codebase for NestJS backend project

This template is used for creating codebase of NestJS Backend project.

## Workspace environment for Docker users (No need to install NodeJS)

- Install Docker and Docker Compose

- Run the following command to start the project:

```bash
 docker-compose up --build -d
```

**`Note:`** If you have problem with permission of `entrypoint.sh`, please run the following command:

```bash
 sudo chmod +x entrypoint.sh
```

- Run the following command to watch the logs of app(the NestJs app):

```bash
 docker-compose logs -f app
```

- Run the following command to stop the project:

```bash
 docker-compose down 
```

## Workspace environment for NodeJS users

Nodejs version requirement: 20.14.0

[Download NodeJS 20.14.0](https://nodejs.org/download/release/v20.14.0/)

Fast installing use nvm:

```bash
 nvm install 20.14.0
 nvm use 20.14.0
```

### Project setup

- Install dependencies:

```bash
 npm install
```

- Create database (PostgreSQL):

  - Cd to directory db:

    ```bash
     cd db
    ```

  - Run docker-compose:

    ```bash
    docker-compose up -d
    ```

All information of database is inside docker-compose.yml

- Run database migrations:

```bash
 npx prisma migrate dev
```

- Seed the database:

```bash
 npm run prisma:seed
```

### Compile and run the project

```bash
# development
 npm run start

# watch mode
 npm run start:dev

# production mode
 npm run start:prod
```

- **`Note:`**
  - Before running the project, make sure the database is running.
  - If you have problem with dist folder, please run the following command:

    ```bash
    sudo rm -rf dist
    ```

### Run tests

```bash
# unit tests
 npm run test

# e2e tests
 npm run test:e2e

# test coverage
 npm run test:cov
```
