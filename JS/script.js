// --------START добавление класса для поиска-------
const searchBtn = document.getElementById('searchBar');
const menu = document.getElementById('searchContent');
const toggleMenu = function() {
    menu.classList.toggle('search-bar--open');
}

searchBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_searchBtn = target == searchBtn;
    const menu_is_active = menu.classList.contains('search-bar--open');

    if (!its_menu && !its_searchBtn && menu_is_active) {
        toggleMenu();
    }
});
// --------END добавление класса для поиска-------

// --------START добавление класса для поиска-------
document.getElementById('searchBar').onclick = function() {
    document.getElementById('searchBar').classList.toggle('search-icon--open');
}
// --------END добавление класса для поиска-------


//START Бургер
const iconMenu = document.querySelector('.menu__icon') //получаем иконку
const menuBody = document.querySelector('.header__navigation') //получаем контент

if (iconMenu){ //Условие, если имеется такой класс
    iconMenu.addEventListener("click", function (e) { //добавляем событие клика на иконку
        iconMenu.classList.toggle('_active');   //добавляем класс иконке, чтобы можно было с ней взаимодействовать
        menuBody.classList.toggle('_active');   //добавляем класс контенту
        document.body.classList.toggle('_lock'); //Добавление класса body, чтобы при появлении контента нельзя было прокручивать основной контент
    });
}
//END Бургер