input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Happy)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Sad)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A E G F D D C C ", 120), music.PlaybackMode.UntilDone)
})
