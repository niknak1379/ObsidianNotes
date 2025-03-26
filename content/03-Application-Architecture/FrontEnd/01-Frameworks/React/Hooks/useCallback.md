---
creation date: 2025-03-20 15:00
---
#03-Application-Architecture #FrontEnd #01-Frameworks #React

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Hook

<< ---------------------------------------------------------------- >>

memoizes function call backs. Basically when u pass in a function as a prop and memo the component(so that the component only rerenders if the passed in prop changes not when the parent component rerenders) This doesnt work with funcitons because react considers all function at each rerender to be different. So even if the arguments of the function dont change, react considers it to be a new updated prop and rerenders the component. 

useCallback wraps the function call and memoizes it so that this problem is fixed.

Also has a dependency array, bc it freezes even the parameters inside the function, so if anything has to change u put it in the dependency array.