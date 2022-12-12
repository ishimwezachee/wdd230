function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("div_logo").classList.toggle("top");
    document.getElementById("date").classList.toggle("top");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;
let today = now.toLocaleString("en-US", { "weekday": "long" });
let  par = document.createElement('p');
if(today ==='Monday' || today ==='Twesday'){
    par.classList.add('top_text');
    par.innerHTML = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
};

datefield.appendChild(par);


let currentdate = new Date(); 
let  datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + ":"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

const currentYear = currentdate.getFullYear()
document.getElementById("one").innerHTML = `© ${currentYear} | zachee Ishimwe | Kigali - Rwanda`
document.getElementById("two").innerHTML = `Last Updated: ${datetime}(Central African Time)`