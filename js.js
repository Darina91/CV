/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Привет, меня зовут Дарина и я Middle QA. Мое знакомство с IT началось в роли 2D-художника мобильных игр, а теперь я работаю QA в продуктовой компании. Буду рада пообщаться =)')
})