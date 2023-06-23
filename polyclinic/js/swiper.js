//Инициализируем слайдер
new Swiper('.image-slider', {
    //Навигация
    //Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        //Буллеты
        clickable: true,
        //Динамические буллеты
        dynamicBullets: false,
    },

    //Включение/отключение перетаскивания на ПК
    simulateTouch: true,
    //Чувствительность свайпа
    touchRatio: 1,
    //Угол срабатывания свайпа/перетаскивания
    touchAngle: 45,
    //Изменение курсора перетаскивания
    grabCursor: true,

    loop: true,

    keyboard: {
        //Включить/выключить
        enabled: true,
        //Включить/выключить, только когда слайдер в пределах вьюпорта
        onlyInViewport: true,
        //Включить/выключить управление клавишами PGUP, PGDN
        pageUpDown: true,
    },

    // mousewheel: {
    //     //Чувствительность колеса мыши
    //     sensitivity: 1,
    // },

    //Автопрокрутка
    autoplay: {
        //Пауза между прокруткой
        delay: 2000,
        //Закончить на последнем слайде
        stopOnLastSlide: false,
        //Отключить после ручного переключения
        disableOnInteraction: false,
    },

    speed: 1500,

    //Эффекты переключения слайдов
    effect: 'fade',
    //Дополнение к fade
    fadeEffect: {
        //Параллельная смена прозрачности
        crossFade: true
    },
});