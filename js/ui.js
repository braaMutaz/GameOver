import {Display} from "./games.js";
export class Api
{
constructor()
{

    this.getno3()
   
    this.getApi('mmorpg')
    document.querySelectorAll(".nav-item a").forEach((link) => {
        link.addEventListener("click", (e) => {

            this.getApi( e.target.dataset.no3)
        });
     });

    
}
 async getno3()
{
 
let x= document.querySelectorAll('.nav-item a ')
for (let index = 0; index < x.length; index++) {
   x[index].addEventListener('click' ,async function(){
    let  w =    x[index].getAttribute('data-no3')
    
   })
    
}

}
async getApi(men)
{
    const loading = document.querySelector(".loading");
    document.getElementById('nav').classList.add('d-none')
    loading.classList.remove("d-none");
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4a7074779cmsh721f81bb5d63fdep1d1987jsnc279f180a01c',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${men}`, options)
    let response = await api.json()
   
    
    let Dis = new Display(response)
    loading.classList.add("d-none");
    document.getElementById('nav').classList.remove('d-none')
}

}


