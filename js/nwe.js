


fetch("/Match summary/Match_summary.json")
    .then(response => response.json())
    .then(data => {
        const swiper_items_sale = document.getElementById("Videos");
        all_products_json = data;
        
        data.videos.forEach(video => {
            const displayStyleOneTeam = video.id === '' ? 'display: none;' : '';
            const displayStyleTwoTeam = video.id === '' ? 'display: none;' : '';
            const displayStylethree_team = video.id === '' ? 'display: none;' : '';
            const displayStyleFourTeam = video.id === '' ? 'display: none;' : '';
            // إنشاء عنصر للحالة التي يوجد بها فريق واحد فقط
            if (video.one_team) {
                
                swiper_items_sale.innerHTML += `
                <div class="url" data-url="${video.one_team}" data-id="${video.id}" style="${displayStyleOneTeam}">
                    <a class="swiper-slide swiper-slide--one"  style="background-image: url('${video.background_image}');">
                    </a>
                      <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
                 </div>
                `;
            }

            // إنشاء عنصر للحالة التي يوجد بها فريقان
            if (video.two_team) {
                swiper_items_sale.innerHTML += `
                <div class="url" data-url="${video.two_team}" data-id="${video.id}" style="${displayStyleTwoTeam}">
                    <a class="swiper-slide swiper-slide--two"style="background-image: url('${video.background_image}');">
                    </a>
                      <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
                 </div>
                `;
            }
            if (video.three_team) {
                swiper_items_sale.innerHTML += `
                <div class="url" data-url="${video.three_team}" data-id="${video.id}" style="${displayStylethree_team}">
                    <a class="swiper-slide swiper-slide--two"style="background-image: url('${video.background_image}');">
                    </a>
                      <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
                 </div>
                `;
            }

            if (video.four_team) {
                swiper_items_sale.innerHTML += `
                <div class="url" data-url="${video.four_team}" data-id="${video.id}" style="${displayStyleFourTeam}">
                    <a class="swiper-slide swiper-slide--one"  style="background-image: url('${video.background_image}');">
                    </a>
                    <h1>Inter Miami CF vs. Seattle Sounders FC | Full Match Highlights | Leagues Cup Final Rematch!</h1>
                </div>
                `;
            }
          
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

        

