var input,answer,flag=0,count=0;
var x=document.getElementById("input");
document.getElementById("but").onclick=function (){
	count++;
	input=x.value;
	input=input.toString();
	//console.log(input);
	check(input);
	//console.log(ran);
	//document.getElementById("inner").innerHTML="<b>"+str+" </b>";
	var html="<tr><td>"+input+"</td><td>"+str[0]+str[1]+str[2]+str[3]+"</td></tr>";
	document.getElementById("result").innerHTML += html;
	flag=0
	for (var i = 0; i < input.length; i++) {
	if (str[i]=="=") {
		flag++;
	}
	if (flag==4) {
		alert("YOU WON");
		document.getElementById("input").value="";
		location.reload();

	}
	}
	if (count==10) {
		alert("Sorry YOU lose \n try again");
		document.getElementById("input").value="";
		location.reload();

	}
}

function random(){
	var num=Math.floor(Math.random()*8999+1000);
	return num;
}

var ran=random();
ran=ran.toString();
var str=[0,0,0,0];
function check(instr){
	//console.log(instr);
	for (var i = 0; i<instr.length; i++) {
		if (instr[i]==ran[i]) {
		str[i]="=";
		}
		
		else{
	//	console.log(instr[i]);
		var x=ran.indexOf(instr[i]);
	//	console.log(x);
			if (x>=0) {
			str[i]="<>";
			}
			else
			str[i]="!";
			
		}
	}
}