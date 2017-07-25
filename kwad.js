function ret() {
			one = document.getElementById('n1').value;
			one = parseInt(one);

			two = document.getElementById('n2').value;
			two = parseInt(two);
			
			three = document.getElementById('n3').value;
			three = parseInt(three);

			zn1 = document.getElementById('op1').value;

			zn2 = document.getElementById('op2').value;

			d = Math.pow(two , 2) + 4*one*three;

			dm = Math.pow(two , 2) - 4*one*three;

			if(zn1 == "-" && zn2 == "-") {

			x1 = (two + Math.sqrt(d))/2*one;
			x2 = (two - Math.sqrt(d))/2*one;
			rez = document.getElementById('rezult');
			rez.innerHTML = "X" + "<sub>" + "1" + "</sub>" + " = " + x1;
			rez = document.getElementById('rezult2');
			rez.innerHTML = "X" + "<sub>" + "2" + "</sub>" + " = " + x2;

			}

			if(zn1 == "-" && zn2 == "-" && d < 0 ) {
				o = document.getElementById('rezult');
				o.innerHTML = "Розвязків немає!"
				document.getElementById('rezult2').innerHTML = ""
			}

			if(zn1 == "+" && zn2 == "-") {


			x1 = (-two + Math.sqrt(d))/2*one;
			x2 = (-two - Math.sqrt(d))/2*one;
			rez = document.getElementById('rezult');
			rez.innerHTML = "X" + "<sub>" + "1" + "</sub>" + " = " + x1;
			rez = document.getElementById('rezult2');
			rez.innerHTML = "X" + "<sub>" + "2" + "</sub>" + " = " + x2;

			}

			if(zn1 == "+" && zn2 == "+" && d < 0 ) {
				o = document.getElementById('rezult');
				o.style.color = "red";
				o.innerHTML = "Розвязків немає!";

				document.getElementById('rezult2').innerHTML = ""
			}

			if(zn1 == "+" && zn2 == "+") {

			x1 = (-two - Math.sqrt(dm))/2*one;
			x2 = (-two + Math.sqrt(dm))/2*one;
			
			rez = document.getElementById('rezult');
			rez.innerHTML = "X" + "<sub>" + "1" + "</sub>" + " = " + x1;
			rez = document.getElementById('rezult2');
			rez.innerHTML = "X" + "<sub>" + "2" + "</sub>" + " = " + x2;

			}

			
			if(zn1 == "+" && zn2 == "+" && dm < 0 ) {
				document.getElementById('rezult').innerHTML = "Розвязків немає!"
				document.getElementById('rezult2').innerHTML = ""
			}

			if(zn1 == "-" && zn2 == "+" ) {
	
			x1 = (two - Math.sqrt(dm))/2*one;
			x2 = (two + Math.sqrt(dm))/2*one;
			
			rez = document.getElementById('rezult');
			rez.innerHTML = "X" + "<sub>" + "1" + "</sub>" + " = " + x1;
			rez = document.getElementById('rezult2');
			rez.innerHTML = "X" + "<sub>" + "2" + "</sub>" + " = " + x2;

			}


			if(zn1 == "-" && zn2 == "+" && dm < 0 ) {
				document.getElementById('rezult').innerHTML = "Розвязків немає!"
				document.getElementById('rezult2').innerHTML = ""
			}

			
		}
		
	