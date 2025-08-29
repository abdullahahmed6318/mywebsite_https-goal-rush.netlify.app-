 const allMatches = document.querySelectorAll('.aaa');
        allMatches.forEach(matchDiv => {
            matchDiv.addEventListener('click', () => {
                const url = matchDiv.getAttribute('data-url');
                if (url) {
                    window.location.href = url;
                }
              });
            });
fetch("json/items.json")
        .then(response => response.json())
        .then(data =>{

            const swiper_items_sale = document.getElementById("swiper_items_sale")
          
            all_products_json = data
            

            const swiper_items_sal = document.getElementById("swiper_items_sal")
          
            all_products_json = data

          
           

          
            data.forEach(product => {
              const displayStyle = (product.name_team_First === '') ? 'display: none;' : '';
            

              swiper_items_sale.innerHTML += `

                <div class="side_bar_league" style="${displayStyle}">
                    <div id="swiper_items_sal" class="products">
                                <h1>${product.side_bar_league}</h1>
                      </div>
                      </div>
                <div class="aaa" style="${displayStyle}" data-url="${product.a_team}">
                                <span>
                             <a style="${displayStyle}">
                            <div class="The_first__match">
                              <img src="${product.First_img}" alt="">
                            <p class="First_team"> ${product.name_team_First}</p>
                              </div>
                               <div class="The_Match_time">
                                   <h1>vs</h1>
                                 </div>
                              <div class="The_Second__match">
                                <img src="${product.Second_img}" alt="">
                              <p class="Second_team">${product.name_team_Second}  </p>
                                </div>
                               
                            </a>
                            </span>

                            
            </div>
            `
            const allMatches = document.querySelectorAll('.aaa');
            allMatches.forEach(matchDiv => {
                matchDiv.addEventListener('click', () => {
                    const url = matchDiv.getAttribute('data-url');
                    if (url) {
                        window.location.href = url;
                    }
                  });
                });
        })
        
      

        })

       
        

        