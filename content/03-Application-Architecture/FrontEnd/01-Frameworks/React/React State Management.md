---
creation date: 2025-04-18 13:10
---
#React-State-Management #React #FrontEnd 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# React State Management

<< ---------------------------------------------------------------- >>

https://blog.isquaredsoftware.com/2021/01/context-redux-differences/

## [[03-Application-Architecture/FrontEnd/01-Frameworks/React/Hooks/useContext|useContext]] vs state management

Context is a form of dependency injection, you manually manage the state, through other hooks like [[03-Application-Architecture/FrontEnd/01-Frameworks/React/Hooks/useState|useState]] or [[03-Application-Architecture/FrontEnd/01-Frameworks/React/Hooks/useReducer|useReducer]]. useContext forces any component that uses the context to re-renders when the context updates.

State management is changing certain states based on different reducer functions or actions that we have predefined. 

One of its advantages is that you decouple ur state management code from ur UI code, which helps debugging and decoupling incase a decision to change the UI library is made. 

## Types of State
a state is any data that describes the behavior of an application
* Server State
* Communications State
* Location State

## useContext + [[03-Application-Architecture/FrontEnd/01-Frameworks/React/Hooks/useReducer|useReducer]] VS. Redux
Basically the same thing but redux has more out of the box implemented features:
1. context and reducer make all components subscribed rerender even if they only care about a part of the data that hasnt changed, redux does not do that. Depending on how many components u have subscribed to the context this could lead to performance issues. 
2. context + reducer dont support middleware so its harder to do side effecty things with them??