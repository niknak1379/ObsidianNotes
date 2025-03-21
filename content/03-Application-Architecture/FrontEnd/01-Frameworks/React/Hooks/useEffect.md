
if you pass in the dependancy anytime one of those is updated like a state or sth reruns the entire useeffect function, so if u passed in absolute things like height from the top or whatever its going to break if u have other things that will make the component rerender at the top, 

like the header from [[Challenges]] that was a really weird but that i had no idea what was causing and thought it was just react being janky tbh

u can solve it by basically having multiple useEffects with different depandancy arrays so that the component updates it doesnt change or rerun from the other useEffect

You basically pass in states that if updated need to rerender the entire component or to do something in the component. like if the reload state is on and u fetch in useeffect