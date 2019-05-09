<?php
$url='http://www.kugou.com/yy/index.php?r=play/getdata'.'&hash='.$_POST['hash'].'&album_id='.$_POST['album_id'].'&_=1492923243326';

$data = file_get_contents($url);
$regex = '/play_url":"(.*?)"/';  /* d 前面紧跟c, d 后面紧跟e*/


$matches = array();
$gc=array();
$fm=array();
$geci='/lyrics":"(.*?)"/' ;
$fengmian='/img":"(.*?)"/' ;
if(preg_match($regex, $data, $matches)){
     $y=$matches[1];
}


if(preg_match($geci, $data, $gc)){
       $x=$gc[1];
}

if(preg_match($fengmian, $data, $fm)){
       $z=$fm[1];
}
echo($x."  and ".$y."and ".$z)

?>

