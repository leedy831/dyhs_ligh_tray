let light_sensor_4 = 0
let light_sensor_3 = 0
let light_sensor_2 = 0
let light_sensor_1 = 0
let strip_1 = neopixel.create(DigitalPin.P13, 22, NeoPixelMode.RGB)
let range_1 = strip_1.range(0, 6)
let range_2 = strip_1.range(6, 11)
let range_3 = strip_1.range(11, 16)
let range_4 = strip_1.range(16, 23)
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
    light_sensor_4 = pins.analogReadPin(AnalogPin.P0)
    serial.writeNumber(light_sensor_3)
    serial.writeLine("")
    basic.pause(100)
    if (light_sensor_1 > 700) {
        range_1.showRainbow(1, 90)
    } else if (light_sensor_2 > 700) {
        range_2.showRainbow(90, 180)
    } else if (light_sensor_3 > 700) {
        range_3.showRainbow(180, 270)
    } else if (light_sensor_4 > 700) {
        range_4.showRainbow(270, 360)
    } else {
        range_1.showColor(neopixel.colors(NeoPixelColors.Black))
        range_2.showColor(neopixel.colors(NeoPixelColors.Black))
        range_3.showColor(neopixel.colors(NeoPixelColors.Black))
        range_4.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
