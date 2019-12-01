# Creating Multiple Chat's room

## The approach that i used 
HapiJs for create server to serve the route or services,
Socket.io for creating websocket,
Redis for keep messages

## The reason why i use that way to create my project
### Why Hapi Js
Hapi enables you to build scalable APIs.
It is an excellent choice for building Representational State Transfer (REST)
APIs because it provides you with
routing, input, output validation, and caching.
### Why socket.io
Because it allows synchronized communication 
to take place simply within your app
### Why Redis
Socket.io only handles distributing messages,
if people disconnect from the chat they will miss any subsequent messages
and when anyone connects there will see no history ...
so we need a place to store messages for retrieval
and Redis provided it

## Problem that frequently appear when i use that way
Finding reference for learning jquery, and redis
Fixing some bugs, like chat inject some tags html
or chat/message send to another room/channel
and anything else
Creating some test cases

## Step to run code
Make sure you have already installed redis
On Windows :
### 'redis-server'
### 'npm start'

#### Notes
Test cases have not been made