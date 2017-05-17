var EmailInput = document.getElementById('Email')
function EmailValid() {
	var regEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/
	
	var EmailError = document.createTextNode("wrong email")
	if (!regEmail.test(EmailInput)) {
       document.getElementById('ErrorEmail').appendChild(EmailError)
	}
    
}