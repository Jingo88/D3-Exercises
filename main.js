// //Vanilla Javascript writing a for loop into the body
// var body = document.getElementById('body')
// var data = [4, 8, 15, 16, 23, 42];
// var ul = document.createElement('ul');	

// for (i=0; i< data.length; i++){
// 	var li = document.createElement('li');
// 	li.innerText = data[i];
// 	ul.appendChild(li);	
// };

// body.appendChild(ul);
// console.log(body)


//D3 Version
//D3 allows for chaining, which w

var data = [4, 8, 15, 16, 23, 42];

var body = d3.select("body")
	.style('color', 'red')
	.style('background-color', 'black')
	.style('font-size', '45px');

var div = body.append("div");
div.html("Hello, world!");