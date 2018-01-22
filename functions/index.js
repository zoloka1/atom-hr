

const functions = require('firebase-functions');

var Mailjet = require('node-mailjet').connect('82ccdb1973dcbd67a0ded8d7c443ef35', '9b3d25e07094e643dfec6f62036944db');

var sendEmail = Mailjet.post('send');

var emailData = {
    'FromEmail': 'zotyak@gmail.com',
    'FromName': 'Szabó Zoltán',
    'Subject': 'Test with the NodeJS Mailjet wrapper',
    'Text-part': 'Hello NodeJs !',
    'html-part': '<html>'+
                    '<span style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; padding:40px;">'+
                        '<body style="background-color:#BBBBBB">'+
                            '<center>'+
                                '<h1>Hello</h1>'+
                                '<p1>Andu egy kis malac :)</p1>'+'<br>'+
                                '<img src="http://keptaram.hu/kt/1/6885/XNTmoTJeKjXxMLcYCKPE/rofi.jpg" alt="kép"></img>'+'<br>'+
                                '<button><a href="https://atom-hr.firebaseapp.com/forms?id=318K0BUDPpFcdm83EDVl">Click Me</a></button>'+
                            '</center>'+
                        '</body>'+
                    '</span>'+
                '</html>',
    'Recipients': [{'Email': 'zotyak@gmail.com' },{'Email': 'szundi@gmail.com' }]
}


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {    
 response.send("Hello from Firebase");
});
exports.sendEmail = functions.https.onRequest((request, response) => {    
    console.log('kutyaszar');
    sendEmail
    .request(emailData)
      .then(function() {
          response.status(200);
          response.send("x");
        })
      .catch(function(){
        response.status(504);
        response.send("y");
    });
});
