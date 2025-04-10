---
creation date: 2025-04-09 16:07
---
#05-Project-Docs #PersonalWebsiteDocs

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# User Interaction Flow?

<< ---------------------------------------------------------------- >>

Same thing as the normal Projects Page? But have an add projects page? On hover on each project card top right and top left reveal delete and edit buttons.

Design decision:
Should i make a new page with all the original code copied? or should i write it into the original projects page?

If I right it into the original page:
1. I have to change the projectCards to have on hover functionality and add that logic into the card. -- good since the project card isnt that hard to edit, and on the project page i only have to add the add Project Button.
2. Add Project Edit page with Inputs and file input for the [[03-Application-Architecture/Network/AWS-Basics/AWS Setup|S3 setup]]
	1. basically could be also the same as the normal with the default being empty, but then if you call it from the edit and pass in the project name as a prop, you can call the DB and get all the information. 

Yeah okay i dont need to write a separate page for it, editing whats already here just with a {accessToken && <></>} is a lot easier.
