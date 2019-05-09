<?php 
	$user=$_POST['user'];
	$password=$_POST['password'];
	if($user=='137960391' && $password=='dh19941004')
	{
		header("location:login.html");
	}
	else
	{
		header("location:index.html");
	}
?>