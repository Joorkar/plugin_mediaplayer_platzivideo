function mediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}

mediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })
}

mediaPlayer.prototype.play = function () {
    this.media.play()
}

mediaPlayer.prototype.pause = function () {
    this.media.pause()
}

mediaPlayer.prototype.togglePlay = function () {
    this.media.paused
    ? this.media.play()
    : this.media.pause()
}

mediaPlayer.prototype.mute = function () {
    this.media.muted = true
}

mediaPlayer.prototype.unmute = function () {
    this.media.muted = false
}

mediaPlayer.prototype.toggleMute = function () {
    this.media.muted
    ? this.media.muted = false
    : this.media.muted = true
}

export default mediaPlayer