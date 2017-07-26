function ret() {
			var one = document.getElementById('n1').value;
			one = parseInt(one);

			var two = document.getElementById('n2').value;
			two = parseInt(two);
	
			var three = document.getElementById('n3').value;
			three = parseInt(three);
			var zn1 = document.getElementById('op1').value;
			var zn2 = document.getElementById('op2').value;
			var d = Math.pow(two , 2) + 4*one*three;
			var dm = Math.pow(two , 2) - 4*one*three;
			
			if(zn1 == "-" && zn2 == "-") {
			var x1 = (two + Math.sqrt(d))/2*one;
			var x2 = (two - Math.sqrt(d))/2*one;
			var rez = document.getElementById('rezult');
			rez.innerHTML = "X" + "<sub>" + "1" + "</sub>" + " = " + x1;
			var rez2 = document.getElementById('rezult2');
			rez2.innerHTML = "X" + "<sub>" + "2" + "</sub>" + " = " + x2;
			document.getElementById('d').innerHTML = "D" + " = " + d;
			}

			if(zn1 == "-" && zn2 == "-" && d < 0 ) {
				var	o = document.getElementById('rezult');
				o.innerHTML = "Розвязків немає!";
				document.getElementById('rezult2').innerHTML = ""
			}

			if(zn1 == "+" && zn2 == "-") {
			x1 = (-two + Math.sqrt(d))/2*one;
			x2 = (-two - Math.sqrt(d))/2*one;
			rez = document.getElementById('rezult');
			rez.innerHTML = "X" + "<sub>" + "1" + "</sub>" + " = " + x1;
			rez = document.getElementById('rezult2');
			rez.innerHTML = "X" + "<sub>" + "2" + "</sub>" + " = " + x2;
			document.getElementById('d').innerHTML = "D" + " = " + d;
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
			document.getElementById('d').innerHTML = "D" + " = " + dm;

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
			document.getElementById('d').innerHTML = "D" + " = " + dm;

			}


			if(zn1 == "-" && zn2 == "+" && dm < 0 ) {
				document.getElementById('rezult').innerHTML = "Розвязків немає!"
				document.getElementById('rezult2').innerHTML = ""
			}

			
		}
		
	