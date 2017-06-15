/*功能一：鼠标滑过父菜单，弹出子菜单*/
function hoverSub( span,display) {
    var div=span.querySelector("#mobile_pop");
    div.style.display=display;
}
/*保持label的hover状态*/
function keepHover(div,isHover) {
    var label=div.parentNode.querySelector("label");
        isHover?label.className="hover":label.className="";
    var a=label.querySelector(".mobile");
        isHover?a.className=a.className+" hover":a.className="mobile";
}
/*商品类别菜单*/
function hoverCute(display) {
    var cuteMate=document.getElementById("cute_main");
    cuteMate.style.display=display;
}
function hoverSubCate( h3,display) {
    var subCate=h3.querySelector("div");
    subCate.style.display=display;
}
/*需求三：放大图*/
/*需求3.1：移动左/右移小图标*/
const liWidth=62;
var times=0;
var iconList=document.querySelector(".img_list");
var count=iconList.querySelectorAll("li").length;
function move(btn) {
    if(btn.className=="left"){
        if(times!=0){
            times-=1;
        }
    }else{
        if(count-times>5){
            times+=1;
        }
    }
    iconList.style.left=(-1)*liWidth*times+"px";
    btnEnabled();
}
var btnLeft=iconList.parentNode.querySelector(".left");
var btnRight=iconList.parentNode.querySelector(".right");
function btnEnabled(){
    if(times==0){
        btnLeft.className="left_disabled";
    }
    else if(count-times==5){
        btnRight.className="right_disabled";
    }else{
        btnLeft.className="left";
        btnRight.className="right";
    }
}
/*需求3.21：鼠标滑过小图片，显示中图片*/
var imgs=iconList.querySelectorAll("img");
var imgBig=document.querySelector("#img_big");
for(var i=0;i<imgs.length;i++){
    imgs[i].onmouseover=function(){
        var src=this.src;
        var d=src.indexOf(".");
        imgBig.src=src.substring(0,d)+"-m"+src.substring(d);
    }
}
/*需求3.3：放大图*/
var mask=document.querySelector("#mask");
var largeDiv=document.querySelector("#largeDiv");
function showMask(display) {
    mask.style.display=display;
    largeDiv.style.display=display;
}
function zoom(evt) {
    var top=evt.offsetY-175/2;
    top<0?top=0:top>(350-175)?top=(350-175):top=top;
    var left=evt.offsetX-175/2;
    left<0?left=0:left>(350-175)?left=(350-175):left=left;
    mask.style.top=top+"px";
    mask.style.left=left+"px";
    var src=imgBig.src;
    var d=src.indexOf(".");
    largeDiv.src=src.substring(0,d-1)+"l"+src.substring(d);
    largeDiv.style.backgroundImage="url("+largeDiv.src+")";
    largeDiv.style.backgroundRepeat="no-repeat";
    largeDiv.style.backgroundPositionX=left*-2+"px";
    largeDiv.style.backgroundPositionY=top*-2+"px";
}
/*舒展收缩功能*/
/*
function shareMore(a){
    var isBack=a.className;
    var width=document.querySelector(".width");
    var kaiXin=document.querySelector(".kaixin");
    var douBan=document.querySelector(".douban");
    var kaiXinA=kaiXin.querySelector("a");
    var douBanA=douBan.querySelector("a");
    if(isBack==""){
        kaiXinA.style.display="block";
        douBanA.style.display="block";
        width.style.width="188px";
        a.style.backgroundPositionX="-271px";
        a.className="back";
    }else{
        kaiXinA.style.display="none";
        douBanA.style.display="none";
        width.style.width="143px";
        a.style.backgroundPositionX="-263px";
        a.className="";
    }
}
*/
var time=1;
function shareMore(a){
    var width=document.querySelector(".width");
    var kaiXin=document.querySelector(".kaixin");
    var douBan=document.querySelector(".douban");
    var kaiXinA=kaiXin.querySelector("a");
    var douBanA=douBan.querySelector("a");
    if(time%2==1){
        kaiXinA.style.display="block";
        douBanA.style.display="block";
        width.style.width="188px";
        a.style.backgroundPositionX="-271px";
        time=time+1;
    }else{
        kaiXinA.style.display="none";
        douBanA.style.display="none";
        width.style.width="143px";
        a.style.backgroundPositionX="-263px";
        time=time-1;
    }
}
/*地址*/
function storeTabChange(index){
    var lis=document.querySelectorAll("#dizhi_top div");
    for( var i=0;i<lis.length-1;i++){
        i==index? lis[i].className="dizhi_top tap":lis[i].className="dizhi_top";
    }
}
/*商品内容显示*/
var tabs=["tuwen","guigecanshu","baozhuangqingdan","shangpinpj","shouhoufuwu"];
function showTab(index){
    var list=document.querySelectorAll("#shangpin_t ul li");
    for(var i=0;i<list.length;i++) {
        i == index ? list[i].className = "current" : list[i].className = "";
    }
    for(var i=0;i<tabs.length;i++){
        var all=document.querySelector("#"+tabs[i]);
        i==index?all.style.display="block":all.style.display="none";
    }
}
/*弹出回复表单*/
function showReply(a){
    var comment=a.parentNode.nextSibling;
    var reply=null;
    if(comment.nodeType==3){
        reply=comment.nextSibling;
    }else{
        reply=comment;
    }
    if(reply.style.display=="none"){
        reply.style.display="block";
    }else{
        reply.style.display="none";
    }
}