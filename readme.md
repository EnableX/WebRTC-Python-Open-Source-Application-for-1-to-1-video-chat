# 1to1 RTC: A Sample Web App using Python (Django Framework) and EnableX Web Toolkit

The Sample Web App demonstrates the use of APIs for EnableX platform to develop basic 1to1 RTC (Real Time Communication) Application. The main motivation behind this application is to demonstrate usage of APIs and allow developers to ramp up on app by hosting on their own devices instead of directly using servers.

RTC Applications hosted on EnableX platform run natively on supported set of web browsers without any additional plugin downloads.

This basic 1to1 RTC Application is generated using HTML, CSS, Bootstrap v4.0.0-alpha.6, JavaScript, jQuery, PYTHON and EnxRtc (The EnableX Web Toolkit).

>The details of the supported set of web browsers can be found here:
https://developer.enablex.io/release-notes/#cross-compatibility

## 1. Important!

When developing a Client Application with EnxRtc.js make sure to include the updated EnxRtc.js polyfills for RTCPeerConnection and getUserMedia otherwise your application will not work in web browsers.

## 2. Demo

Visit Demo Zone (https://portal.enablex.io/demo-zone/) to request a Guided Demo or Demo Access to different type of application available there.

You may also try our Video Meeting and Webinar solutions here: https://enablex.io/vcfree


## 3. Installation

### 3.1 Pre-Requisites

#### 3.1.1 App Id and App Key

* Register with EnableX [https://www.enablex.io] 
* Create your Application
* Get your App ID and App Key delivered to your Email
* Clone or download this Repository [https://github.com/EnableX/WebRTC-Python-Open-Source-Application-for-1-to-1-video-chat.git] & follow the steps further 
* You can copy the app into any sub-directory of hosted Website on Python

#### 3.1.2 SSL Certificates

The Application needs to run on https. So, you need to use a valid SSL Certificate for your Domain and point your application to use them.

However you may use self-signed Certificate to run this application locally. There are many Web Sites to get a Self-Signed Certificate generated for you, Google it. Few among them are:
* https://letsencrypt.org/
* https://www.sslchecker.com/csr/self_signed
* https://www.akadia.com/services/ssh_test_certificate.html  

As you have Certificate or created a Self-Signed Certificate, create a directory "certs" under your Sample Web App Directory. Copy your Certificate files (.key and .crt files)  to this directory.


#### 3.1.3 Configure

Before you you try accessing the /client folder using Browser, configure the API Service by editing main app `settings.py` file to meet your requirement:

```python
ENABLEX_API_URL = "https://api.enablex.io/v1"
ENABLEX_APP_ID = "YOUR_APP_ID"
ENABLEX_APP_KEY = "YOUR_APP_KEY"
```

### 3.2 Test

* Open a browser and go to [https://yourdomain.com:4443/path-to-sample-app/client/](https://yourdomain.com:4443/path-to-sample-app/client/). The browser should load the App. 
* Allow access to Camera and Mic as and when prompted to start your first RTC Call through EnableX
* You need to Room ID to join. We have added a "Create Room" link below the login form. Click it to get a Room-Id prefilled in the form. 
* You can share the Room-ID with anyone to join your Conference.



## 4 Server API

EnableX Server API is a Rest API service meant to be called from Partners' Application Server to provision video enabled 
meeting rooms. API Access is given to each Application through the assigned App ID and App Key. So, the App ID and App Key 
are to be used as Username and Password respectively to pass as HTTP Basic Authentication header to access Server API.
 
For this application, the following Server API calls are used: 
* https://developer.enablex.io/latest/server-api/rooms-route/#get-rooms - To get list of Rooms
* https://developer.enablex.io/latest/server-api/rooms-route/#get-room-info - To get information of the given Room
* https://developer.enablex.io/latest/server-api/rooms-route/#create-token - To create Token for the given Room

To know more about Server API, go to:
https://developer.enablex.io/latest/server-api/



## 5 Client API

Client End Point Application uses Web Toolkit EnxRtc.js to communicate with EnableX Servers to initiate and manage RTC Communications.  

To know more about Client API, go to:
https://developer.enablex.io/latest/client-api/
