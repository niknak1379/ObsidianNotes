---
creation date: 2025-03-21 13:24
---
#03-Application-Architecture #FrontEnd #01-Frameworks #React

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Memo hook

<< ---------------------------------------------------------------- >>

basically if a value is dependant on an operation which is very costly and doesnt need to happen very often(but it is still subject to change) you can use this hook. It memoizes the value, you pass in the depandancy array and it only reevaluates the value when a value in the depandancy array is changed. Basically [[03-Application-Architecture/FrontEnd/01-Frameworks/React/Hooks/useEffect|useEffect]] but for values?