//% color=#FF6600 icon="\uf130" block="ISD1820录音模块"
namespace ISD1820 {

    // 录音时长选项
    export enum RecordTime {
        //% block="2秒"
        Two = 2000,
        //% block="5秒"
        Five = 5000,
        //% block="10秒"
        Ten = 10000
    }

    /**
     * 从指定引脚开始录音，录音时长可选 2/5/10 秒
     */
    //% block="从 %pin 引脚 开始录音 %seconds"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    //% pin.defl=DigitalPin.P1
    //% seconds.defl=RecordTime.Five
    export function record(pin: DigitalPin, seconds: RecordTime): void {
        pins.digitalWritePin(pin, 1)
        basic.pause(seconds)
        pins.digitalWritePin(pin, 0)
    }

    /**
     * 从指定引脚开始播放录音，播放时长可选 2/5/10 秒
     */
    //% block="从 %pin 引脚 开始播放录音 %seconds"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.columns=4
    //% pin.defl=DigitalPin.P12
    //% seconds.defl=RecordTime.Five
    export function play(pin: DigitalPin, seconds: RecordTime): void {
        pins.digitalWritePin(pin, 1)
        basic.pause(seconds)
        pins.digitalWritePin(pin, 0)
    }

}
