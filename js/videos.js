fetch("/Match summary/Match_summary.json")
    .then(response => response.json())
    .then(data => {
        const swiper_items_sale = document.getElementById("products");
        
        all_products_json = data;
        
        data.videos.forEach(video => {
            // إنشاء عنصر للحالة التي يوجد بها فريق واحد فقط
            if (video.one_team) {
                swiper_items_sale.innerHTML += `
                    <a class="swiper-slide swiper-slide--one" data-url="${video.one_team}" data-id="${video.id}">
                        </a>
                `;
            }

            // إنشاء عنصر للحالة التي يوجد بها فريقان
            if (video.two_team) {
                swiper_items_sale.innerHTML += `
                    <a class="swiper-slide swiper-slide--two" data-url="${video.two_team}" data-id="${video.id}">
                        </a>
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

        const allMatches = document.querySelectorAll('.swiper-slide[data-id]');
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