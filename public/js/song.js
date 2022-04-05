const songButton = document.querySelector('.songButton');
const songDiv = document.querySelector('.songDIV');
const cardTitle = document.querySelector('.cardTitle');
const textInfo = document.querySelector('.textInfo');
const parOne = document.querySelector('.parOne');
const partwo = document.querySelector('.partwo');
const continueButton = document.querySelector('.continueButton');


let timeCount = 10;

// function changes what is displayed by time
const theTimer = async (event) => {
    event.preventDefault();

    setInterval(function () {


        timeCount = timeCount - 1;

        if (timeCount == 9) {
            document.getElementsByClassName("songButton")[0].className = "noSongButton";
            document.getElementsByClassName("songCard")[0].className = "newSongCardGlow";

            parOne.textContent = ' ';
            partwo.textContent = ' ';
            cardTitle.textContent = ' ';
            textInfo.textContent = 'Initializing...';
            document.getElementsByClassName("iconDiv")[0].className = " iconNewDiv";
        }

        else if (timeCount == 5) {
            document.getElementsByClassName("iconNewDiv")[0].className = " iconDiv";
            textInfo.textContent = 'Selecting Song...';
            document.getElementsByClassName("svgDiv")[0].className = " svgNewDiv";

        }
        else if (timeCount == 0) {

            document.getElementsByClassName("newSongCardGlow")[0].className = "newSongCard";

            textInfo.textContent = '';
            handleSong();

        }

    }, 1000);

}

// tells backend to get song
const handleSong = async () => {

    window.location.assign('songRoutes/song')

}

const handleContinue = async () => {
    location.reload();
}

if (songButton) {
    songButton.addEventListener('click', theTimer);
}
if (continueButton) {
    continueButton.addEventListener('click', handleContinue);
}