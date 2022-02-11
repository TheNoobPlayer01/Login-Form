const inputEmail = document.querySelector('#email');
		
		inputEmail.addEventListener("keyup", function(){
				const inputEmail = document.querySelector('#email');
				const counterEmail = document.querySelector('.email-counter');
				const maxLengthEm = inputEmail.getAttribute('maxlength');
				
				counterEmail.innerText = maxLengthEm - inputEmail.value.length;
			});
		
const inputPass = document.querySelector('#password');
		
		inputPass.addEventListener("keyup", function(){
				const inputPass = document.querySelector('#password');
				const counterPass = document.querySelector('.pass-counter');
				const maxLengthPass = inputPass.getAttribute('maxlength');
				
				counterPass.innerText = maxLengthPass - inputPass.value.length;
			});