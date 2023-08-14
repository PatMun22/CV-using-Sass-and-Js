/*---------------show scrollUp button----------*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >=  50 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* ---------------------theme change --------------*/
/*
const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sharp fa-solid fa-sun-bright';

//previously selected topic(if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//Validating dark-theme class to obtain current theme

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-solid fa-moon' : 'fa-sharp fa-solid fa-sun-bright';

//validating if user previously chose a topic

if(selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-solid fa-moon' ? 'add' : 'remove'](iconTheme);  
}

//Manually activating/deactivating theme with the button
themeButton.addEventListener('click', () => {
    //adding/removing dark/icon  theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //saving theme and current icon the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selectedIcon', getCurrentIcon()); 
})

*/

let icon = document.getElementById('theme-button');

icon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if(body.classList.contains('dark-theme')) {
        icon.classList.contains('fa-solid fa-moon');
        icon.classList.contains('fa-sharp fa-solid fa-sun-bright');
    } else {
        icon.classList.contains('fa-sharp fa-solid fa-sun-bright');
        icon.classList.contains('fa-solid fa-moon');
    }
})