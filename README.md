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

- Run the following command to watch the logs of database(PostgreSQL):

```bash
 docker-compose logs -f db
```

- Run the following command to execute the command inside the app container:

```bash
 docker-compose exec app sh
```

- Run the following command to stop the project:

```bash
 docker-compose down -v
```

**`Note:`** If you have problem with `dist` or `node_modules`, please run the following command:

- Remove `dist` folder:

  ```bash
  sudo rm -rf dist 
  ```

- Remove `node_modules` folder (if needed):

  ```bash
  sudo rm -rf node_modules
  ```

## Workspace environment for NodeJS users

Nodejs version requirement: 20.18.1

[Download NodeJS 20.18.1](https://nodejs.org/download/release/v20.18.1/)

Fast installing use nvm:

```bash
 nvm install 20.18.1
 nvm use 20.18.1
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
