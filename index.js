let searchicon=document.querySelector("#sicon");
let search=document.querySelector(".search");
let clik=document.querySelector("#select");
let inp=document.querySelector("#inp");
let cname=document.querySelector("#cname");
let deg=document.querySelector("#deg");
let hum=document.querySelector("#hum");
let wind=document.querySelector("#wind");
let rain=document.querySelector("#rain");
let result=document.querySelector("#sicon2");

searchicon.addEventListener("click",function(){
    search.style.display="block";
    searchicon.style.transition="all 1s";
    searchicon.style.transform="rotate(300deg)"
    setTimeout(() => {
        searchicon.style.visibility="hidden"
    },1000);
});
result.addEventListener("click",function(){
    let body=document.getElementsByTagName('body')[0];  
    const caps=inp.value.charAt(0);
    const place=caps.toUpperCase()+inp.value.slice(1);

    cname.innerHTML=place;
 
    console.log("dftrgv");
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inp.value+'&units=metric&appid=fc769a5605837af7fe06844eadb034df')
    .then(resp=>{
        return resp.json();
    })
    .then(op=>{
        console.log(op);
        if(op.main.temp>=27 && op.main.temp<90){
          document.body.style.backgroundImage='url("https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
          document.body.style.width="100%";
          console.log("UILHK");
        }
        else{
            body.src="https://i.pinimg.com/originals/e1/0b/f3/e10bf3f453383a6892d2f5e9419f5f76.jpg";
            document.body.style.width="100%";
            console.log("fvd ");
        }
        deg.innerHTML=op.main.temp+"°C";
        hum.innerHTML=op.main.humidity+"%";
        wind.innerHTML=op.wind.speed;
        rain.innerHTML=op.weather[0].main;

    })
});
clik.addEventListener("click",function(){
    navigator.geolocation.getCurrentPosition((el)=>{
        console.log(el.coords.latitude);
        console.log(el.coords.longitude);
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${el.coords.latitude}&lon=${el.coords.longitude}&units=metric&appid=5298d7a3ecdc8c1266a4bfc0b2e0130c`)
        .then(geo=>{
            return geo.json();
        })
        .then(currentloc=>{
            if(currentloc.main.temp>=27 && currentloc.main.temp<90){
                document.body.style.backgroundImage='url("https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
                document.body.style.width="100%";
                console.log("UILHK");
              }
              else{
                  body.src="https://i.pinimg.com/originals/e1/0b/f3/e10bf3f453383a6892d2f5e9419f5f76.jpg";
                  document.body.style.width="100%";
                  console.log("fvd ");
              }
            console.log(currentloc);
            cname.innerHTML=currentloc.name;
            deg.innerHTML=currentloc.main.temp+"°C"
            hum.innerHTML=currentloc.main.humidity+"%";
            wind.innerHTML=currentloc.wind.speed;
            rain.innerHTML=currentloc.weather[0].main;
    
        })
    });
   
   
});
fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?id=524901&appid=5298d7a3ecdc8c1266a4bfc0b2e0130c")
.then(all=>{
    return all.json();
})
.then(allresult=>{
    console.log("dfgrgraeg");
    console.log(allresult);
})
let fpage=document.querySelector(".firstpage");
let maps=document.querySelector("#maps");
let home=document.querySelector("#home");
let iframes=document.querySelector(".iframe");
let navsearch=document.querySelector("#sear");
let cancel=document.querySelector("#cancel");
let settings=document.querySelector("#setings");
let setdet=document.querySelector(".settings-details")
maps.addEventListener("click",()=>{
    fpage.style.display="none";
    iframes.style.display="block"
    iframes.style.width="100%";
    iframes.style.height="fit-content";
    setdet.style.display="none";
    search.style.display="none";
   
    
})
home.addEventListener("click",()=>{
    fpage.style.display="block";
    iframes.style.display="none";
    setdet.style.display="none";
    search.style.display="block"
});
navsearch.addEventListener("click",()=>{
    
    search.style.display="block";
    searchicon.style.transition="all 1s";
    searchicon.style.transform="rotate(300deg)"
    setTimeout(() => {
        searchicon.style.visibility="hidden"
    },1000);
    search.style.display="block"
    console.log("fiyfiyglyg");
})
cancel.addEventListener("click",()=>{
    search.style.display="none"
    search.style.transition="all 2s";
    search.style.transform="translateX(-400deg)";
    searchicon.style.transition="all 1s";
    searchicon.style.transform="rotate(0deg)"
    setTimeout(() => {
        searchicon.style.visibility="visible"
    },100);
    console.log("uygkhj,fr6t7yi");
});
settings.addEventListener("click",()=>{
    setdet.style.display="block";
    fpage.style.display="none";
    iframes.style.display="none";
    search.style.display="none";
    setdet.style.position="absolute";
    setdet.style.top="0"
   
})
let btm=document.getElementsByClassName("bottom")[0];
let loader=document.querySelector(".loader");
setTimeout(()=>{
    loader.style.display="none";
    btm.style.display="flex"
},3000);

