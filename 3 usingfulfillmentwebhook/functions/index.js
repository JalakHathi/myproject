const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.webhook = functions.https.onRequest((request, response) => {
 
 console.log("request.body.result.parameters: ",request.body.result.parameters);

 let params=request.body.result.parameters;

  response.send({
      speech:
        `${params.name} your hotel booking request for ${params.room-type} room is forwarded for ${params.persons} persons, we will contact you on ${params.email} soon.`
     });
 });
