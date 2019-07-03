# D3 workshop

to start:

```
npm start
```

then go to localhost:7000

get them to clone and npm i (make app.js be empty)

### code along start

- append the svg (add variables where necessary, avoid magic numbers)
- add the bottom line (show them the mdn line page https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line)
- add the circle (look at mdn page to know what attributes to give it https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
- move the circle to be on the bottom line (explaining that y=0 is at the top, and circles are plotted from their center, and lines are drawn from center)

### ideas

1. add a 6px orange border to the circle (adjust the y coordinate so that it is still only the tip of the edge is touching the line, hint: borders are half on inside and half on outside of shape. try not to use any magic numbers!)
2. add a small red rectangle to the bottom line (x: 500, width: 10, height: 40)
3. add a group to the svg with a class of 'group-1' (it will be invisible so check the elements tab to check you have successfully added it)
4. add a rectangle to this group and put it on the bottom line with no fill and a blue border (width=100 height=40 x:300 ) inside this group
5. now add text inside groupOne saying 'i am great', position the text so that it is inside the blue box and style it so that it is color:coral and font sans serif

6. now move groupOne to be below the bottomline without touching the code you have already written (hint: you cannot give group elements x and y coordinates)
7. wrap the code you wrote for question 7 in a setTimeout with a delay of 500ms so you can see it move

### stretch?

8. add .transition() to this code to make the movement smoother (you have to work out where to put it!)
9. add .duration() to the code to make the duration last 2 seconds
10. add .ease() to make the transition look different (look at https://github.com/d3/d3-ease)

### i need to check

- how do you know where to put the transition? always after the selection and before the code that changes it?
- how do you know where to put the duration and ease? duration always after the code that changes it? ease doesnt need duration to work, and i think it (like duration) always comes after the code that is changing the stuff.
- how do you know when the selection is being passed on and not? select or append create a selection/change a selection, attr / .style stuff that changes the selection just passes the selection on. enter() exit() do other stuff they pass the selection on but they do it for each item.
