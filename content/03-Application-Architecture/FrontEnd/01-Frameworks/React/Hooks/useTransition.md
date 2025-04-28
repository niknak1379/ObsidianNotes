---
creation date: 2025-03-21 17:52
---
#FrontEnd #01-Frameworks #React #Hooks

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Hook

<< ---------------------------------------------------------------- >>

Usually you use pagination when u have to fetch a lot of data to show(fetching the first 20, and then as they scroll fetching more), but sometimes you have to get all of them at once. If you do this the UI becomes unusable becuase it has to finish rendering the first request first. So you wrap the state update that causes the long fetch request in a useTransition hook,
THis way it can be abandoned if other elements of the UI are pressed. This is when you use useTransition hook.

