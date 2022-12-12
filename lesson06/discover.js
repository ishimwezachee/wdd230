
const images = document.querySelectorAll('img[data-src]');
const imageOptions = { threshold: 0.5, rootMargin: '0px 0px -100px 0px' };

const preloadImage = (img) => {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }
  img.src = src;
}

const imageObserver = new IntersectionObserver((items, io) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
            return;
        } else {
            preloadImage(item.target);
            io.unobserve(item.target);
        }
    });
}, imageOptions);

images.forEach(image => {
    imageObserver.observe(image);
});


let visit = document.querySelector('#visit');

const sinceLastTime =()=>{
 let lastVisitTime = 0;
 if(!window.localStorage.getItem("lastvist")){
    lastVisitTime = window.localStorage.setItem("lastvist",Math.round(Date.now() / 1000));
    return 0;
 }else{
    let now = Math.round(Date.now() / 1000);
    let lastTime = window.localStorage.getItem("lastvist")
    let sec =  now - lastTime;
    let days =  Math.floor(sec / (3600 * 24));
    return days;
 }
}

console.log(visit);

let days = sinceLastTime();
visit.textContent = `You visited this page ${days} days ago.`






