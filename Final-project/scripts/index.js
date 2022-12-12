let currentdate = new Date(); 
let  datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + ":"  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

const currentYear = currentdate.getFullYear()
document.getElementById("one").innerHTML = `© ${currentYear} | zachee Ishimwe | Kigali - Rwanda`
document.getElementById("twoLine").innerHTML = `Last Updated: ${datetime}(Central African Time)`