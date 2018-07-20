"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bluetoothctl_1 = __importDefault(require("bluetoothctl"));
var Test = /** @class */ (function () {
    function Test() {
        this.oBluetooth = bluetoothctl_1.default.Bluetooth();
        bluetoothctl_1.default.on(bluetoothctl_1.default.bluetoothEvents.Controller, function (controllers) {
            console.log('Controllers:' + JSON.stringify(controllers, null, 2));
        });
        bluetoothctl_1.default.on(bluetoothctl_1.default.bluetoothEvents.DeviceSignalLevel, function (devices, mac, signal) {
            console.log('signal level of:' + mac + ' - ' + signal);
        });
        bluetoothctl_1.default.on(bluetoothctl_1.default.bluetoothEvents.Device, function (devices) {
            console.log('devices:' + JSON.stringify(devices, null, 2));
        });
        bluetoothctl_1.default.on(bluetoothctl_1.default.bluetoothEvents.PassKey, function (passkey) {
            console.log('Confirm passkey:' + passkey);
            bluetoothctl_1.default.confirmPassKey(true);
        });
        var hasBluetooth = bluetoothctl_1.default.checkBluetoothController();
        console.log('system has bluetooth controller:' + hasBluetooth);
        if (hasBluetooth) {
            console.log('isBluetooth Ready:' + bluetoothctl_1.default.isBluetoothReady);
            bluetoothctl_1.default.scan(true);
            setTimeout(function () {
                console.log('stopping scan');
                bluetoothctl_1.default.scan(false);
                bluetoothctl_1.default.info('00:0C:8A:8C:D3:71');
            }, 20000);
        }
    }
    return Test;
}());
var oTest = new Test();
//# sourceMappingURL=index.js.map