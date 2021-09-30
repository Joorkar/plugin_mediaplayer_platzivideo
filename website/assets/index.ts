import mediaPlayer from '@joorkar/platzimediaplayer'
import autoPlay from '@joorkar/platzimediaplayer/lib/plugins/autoPlay'
import autoPause from '@joorkar/platzimediaplayer/lib/plugins/autoPause'
import Ads from '@joorkar/platzimediaplayer/lib/plugins/ads'

const video = document.querySelector('video')
const player = new mediaPlayer({ 
    el: video,
    plugins: [new autoPlay(), new autoPause(), new Ads()]
})

const play_init: HTMLElement = document.querySelector('#play')
play_init.onclick = () => player.togglePlay()

const mute: HTMLElement = document.querySelector('#mute')
mute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}