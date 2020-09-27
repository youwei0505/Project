console.log("iot_test");

var device_id = "20651691539";
var sensor_id = "test";
var wsMessage = {
    "ck": "DKA7ER2P0KKMYZYP3C",
    "resources": [
        "/v1/device/" + device_id + "/sensor/" + sensor_id + "/rawdata"
        ]
};
var ws = new WebSocket("wss://iot.cht.com.tw:443/iot/ws/rawdata");


ws.onopen = () => {
    console.log('open connection')
    console.log(wsMessage);
    ws.send(JSON.stringify(wsMessage));
}
ws.onmessage = function (event) {
    var result = JSON.parse(event.data);
    window.alert(result.value+"有人掃了QRcode");
}
ws.onclose = function (event)  {
    console.log('close connection ,reason : '+ event)
}
