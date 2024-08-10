input.onButtonPressed(Button.A, function () {
    Length_of_snake = Long_Snake.length - 1
    index = Length_of_snake
    for (let index = 0; index <= Length_of_snake; index++) {
        if (index == Length_of_snake) {
            Long_Snake[0].change(LedSpriteProperty.Direction, -90)
            Long_Snake[0].move(1)
        } else {
            Long_Snake[Length_of_snake - index].set(LedSpriteProperty.X, Long_Snake[Length_of_snake - index - 1].get(LedSpriteProperty.X))
            Long_Snake[Length_of_snake - index].set(LedSpriteProperty.Y, Long_Snake[Length_of_snake - index - 1].get(LedSpriteProperty.Y))
        }
    }
})
let index = 0
let Length_of_snake = 0
let Long_Snake: game.LedSprite[] = []
let Apple = game.createSprite(2, 2)
Apple.set(LedSpriteProperty.Blink, 500)
Long_Snake = [game.createSprite(4, 2), game.createSprite(4, 4)]
for (let A_single_snake of Long_Snake) {
    A_single_snake.set(LedSpriteProperty.Direction, 0)
}
basic.forever(function () {
    basic.pause(2000)
    Length_of_snake = Long_Snake.length - 1
    for (let index = 0; index <= Length_of_snake; index++) {
        if (index != Length_of_snake) {
            Long_Snake[Length_of_snake - index].set(LedSpriteProperty.Direction, Long_Snake[Length_of_snake - index - 1].get(LedSpriteProperty.Direction))
        }
        Long_Snake[Length_of_snake - index].move(1)
    }
})
