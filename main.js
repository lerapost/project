function smoothScroll(target) {
    const element = document.querySelector(target); // отримуємо відповідний елемент по селектору target
    const position = element.offsetTop; // отримуємо позицію елемента відносно верхнього краю сторінки
    window.scrollTo({
        top: position, // прокручуємо до позиції елемента
        behavior: 'smooth' // встановлюємо плавну анімацію
    });
}

// прив'язуємо обробник події до пунктів меню
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // забороняємо стандартну поведінку посилання
        const target = link.getAttribute('href'); // отримуємо селектор цільового елемента
        smoothScroll(target); // запускаємо функцію плавної прокрутки до елемента
    });
});

const element = document.querySelector('.abs-link'); // отримуємо елемент, який потрібно з'явити

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // отримуємо поточну позицію прокрутки сторінки
    if (scrollPosition > 200) { // якщо прокрутка перевищує 200px
        element.classList.add('show'); // додаємо клас для з'явлення елементу
    } else {
        element.classList.remove('show'); // інакше прибираємо клас
    }
});