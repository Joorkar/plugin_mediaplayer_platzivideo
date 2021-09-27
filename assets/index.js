import mediaPlayer from './mediaPlayer.js'
import autoPlay from './plugins/autoPlay.js'
import autoPause from './plugins/autoPause.js'


const video = document.querySelector('video')
const player = new mediaPlayer({ 
    el: video,
    plugins: [new autoPlay(), new autoPause()]
})

const play_init = document.querySelector('#play')
play_init.onclick = () => player.togglePlay()

const mute = document.querySelector('#mute')
mute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}