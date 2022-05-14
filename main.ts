const N76_ADDR = 0x10
//% color="#AA278D" weight=100
namespace BitMouse {
    //% block
    //% blockid=sensor_readIR block="read IRsensor |%address"
    //% address.min=1 address.max=4 address.defl=1
    export function irRead(address: number): number {
        pins.i2cWriteNumber(N76_ADDR, address + 2, NumberFormat.UInt8LE, false)
        return pins.i2cReadNumber(16, NumberFormat.UInt16BE, false)
    }
    //% block
    //% blockid=sensor_readIR1 block="read IRsensor 1"
    export function irRead1(): number {
        pins.i2cWriteNumber(N76_ADDR, 3, NumberFormat.UInt8LE, false)
        return pins.i2cReadNumber(16, NumberFormat.UInt16BE, false)
    }
}