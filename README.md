# ohNoLogger

401 Codefellows Midterm project using Javascript

## User Stories
- [Requirements](./requirements.md)

## Task List

- [Project](https://github.com/401-midterm-DaveeRyanBenJon/ohNoLogger/projects/1)

## UML Diagram

- [Phase 1](./assets/phaseuml.md)

## Getting Started on Prisma

- [Link1](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-typescript-postgres)
- [Link2](https://www.youtube.com/watch?v=0RhtQgIs-TE)

### Prisma Install Instructions

```

- npm install @prisma/cli --save-dev >>> to install prisma in cli
- npm install @prisma/client >>> install prisma client
- npx prisma init >>> creates schema.prisma file and .env file
- npx prisma introspect >>> to generate schema for each table in database
- npx prisma generate >>> update client side now we can send queries
- const { PrismaClient } = require('@prisma/client') >>> require this in your
- const prisma = new PrismaClient() >>> require this in your file
```

+++++++++++++++++= PSQL Database +++++++++++++++++++++

### In Terminal Create Database:

- Enter: `psql` >>> Opens psql in terminal
- \c into table >>> Lets you view a table
- \dt describe table >>> lets you view whats in table.
- Enter: `CREATE DATABASE dbname`;
  **In .env:**

```
`DATABASE_URL = postgres:localhost:5432/DATABASE-NAME`
To use schema file to start database:
`psql -f file.sql -d DATABASE-NAME`
Add to Heroku online, add this command to terminal:
`heroku pg:psql -f path/to/schema-file.sql --app your-heroku-app-name-here`
```

### List of Common Commands:

```
- \l - to view all databases
- \c DATABASE-NAME - to navigate into your database
- \dt - to view the tables in your database
- \q to quit
```

## Objectives

- [ ] node.js documentation => access build in api methods
