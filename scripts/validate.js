function validateForm() {
    var firstName = document.forms["form"]["firstname"].value;
	var lastname = document.forms["form"]["lastname"].value;
    
	if (firstName === lastname) {
        alert("First name and last name should be different.");
        return false;
    }
	
	alert('Submitted');
}