
Accessibility tree
	the view can be turned on in chrome dev tools
	    ways to check for accessibility:
		    automated:
			    lighthouse
				    cmd shift c: shows useful info such as contrast values
			    accessibility inspector
			    axe

color issues
	make sure that the contrast is always high, WGCA AAA grade and AA grade

[[Semantic-HTML]]:
	use html tags correctly

[[Aria]]:
	aria-live: to announce to the screen reader that sth on the screen has changed without the reader focusing on it, for example if an email form has a invalid email and the real time notification pops up. 
		have to have an **aria-control** atribute tho that points to the id of the changed element from the submit button

**focus management**: shift the focus of the user to a part of the UI element after a certain task like a form submition has been done. 

**skip navigation hidden link**:
	could be appropriate to skip to the main content the same way that google search does.