import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
    if (playerSet !== null) {
        localStorage.setItem('videoplayer-current-time', e.seconds);
    }
};
const playerSet = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(playerSet)
    .then(function (seconds) {
    console.log(seconds)
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