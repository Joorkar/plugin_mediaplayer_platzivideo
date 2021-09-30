import mediaPlayer from '../mediaPlayer.js'

class autoPlay {
    constructor() {}
    run(player: mediaPlayer) {
        !player.media.muted
        ? player.media.muted = true
        : player.play()
    }
}

export default autoPlay