const timerBlock = document.querySelector('.timer__time');
const deadline = '06 may 2022';

let interval; // Переменная, вызывающая функцию setInterval() в строке 29
// === Вывод времени в браузере =================================
const updateClock = () => {
	const date = new Date().getTime();
	const dateDeadline = new Date(deadline).getTime();

	const timeRemaining = (dateDeadline - date) / 1000;
	const hours = Math.floor(timeRemaining / 60 / 60); // Получаем из секунд часы и округляем до целых
	const minutes = Math.floor((timeRemaining / 60) % 60);
	const seconds = Math.floor(timeRemaining % 60);

	const fHours = hours < 10 ? '0' + hours : hours;
	const fMinutes = minutes < 10 ? '0' + minutes : minutes;
	const fSeconds = seconds < 10 ? '0' + seconds : seconds;

	// Заносит данные в блок времени
	timerBlock.textContent = `${fHours}:${fMinutes}:${fSeconds}`;
	if (timeRemaining <= 0) {
		clearInterval(interval); // Останавливает циклическое выполнение функции
		timerBlock.textContent = `00:00:00`;
	}
};

updateClock();

interval = setInterval(updateClock, 500);
// --- End Вывод времени в браузере -----------------------------
