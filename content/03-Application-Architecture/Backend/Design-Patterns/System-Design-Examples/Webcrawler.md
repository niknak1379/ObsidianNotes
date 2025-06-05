---
creation date: 2025-05-30 14:58
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Webcrawler

<< ---------------------------------------------------------------- >>

Just gathering open information

Reqs:
Scrape all the content accessible inline and store all of it.
Respect website crawling policies(robots.txt)
Complete this process within one week.
Complete this within one week. 


Process of web crawling:
1. pull in url from to-crawl list
2. check if we have already crawled it
3. check if crawling it is compliant with its host's robots.txt file
4. get the IP address of the host via DNS
5. make http request to load the contents of the site
6. check if we have crawled a different url with identical content
7. parse the content
8. store the results
9. add any referenced URLs to our to-crawl list


![[Obsidian/Excalidraw/Pasted image 20250604150204.png]]