let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;


let curr_track = document.createElement('audio');


let track_list = [
  {
    name: "Dynamite ",
    artist: "BTS ",
    image: " imagess/image-15.jpg",
    path: "music/music-12.mp3",
  },
  {
    name: "Promise ",
    artist: "JIMIN ",
    image: " imagess/jimin.jpg",
    path: "music/music-13.mp3",
  },
  {
    name: "WHO ",
    artist: "LAUV,JIMIN,JUNGKOOK ",
    image: " imagess/image-20.jpg",
    path: "music/who.mp3",
  },

  {
    name: "LOST ",
    artist: "V,JIMIN,JIN,JUNGKOOK ",
    image: " imagess/image-21.jpg",
    path: "music/lost.mp3",
  },
  {
    name: "Still With You  ",
    artist: "Jungkook ",
    image: " imagess/image-8.jpg",
    path: "music/music-5.mp3",
  },
  {
    name: "4'o Clock ",
    artist: "V & RM ",
    image: " imagess/image-10.jpg",
    path: "music/music-7.mp3",
  },
  {
    name: "Blood,Sweat,Tears ",
    artist: "BTS ",
    image: " imagess/image-14.jpg",
    path: "music/music-11.mp3",
  },
  {
    name: "BLACK SWAN",
    artist: "BTS",
    image:  "imagess/image-4.jpg",
    path: "music/music-1.mp3"
  },
  {
    name: "SHADOW",
    artist: "SUGA/AUGST D",
    image: "imagess/image-6.jpg ",
    path: "music/music-2.mp3"
  },
  {
    name: "Aeroplane ft.2",
    artist: "BTS ",
    image: " imagess/image-5.jpg",
    path: "music/music-4.mp3",
  },
  {
    name: "Daechwita",
    artist: "SUGA/AUGST D",
    image: " imagess/image-7.jpg",
    path: "music/music-3.mp3",
  },
  {
    name: "MOON ",
    artist: "JIN",
    image: " imagess/jin.jpg",
    path: "music/Moon.mp3",
  },

  {
    name: "Dionysus ",
    artist: "BTS ",
    image: " imagess/image-9.jpg",
    path: "music/music-6.mp3",
  },

  {
    name: "Spring Day ",
    artist: "BTS ",
    image: " imagess/image-1.jpg",
    path: "music/music-9.mp3",
  },




  {
    name: "IONIQ ",
    artist: "BTS ",
    image: " imagess/image-0.jpg",
    path: "music/music-14.mp3",
  },


  {
    name: "House of Cards ",
    artist: "V,JIMIN,JIN,JUNGKOOK",
    image: " imagess/img.jpg",
    path: "music/house.mp3",
  },


];

function random_bg_color() {


  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;


  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";


  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
