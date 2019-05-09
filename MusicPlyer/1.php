<?php

$url=$_POST['hash'];
$contents=file_get_contents($url);
$regex='/http:.{0,200}.mp3/';
$matches=array();
preg_match($regex,$contents,$matches);
$regex='/"lyrics":.*?",/';
$gc=array();
preg_match($regex,$contents,$gc);
$regex='/"img":.*?",/';
$tp=array();
preg_match($regex,$contents,$tp);
$regex='/http.*?jpg/';
$tp=array();
preg_match($regex,$contents,$tp);
$url=$_POST['songpic'];
$contents=file_get_contents($url);
$regex='/lazy_src.{0,200}.jpg/';
$pic=array();
preg_match($regex,$contents,$pic);


echo $matches[0],'url',$gc[0],'gc','url("',$tp[0],'")',$pic[0],'pic';

?>