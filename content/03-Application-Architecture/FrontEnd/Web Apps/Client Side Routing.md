- tags:
	- #WebApps
	- #FrontEnd 
[Understanding client side routing by implementing a router in Vanilla JS – Will Taylor Blog](https://www.willtaylor.blog/client-side-routing-in-vanilla-js/)
What it is: no full page reload, but there is still an address that we can change.

you have to use the `history` object and you update the state anytime sth changes.

you need to have a routes object, where u just store the routes and the pages or template that you will be serving when the **router** matches the route

```js
const routes = [
  {
    path: '/',
    template: '<h1>Home</h1>'
  },
```


