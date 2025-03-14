[[Props]]: 
	what u use to pass on data or arguments from parent elements to child elements

[[VDOM]]: 
	process for rendering: 
		1. detects if a state has changed
		2. diffs the vdom with prev version to see what is different
		3. reconciles the dom

[[Hooks]]:
	1. State Hooks: `useState(); useReducer()`
	2. context Hooks: `useContext()`
	3. ref Hooks: `useRef()`
	4. [[useEffect]]: `useEffect()`
	5. performance: `useMemo(); useCallback()`


[[strictMode]] is weird, basically mounts and unmounts everything multiple times, it might mess up the use effect stuff tho especially if theyre earlier on in the page like what is happening with the header stuff. 