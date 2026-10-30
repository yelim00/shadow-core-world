(function(){
var g=document.getElementById('gate'),h=document.documentElement;
function pass(){g.hidden=true;h.style.overflow='';}
try{if(localStorage.getItem('sc-adult')==='1'){g.hidden=true;return;}}catch(e){}
h.style.overflow='hidden';
document.getElementById('gy').onclick=function(){try{localStorage.setItem('sc-adult','1');}catch(e){}pass();};
document.getElementById('gn').onclick=function(){document.getElementById('gb').hidden=true;document.getElementById('gm').textContent='만 19세 미만은 이용할 수 없는 페이지입니다. 창을 닫아 주세요.';};
})();
