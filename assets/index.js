import mediaPlayer from './mediaPlayer.js'
import autoPlay from './plugins/autoPlay.js'

const video = document.querySelector('video')
const player = new mediaPlayer({ 
    el: video,
    plugins: [
    //new autoPlay()
] })

const play_init = document.querySelector('#play')
play_init.onclick = () => player.togglePlay()

const mute = document.querySelector('#mute')
mute.onclick = () => player.toggleMute()
