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
const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.header__navigation')

if (iconMenu){ //Условие, если имеется такой класс
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });
}
//END Бургер

// --------START добавление класса при наведении на corousel img-------

var container = document.querySelectorAll('.hero-tile');
container.forEach(item => {
    item.addEventListener('mouseenter', function(){
        this.classList.add('is-active');
    })
    item.addEventListener('mouseleave', function(){
        this.classList.remove('is-active');
    })
})

// --------END добавление класса при наведении на corousel img-------
