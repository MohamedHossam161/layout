
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: 'smooth' 
});
}
window.onscroll = function() {
let scrollToTopBtn = document.querySelector('.scroll-to-top');

if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  scrollToTopBtn.style.display = "block";
} else {
  scrollToTopBtn.style.display = "none";
}
};





let car=document.getElementsByClassName("mohamed")
let span=document.getElementById("mohamed")
for(let i=0 ;i<car.length ; i++){
    car[i].addEventListener("click",()=>{
        if(span.innerHTML==null){
            span.innerHTML=1
        }
        else{
            span.innerHTML++
        }
    }
  )
  
}
for(let i=0 ;i<car.length ; i++){
  car[i].addEventListener("click",()=>{
    alert("Product added successfully!")
})

}


let input2=document.getElementById("input2")
let butom=document.getElementById("book")
let bookingModal=document.getElementById("bookingModal")

butom.addEventListener("click",()=>{
  if(input2.value==="" ){
    alert("Not booked")
}
  else{
    alert("Booked successfully")
    bookingModal.style.display="none"
  }

})







