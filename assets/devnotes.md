
## Information about Prisma
Prisma is used to help with Postgres.
#
### Prisma Install Instructions
Note: Prisma is automatically installed upon SlipUp installation. These links are purely for documentation purposes.

- [Prisma Installation](./assets/prismainstall.md)
- [Prisma Tutorial Link1](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-typescript-postgres)
- [Prisma Tutorial Link2](https://www.youtube.com/watch?v=0RhtQgIs-TE)

#



### Sql cli database commands:

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

## Project Tasks
- [x] Powerpoint
- [x] List of installation steps
- [ ] [Problem Domain Link](./requirements.md)


## Project notes

Every project needs a task list and notes for consistent progress and documentation. 
We used github projects do document our build progress. 
Link below will show you our progress notation.
- [Project](https://github.com/401-midterm-DaveeRyanBenJon/ohNoLogger/projects/1)
#
