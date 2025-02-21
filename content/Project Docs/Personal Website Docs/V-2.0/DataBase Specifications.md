---
creation date: 2025-02-19 14:29
---
#ProjectDocs #PersonalWebsiteDocs

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# DataBase

<< ---------------------------------------------------------------- >>

## Needed Fields:
each project:
1. Name
2. Description
3. Picture URL
4. Tags
5. Github Link
6. Deployment Link
7. Design Link

## Tables:
1. one for tags to load in the left bar for sorting(one to one)
2. one for status to load in the 
3. one for detailed project details. (one to one)
4. one relational for what tags each project has (many to many)

## Needed Features:
6. needs to be sortable by tags, loads the first 10, then after hitting next page, loads the rest on the same page. 
7. Searchable by name, description, and tags
8. thats pretty much it

**Pretty sure the whole thing has to run in a docker container**
[[DB Setup]]