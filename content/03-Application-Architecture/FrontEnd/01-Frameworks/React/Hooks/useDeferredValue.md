---
creation date: 2025-03-21 18:22
---
#03-Application-Architecture #FrontEnd #01-Frameworks #React #Hooks

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# hook

<< ---------------------------------------------------------------- >>

Basically if you have a state that causes too many rerenders before it gets to the desired render state(if you have a search bar that fires off the search function on change with the addition of each letter) you can use deffered value. Its basically a wrapper that just lags behind the normal state. So basically waits until the state isnt being updated anymore and then updates the deferredValue and only triggers the render once, instead of many times on change. 

Basically it interupts the background renders and forces it to wait until the value becomes stable.

It cant be an array or object tho unless its defined outside of the component(bc arrays and objects are declared at each render thus making it an infinite loop that never renders.) It has to be a primite type, so Int, Bool