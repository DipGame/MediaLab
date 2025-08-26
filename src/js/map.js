document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#map')) {
        ymaps.ready(init);

        function init() {
            // Создаем SVG-иконку для обычного маркера
            var svgIconNormal = `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16344 0 16C0 21.7705 2.93375 25.7484 6.00518 29.2037C6.62424 29.9002 7.24294 30.5717 7.85148 31.2321L7.85162 31.2323C10.3599 33.9546 12.5232 36.6772 14 40H18C19.4768 36.6772 21.6401 33.9546 24.1484 31.2323L24.1485 31.2322C24.757 30.5717 25.3757 29.9002 25.9948 29.2037C29.0663 25.7484 32 21.7705 32 16C32 7.16344 24.8366 0 16 0ZM16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z" fill="#06A765"/>
</svg>
`;

            // Создаем SVG-иконку для активного маркера
            var svgIconActive = `
            
            <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16344 0 0 7.16344 0 16C0 21.7705 2.93375 25.7484 6.00518 29.2037C6.62424 29.9002 7.24294 30.5717 7.85148 31.2321L7.85162 31.2323C10.3599 33.9546 12.5232 36.6772 14 40H18C19.4768 36.6772 21.6401 33.9546 24.1484 31.2323L24.1485 31.2322C24.757 30.5717 25.3757 29.9002 25.9948 29.2037C29.0663 25.7484 32 21.7705 32 16C32 7.16344 24.8366 0 16 0ZM16 22C19.3137 22 22 19.3137 22 16C22 12.6863 19.3137 10 16 10C12.6863 10 10 12.6863 10 16C10 19.3137 12.6863 22 16 22Z" fill="#0061BC"/>
</svg>`;

            // Данные для меток (должны соответствовать количеству карточек)
            var locations = [
                {
                    coordinates: [61.265136, 73.439125],
                    title: "ДЦ на Технической 64",
                    phone: "+7(922) 105-00-55",
                    hours: "Пн-Пт: 7:30-19:30 <br> Сб, Вс: 7:30-17:00"
                },
                {
                    coordinates: [61.270000, 73.440000], // Пример координат
                    title: "ДЦ на Ленина 15",
                    phone: "+7(922) 105-00-56",
                    hours: "Пн-Пт: 8:00-20:00 <br> Сб, Вс: 9:00-18:00"
                },
                {
                    coordinates: [61.260000, 73.435000], // Пример координат
                    title: "ДЦ на Мира 42",
                    phone: "+7(922) 105-00-57",
                    hours: "Пн-Пт: 7:00-18:00 <br> Сб, Вс: 8:00-16:00"
                }
            ];

            // Создаем карту
            var myMap = new ymaps.Map("map", {
                center: [61.265136, 73.439125],
                zoom: 12,
                controls: []
            }, {
                suppressMapOpenBlock: true
            });

            // Массив для хранения меток
            var placemarks = [];

            // Создаем метки
            locations.forEach(function (location, index) {
                var placemark = new ymaps.Placemark(location.coordinates, {
                    balloonContent: `
                        <div style="padding: 10px;">
                            <h3>${location.title}</h3>
                            <p>Телефон: <a href="tel:${location.phone.replace(/[\s\(\)\-]/g, '')}">${location.phone}</a></p>
                            <p>Часы работы:<br>${location.hours}</p>
                        </div>
                    `
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'data:image/svg+xml;base64,' + btoa(svgIconNormal),
                    iconImageSize: [32, 40],
                    iconImageOffset: [-20, -46]
                });

                placemarks.push(placemark);
                myMap.geoObjects.add(placemark);
            });

            // Получаем карточки
            var cards = document.querySelectorAll('.main-map-card');

            // Функция для выделения метки
            function highlightPlacemark(index) {
                // Сбрасываем все метки
                placemarks.forEach(function (placemark, i) {
                    placemark.options.set({
                        iconImageHref: 'data:image/svg+xml;base64,' + btoa(i === index ? svgIconActive : svgIconNormal)
                    });
                });

                // Центрируем карту на выбранной метке
                if (index >= 0 && index < locations.length) {
                    myMap.setCenter(locations[index].coordinates, 14, {
                        duration: 500
                    });

                    // Открываем балун для выбранной метки
                    placemarks[index].balloon.open();
                }
            }

            // Добавляем обработчики кликов на карточки
            cards.forEach(function (card, index) {
                card.addEventListener('click', function () {
                    highlightPlacemark(index);

                    // Добавляем класс активной карточки (опционально)
                    cards.forEach(function (c) {
                        c.classList.remove('active');
                    });
                    card.classList.add('active');
                });
            });

            // Добавляем обработчики кликов на метки
            placemarks.forEach(function (placemark, index) {
                placemark.events.add('click', function () {
                    highlightPlacemark(index);

                    // Добавляем класс активной карточки
                    cards.forEach(function (card, i) {
                        card.classList.toggle('active', i === index);
                    });
                });
            });
        }
    }

    console.log("map.js finish work");
});