const containers = document.querySelectorAll(".item-container");
console.log(containers);

//items[0].classList.add("hidden");
containers.forEach(container => {
	if(container.querySelector(".item-content").className.includes("hidden")){
		container.querySelector(".item-title").querySelector(".up-arrow").classList.toggle("hidden");
	} else{
		container.querySelector(".item-title").querySelector(".down-arrow").classList.toggle("hidden");
	}
	//container.children[1].classList.add("hidden");
	container.querySelector(".item-title").addEventListener("click", () =>{
		container.querySelector(".item-content").classList.toggle("hidden");
		container.querySelector(".item-title").querySelectorAll(".material-symbols-outlined").forEach(icon => {
			icon.classList.toggle("hidden");
		});
		//console.log(container.children[0].querySelectorAll(".material-symbols-outlined"));
	});
});

