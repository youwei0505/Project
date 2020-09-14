var Client = require('node-rest-client').Client;
 
var client = new Client();

//the important USER infomation 
var args= {
	path: {
		"deviceId":20651691539,
		"sensorId":"position"
	},
	headers: {"CK":"DKA7ER2P0KKMYZYP3C"}
};

// direct way  (http://, https://)
client.get("https://iot.cht.com.tw/iot/v1/device/${deviceId}/sensor/${sensorId}/rawdata", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
}).on('error', function (err) {
    console.log('something went wrong on the request', err.request.options);
});


/*
var Client = require('node-rest-client').Client;
 
var client = new Client();

//the important USER infomation 
var args= {
	path: {
		"deviceId":20651691539,
		"sensorId":"position"
	},
	headers: {"CK":"DKA7ER2P0KKMYZYP3C"}
};

// direct way  (http://, https://)
client.get("https://iot.cht.com.tw/iot/v1/device/${deviceId}/sensor/${sensorId}/rawdata", args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
}).on('error', function (err) {
    console.log('something went wrong on the request', err.request.options);
});
 

// registering remote methods 
client.registerMethod("jsonMethod", "https://iot.cht.com.tw/iot/v1/device/${deviceId}/sensor/${sensorId}/rawdata", "GET");
 
client.methods.jsonMethod(args, function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    //console.log(response);
});

// handling client error events 
client.on('error', function (err) {
    console.error('Something went wrong on the client', err);
});*/