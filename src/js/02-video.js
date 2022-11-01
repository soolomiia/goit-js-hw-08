import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let time = localStorage.getItem('videoplayer-current-time');
let second;

player.on('timeupdate', function (seconds) {
  second = seconds.seconds;
});

player.on(
  'timeupdate',
  _.throttle(() => {
    localStorage.setItem('videoplayer-current-time', second);
  }, 1000)
);

player
  .setCurrentTime(time)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
    }
  });
