

		function criaLink(){
			url = 'https://web.whatsapp.com/send?phone={tel}&text={message}';
			var tel = "55"+document.getElementById('phone').value;
			var message = document.getElementById('message').value;
			url = url.replace('{tel}', tel).replace('{message}', message);
			document.getElementById('envia').href = url;
		}


		

