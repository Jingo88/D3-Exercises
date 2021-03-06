#D3.js

#### Why does D3 choose to use the svg tag

* this is a vector graphic tag
* a vector graphic doesn't use pixels, it uses algorithums to determine it's shape so it retains the image even as we hrink or enlarge it
* vector graphics are also smaller in size, and faster, so it will not slow down performance, and it is scalable. 


#### d3 methods

* Selecting an svg tag from the html file

```
var svg = d3.select('svg')
``` 
* You may also consider creating the svg tag on a function rather than have it hardcoded into your HTML. By giving it an id, you can control the size in your css stylesheet

```
var svg = d3.select("body").append("svg")
							.style('fill', "#e9656e")
							.attr("id", 'svgBox')
```


* var circles = svg.selectAll('circle') // You can do this because d3 has pre-made shapes it has in it's library
* .data(data) // You can chain methods in javascript, .data is checking the length of the array or the data you are passing in. .data also iterates through all the data, looping through the length.
* .enter() // allows the user to simulaneously grab change/alter all the circles from the data
* .append('circle') // append all the circles to the DOM (at this point you have not any attributes to the circles, so the circle tags will be there, but nothing will appear on the page). append loops through all the circles in the data.

* .attr is adding an attribute to the data. since .data iterates through the data(array) .attr will add an attribute to one circle at a time. You can also add a callback in the .attr parameter. You have to pass (d) into the function so you can use d times 10. Make sure to use "return" inside the function to set "r" to it. 

```
data(data).attr('r', function(d){ return d*10 + "px"}) 
```

* .attr('cx', function(d, i){return i*50 + "%"}) // cx is for center x-coordinate
* Below will give us an x coordinate with a percent between 1 and 100%

```
.attr('cx', function(){return Math.random()*100 + "%")
```

*  Below will give us a percent between 5 and 95%. You may conside this in order to not have your circles appear half off the screen

```
.attr('cy', function(){return (Math.random()*95 + 5) + "%")
```

* .style('fill', "#C80000") - style is like .css in jQuery, and fill will fill the background. with .style you can give it any css properties you choose
* svg.selectAll('circle').data(data).exit().remove() - this will clear the svg of all the previous shit, so when the circles/data is updated, the svg is cleared and repopulated



#### Transitions
* .transition() - change the way your data is moving
* .duration(number here) - how long does this transition last
* .ease("bounce") - you can use the .ease and there are multiple types of parameters such as "linear", "elastic", and the like. the type of ease method can alter your duration and transition time so be careful. 


#### Misc Notes

* D3 relies heavily on arrays (example = d3 can check the length of the array you pass in and produce that amount of circles)
* it does not include any hardcoded libraries (i.e. like backbone has underscore or jQuery)
* Why does we use d3 methods? because we want to have access to the libraries. 
* Along with method chaining in D3, you can also pass in functions into the methods. 
* Try to keep all the chaining of methods organized. the first chain can make the circles, the second chain can update the visualization of new data. and the like
* you can also pass in objects with key/value pairs. in the function(d) above you can do d.title and d.donation if you wanted to make circles with the donation list
* you do not have to refresh the page for the svg tag to show you new data. If the user clicked a button accessing an ajax call it can alter that in the same page
* if you run a function with an array length of 6 and then the same function with the array length of 3 it will only change the first three circles. you have to set a remove function/method to clear everything so you can repopulate the svg with new data
* .style('fill', function(){sample(crayola).hex))if you want to randomize a color the (sample) is a function with a math random variable outside. (crayola) links to a array of colors. the reason we wrap this inside of a function, is because we want to invoke it every time the .style is used. if we did not wrap it in a function the math.random for the hex color would run once and then stay the same until the page is refreshed. 
* 