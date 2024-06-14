Doing min height to make sure that on very big screens the content doesnt get really spread out.
and doing max-width with and margin-inline: auto; so that a container is centered on the screen.

avoid view port units, might cause overflow becuase it counts the scroll bars as a part of the view port, so might introduce horizantal scroll bars


instead of using left or right use inline start, end so that if it is translated to languages with different directions the css doesnt break [[https://web.dev]] had a lot of cool stuff about this. 