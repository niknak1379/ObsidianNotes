---
creation date: 2025-03-21 14:41
---
#03-Application-Architecture #FrontEnd #01-Frameworks #React #Hooks

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Hook

<< ---------------------------------------------------------------- >>

basically used to call a function of the child component, through the parent components code.
You usually do this by lifting the state up(declaring the state in the parent component and passing the state and setState functions to the children as props)
Sometimes you cannot do this tho(if you have third party components, or is just hard converting the current components to do this)

Thats when u use useImpoerativeHandle.

