const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const transporter = nodemailer.createTransport(sparkPostTransport({
  'sparkPostApiKey': '3435e47ff1cc04acb772cf764e71772c1c353b84'
}))

exports.sendEmailConfirmation = functions.database.ref('/consultas/{uuid}').onWrite((change) => {
   var snapshot = change.after.val() 
  console.log( snapshot )

  //GENERAR CONTENIDO DEL CORREO
  var email_content = `
    <p>Nombre de contacto: ${ snapshot.name }</p>
    <p>Responder al correo: ${ snapshot.email }</p>
    <p>Tipo de empresa: ${ snapshot.type }</p>
    <p>Horario de contacto: ${ snapshot.time }</p>
    <p>Mensaje:</p>
    ${ snapshot.message }
  ` 
  console.log( email_content )
  //ENVIAR CORREO
  console.log( email_content )
  transporter.sendMail({
    from: 'hola@marbomx.com',
    to: 'lalosantana0z@gmail.com',//lalosantana0z@gmail.com
    subject: `Consulta de ${ snapshot.subject }`,
    text: 'Plain text',
    html: email_content
  }, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
});

});