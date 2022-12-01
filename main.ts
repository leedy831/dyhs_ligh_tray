let light_sensor_4 = 0
let light_sensor_3 = 0
let light_sensor_2 = 0
let light_sensor_1 = 0
let strip_1 = neopixel.create(DigitalPin.P13, 22, NeoPixelMode.RGB)
let range_1 = strip_1.range(0, 6)
let range_2 = strip_1.range(6, 5)
let range_3 = strip_1.range(11, 5)
let range_4 = strip_1.range(16, 6)
range_1.setBrightness(100)
range_2.setBrightness(100)
range_3.setBrightness(100)
range_4.setBrightness(100)
range_1.showColor(neopixel.colors(NeoPixelColors.Black))
range_2.showColor(neopixel.colors(NeoPixelColors.Black))
range_3.showColor(neopixel.colors(NeoPixelColors.Black))
range_4.showColor(neopixel.colors(NeoPixelColors.Black))
let strip_2 = neopixel.create(DigitalPin.P14, 22, NeoPixelMode.RGB)
let range_2_1 = strip_2.range(0, 6)
let range_2_2 = strip_2.range(6, 5)
let range_2_3 = strip_2.range(11, 5)
let range_2_4 = strip_2.range(16, 6)
range_1.setBrightness(100)
range_2.setBrightness(100)
range_3.setBrightness(100)
range_4.setBrightness(100)
range_1.showColor(neopixel.colors(NeoPixelColors.Black))
range_2.showColor(neopixel.colors(NeoPixelColors.Black))
range_3.showColor(neopixel.colors(NeoPixelColors.Black))
range_4.showColor(neopixel.colors(NeoPixelColors.Black))
let strip_3 = neopixel.create(DigitalPin.P15, 22, NeoPixelMode.RGB)
let range_3_1 = strip_3.range(0, 6)
let range_3_2 = strip_3.range(6, 5)
let range_3_3 = strip_3.range(11, 5)
let range_3_4 = strip_3.range(16, 6)
range_1.setBrightness(100)
range_2.setBrightness(100)
range_3.setBrightness(100)
range_4.setBrightness(100)
range_1.showColor(neopixel.colors(NeoPixelColors.Black))
range_2.showColor(neopixel.colors(NeoPixelColors.Black))
range_3.showColor(neopixel.colors(NeoPixelColors.Black))
range_4.showColor(neopixel.colors(NeoPixelColors.Black))
serial.writeNumber(0)
basic.forever(function () {
    light_sensor_1 = pins.analogReadPin(AnalogPin.P3)
    light_sensor_2 = pins.analogReadPin(AnalogPin.P4)
    light_sensor_3 = pins.analogReadPin(AnalogPin.P10)
    light_sensor_4 = pins.analogReadPin(AnalogPin.P2)
    serial.writeNumber(light_sensor_4)
    serial.writeLine("")
    basic.pause(100)
    if (light_sensor_1 > 700) {
        range_1.showRainbow(1, 90)
        range_2_1.showRainbow(1, 90)
        range_3_1.showRainbow(1, 90)
    } else {
        range_1.showColor(neopixel.colors(NeoPixelColors.Black))
        range_2_1.showColor(neopixel.colors(NeoPixelColors.Black))
        range_3_1.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (light_sensor_2 > 700) {
        range_2.showRainbow(90, 180)
        range_2_2.showRainbow(90, 180)
        range_3_2.showRainbow(90, 180)
    } else {
        range_2.showColor(neopixel.colors(NeoPixelColors.Black))
        range_2_2.showColor(neopixel.colors(NeoPixelColors.Black))
        range_3_2.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (light_sensor_3 > 700) {
        range_3.showRainbow(180, 270)
        range_2_3.showRainbow(180, 270)
        range_3_3.showRainbow(180, 270)
    } else {
        range_3.showColor(neopixel.colors(NeoPixelColors.Black))
        range_2_3.showColor(neopixel.colors(NeoPixelColors.Black))
        range_3_3.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (light_sensor_4 > 700) {
        range_4.showRainbow(270, 360)
        range_2_4.showRainbow(270, 360)
        range_3_4.showRainbow(270, 360)
    } else {
        range_4.showColor(neopixel.colors(NeoPixelColors.Black))
        range_2_4.showColor(neopixel.colors(NeoPixelColors.Black))
        range_3_4.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
