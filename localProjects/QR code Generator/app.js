let inpu = document.getElementById('inpu');
let qrimg = document.getElementById('qrimg');
let imgbox = document.getElementById('imgbox');

function generatQr(){
    if(inpu.value === ""){
    //alert('type somting !!!');
    inpu.classList.add("error");
    setTimeout(function(){
        inpu.classList.remove("error");
    },1000);
    }else{
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inpu.value;
        imgbox.classList.add("show-img");
    }
  
} 