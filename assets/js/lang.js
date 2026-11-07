/* نصوص الواجهة لكل لغة. اللغة تُؤخذ من <html lang="..."> */
(function(){
  var L=((document.documentElement.lang||"ar").slice(0,2)==="en")?"en":"ar";
  var T={
    ar:{
      src:"المصدر",
      topics:{
        tourism:[["mashhad","مشهد"],["tehran","طهران"],["north","شمال إيران"],["transfer","ترانسفر وإقامة"],["other","أخرى"]],
        medical:[["cosmetic","جراحة تجميلية"],["dental","طب الأسنان"],["fertility","علاج العقم"],["checkup","فحص شامل"],["other","أخرى"]]
      },
      msg:{hello:"السلام عليكم، أرغب بالحصول على استشارة.",name:"الاسم",country:"الدولة",service:"نوع الخدمة",topic:"الموضوع",date:"تاريخ السفر التقريبي",people:"عدد الأشخاص",best:"أفضل وقت للتواصل",notes:"ملاحظات",tourism:"سياحة",medical:"علاج"},
      err:{name:"الرجاء إدخال اسمك (حرفان على الأقل).",country:"الرجاء اختيار الدولة.",type:"الرجاء اختيار نوع الخدمة.",topic:"الرجاء اختيار الموضوع.",other:"الرجاء كتابة الموضوع.",people:"أدخل عددًا صحيحًا بين 1 و 50."},
      months:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],
      prev:"البطاقة السابقة",next:"البطاقة التالية",hint:"اسحب لليسار للتالي، ولليمين للسابق",
      toLight:"تبديل إلى الوضع الفاتح",toDark:"تبديل إلى الوضع الليلي",
      copied:"تم النسخ ✔",copy:"نسخ الرقم",copyPrompt:"انسخ الرقم:",
      toman:"تومان",updated:"آخر تحديث: ",source:" · المصدر: TGJU",
      rateFail:"تعذّر تحميل الأسعار الآن. ",rateStale:"تعذّر التحديث، آخر أسعار محمّلة عند ",
      arrived:"وصلنا! مطار مشهد الدولي"
    },
    en:{
      src:"Source",
      topics:{
        tourism:[["mashhad","Mashhad"],["tehran","Tehran"],["north","Northern Iran"],["transfer","Transfers & accommodation"],["other","Other"]],
        medical:[["cosmetic","Cosmetic surgery"],["dental","Dentistry"],["fertility","Fertility treatment"],["checkup","Comprehensive check-up"],["other","Other"]]
      },
      msg:{hello:"Hello, I would like to request a consultation.",name:"Name",country:"Country",service:"Service type",topic:"Topic",date:"Approximate travel date",people:"Number of travelers",best:"Best time to contact",notes:"Notes",tourism:"Tourism",medical:"Medical travel"},
      err:{name:"Please enter your name (at least 2 characters).",country:"Please select your country.",type:"Please choose a service type.",topic:"Please choose a topic.",other:"Please write the topic.",people:"Enter a whole number between 1 and 50."},
      months:["January","February","March","April","May","June","July","August","September","October","November","December"],
      prev:"Previous card",next:"Next card",hint:"Swipe left for next, right for previous",
      toLight:"Switch to light mode",toDark:"Switch to dark mode",
      copied:"Copied ✔",copy:"Copy number",copyPrompt:"Copy the number:",
      toman:"Toman",updated:"Last updated: ",source:" · Source: TGJU",
      rateFail:"Couldn't load the rates right now. ",rateStale:"Couldn't refresh. Showing the rates loaded at ",
      arrived:"We've landed! Mashhad International Airport"
    }
  };
  window.TA_LANG=L; window.TA=T[L];
})();
