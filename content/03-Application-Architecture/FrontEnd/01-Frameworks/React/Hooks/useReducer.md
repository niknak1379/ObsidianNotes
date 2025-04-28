---
creation date: 2025-03-20 14:25
---
#FrontEnd #01-Frameworks #React

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# reducer

<< ---------------------------------------------------------------- >>

similar to useState but more complicated?
`const [state, dispatch] = useReducer(reducerFunction, init value, optional)`

reducerFunction(state, action) takes in the state and the action, depending on what the action is, does something to the state, then return the state.
the dispatch function, dispatches the reducer function with an action.

**Why use this hook instead of useState**:
the state here is an object that can have multiple properties, and a function, so u can have internal checks in the function of ur state, like if the count gets incremented 5 times, throw an error etc... which u cant do automatically in useState bc u dont do custom setState functinos.
Basically a custom useState function, that u write the setState for. 