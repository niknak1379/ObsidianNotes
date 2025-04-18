---

kanban-plugin: board

---

## Complete

**Complete**
- [x] change font
- [x] sql injection library for the backend
- [x] re add projects to DB?
- [x] do darkmode light mode on edit and add project
- [x] add custom loading to the delete?
- [x] add done to the edit page
- [x] add done message to add project
- [x] add laoding, update, and refresh to edit and add project pages, and abort controller, and done messages to the edit and done tabs.
- [x] [[set up add project and update project pages]]
- [x] update delete to delete photos from s3 on the DB
- [x] update edit so that files are optional and onlg the sent files will be changed on the db
- [x] add insert into frontend
- [x] Set up S3 for write
- [x] projects to add: add data to the DB using multer and add to S3 from the EC2 bucket
- [x] update DB with correct picture URLs
- [x] add login and auth
- [x] update existing img srcs for projects
- [x] set up s3 with pictures uploaded
- [x] Migrate footer to a UI component
- [x] Migrate reCaptchaV2.0-decided dont need it
- [x] Fix ContactForm CSS after recaptcha
- [x] Projects: obsidian Blog
- [x] mobile. view for Projects page
- [x] Add detailed Project Page
- [x] fixed project car css
- [x] fix card css, make sure they fill the full page
- [x] fix image loading and place holders for both project and project detail pages, there is a loading skeleton, but not one for individual images as a fall back when the img urls first load.
- [x] Set up S3 for read


## in-progress

- [ ] add loaders to the project pictures
- [ ] update small stuff on v1.0 and v2.0 on the main page


## Not Started

- [ ] dockerize and deploy backend on E3
- [ ] serve express files with https(manually instead of vercel?, nginx??)
- [ ] pictures to add: home lab
	(take actual picture of the PIs)
- [ ] caching backend(redis?)
- [ ] Projects to add: samans django bs
- [ ] update vercel to the new repository
- [ ] write testing for backend?


## Archive

- [ ] caching for fetch requests??


***

## Archive

- [x] isloading for the projectDetailpage

%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false]}
```
%%