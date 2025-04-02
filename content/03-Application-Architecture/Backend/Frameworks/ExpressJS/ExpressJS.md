---
creation date: 2025-02-19 16:33
---
#Backend #Frameworks #ExpressJSBackend/Frameworks/ExpressJS

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Express

<< ---------------------------------------------------------------- >>

## middleware
basically a function that gets triggered after you hit an end point.
You register it by invoking app.use() (so basically cors, express.json and all of that are globally enabled middlewares. -this makes so much sense now lmfao-)

it takes in the usual (request, response, next) with next being an additional function that you call when ur done


If you want it to be done function by functino **you pass it in as an argument after the url**
```js
app.get('/', middlewarename' (request, response) => {
	 console.log('hi')
})
```
