function check() {
	var emailinput = document.getElementById('EmailAddress').value
    var firstnameinput = document.getElementById('FirstName').value
    var lastnameinput = document.getElementById('LastName').value
    var male = document.getElementById('male')
    var female = document.getElementById('female')
    var phoneinput = document.getElementById('PhoneNumber').value
    var red = document.getElementById('Red')
    var notred = document.getElementById('NotRed')
    var aferica = document.getElementById('Africa')
    var asia = document.getElementById('Asia')
    var austraila = document.getElementById('Austraila')
    var europe = document.getElementById('Europe')
    var Namerica = document.getElementById('North America')
    var Samerica = document.getElementById('South America')


    
	var regEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,5}$/

	// console.log(regEmail.test(EmailAddress))
	regEmail.test(EmailAddress)
}

document.getElementById('Submit').addEventListener('click', check)
