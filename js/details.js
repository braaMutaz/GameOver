import { gamedetails } from "./index.js";

export class details
{

    constructor(ee)
    {
        this.wow=ee
        
       this.gamesdetails('521')
       this.wow.forEach((link) => {
        link.addEventListener("click", (e) => {
              
            this.gamesdetails(e.target.dataset.ido)
            document.getElementById('home').classList.replace('d-block' , 'd-none')
            document.getElementById('details').classList.remove('d-none')
            document.getElementById('nav').classList.replace('d-block' , 'd-none')

        });
     });

      
    }
    
   async gamesdetails(wet)
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
        let apidet = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${wet}`, options)
        let responsedetails = await apidet.json()
       
         let det = new gamedetails(responsedetails)
         loading.classList.add("d-none");
       
     }
}