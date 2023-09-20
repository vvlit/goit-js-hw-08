import Player from '@vimeo/player';
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTimeToLocalStorage, 1000));


function saveTimeToLocalStorage (timeupdateDataObject) {
    localStorage.setItem("videoplayer-current-time", timeupdateDataObject.seconds);
};

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
          break;
        default:
            break;
    }
});


