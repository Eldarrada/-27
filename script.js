// Установите дату следующего дня рождения
const birthdayDate = new Date("2025-09-27T00:00:00").getTime();

function updateTimer() {
  const now = new Date().getTime();
  const timeLeft = birthdayDate - now;

  if (timeLeft < 0) {
    document.querySelector(".timer").innerHTML = "<h2>С Днём Рождения! 🎉</h2>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Запуск каждую секунду
setInterval(updateTimer, 1000);
updateTimer();

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Случайная позиция, размер, скорость и задержка
  const size = Math.random() * 20 + 20; // 20-40px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${Math.random() * 100}%`; // добавлен символ % для позиции по горизонтали
  heart.style.bottom = "50px"; // строка, а не просто 50px
  heart.style.animationDuration = `${Math.random() * 10 + 10}s`;
  heart.style.animationDelay = `${Math.random()}s`;

  document.querySelector(".floating-hearts").appendChild(heart);

  // Удаление сердечка после завершения анимации
  setTimeout(() => {
    heart.remove();
  }, 20000); // 20 секунд = макс. длительность анимации
}

// Запуск — создаём много сердечек
setInterval(createHeart, 300); // каждые 300 мс создается новое сердечко
