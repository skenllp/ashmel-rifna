(function(){
  // falling petals
  var p=document.getElementById('petals');
  for(var i=0;i<14;i++){var e=document.createElement('i');e.className='petal';e.style.left=Math.random()*100+'vw';e.style.setProperty('--dx',(Math.random()*120-60)+'px');e.style.animationDuration=(9+Math.random()*9)+'s';e.style.animationDelay=(-Math.random()*14)+'s';e.style.transform='scale('+(.6+Math.random()*.8)+')';p.appendChild(e)}
  // countdown to 12 Dec 2026 (00:00 local; no event time given)
  var T=new Date(2026,11,12,0,0,0).getTime(),b=document.querySelectorAll('#cd b');
  function tick(){var d=Math.max(0,T-Date.now()),v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60];v.forEach(function(x,i){b[i].textContent=String(x).padStart(2,'0')})}
  tick();setInterval(tick,1000);
  // reveal on scroll
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(x){io.observe(x)});
  // music setup
  var audio=document.getElementById('bg-music');
  var musicBtn=document.getElementById('music-btn');
  var musicIcon=document.getElementById('music-icon');
  function startMusic(){
    var play=audio.play();
    if(play!==undefined){play.then(function(){musicBtn.classList.add('playing');musicIcon.textContent='♪'}).catch(function(){})}
  }
  function toggleMusic(){
    if(audio.paused){audio.play();musicBtn.classList.add('playing');musicIcon.textContent='♪';}
    else{audio.pause();musicBtn.classList.remove('playing');musicIcon.textContent='♩';}
  }
  if(musicBtn) musicBtn.addEventListener('click',toggleMusic);
  // cover: open the invitation
  var ob=document.querySelector('.open');
  ob.addEventListener('click',function(e){e.preventDefault();
    var c=document.getElementById('cover'),m=matchMedia('(prefers-reduced-motion:reduce)').matches;
    c.classList.add('fade');
    setTimeout(function(){document.documentElement.classList.add('opened');window.scrollTo(0,0);startMusic();},m?0:500)});
})();

