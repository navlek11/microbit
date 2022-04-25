input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onGesture(Gesture.Shake, function () {
    while (true) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # # # # #
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # # # # .
            `)
        basic.showLeds(`
            # # # # .
            # . . . #
            # # # # .
            # . # . .
            # . . # .
            `)
        basic.showLeds(`
            # # # # .
            # . . . .
            # # # # .
            # . . . .
            # # # # .
            `)
        basic.showIcon(IconNames.Asleep)
    }
})
input.onGesture(Gesture.LogoDown, function () {
	
})
pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
