const email = document.querySelector('#email');

email.addEventListener('keyup', function(){
		const email = document.querySelector('#email');
		const emailParent = document.querySelector('#email-parent');
		const emailIndicator = document.querySelector('.indicator');
		const button = document.querySelector('.btn');
		const spanBtn = document.querySelector('.span-btn');
		const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		
		if(email.value.match(pattern)){
			emailParent.classList.add('valid');
			emailParent.classList.remove('invalid');
			emailIndicator.innerText = "Your Email Address is valid";
			button.style.display = "block";
			spanBtn.style.display = "none";
			//alert('ok');
		} else {
			emailParent.classList.add('invalid');
			emailParent.classList.remove('valid');
			emailIndicator.innerText = "Your Email Address is not valid";
			button.style.display = "none";
			spanBtn.style.display = "block";
		}
		if(email.value == ""){
			emailParent.classList.remove('valid');
			emailParent.classList.remove('invalid');
			emailIndicator.innerText = "";
			spanBtn.style.display = "block";
			button.style.display = "none";
		}
	});

const password = document.querySelector('#password');

password.addEventListener("keyup", function(){
		
		const password = document.querySelector('#password');
		const passParent = document.querySelector('#pass-parent');
		const passIndicator = document.querySelector('.pass-indicator');
		
		if(password.value.length < 8){
			passParent.classList.add('invalid');
			passParent.classList.remove('valid');
			passIndicator.innerText = "Password Length is more than 8";
			//alert('false');
			//return false;
		} else {
			passParent.classList.add('valid');
			passParent.classList.remove('invalid');
			passIndicator.innerText = "Your Password is valid";
			//alert('true');
			//return true;
		}
		if(password.value == ""){
			passParent.classList.remove('invalid');
			passParent.classList.remove('valid');
			passIndicator.innerText = "";
			//return false;
		}
	});