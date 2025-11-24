---

kanban-plugin: board

---

## Complete

**Complete**
- [x] Test elasticSearch Insert, Update, dont sync frontend as new backend is not up yet: testcases
	1. [ ] insert
	2. [x] update change name
		1. [x] name change still makes it crash for some reason, the setRefresh() changes the state, and it calles the useEffect, since the page is rendered using data from parent props, it tries to call the wrong API
	3. [x] update no change name
- [x] added CDN client side, but its janky, have to do change it server side,
- [x] move s3 upload to lambda
- [x] change the client side urls from hard coded into sth that can be loaded in one file
- [x] forgot the freaking insert elastiserach fix, so have to update it after inserting manually for now
- [x] resolution on S3 images is wayyyy too high, maybe also add a backend service that converts the photos to avif from default png
	https://stackoverflow.com/questions/69566052/how-to-convert-jpg-images-to-avif-with-python
	https://stackoverflow.com/questions/10607468/how-to-reduce-the-image-file-size-using-pil
- [x] yeah i dont think i have to send and recieve the binary
- [x] fixed css for webkit safari
- [x] update small stuff on v1.0 and v2.0 on the main page
- [x] Projects to add: samans django bs
- [x] update vercel to the new repository
- [x] pictures to add: home lab
	(take actual picture of the PIs)
- [x] serve express files with https(manually instead of vercel?, nginx??)
- [x] dockerize and deploy backend on E3
- [x] add loaders to the project pictures
- [x] new font broke the wiggly thing fix it
- [x] setup prettier
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

- [ ] cicd for automatic docker deployment and restart on the EC2 of the Backend + docker-hub for restart
	1. [ ] docker compose
	2. [ ] github action
	3. [ ] change lambda env to point to lambda deployment


## Not Started

- [ ] CICD for lambda
- [ ] integrate lambda + add option to reprocess all project images through it for initial
- [ ] broke authentication when moving to AWS fix that
- [ ] also the tokens always remain currently, maybe change that and fix the google signin, no idea how to fix the google one tho
- [ ] also add sorting, time field?, pagination the project view is weird,
	https://docs.opensearch.org/latest/search-plugins/searching-data/paginate/
- [ ] at some point make the lambda make 2 images, one for thumbnail and one for fullframe-ish
- [ ] convert all s3 images?
- [ ] write testing for backend?
- [ ] manim library animations for hero project images
	https://www.reddit.com/r/manim/comments/s5n4up/getting_svg_data_into_manim/
	cant really make svgs out of it, if i want to do that with text, im gonna have to use another library, maybe use this for the main logo/picture and then use the writeSVG plugin for the header animation?
	if i do this im gonna have to actually fix the project page picture showing css


## Archive

- [ ] caching backend(redis?)
- [ ] caching for fetch requests??
- [ ] take the manual resync out and maybe add it as a dashboard function behind the auth page


***

## Archive

- [x] isloading for the projectDetailpage

%% kanban:settings
```
{"kanban-plugin":"board","list-collapse":[false,false,false,false]}
```
%%