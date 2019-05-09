var Isplay=1;     //0暂停，1播放
		function playmv(u)
		{
			//alert(1);
			CreateWin();
			IniShowMv(u);

		}
		function CreateWin()
		{
			var Windiv=document.createElement('div');
			Windiv.id='windiv';
			document.body.appendChild(Windiv);
			Windiv.style.width='100%';
			Windiv.style.height='100%';
			Windiv.style.background="black";
			Windiv.style.opacity=.9;
			Windiv.style.top=0;
			Windiv.style.position='absolute';
		}
		function IniShowMv(u)
		{
			var Winclose=document.createElement('div');
			var Winmvdiv=document.createElement('div');
			var Winmv=document.createElement('video');
			var Winplay=document.createElement('div');
			var Winscroll=document.createElement('div');
			var scrollcircle=document.createElement('div');
			var scrollprocess=document.createElement('div');
			var Wintime=document.createElement('div');
			var Winfullscreen=document.createElement('div');
			
			//0.close
			Winclose.id='close';
			document.body.appendChild(Winclose);
			Winclose.style.width='64px';
			Winclose.style.height='64px';
			Winclose.style.top='0%';
			Winclose.style.right='0%';
			Winclose.style.background='url(close.png) no-repeat';
			Winclose.style.cursor='pointer';
			Winclose.style.position='absolute';
			Winclose.onclick=function()
			{
				//document.body.Winmvdiv.removeChild(Winmv);
				document.body.removeChild(windiv);
				document.body.removeChild(winmvdiv);
				document.body.removeChild(Winclose);

			}


			//1.div
			Winmvdiv.id='winmvdiv';
			document.body.appendChild(Winmvdiv);
			Winmvdiv.style.top='50%';
			Winmvdiv.style.left='50%';
			Winmvdiv.style.transform="translate(-50%,-50%)";
			Winmvdiv.style.position='absolute';
			//2.video

			Winmv.id='video';
			Winmvdiv.appendChild(Winmv);
			Winmv.style.width='720px';
			Winmv.style.height='auto';
			Winmv.style.display='block';
			Winmv.addEventListener('timeupdate',MvProcess);
		
			//3.play\pause
			Winmvdiv.appendChild(Winplay);
			Winplay.style.width='32px';
			Winplay.style.height='32px';
			Winplay.style.background='url(play.png) no-repeat';
			Winplay.style.cursor='pointer';
			Winplay.style.display='inline-block';
			Winplay.style.marginRight='9px';
			Winplay.style.marginLeft='9px';
			Winplay.style.marginTop='8px';
			Winplay.style.verticalAlign='top';
			Winplay.onclick=function()
			{
				if(Isplay==0)
					{
						Winmv.play();
						Isplay=1;
						Winplay.style.background='url(play.png) no-repeat';
					}
				else if(Isplay==1)
					{
						Winmv.pause();
						Isplay=0;
						Winplay.style.background='url(pause.png) no-repeat';
					}
				
			}

			//4.滚动条
			Winmvdiv.appendChild(Winscroll);
			Winscroll.style.width='470px';
			Winscroll.style.height='10px';
			Winscroll.style.background='rgb(133,129,121)';
			Winscroll.style.cursor='pointer';
			Winscroll.style.display='inline-block';
			Winscroll.style.verticalAlign='top';
			Winscroll.style.marginTop='20px';
			Winscroll.style.borderRadius='25px';
			Winscroll.onclick=function()
			{
				scrollcircle.style.left=event.offsetX+45+'px';
				scrollprocess.style.width=event.offsetX+'px';
				Winmv.currentTime=event.offsetX/470*(Winmv.duration);
			}

			scrollprocess.id='scrollprocess';
			Winscroll.appendChild(scrollprocess);
			scrollprocess.style.height='10px';
			scrollprocess.style.background='rgba(121, 85, 72, 0.69)';
			scrollprocess.style.display='inline-block';
			scrollprocess.style.position='absolute';
			scrollprocess.style.borderRadius='360px';

			scrollcircle.id='scrollcircle';
			Winscroll.appendChild(scrollcircle);
			scrollcircle.style.width='10px';
			scrollcircle.style.height='10px';
			scrollcircle.style.background='#dc3939c2';
			scrollcircle.style.display='inline-block';
			scrollcircle.style.position='absolute';
			scrollcircle.style.borderRadius='360px';

		
			//5.时间
			Wintime.id='mvtime';
			Winmvdiv.appendChild(Wintime);
			Wintime.style.width='68px';
			Wintime.style.height='50px';
			Wintime.style.cursor='pointer';
			Wintime.style.display='inline-block';
			Wintime.style.font='15px 微软雅黑';
			Wintime.style.color='rgb(225,225,225)';
			Wintime.style.lineHeight='50px';
			Wintime.style.verticalAlign='top';


			//5.fullscreen
			Winmvdiv.appendChild(Winfullscreen);
			Winfullscreen.style.width='32px';
			Winfullscreen.style.height='32px';
			Winfullscreen.style.background='red';
			Winfullscreen.style.cursor='pointer';
			Winfullscreen.style.display='inline-block';
			Winfullscreen.style.marginTop='8px';
			Winfullscreen.style.background='url(full.png) no-repeat';
			Winfullscreen.onclick=function()
			{
				Winmv.webkitRequestFullScreen();
			}
			//Control();
			Winmv.src=u;
			Winmv.play();
		}
		function MvProcess()
		{
			video=document.getElementById('video');
			mvtime=document.getElementById('mvtime');
			mvpositon=document.getElementById('scrollcircle');
			mvprocess=document.getElementById('scrollprocess');
			currenttime=formate(video.currentTime);
			duration=formate(video.duration);
			var p=video.currentTime/video.duration*460+50;
			mvpositon.style.left=p+'px';
			mvprocess.style.width=video.currentTime/video.duration*460+10+'px';
			mvtime.innerHTML=currenttime+'/'+duration;
		}
		function formate(numb)
		{
			numb=parseInt(numb),
			d=Math.floor(numb/600);
			c=Math.floor((numb-d*600)/60);
			b=Math.floor((numb-d*600-c*60)/10);
			a=numb-d*600-c*60-b*10;
			return (d+c+':'+b+a)
		} //格式化歌曲计数