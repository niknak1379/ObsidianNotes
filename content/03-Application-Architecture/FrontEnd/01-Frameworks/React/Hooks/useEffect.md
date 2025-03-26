

# Hook
Used to perform **Side Effects** in our application
**Side Effects:** things happening as a consequence of sth else in our application(like UI interaction, (state Change))

if you pass in the dependancy anytime one of those is updated like a state or sth reruns the entire useeffect function, so if u passed in absolute things like height from the top or whatever its going to break if u have other things that will make the component rerender at the top, 

like the header from [[Challenges]] that was a really weird but that i had no idea what was causing and thought it was just react being janky tbh

u can solve it by basically having multiple useEffects with different depandancy arrays so that the component updates it doesnt change or rerun from the other useEffect

You basically pass in states that if updated need to rerender the entire component or to do something in the component. like if the reload state is on and u fetch in useeffect


## Clean Up function:
You can also pass in a clean up function to the useEffect return statement, that runs when the component is being rerendered, **BEFORE** the rerender executes(and the state or whatever thats changed gets updated)
Used to clean up stuff(cleaning out time outs, unsubscribing event listeners etc...)
