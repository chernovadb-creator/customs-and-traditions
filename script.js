function openScenario() {
    // Получаем выбранные значения
    const topic = document.getElementById('topic').value;
    const age = document.getElementById('age').value;
    const duration = document.getElementById('duration').value;
    const technique = document.getElementById('technique').value;

    // Проверяем, выбраны ли все параметры
    if (!topic || !age || !duration || !technique) {
        alert("Выберите все параметры!");
        return false;
    }

    // Формируем имя файла сценария
    const filename = `${topic}-${age}-${duration}-${technique}.html`;


    // Открытие файла
    window.open(filename, "_blank"); // Открывать в новой вкладке

    return false;
}
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel img');
    let currentIndex = 0;

    const nextSlide = () => {
        images[currentIndex].classList.remove('active');
        images[currentIndex].classList.add('fadeout');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add('active');
        images[currentIndex].classList.remove('fadeout');
    };

    setInterval(nextSlide, 3000); // смена слайдов каждые 3 секунды
});