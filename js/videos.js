fetch("/Match summary/Match_summary.json")
        .then(response => response.json())
        .then(data =>{

            const swiper_items_sale = document.getElementById("products")
          
            all_products_json = data
            
            data.videos.forEach(product => {
       
              swiper_items_sale.innerHTML += 
              `
            
                <div class="swiper-slide swiper-slide--one"  data-url="${product.First_team}">
               </div> 

               <div class="swiper-slide swiper-slide--two">
              </div> 

              <div class="swiper-slide swiper-slide--three">
             </div> 

             <div class="swiper-slide swiper-slide--four">
             </div> 

            <div class="swiper-slide swiper-slide--five">
            </div> 
    
           
            `
        
        })
        // <iframe width="560" height="315" 
        // src="${product.iframe}"
        //  title="YouTube video player" frameborder="0" 
        //  allow="accelerometer; autoplay; clipboard-write; 
        //  encrypted-media; gyroscope; picture-in-picture; web-share" 
        //  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               
        const allMatches = document.querySelectorAll('.swiper-slide');
        allMatches.forEach(matchDiv => {
            matchDiv.addEventListener('click', () => {
                const url = matchDiv.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            });
        });
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
      

        })

     
        
       
        





        