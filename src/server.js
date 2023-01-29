const express = require('express');
const app = express();

app.use("/static", express.static("public"))
/*if i get a request in to my IP address and at the end it has / static 
then i want it to run the express.static method which is going to take the 
input to say that whatever is in the public library is where im picking up my web pages*/

app.listen(5001, () => { console.log("listening on port 5001") })
/*app.listen starrts up express and tells it which port to listen in on. 
Also you can run a start up function which in this case displays teh message*/
