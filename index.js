const url="https://api.quotable.io/random";
const quote=document.querySelector("#quote");
const btn=document.querySelector("#btn");
const author=document.querySelector("#author");
let callfun=()=>{
   fetch(url).then(e=>e.json()).then(e=>{
      quote.textContent='"';
      quote.textContent+=e.content;
      quote.textContent+='"';
   author.textContent=e.author;
   })
}
btn.addEventListener("click",()=>{
   callfun();
})
