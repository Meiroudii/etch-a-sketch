const container = document.getElementById("container");

// How I can make a flexbox of grid divs in precision by 16x16?
//



const dFrag = document.createDocumentFragment();
let default_grid_size = 16;
let default_grid = default_grid_size;

for (let i = 0; i < default_grid * default_grid; i++) {
	const div_grid = document.createElement("div");
	div_grid.setAttribute("class", "div_grid");
	if (i % 16 == 0) {
		div_grid.style.display = "block";
		dFrag.appendChild(div_grid);
	}
	else {
		div_grid.style.display = "inline";
		dFrag.appendChild(div_grid);
	}
}

container.appendChild(dFrag);

container.addEventListener("click", (event) => {
	let rand_color = parseInt(Math.floor(Math.random * 255) + 1);
	/*
	event.target.style.background = `rgb(${rand_color}, ${rand_color}, ${rand_color})`;
	*/
	event.target.classList.add("black");

});
