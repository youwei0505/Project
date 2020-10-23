console.log("test")
        navigator.getUserMedia || (navigator.getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia);
//navigator.mediaDevices.getUserMedia(myConstraints);
if (!navigator.getUserMedia) {
    alert("您的瀏覽器不支持");
}

var btn = document.getElementById('run');
btn.onclick = startWebcam_front;

var btn2 = document.getElementById('run2');
btn2.onclick = startWebcam_back;

//var stop = document.getElementById('stop');
//stop.onclick = stopBothVideoAndAudio;

//確認讀取的鏡頭畫面，取得權限
//The video source is facing toward the user; this includes, for example, the front-facing camera on a smartphone.
function startWebcam_front(e) {
    navigator.getUserMedia({
        video: { width: 480, height: 360 },
        audio: false
    }, onSuccess, onError);
    //video 畫面 ， audio 影像
    function onSuccess(stream) {

        var video = document.getElementById('webcam');

        if (window.URL) {
            video.srcObject = stream;
        } else {
            video.src = stream;
        }

        video.autoplay = true;
    }

    function onError() { }
}

var device_id;
var device_label;

//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
//https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
//----------------------mutiple
if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
    console.log("enumerateDevices() not supported.");
}
// List cameras and microphones.
navigator.mediaDevices.enumerateDevices()
    .then(function (devices) {
        devices.forEach(function (device) {
            console.log(device.kind + ": " + device.label +
                " id = " + device.deviceId);
            if (device.kind == "videoinput") {
                console.log("videoinput");
                device_id = device.deviceId;
                device_label = device.label;
                console.log("~device_id~ = ", device_id);
                console.log("~device_id~ = ", device_label);
            }
        });
    })
    .catch(function (err) {
        console.log(err.name + ": " + err.message);
    });
console.log(device_id);

var btn3 = document.getElementById('run3');
btn3.onclick = startWebcam_test;
//
function startWebcam_test(e) {
    console.log("@@device_id = ", device_id);
    navigator.getUserMedia({
        video: { deviceId: device_id },
        audio: false
    }, onSuccess, onError);
    //video 畫面 ， audio 影像
    function onSuccess(stream) {

        var video = document.getElementById('webcam');

        if (window.URL) {
            video.srcObject = stream;
        } else {
            video.src = stream;
        }

        video.autoplay = true;

        // Elements for taking the snapshot
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        // Trigger photo take
        document.getElementById("snap").addEventListener("click", function () {
            context.drawImage(video, 0, 0, 640, 480);
        });
    }

    function onError() { }
}

//This is the back camera on a smartphone.
function startWebcam_back(e) {
    navigator.getUserMedia({
        video: { width: 480, height: 360 },
        audio: false
    }, onSuccess, onError);
    //video 畫面 ， audio 影像
    function onSuccess(stream) {

        var video = document.getElementById('webcam');

        if (window.URL) {
            video.srcObject = stream;
        } else {
            video.src = stream;
        }
        document.getElementById("device_id").innerHTML = device_label;

        video.autoplay = true;
        // Elements for taking the snapshot
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        // Trigger photo take
        document.getElementById("snap").addEventListener("click", function () {
            context.drawImage(video, 0, 0, 640, 480);
        });
    }

    function onError() { }
}

//stop
function stopBothVideoAndAudio(stream) {
    const tracks = mediaStream.getTracks()
    tracks[0].stop();
}



////open python need
////IOT conect

//var Client = require('node-rest-client').Client;

//var client = new Client();

////the important USER infomation 
//var args = {
//    path: {
//        "deviceId": 20651691539,
//        "sensorId": "position"
//    },
//    headers: { "CK": "DKA7ER2P0KKMYZYP3C" }
//};

//// direct way  (http://, https://)
//client.get("https://iot.cht.com.tw/iot/v1/device/${deviceId}/sensor/${sensorId}/rawdata", args, function (data, response) {
//    // parsed response body as js object 
//    console.log(data);
//    // raw response 
//    //console.log(response);
//}).on('error', function (err) {
//    console.log('something went wrong on the request', err.request.options);
//});    
    
//</script >
//@* <body>
//    <h2>緊急通報系統</h2>
//    <div>
//        <h4>畫面來源</h4>
//        <video></video>

//        <button id=" button1-1 onclick=" myFunction();">按鈕</button>
//    <button id=" button1-2 onclick=" myFunction();">放大</button>
//    <button id=" button1-3 onclick=" myFunction(); ">擷取</button>


//        < video ></video >
//            <button id=" button2 onclick=" myFunction(); ">按鈕</button>
//                < hr />
//                <h4>畫面來源</h4>
//                <video src="http://127.0.0.1:12345/video_feed"></video>
//                <button id=" button3 onclick=" myFunction(); ">按鈕</button>


//                    < video ></video >
//                        <button id=" button4" onclick="myFunction();">按鈕</button>
//                        <hr />
//    </div >




//    <script>
//        function myFunction() {
//            var r = confirm("--是否確定要刪除?!--");
//            console.log("click");
//        }
//    </script> *@
