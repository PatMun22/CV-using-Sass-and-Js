/*---------------show scrollUp button----------*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 150 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/* ---------------------theme change --------------*/

const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-lightbulb-on';

//previously selected topic(if user selected)

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//Validating dark-theme class to obtain current theme

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : ' ';

//validating if user previously chose a topic

if(selectedTheme) {
    //if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'fa-lightbulb-on' ? 'add' : 'remove'](iconTheme);  
}

//Manually activating/deactivating theme with the button
themeButton.addEventListener('click', () => {
    //adding/removing dark/icon  theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    //saving theme and current icon the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selectedIcon', getCurrentIon());
})