# Project-1

In designing the architecture of my project, I wanted to keep the behavior of the game in JavaScript as much as possible, rather than hardcoding the CSS values, so I created an array that would shuffle the class variables for the different patterns and then a function that would loop through the array each new game to set those values to a boxId. I did not know a good method for shuffling through an array, so after some research online, I decided to use the Fisher-Yates method. Another goal that I had for my project was to separate out distinct tasks into different functions, and use callbacks effectively, rather than nesting multiple tasks into one "mega-function". This forced me to think in a nonlinear way and at times led to some bugs and scope issues, but once I went through the debugging process (as described below) I think that in the end it made my code DRYer and more readable.

Some challenges that I encountered included some semantic confusion when I was alternating between using jQuery and native JavaScript selectors, as well as some weird behavior that occurred when I started toggling between multiple classes on my box elements. To prevent issues that arose with toggling, I switched to checking for "hasClass", and then assigning class with attr() so that I could be sure which classes were and were not present after a click event. At times it was difficult to grasp the nonlinear progression of how my functions were firing, so I also resorted to writing out on paper the order of events that I expected, and then testing those assumptions in my JavaScript, using console.log. When I could not understand why certain parts of a function weren't firing, I used a debugger statement in the console, which was very helpful in identifying undefined variables. Through working on this project, I think that I became more comfortable proofreading my code and working through the debugging process.

As I was working on my project, I frequently referenced the jQuery API documentation, as well as MDN docs and CSS-Tricks. When I googled specific issues or problems, I often found the forums on Stack Overflow to be very helpful.

User stories for a memory game:
1.  A user can play this game to exercise their memory and stave off dementia.
2.  A user can use the score box to see the tally of their matches and misses so that they can track their progress.
3.  A user can reset the game (by dealing new cards) at any time in case they step away from the computer and forget their previous moves.
4.  Two users could play this as a cooperative game to try and tally as many matches as possible.
5.  A user could play this game with a child to develop the child's memory skills.
