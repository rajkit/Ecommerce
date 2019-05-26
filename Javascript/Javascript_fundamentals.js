"use strict";
let userName = prompt("What is your name ?" , 'Rajat')/*+prompt: To get the Numeric value, prompt: To get all kind of value*/
showMessage(userName); 
alert('This is a simulation for Fundamental Javscript');
let a = +prompt('Enter value for a:', '8');
let n = +prompt('Enter value for n:');
alert(`Value for a,n is ${a},${n}`);
let ans = pow(a,n);
alert(`The power is ${ans} for a,n`);

/*Confirm function stores True for OK and False for Esc*/
let k = confirm('Should we continue from here?')
alert(k);


function showMessage(userName){

	let mess = 'Hello ' + userName;
	alert(mess);
}

/* This is how you can pass an default parameter*/
function pow(a, n = 1){

	let i, sum = 1;
	if (n == 0) return 1;
	for(i = 0; i < n; i++)
	{
		sum = sum * a;
	}
	return(sum);
}


/*Remains the Break Operation*/
