# Next.js, esp8266, mqtt wireless communication example

## Installation

### pre-requirements

1. install node.js (<https://nodejs.org/en/>)
1. install git (<https://git-scm.com/>)
1. install essential packages by running `npm i -g yarn localtunnel`
1. clone this repo by running `git clone https://github.com/BWsix/nextjs-esp8266-mqtt-wireless-communication.git`

### esp8266

1. install arduino ide (<https://www.arduino.cc/en/software>)
1. change wifi ssid, password and mqtt topic name in nodemcu/main.ino
1. change topic name in pages/index.tsx
1. upload nodemcu/main.ino to your esp8266 board

### Server

1. cd into `nextjs-esp8266-mqtt-wireless-communication`
1. install node packages by running `yarn`
1. build next.js server by running `yarn build`
1. start the server by running `yarn start`
   1. go to `localhost:3000`
   1. or expose your port 3000 of your local network by running `yarn tunnel`

## Demo

<https://www.youtube.com/watch?v=M9e2a8SgBEQ>
