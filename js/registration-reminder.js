const REGISTRATION_END_DATE = new Date(2022, 5, 11, 59, 59);

const shouldShowReminder = new Date() < REGISTRATION_END_DATE;
let alreadyShownReminder = false;

document.addEventListener('scroll', () => {
	if (alreadyShownReminder || !shouldShowReminder) return;
	const scrolledPercentage =
		(window.scrollY / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
	if (scrolledPercentage >= 50) {
		const reminder = new bootstrap.Toast(document.getElementById('registration-reminder'));
		alreadyShownReminder = true;
		reminder.show();
	}
});
