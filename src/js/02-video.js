import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({seconds}) {
    localStorage.setItem('videoplayer-current-time', (seconds));
};

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function (seconds) {
    // seconds = the actual time that the player seeked to
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