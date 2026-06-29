const PST_IMAGES = ["../assets/images/schedule_pics/1.png", "../assets/images/schedule_pics/2.png"];
const EST_IMAGES = ["../assets/images/schedule_pics/3.png", "../assets/images/schedule_pics/4.png"];

document.addEventListener("DOMContentLoaded", () => {
	const switchLabel = document.getElementById("time-zone-switch");
	const day1Img = document.getElementById("schedule-day1");
	const day2Img = document.getElementById("schedule-day2");

	let isEst = false;

	switchLabel.addEventListener("click", () => {
		isEst = !isEst;
		const images = isEst ? EST_IMAGES : PST_IMAGES;

		day1Img.src = images[0];
		day2Img.src = images[1];
		switchLabel.textContent = isEst ? "Switch to PST ->" : "Switch to EST ->";
	});
});
