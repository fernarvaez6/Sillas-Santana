let name = document.getElementById("contactFormName")
let type = document.getElementById("FormControlSelectType")
let email = document.getElementById("contactFormEmail")
let subject = document.getElementById("contactFormSubject")
let message = document.getElementById("contactFormMessage")
let time = document.getElementById("contactFormTime")
let contactButton = document.getElementById("contactFormSubmitButton")

function borrar_forma(){
	name.value =""
	type.value =""
	email.value =""
	subject.value =""
	message.value =""
	time.value =""
}

function enviar_forma_contacto(){
	nuevaConsulta = database.ref('consultas').push({
            name: name.value,
            type: type.value,
            email: email.value,
            subject : subject.value,
            message: message.value,
            time: time.value
	});
	borrar_forma()
} 

contactButton.addEventListener("click", enviar_forma_contacto)