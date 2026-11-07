(function(){
  var root=document.documentElement, s=null;
  try{s=localStorage.getItem("ta_theme")}catch(e){}
  if(s!=="dark"&&s!=="light"){
    try{s=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch(e){s="light"}
  }
  root.setAttribute("data-theme",s);
  /* وصلنا من زر تبديل اللغة: نكمل الحركة ولا نعرض شاشة الدخول */
  var langSw=false;
  try{
    var sw=sessionStorage.getItem("ta_langsw");
    if(sw){
      sessionStorage.removeItem("ta_langsw"); var xy=sw.split(",");
      root.style.setProperty("--lx",(+xy[0]||0)+"px"); root.style.setProperty("--ly",(+xy[1]||0)+"px");
      root.classList.add("lang-in"); langSw=true;
      setTimeout(function(){root.classList.remove("lang-in")},1400);
    }
  }catch(e){}
  try{
    var base=new URL("../../",document.currentScript.src).pathname;
    var p=location.pathname, isEn=(root.lang||"").slice(0,2)==="en";
    var home=isEn?(p===base+"en/"||p===base+"en/index.html"):(p===base||p===base+"index.html");
    /* العودة التلقائية للإنجليزية فقط إذا اختارها الزائر سابقًا */
    if(!isEn && home && localStorage.getItem("ta_lang")==="en" && !/[?&]lang=ar/.test(location.search)){
      location.replace(base+"en/"+location.hash); return;
    }
    var seen=sessionStorage.getItem("ta_intro")==="1";
    var calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
    if(home&&!seen&&!calm&&!langSw){
      root.classList.add("intro");
      setTimeout(function(){root.classList.remove("intro")},9000);
    }
  }catch(e){}
})();
