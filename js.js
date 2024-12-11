/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Если проблему можно решить,то не стоит о ней беспокоиться.Если проблему решить нельзя,то тем более не стоит о ней беспокоиться.')
})
/* Это объявление переменной, мы наши кнопку по тегу */
const button1 = document.querySelector('button1');

/* Тут на <img src="./Avatar.jpg" alt="Моё фото" class="header__avatar" height=450px /> навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button1.addEventListener('click', function() {
	alert(<img src="./Avatar.jpg" alt="Моё фото" class="header__avatar" height=450px />)
})