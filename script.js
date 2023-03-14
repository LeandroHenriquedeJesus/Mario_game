let chk1 = document.querySelector('#chk1');
	let chk2 = document.querySelector('#chk2');
	let chk3 = document.querySelector('#chk3');
	let reset = document.querySelector('.reset')

	chk1.onclick = function(){
		if (chk1.checked === true){
			chk1.disable = 'true';
		}
	}

	chk2.onclick = function(){
		if (chk2.checked === true){
			chk2.disable = 'true';
		}
	}

	chk3.onclick = function(){
		if (chk3.checked === true){
			chk3.disable = 'true';
		}
	}

	reset.onclick = function(){
		chk1.disable = false;
		chk1.checked = false;

		chk2.disable = false;
		chk2.checked = false;

		chk3.disable = false;
		chk3.checked = false
	}
