input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstascleY = 0
let ticks = 0
let bird: game.LedSprite = null
let obstacles: game.LedSprite[] = []
let speed = 1000
let score = 0
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstascleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstascleY) {
                obstacles.push(game.createSprite(4, index))
            }
        }
        if (speed > 300)
        {
            speed = speed - 20
        }
        score += 1
    }
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.setScore(score)
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(speed)
})
