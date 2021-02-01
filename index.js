var boxscolor=['#345aca','#f40','#abcd99','#23ffaa','#789abc','#abc789','#fed321','#dad456','#a7b5d4','#45ad99',

'#a5b5c5','#5a5b5d','#a9ccf1','#1f1f1f','#678def','#1f3a49'];

var boxs=document.getElementsByClassName('box');
var rotate=['rotateX(-360deg)','rotatey(-360deg)','rotateX(360deg)','rotatey(360deg)'];
var content=document.getElementsByClassName('content')[0];
var waper=document.getElementsByClassName('waper')[0];



// 动态在head里添加style样式，减少在css中手动设置样式的操作量 
var style=document.createElement('style');
    var str='';
for(var i=0;i<boxscolor.length;i++){
   
  
    str+=`.waper .box:nth-child(${i+1}) div {
        background: ${boxscolor[i]} ;
    }`

    style.innerHTML=str;
    document.head.appendChild(style);

    boxs[i].onmouseenter=function(e){
        // var dir=getdir(e,this);
       var d= getdir(e,this);
        this.style.transform=' translateZ(150px)'+ rotate[d] ;
        // this.style.transform=';
        
    }
    boxs[i].onmouseleave=function(){
        this.style.transform='';
        
    }

}
function getdir(e,dom){
  var left=dom.getBoundingClientRect().left;
  var top =dom.getBoundingClientRect().top;
 

    var x=e.clientX-left - dom.offsetWidth/2;
    var y= e.clientY-top- dom.offsetHeight/2;
var deg= Math.atan2(y,x)/(Math.PI/180);



    var d=(Math.round((deg+180)/90)+3)%4;
return d;
}



document.onmousemove=function(e){

    var x=(0.5-(e.clientY/window.innerHeight))*15;
    var y=((e.clientX/window.innerWidth)-0.5)*15;

content.style.transform='perspective(1000px) rotateX('+x+'deg) rotateY('+y+'deg)'


    // console.log(x,y)
}


