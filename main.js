const container = document.getElementById("container");

// How I can make a flexbox of grid divs in precision by 16x16?
//



const dFrag = document.createDocumentFragment();
let default_grid_size = 16;
let default_grid = default_grid_size;

for (let i = 0; i < default_grid * default_grid; i++) {
	const div_grid = document.createElement("div");
	div_grid.setAttribute("class", "div_grid");
	dFrag.appendChild(div_grid);
}

container.appendChild(dFrag);

const color_change_event = new Event("color_change");

const handle_mouse_move = (event) => {
	if (event.target.classList.contains("div_grid")) {
		event.target.classList.add("black");
	}

	event.target.dispatchEvent(color_change_event);
}

//container.addEventListener("color_change", (event) => {
//	console.log(event.target);
//});

container.addEventListener("mousedown", (event) => {
	event.preventDefault();

	container.addEventListener("mousemove", handle_mouse_move);
});

container.addEventListener("mouseup", () => {
	container.removeEventListener("mousemove", handle_mouse_move);
});

container.addEventListener("mouseleave", () => {
	container.removeEventListener("mousemove", handle_mouse_move);
});
