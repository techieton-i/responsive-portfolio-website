/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector('#nav-menu'),
    navtoggle = document.querySelector('#nav-toggle'),
    navClose = document.querySelector('#nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navtoggle) {
    navtoggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        hideMenu();
    });
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function hideMenu() {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', hideMenu));


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

const toggleSkills = function (e) {
    // let itemClass = this.parentNode.getElementsByClassName;

    // for (i = 0; i < skillsContent.length; i++) {
    //     skillsContent[i].className = 'skills__content skills__close';
    // }

    // if (itemClass == 'skills__content skills__close') {
    //     console.log('open');
    //     this.parentNode.className = 'skills__content skills__open';
    // }

    ///my method
    let itemClass = e.target.closest('.skills__content');
    console.log(itemClass);


    skillsContent.forEach(el => {
        el.className = 'skills__content skills__close';
    });

    if (itemClass.classList.contains('skills__close')) {
        // itemClass.classList.remove('skills__close');
        // itemClass.classList.toggle('skills__open');
        itemClass.className = 'skills__content skills__open';

    }

};

skillsHeader.forEach(el => {
    el.addEventListener('click', toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/ 