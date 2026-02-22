// Answers to Questions


1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
-->
getElementById: Used to select one element by its id, Always returns a single element.

getElementsByClassName: Selects all elements with the same class name,Returns an HTMLCollection, Normally need a loop to use them.

querySelector: Uses CSS selector,Returns the only first matching element.

querySelectorAll: Uses CSS selector, Returns all matching elements .



2. How do you create and insert a new element into the DOM?
-->
Simple steps:

✅ Steps : Create element, Add content, Append to parent

Example:
const li = document.createElement("li");
li.innerText = "New item";
document.getElementById("list").appendChild(li);

Here, createElement -> creates new element, appendChild -> inserts it into the page



3. What is Event Bubbling? And how does it work?
-->
Event bubbling means when an event happens on a child element, it moves upward to its parent.

then structure:
button → div → body

The event “bubbles” upward process.



4. What is Event Delegation in JavaScript? Why is it useful?
-->
event delegation = adding the event listener to a parent to handle child events.

useful for :
-Instead of adding listener to every child, we can do one listener on the parent on this process
-Better performance, Saves memory
-Works for dynamically added elements



5. What is the difference between preventDefault() and stopPropagation() methods?
-->
preventDefault() =  Stops the browser’s default behavior
                = he event still bubbles up normally.
            =Used when you don’t want the browser to do its automatic action.

stopPropagation() = Stops the event from bubbling to parent elements.
                =Does NOT stop the browser’s default behavior.
                =Used when you don’t want parent handlers to run.

