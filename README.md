## Cache Slides with Pusher

### Description

This is a simple project (emphasis on simple) to show a realtime slideshow! with the power of [Cache Channels](https://blog.pusher.com/introducing-cache-channels/) people can hop on the presentation and see the actual slide presented on realtime.

## Set up Project

### Prerequisites

Before running this project on your system you will need:
- Node
- A Pusher account 

### Install Project

Now to install and run the project:

1. Clone the repository:

```bash
git clone https://github.com/Rafajrg21/pusher-slides.git
```

2. Set your Pusher App keys on server/.env

```bash
# .env
    PUSHER_APP_ID=<YOUR_APP_ID>
    PUSHER_KEY=<YOUR_KEY>
    PUSHER_SECRET=<YOUR_SECRET>
```

3. Change directory and install dependencies on both client and server folders:

```bash
cd pusher-slides
yarn
# start the server
node server.js
# on another terminal, start the app
cd pusher-slides
yarn start
```

4. Give it a try! 
Go to localhost:3000 on two or more tabs (depending on your pusher plan) and change the slides, the
slides will be updated everytime anyone clicks an arrow.

## Resources

The starting point for this project client
- [Create a simple slideshow - Scrimba](https://scrimba.com/p/pRB9Hw/cpqd9rta)

The documentation for Pusher
- [Pusher Server API overview](https://pusher.com/docs/channels/server_api/overview/) 
- [Pusher - Client API overview](https://pusher.com/docs/channels/using_channels/client-api-overview/)

And of course the documentation for one of Pusher new features: 
- [Cache channels](https://pusher.com/docs/channels/using_channels/cache-channels/)