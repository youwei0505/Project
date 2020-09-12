from flask import Flask, render_template, Response
from camera import VideoCamera
#import paho.mqtt.client as mqtt
import numpy as np
import time


"""vedio"""
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

def gen(camera):
    while True:
        frame = camera.get_frame()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/video_feed')
def video_feed():
    return Response(gen(VideoCamera()),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(host='0.0.0.0',port='12345', debug=True)


"""
i=0;
def on_message(client, userdata, msg):
    print(msg.topic+" "+ msg.payload.decode('utf-8'))
    print(msg.payload.decode('utf-8'))
    i+=1
    if(i>=2):
        app.run(host='0.0.0.0',port='5000', debug=True)
    
projectKey="PK1R0FR79ABSZ253XT"
deviceId="20651691539"
sensorId="test"


host = "iot.cht.com.tw"

#/v1/device/${device_id}/sensor/${sensor_id}/csv
topic = '/v1/device/' + deviceId + '/sensor/'+sensorId+'/csv'
print(topic)

user, password = projectKey, projectKey


client = mqtt.Client()
client.username_pw_set(user, password)


client.on_message = on_message

client.connect(host, 1883, 60)

client.subscribe(topic, qos=0)

client.loop_forever()"""