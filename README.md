# Employee Tracker
## Description
Employee tracker allows you to track employee relationships and information using Node, Inquirer, and SQL. This program is used through the command prompt and allow users to make additions to the database via prompts.

## How to install and run
The program can be downloaded from the repository (https://github.com/lundbmp/employee-tracker). Once downloaded and navigated to the directory via command prompt you must install all of the dependencies with `npm i`. 
You will then start up MySQL and enter the following code in order:
`source db/db.sql`
`source db/schema.sql`
`source db/seed.sql`

Once your database is set up, you will need to enter in your sql information the the .env file. After that you can start the program with `node app`.

## How to use the project
Once the app is up and running, navigate with the arrow keys and press enter to select. Follow the propmpts and enter in the correct information when making updates or additions.

## Credits
This project was written and completed by Michael Lundberg