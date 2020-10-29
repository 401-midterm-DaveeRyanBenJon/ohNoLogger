# SlipUp
An npm package library that logs and saves error events in a PostgreSql database. 

<a href="https://github.com/antonkomarev/github-profile-views-counter">
    <img src="https://komarev.com/ghpvc/?username=jonnyleealas">
</a>

[![Version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://github.com/jonnyleealas/ohnologger)

**Contributors**: Ryan Geddes, Davee Sok, Ben Hill, Jonathon Lee.



**Version**: 1.0.0

## Project Overview
Purpose of our application is provide user with an easy method to automatically log, filter, and search through their projects error events.
The goal is to provide google functionality for error events. Our architecture is based off of splunk.
#
## Architecture 
Handles data pipeline through 3 distinct tiers.
```
- Forwarder
- Indexer
- Search Head
```
#


## UML Diagram
Our UML diagram will give you insight on how SlipUp is wired. Click below for a whiteboard visual.
- [Phase 1](./assets/phaseuml.md)
- [Phase 2](./assets/img/slideuml.png)

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
1. Install SlipUp library with the following commands.   
Note: must have npm installer.  
```
$npm i codefellows-slipup
```
2. Input Postgres username.
```
Upon installation, SlipUp will request Postgres username. 
User must have a Postgres account.  
Note: Mac users should use mac login credentials.
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
6. Note on projects that use Postgres and .env files.
```
SlipUp uses Prisma as an interface with Postgres database. Prisma by default searches for a 
DATABASE_URL variable to connect to any env file it detects.
Note: Must reserve DATABASE_URL variable name in order for SlipUp to work.
```

#

## Using SlipUp
Require SlipUp library
Ex: 
```
const slipUp = require('codefellows-slipup');


function test1(param) {
  try {
    let num = 123;
    return num.toUpperCase();
  } catch (error) {
    slipUp.logError(error, 'userId', param, 'enter custom note or identifier');
  }
}


```
SlipUp Exports a singleton that has a method called logError().
logError() accepts the following 4 parameters which will be uploaded automatically to a Sql 
database when it is called.

<pre>
<i>slipUp.logError(errorObject, userId, parameter, customNote);</i>
</pre>
 **Parameters** 
 </br>
*errorObject:* 
</br>
  This parameter is required. This is the error object in your try catch block.
  It logs an error object to the database and expects a standard error object.
  Columns will automatically be created for each error objects in the database that contain
  the following properties:
  - Error name
  - Error message
  - Error stack
#
 *userId:*
</br>
  This parameter is required. It takes a string.
</br>
  Note: This parameter is used to identify the userId for the programmer. This is used
  to identify a developer's userId to an error event.
  
</br>

 *parameter:*
</br>
This parameter is required. It take a parameter variable.
</br>
 Note: This parameter is used in the function. Purpose is to track which parameter initiated an error

</br>

*customNote:*
</br>
This parameter is required. It takes a string.
</br>
This gives the ability for a programmer to create custom notes for error events.




#

## After getting started ➡ CLI commands:
These are command options we can use in our cli(command line interface/ terminal).
</br>
*Entering the command line*
```
cd into node_modules/codefellows-slipup
```
Note: In order to use a tag command we need to add two dashes **--** before selecting each command.
The following commands are valid in the command line.
```
- $node query get
- $node query update
- $node query delete

```

**List of tag commands for get method**
Shows you a list of errors stored in your database
```
  --id
  --userid
  --date
  --errortype
  --userparam
```

**An example of a get command in cli** 
```
- $node query get --userid=“userid124” --errortype=ReferenceError

```
#
**List of tag commands for update method**
Allows users to update a note for an error.
Update error based on recordId and new Note.
```
--id
--usernote

```
**An example of a update command in cli**
</br>
```
- $node query update --id=24 --usernote="this is the new updated note"

```
**List of tag commands for delete method**
Allows users to delete based on record id.
```
--id
```
**An example of a delete command in cli**
</br>
```
- $node query delete --id=24 
```

