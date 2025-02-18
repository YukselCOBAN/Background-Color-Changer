function changeColor()
{
    document.body.style.backgroundColor=
    "rgb("+Math.round(Math.random()*255)+  /*aşağı yuvarlasın ve ondalıklı değil tam sayı olsun,0 ile 255 arası renk kodu versin*/
    ","+Math.round(Math.random()*255)+
    ","+Math.round(Math.random()*255)+")";
}