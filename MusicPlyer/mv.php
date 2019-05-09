<?php

$url=$_POST['url'];
$contents=file_get_contents($url);
//$regex='/http:.{0,200}.mp3/';
//$matches=array();
//preg_match($regex,$contents,$matches);


echo $contents;

?>