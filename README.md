## DEMO: https://fathomless-eyrie-41485.herokuapp.com/

<img src = "https://imgur.com/pmwrgXb.png" width ="200" /> <img src = "https://imgur.com/Y9PecPX.png" width ="200" />

# MinecraftButViewers

### Website for MINECRAFT streamers that lets viewers respawn creepers and other mobs, apply an effect on a streamer, play sounds on him for money.

# Stack

## Front-End

- React Context API

- React Hooks API

- React Router

- Axios

- Socket.io

## Back-end

- Node.js

- MongoDB ( mongoose )

- Express

- Passport

- Cookie-session

- Paypal SDK

- Socket.io

- Rcon 

# How to deploy on heroku

## PRE DEPLOY

#### Create twitch app. https://dev.twitch.tv/console/apps
#### Create mongo database.

---

1. Clone this repo.
2. Install heroku CLI
3. Create Heroku App

```
    heroku create
    git remote -v // Confirm that a remote named heroku has been set.
```

4. Deploy code

```
git push heroku master
```

5. Set heroku config variables:

```
COOKIE_KEY: "any string //==// it will encrypt cookie eg. mysecretcookiekey"
MINECRAFT_IP: "ip of your minecraft server"
MINECRAFT_RCON_PASSWORD: "minecraft server rcon password"
MONGO_URI: "URI of your mongoDB"
PAYPAL_CLIENT_ID: ""
PAYPAL_SECRET: ""
TWITCH_CALLBACK: "url which u will be redirected to after twitch auth. eg. https://fathomless-eyrie-41485.herokuapp.com/auth/twitch/callback"
TWITCH_CLIENT_ID: ""
TWITCH_SECRET: ""

```
