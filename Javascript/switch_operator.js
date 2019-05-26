alert("Example of javascript switch");
let arg = prompt("Enter a Value:");
switch(arg)
{
	case '0':
	case '1':
	   alert('One or Zero');
       break; 
	case '2':
       alert('Two');
       break; 
    case '3':
       alert('Never Executed');
       break;
    default:
       alert('Unknown Code');
            
}

let a = +prompt('a?', '');
alert(a);
switch(a)
{
	case '0':
	   alert('0');
	   break;
	case '1':
	   alert('1');
       break; 
	case '2':
    case '3':
       alert('2,3');
       break;
    default:
       alert('Unknown Code');
            
}								
/*	if (a == 0) {
 alert( 0 );

									if (a == 1) {
									  alert( 1 );
									}

									if (a == 2 || a == 3) {
									  alert( '2,3' );
									}*/