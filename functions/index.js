const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.sendEmailConfirmation = functions.database.ref('/consultas').onWrite((change) => {
  console.log( change )
});