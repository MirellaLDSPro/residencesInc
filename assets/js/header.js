window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    var menuItem = document.getElementsByClassName('menu-item');
    var siteName = document.getElementById('site-name');

    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
        header.classList.add('scroll');
        siteName.classList.add('scroll');
        Array.prototype.forEach.call(menuItem, function(menuItem) {
            menuItem.classList.add('active-scroll');
          });
    } else {
        header.classList.remove('scroll');
        siteName.classList.remove('scroll');
        Array.prototype.forEach.call(menuItem, function(menuItem) {
            menuItem.classList.remove('active-scroll');
          });
    }
});