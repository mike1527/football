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
