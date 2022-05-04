# Интенсив Glo Academy

## JS при оформлении Портфолио

1. Подключены табы (tabs.js)
   - Использованы dataset для привязки нескольких объектов к одному клику.
   - Вызов функции с разными параметрами.
2. Модальное окно - открытие и закрытие (modal.js)
   - Структура модального окна
   - Открытие модального окна
   - Закрытие модального окна нажатием мимо него
   - Закрытие модального окна нажатием на крестик
3. Бургер-меню (menu.js)
   - Метод forEach()
   - Метод closest()
   - Закрытие мобильного меню по клику вне этого меню
4. Аккордеон (accordeon.js)
   - применение nextElementSibling:
     - Выбираем следующий элемент этого же уровня и инвертируем у этого элемента указанный класс:
     - accordeonButton.nextElementSibling.classList.toggle('someClass')
5. Блок времени
   - new Date()
   - getHoures()
   - getMinutes()
   - getSeconds()
6. Функция циклического вызова callback-функции
   - setInterval(() => {someCallbackFunction}, ms) // ms - время в миллисекундах
   - setInterval(someCallbackFunction, ms) // Так правильнее и короче
   - clearInterval(interval) // Отменяет циклическое выполнение функции
7. Получение времени в миллисекундах от 01.01.1970 до указанной даты
   - new Date('11 february 1962').getTime()
   - new Date().getTime() // до текущего момента, если дата не указана
8. Математические функции. Округление
   - Math.floor()
9. Как убрать решетку (#)?:
   - .substring(1)
10. Плавный скроллинг:
    - Метод .scrollIntoView({block: 'start', behavior: 'smooth'})
11. Кроссбраузерность. Полифилы.
    - Сайт npmjs.com/package/seamless-scroll-polyfill
    - раздел import via script
12. Спред - оператор (в файле scroll.js)
