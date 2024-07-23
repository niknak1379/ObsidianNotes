---
creation date: <% tp.file.creation_date() %>
---
<%* 
	const path = tp.file.find_tfile(tp.file.title).path.replace(`/${tp.file.title}.md`,'');
	tags = path.replaceAll('/', ' #');
	tR += ('#').concat(tags);
%>

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# <% tp.file.title %>

<< ---------------------------------------------------------------- >>

