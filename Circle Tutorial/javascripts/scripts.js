function sample(array){
	var index = Math.floor(array.length * Math.random());
	var el = array[index]
	return el
};

Array.prototype.sample = function(){
	var index = Math.floor(this.length * Math.random());
	console.log(index)
	console.log(this[index])
	return this[index]
};

function projectData(data){

	var svg = d3.select('svg');

	var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append('circle');

// Update visualization with new data
	var circlesAgain = svg.selectAll('circle') 
							.data(data)
							.style('opacity', function(){return '.5'})
							.transition()
							.duration(800)
							.ease("bounce")
								.attr('r', function(d){return d*10 + "px"})
								.attr('cx', function(){return Math.random()*100 + "%"})
								.attr('cy', function(){return Math.random()*100 + "%"})
								.style('fill', function(){ return crayola.sample().hex})

								// .style('opacity', function(){return Math.random()})

	svg.selectAll('circle')
	.data(data)
		.exit()
		.remove();

};

window.onload = function(){

	d3.select('svg')
		.attr('width', '100%')
		.attr('height', '500px')
		.style('border', '1px solid black')

	setInterval(function(){
		var arr = [
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1,
			Math.floor(Math.random()*10) + 1
		]

		projectData(arr);
	}, 1000)

};

