function checkpwd()
{
	var pwd_value = document.getElementById('pwd').value;
	if (pwd_value == "123456") 
	{
	alert("password is correct !!!");
	location.href = "../main/html";
	
	} else {
	alert("pwd = " + pwd_value);
	}
}
