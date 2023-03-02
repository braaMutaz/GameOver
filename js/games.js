import { details } from "./details.js";

export class Display 
{
  
    constructor(response)
    {
             
      this.display = response
       
        this.disp()
      
    }
    async disp()
    {
        let cartonna =``
        for( let i=0 ; i<this.display.length; i++ )
        {
            cartonna+=`
            
            <div class="col-lg-3">
            <div data-ido="${this.display[i].id}"  class="items  p-2   text-white">
              <img data-ido="${this.display[i].id}" class="w-100" src="${this.display[i].thumbnail}" alt="">
              <p data-ido="${this.display[i].id}" class="mt-2">${this.display[i].title}</p>
              <p data-ido="${this.display[i].id}" class=" wow text-center">${this.display[i].short_description}</p>
              <br>
              <div data-ido="${this.display[i].id}" class=" trans  border d-flex justify-content-around">
               <p data-ido="${this.display[i].id}" >${this.display[i].genre}</p>
               <p data-ido="${this.display[i].id}" >${this.display[i].platform}</p>
              </div>
            </div>
          </div>
            `
        }
        document.getElementById('demo').innerHTML=cartonna
           
     
    
           let ee = document.querySelectorAll('.items')
           let deta = new details(ee)
 
    }


    

}

