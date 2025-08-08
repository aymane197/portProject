const hr = document.getElementById('hr');
const min = document.getElementById('min');
const sec = document.getElementById('sec');



 setInterval(()=>{
    const now = new Date();

 const hours = now.getHours().toString().padStart(2,'0');
 const minutes = now.getMinutes().toString().padStart(2,'0');
 const seconds = now.getSeconds().toString().padStart(2,'0');
  hr.innerHTML  = `${hours}`;
  min.innerHTML = `${minutes}`;
  sec.innerHTML = `${seconds}`;
 },1000);
