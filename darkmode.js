const switchButton = document.getElementById("switch-theme-button");
let isDarkMode = localStorage.getItem('darkmode') || 'false';

function enableDarkMode(){
    document.body.classList.add('dark-mode')
    localStorage.setItem('darkmode', 'true')
}

function disableDarkMode(){
    document.body.classList.remove('dark-mode')
    localStorage.setItem('darkmode', 'false')
}


isDarkMode == 'true' ? enableDarkMode() : disableDarkMode();

switchButton.addEventListener('click', () => {
    isDarkMode = localStorage.getItem('darkmode');
    isDarkMode == 'true' ? disableDarkMode() : enableDarkMode();
})
