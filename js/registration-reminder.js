const REGISTRATION_END_DATE = new Date(2022, 5, 11, 59, 59);

if (new Date() < REGISTRATION_END_DATE) {
	const registrationReminder = new bootstrap.Toast(document.getElementById('registration-reminder'));
	setTimeout(() => registrationReminder.show(), 5_000);
}
