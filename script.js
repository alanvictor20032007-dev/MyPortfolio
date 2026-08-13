console.log("Javascript is connected");
let year=new Date().getFullYear();
document.querySelector(".site-footer p").innerHTML=
`&copy; ${year} Alan Victor. All Rights Reserved`

function getGreeting(){
    const hour=new Date().getHours();
    if(hour<12) return"Good Morning";
    if(hour<17)return"Good Afternoon";
    return"Good Evening";
}
let hero=document.querySelector(".hero-section h1")
if(hero){
    hero.textContent=`${getGreeting()}, I am Alan Victor.`
}