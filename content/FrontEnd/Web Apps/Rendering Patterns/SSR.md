https://www.youtube.com/watch?v=kUs-fH1k-aM

Basically in an [[SPA]] model theres a lot of back and forth between the client and server
Loading Stages: 
1. You first request the HTML from the CDN(in the case of a [[React]] app basically a blank page)
2. then the loaded blank html requests the main.js from the CDN
3. once the main.js is loaded the react app starts sending requests to the APIs that it uses, while this is going on basically everything is on spinners
4. once the APIs return then everything will be loaded and displayed correctly and be interactable
  
IN a SSR model tho
1. You request to ur Node.js or Next.js server first, the next.js server sends back a basically already rendered website - it does take longer but there is no weird jumping around from things suddenly loading in weird stages like in a [[SPA]]
2. then the loaded but not ***hydrated*** page requests the `main.js` from the CDN 
3. once the JS is loaded and parsed the website will be intractable and fully loaded 