# [Introduction to the Basic Node and Express Challenges](https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/)


Build the application in Docker
```
$ sudo docker build -t fcc-nodejs-boilerplate-express .
```

Then run the docker image as container
```
$ sudo docker run --publish 49000:3000 --detach --name epress-app-01 fcc-nodejs-boilerplate-express
$ sudo docker ps
```

To check the logs (logs written by console.log)
```
$ sudo docker logs --follow epress-app-01
```

To check:
1. Open browser
2. Go to localhost:49000
