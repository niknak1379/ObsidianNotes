---

kanban-plugin: board

---

## Archive

- [ ] ok locally developing this would be hard since i cant get the api integrations to local host, or i could but i dont want to setup the networking since i already have the EC2 running.
- [ ] setDate does not wrap around the month right now, if i wanna do it for archiving ill have to fix it probably -- nvm this apparently automatically is handled by the date objects in js


## Complete

- [ ] maybe add a recurring propertie and a recurringByDays property so that I dont have to sync it manualy
	1. [x] set up is recurring on notion as a property
	2. [x] add change recurring to the DB functions
- [ ] make algorithm flowchart so that i can tell what the fuck is going on
- [ ] refractor code so to use get name, get status, get deadline function instead of making a big notion call everytime to make it more readable
- [ ] still breaks backend - to be seen
- [ ] Keep Track of tasks with Due Dates and extend them if the due data is passed
	1. [x] update the DB with the new due date
	2. [x] have to have a funciton watch for due date changes
	3. [x] if they had deadlines, delete them from the deadline array as well
- [ ] for done stuff, keep track and archive after a week
	1. [x] update the DB when the task is archived
	2. [x] have the last modified/marked done in the DB, prepopulate at init and schedule timers 
	3. [x] add new tasks added to the done columen
		1. [x] from created page
		2. [x] from page_properties_updated
		3. [x] check to be non recurring
	4. [x] remove them from the markedForArchive set when status changed
- [ ] weekly clear out archives
	1. [x] update and delete from Database
	2. [x] have a last cleared table/variable in the DB, pull it and based on that schedule clearing
- [ ] DB keeps track of available tasks
	1. [x] recurring tasks
		1. [x] update the DB when the Task has recurred with the new Status and Deadline?
- [ ] BUG: its updating anything with a deadline right now instead of just the specific.
- [ ] Add RDS integration for token verification persistance.
- [ ] github actions docker push and aws deploy
- [ ] authenticate
- [ ] AWS ALB routing


## Working on it

- [ ] Refractor everthing to a OOP model
- [ ] project is pretty small move to typescript?
- [ ] add winston for easy logging


## to Start

- [ ] 1. [ ] bump up priority everytime the deadline is extended
	2. [ ] add font sizing to the different priorities and the priority changes as the deadline gets pushed back [[05-Project-Docs/TRMNL Docs/TRMNL Kanban|TRMNL Kanban]]
- [ ] maybe also resync the database once every week??
- [ ] maybe also have a custom pushed back deadline for long running tasks, but i would need to put in long running tasks in first before i do this, right now 2 day default should be fine
- [ ] deleted pages, update DB and delete them from sql
- [ ] Bug: if the task is done, it still puts it in the deadline extension bucket
- [ ] Bug: weekly archive is not triggering
- [ ] CICD: use STS instead of manually SSH ing into the instance




%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false]}
```
%%