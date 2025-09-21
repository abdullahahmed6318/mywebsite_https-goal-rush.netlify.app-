


fetch("/Match summary/Match_summary.json")
    .then(response => response.json())
    .then(data => {
        const swiper_items_sale = document.getElementById("Videos");
        
        all_products_json = data;
        
        data.videos.forEach(video => {
            // إنشاء عنصر للحالة التي يوجد بها فريق واحد فقط
            if (video.one_team) {
                swiper_items_sale.innerHTML += `
                <div class="url" data-url="${video.one_team}" data-id="${video.id}">
                    <a class="swiper-slide swiper-slide--one">
                    </a>
                      <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
                 </div>
                `;
            }

            // إنشاء عنصر للحالة التي يوجد بها فريقان
            if (video.two_team) {
                swiper_items_sale.innerHTML += `
                <div class="url" data-url="${video.two_team}" data-id="${video.id}">
                    <a class="swiper-slide swiper-slide--two" >
                    </a>
                      <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
                 </div>
                `;
            }
            if (video.three_team) {
              swiper_items_sale.innerHTML += `
              <div class="url" data-url="${video.three_team}" data-id="${video.id}">
                  <a class="swiper-slide swiper-slide--three">
                  </a>
                    <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
               </div>
              `;
          }

            // إضافة iframe للفيديو
            // if (video.iframe) {
            //     swiper_items_sale.innerHTML += `
            //         <iframe class="swiper-slide swiper-slide-video" data-id="${video.id}"
            //             src="${video.iframe}"
            //             title="YouTube video player" frameborder="0" 
            //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            //             allowfullscreen>
            //         </iframe>
            //     `;
            // }
        });

        const allMatches = document.querySelectorAll('.url[data-id]');
        allMatches.forEach(matchElement => {
            matchElement.addEventListener('click', () => {
                const url = matchElement.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
            });
        });
    })
    .catch(error => {
        console.error('There was a problem fetching the data:', error);
    }); 





















// const allMatche = document.querySelectorAll('.url');
// allMatche.forEach(matchDiv => {
//     matchDiv.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         const url = matchDiv.getAttribute('data-url');
//         if (url) {
//             window.location.href = url;
//         }
//     });
// });

// fetch("/Match summary/Match_summary.json")
//         .then(response => response.json())
//         .then(data =>{

//             const swiper = document.getElementById("Videos")
          
//             all_products_json = data

//             data.videos.forEach(product => {
             
//               swiper.innerHTML = 
//               `
//               <div class="url" data-url="${product.one_team}">
//                <a class="swiper-slide swiper-slide--one">
//                </a>
//                 <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
//               </div>

//                 <div class="url" data-url="${product.two_team}">
//                <a class="swiper-slide swiper-slide--one">
//                </a>
//                 <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
//               </div>
               
//             `
        
//         })
//         const allMatches = document.querySelectorAll('.url');
//         allMatches.forEach(matchDiv => {
//             matchDiv.addEventListener('click', () => {
//                 const url = matchDiv.getAttribute('data-url');
//                 if (url) {
//                     window.location.href = url;
//                 }
//             });
//         });
//     })
//     .catch(error => {
//         console.error('There was a problem fetching the data:', error);
      

//         })

        

