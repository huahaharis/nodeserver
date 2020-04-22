var http = require('http');

var server = http.createServer(function (req, res){
    if(req.url == '/data'){

        res.writeHead(200, {'Content-Type' : 'application/json'});

        res.write(JSON.stringify({
            "users": [
              {
                "userId": 1,
                "firstName": "Krish",
                "lastName": "Lee",
                "phoneNumber": "123456",
                "emailAddress": "krish.lee@learningcontainer.com"
              },
              {
                "userId": 2,
                "firstName": "racks",
                "lastName": "jacson",
                "phoneNumber": "123456",
                "emailAddress": "racks.jacson@learningcontainer.com"
              },
              {
                "userId": 3,
                "firstName": "denial",
                "lastName": "roast",
                "phoneNumber": "33333333",
                "emailAddress": "denial.roast@learningcontainer.com"
              },
              {
                "userId": 4,
                "firstName": "devid",
                "lastName": "neo",
                "phoneNumber": "222222222",
                "emailAddress": "devid.neo@learningcontainer.com"
              },
              {
                "userId": 5,
                "firstName": "jone",
                "lastName": "mac",
                "phoneNumber": "111111111",
                "emailAddress": "jone.mac@learningcontainer.com"
              }
            ]
           }
           ));
        res.end();
    }
});

server.listen(3000);

console.log('Node.js web server at port 3000 is running..')