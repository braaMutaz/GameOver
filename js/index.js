import { Api } from "./ui.js"  ;
let api = new Api
let nav = document.querySelectorAll('.nav-item a ').forEach(function(link){
    link.addEventListener('click',function(){
        document.querySelector('.nav-item .vip').classList.remove('vip');
        link.classList.add('vip')
    })
})


export class gamedetails
{
constructor(responsedetails)
{

this.details =responsedetails
console.log(this.details);
this.dispalydet()


document.getElementById('lift').addEventListener('click',function(){
    document.getElementById('home').classList.replace('d-none' , 'd-block')
    document.getElementById('details').classList.add('d-none')
    document.getElementById('nav').classList.replace('d-none' , 'd-block')
 })

}
dispalydet()
{
    let gamedel =`
    <div class="col-lg-4  ">
    <div class="itemsdet">
      <h3>Details Game</h3>
      <br>
      <img src="${this.details.thumbnail}" alt="">
    </div>
  </div>
  <div class="col-lg-8 ">
    <div class="itemsdet">
      <h2>Title: ${this.details.title}</h2>
      <br>
      <h3>Category: ${this.details.genre}</h3>
      <br>
      <h3>Platform: ${this.details.platform}</h3>
      <br>
      <h3>Status: ${this.details.status}</h3>
      <br>
      <p>${this.details.description}</p>
      <br>
      <br>
      <a href="${this.details.game_url}"><button class="btn btn-info">Show Game</button></a>

      <i id="lift" class=" fs-2 lift fa-solid fa-circle-xmark"></i>
    </div>
  </div>
    
    `
    document.getElementById('gamedet').innerHTML=gamedel
}
}