---
creation date: 2025-02-28 14:08
---
#Backend #DatabaseBackend/Database #DevOps 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# mysqldump

<< ---------------------------------------------------------------- >>

## How to Backup a DB
The steps for exporting a database are very close to those for exporting a table. There is just a small change in the format of the command.

Match your inputs to conform to the following mysqldump command structure:

```shellscript
mysqldump -u username -p --databases db_larry db_curly db_moe > file_name.sql
```

The databases you will export comes after the `--databases` option.

The space character separates multiple databases.

## How to Restore a DB
There are different methods and tools to import your MySQL dump file into a database.

**Step 1:** Make sure you have a MySQL database created on the target machine.

```shellscript
mysql -u root -pYOUR_PASSWORD -e "CREATE DATABASE destination_db
```

This command will create your database on the target machine.

**Step 2:** Import the dump file into the database you just created.

```shellscript
mysql -u root -pYOUR_PASSWORD destination_db < db_backup.sql
```

this command will overwrite the content of the `destination_db` database.


## How to schedule regular backups on a [[Docker|dockerized]] sql server with cron
https://medium.com/@hafizzeeshan619/automating-mysql-database-backups-in-docker-00cbe6ce8948

Nikanmatin1.
78M56Soo!
78M56Soo!