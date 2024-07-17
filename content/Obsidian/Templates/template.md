---
creation date: <% tp.file.creation_date() %>
modification date: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>
---
<%* 
	const path = tp.file.find_tfile(tp.file.title).path.replace(`/${tp.file.title}.md`,'');
	tags = path.replaceAll('/', ' #');
	tR += ('#').concat(tags);
%>

<< ---------------------------------------------------------------- >>

# <% tp.file.title %>

<< ---------------------------------------------------------------- >>

