let imgBox = document.getElementById("img-Box");
let qrImage = document.getElementById("qr-Image");
let  inputText = document.getElementById("input-Text");



function generateQR(){
     if(inputText.value.length > 0){

     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value ;
     imgBox.classList.add("show-img");

     }
     else{
          inputText.classList.add("error");
          setTimeout(() =>{
               inputText.classList.remove("error");
          },1000);
     }
}


inputText.addEventListener("keypress" , function(event){
     if(event.key === "Enter")
     {
          document.getElementById("mybtn").click();
     }
});