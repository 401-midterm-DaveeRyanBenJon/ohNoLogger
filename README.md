# SlipUp
An npm package library that logs and saves error events in a PostgreSql database. 

<a href="https://github.com/antonkomarev/github-profile-views-counter">
    <img src="https://komarev.com/ghpvc/?username=jonnyleealas">
</a>

[![Version](https://img.shields.io/badge/version-0.0.7-brightgreen.svg)](https://github.com/jonnyleealas/ohnologger)

**Contributors**: Ryan Geddes, Davee Sok, Ben Hill, Jonathon Lee.



**Version**: 0.0.7

## Project Overview
The purpose of every application should be to solve problems for a user. We created questions in the form of user stories to pinpoint which problems we needed to solve. Click on problem domain for insight.
#
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

## Dependencies and Tools
<img align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"/>
<img align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"/>
<img align="left" alt="SQL" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png"/> 
<img align="left" alt="npm" width="26px" src="https://raw.githubusercontent.com/SBoudrias/Inquirer.js/master/assets/inquirer_readme.svg?sanitize=true"/>
<img align="left" alt="postgres sql" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"/>
<img  align="left"alt="chalk "width="26px" src="./assets/img/prisma.png"/>
<img align="left" alt="npm" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png"/>
<img  align="left"alt="chalk "width="57px" src="./assets/img/chalkpic.png"/>
</br>
</br>
<pre>
<b>Javascript ➡ Node.js ➡ Sql ➡ Inquirer ➡ PostgreSql ➡ Prisma ➡ Npm ➡ Chalk</b>
</pre>

#

## Getting started
1. Install SlipUp library with the following commands. Note: must have npm installer.
```
$npm i codefellows-slipup@0.0.7
```
2. Input Postgres username.
```
Upon installation, SlipUp will request Postgres username. Note: User must have a Postgres account.
```
3. Postgres password. 
```
Upon inputting Postgres username SlipUp will request Posgres password. 
This will allow user to save error logs in Postgres.
```
4. Choose port. 
```
User is given the option to assign an env port. If no port is chosen SlipUp will assign default 
port 5432.
``` 
5. Name your Postgres db.
```
User is given the option to assign a Postgres database name. 
If a name is not chosen SlipUp will assign (Splunk) as the database name.
```
6. Name your Postgres table name.
```
User is given the option to assign a table name. 
If a name is not chosen SlipUp will assign (errevents) as the table name.
```

#
## CLI commands:
These are command options we can use in our cli(command line interface/ terminal).
</br>
Note: In order to use a tag command we need to add two dashes **--** before selecting each command.


**List of tag command options allowed**
```
  --id
  --userid
  --date
  --errortype
  --userparam
- $get
- $update
- $delete
Shows you a list of errors stored in your database
```
**An example of a tag command in cli** 
```
- $node query.js get userid=“userid124”

```
#

## UML Diagram
Our UML diagram will give you insight on how SlipUp is wired. Click below for a whiteboard visual.

- [Phase 1](./assets/phaseuml.md)
- [Phase 2](./assets/img/slideuml.png)


#

## Information about Prisma
Prisma is used to help with Postgres.

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
# 
### Objectives

- [ ] node.js documentation => access build in api methods
# 

### Explanation of Config Steps

- [Create database](https://notathoughtexperiment.me/blog/how-to-do-create-database-dbname-if-not-exists-in-postgres-in-golang/)

- [Using Scripts](https://docs.npmjs.com/misc/scripts)

    ```
    postinstall: "rm ./prisma/.env && ln -s ./.env ./prisma/.env && npx prisma introspect && npx prisma generate",
    ```

post install remove prisma .env file, sym link to .env in node modules, then run prisma intro and generate steps
#

