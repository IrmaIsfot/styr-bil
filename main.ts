input.onButtonPressed(Button.A, function () {
    if (Styrkod < 5) {
        Styrkod = Styrkod + 1
    } else {
        Styrkod = 1
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(Styrkod)
})
let Styrkod = 0
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
Styrkod = 1
basic.forever(function () {
    if (Styrkod == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (Styrkod == 2) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (Styrkod == 3) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (Styrkod == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    }
})
