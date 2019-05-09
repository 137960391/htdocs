<?php
$url=$_POST['songcomment'];
$contents=file_get_contents($url);
$regex='/id":.{0,15},"index_album/';
$strid=array();
preg_match($regex,$contents,$strid);
$regex='/:.{0,15},/';
$id=array();
preg_match($regex,$strid[0],$id);
$id[0]=str_replace(":", ' ', $id[0]);
$id[0]=str_replace(',', ' ', $id[0]);
$url='http://c.y.qq.com/base/fcgi-bin/fcg_global_comment_h5.fcg?g_tk=5381&biztype=1&topid='.$id[0].'&cmd=8&pagesize=25';
$url=str_replace(' ', '', $url);
$contents=file_get_contents($url);
$regex='/rootcommentcontent" : ".*?",/';
$comment=array();
preg_match_all($regex,$contents,$comment);
print_r($comment);
?>