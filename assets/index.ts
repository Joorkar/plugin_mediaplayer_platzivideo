import mediaPlayer from './mediaPlayer'
import autoPlay from './plugins/autoPlay'
import autoPause from './plugins/autoPause'


const video = document.querySelector('video')
const player = new mediaPlayer({ 
    el: video,
    plugins: [new autoPlay(), new autoPause()]
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