let main = document.getElementById("main");
let sectionHeight = (main.scrollHeight / 4);
const FIRST_SCREEN = sectionHeight * 0.95;
const SECOND_SCREEN = sectionHeight * 1.95;
const THIRD_SCREEN = sectionHeight * 2.95;

main.addEventListener("scroll", (e) => {
	// arrow
	main.scrollTop <= FIRST_SCREEN
		? document.getElementById("up-arrow").style.display = "none"
		: document.getElementById("up-arrow").style.display = "block";
	main.scrollTop >= THIRD_SCREEN
		? document.getElementById("down-arrow").style.display = "none"
		: document.getElementById("down-arrow").style.display = "block";

	// menu color
	// hero
	main.scrollTop <= FIRST_SCREEN
		? document.getElementById("menu1").style.color = "#ff6347"
		: document.getElementById("menu1").style.color = "#fff";
	// about
	main.scrollTop > FIRST_SCREEN && main.scrollTop <= SECOND_SCREEN
		? document.getElementById("menu2").style.color = "#ff6347"
		: document.getElementById("menu2").style.color = "#fff";

	// skills
	main.scrollTop > SECOND_SCREEN && main.scrollTop < THIRD_SCREEN
		? document.getElementById("menu3").style.color = "#ff6347"
		: document.getElementById("menu3").style.color = "#fff";

	// hire me
	main.scrollTop >= THIRD_SCREEN
		? document.getElementById("menu4").style.color = "#ff6347"
		: document.getElementById("menu4").style.color = "#fff";

});
