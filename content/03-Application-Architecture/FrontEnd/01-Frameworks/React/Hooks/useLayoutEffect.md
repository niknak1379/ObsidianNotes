---
creation date: 2025-03-21 14:21
---
#FrontEnd #01-Frameworks #React

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Hook

<< ---------------------------------------------------------------- >>

its the exact thing as [[useEffect]], except its synchronus as opposed to the async useEffect 
So basically useeffect causes 2 rerenders(once when its dependancy changes and once when it finishes and executes the effect). This turns them into one, by forcing the state change to wait for the useLayoutEffect function to finish.