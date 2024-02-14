const containers = document.querySelectorAll(".item-container");
console.log(containers);

//items[0].classList.add("hidden");
containers.forEach(container => {
	let title = container.querySelector(".item-title");
	let content = container.querySelector(".item-content");
	if(content.className.includes("hidden")){
		title.querySelector(".up-arrow").classList.toggle("hidden");
	} else{
		title.querySelector(".down-arrow").classList.toggle("hidden");
	}
	//container.children[1].classList.add("hidden");
	title.addEventListener("click", () =>{
		content.classList.toggle("hidden");
		title.querySelectorAll(".material-symbols-outlined").forEach(icon => {
			icon.classList.toggle("hidden");
		});
		//console.log(container.children[0].querySelectorAll(".material-symbols-outlined"));
	});
});

