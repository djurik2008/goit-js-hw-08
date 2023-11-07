const _ = require('lodash');
import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player')

const player = new Player(iframe);


player.on('timeupdate', _.throttle(Data => {
    const currentTime = Data.seconds;
    localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));
}, 1000));

const parsedCurrentTime = JSON.parse(localStorage.getItem("videoplayer-current-time"));

player.setCurrentTime(parsedCurrentTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});