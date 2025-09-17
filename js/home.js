  const allMatches = document.querySelectorAll('.url');
  allMatches.forEach(matchDiv => {
      matchDiv.addEventListener('click', (event) => {
          // Prevent the default link behavior to avoid navigating twice
          event.preventDefault(); 
          const url = matchDiv.getAttribute('data-url');
          if (url) {
              window.location.href = url;
          }
      });
  });

  fetch("json/items_today.json")
          .then(response => response.json())
          .then(data =>{

              const swiper_items_sale = document.getElementById("swiper_items_sale")
            
              all_products_json = data
              

              const swiper_items_sal = document.getElementById("swiper_items_sal")
            
              all_products_json = data

            
            

            
              data.videos.forEach(product => {
                const displayStyle = (product.name_team_First === '') ? 'display: none;' : '';
                const displayStyle_Second = (product.name_team_third === '') ? 'display: none;' : '';
                const displayStyle_Five = (product.name_team_Five === '') ? 'display: none;' : '';
                const displayStyle_seven = (product.name_team_seven === '') ? 'display: none;' : '';
                const displayStyle_Ninth = (product.name_team_Ninth === '') ? 'display: none;' : '';
                const displayStyle_ = (product.name_team_Ninth === '') ? 'height: 500;' : '';
                const displayStyle_1 = (product.name_team_seven === '') ? 'height: 300;' : '';
                const displayStyle_2 = (product.name_team_Five === '') ? 'height: 240;' : '';
                const displayStyle_3 = (product.name_team_third === '') ? 'height: 140;' : '';

                swiper_items_sale.innerHTML += 
                `
              
                  <div class="side_bar_league" style="${displayStyle}">
                      <div id="swiper_items_sal" class="products">
                                  <h1>${product.side_bar_league}</h1>
                        </div>
                        </div>
                  <div class="aaa" style="${displayStyle_} ${displayStyle_1} ${displayStyle_2} ${displayStyle_3}" >
                    <span>
                              <a class="url" style="${displayStyle}" data-url="${product.First_team}">
                              <div class="The_first__match">
                                <img src="${product.First_img}" alt="">
                              <p class="First_team">${product.name_team_First}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_Second__match">
                                  <img src="${product.Second_img}" alt="">
                                <p class="Second_team">${product.name_team_Second}</p>
                                  </div>
                              </a>
                    </span>
                              // 
                    <span>
                              <a class="url" style="${displayStyle_Second}" data-url="${product.third_team}">
                              <div class="The_third__match
  ">
                                <img src="${product.third_img}" alt="">
                              <p class="First_team"> ${product.name_team_third}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_fourth__match">
                                  <img src="${product.fourth_img}" alt="">
                                <p class="Second_team">${product.name_team_fourth}</p>
                                  </div>
                                
                              </a>
                    </span>
                    //  
                    <span>
                              <a class="url" style="${displayStyle_Five}" data-url="${product.Five_team}">
                              <div class="The_Five__match">
                                <img src="${product.Five_img}" alt="">
                              <p class="First_team"> ${product.name_team_Five}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_sixth__match">
                                  <img src="${product.sixth_img}" alt="">
                                <p class="Second_team">${product.name_team_sixth}</p>
                                  </div>
                                
                              </a>
                      </span>
                      // 
                      <span>
                              <a class="url"  style="${displayStyle_seven}"data-url="${product.seven_team}" >
                              <div class="The_seven__match">
                                <img src="${product.seven_img}" alt="">
                              <p class="First_team"> ${product.name_team_seven}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_eighth__match">
                                  <img src="${product.eighth_img}" alt="">
                                <p class="Second_team">${product.name_team_eighth}  </p>
                                  </div>
                                
                              </a>
                      </span>
                      // 
                      <span>
                              <a class="url" style="${displayStyle_Ninth}" data-url="${product.Ninth_team}">
                              <div class="The_Ninth__match">
                                <img src="${product.Ninth_img}" alt="">
                              <p class="First_team"> ${product.name_team_Ninth}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_tenth__match">
                                  <img src="${product.tenth_img}" alt="">
                                <p class="Second_team">${product.name_team_tenth}  </p>
                                  </div>
                                
                              </a>


                      </span>                        
              </div>
              `
          
          })
          const allMatches = document.querySelectorAll('.url');
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

          fetch("json/items_tomorrow.json")
          .then(response => response.json())
          .then(data =>{

              const swiper_items_sale = document.getElementById("swiper_items_a")
            
              all_products_json = data
              

              const swiper_items_sal = document.getElementById("swiper_items_sal")
            
              all_products_json = data

            
            

            
              data.videos.forEach(product => {
                const displayStyle = (product.name_team_First === '') ? 'display: none;' : '';
                const displayStyle_Second = (product.name_team_third === '') ? 'display: none;' : '';
                const displayStyle_Five = (product.name_team_Five === '') ? 'display: none;' : '';
                const displayStyle_seven = (product.name_team_seven === '') ? 'display: none;' : '';
                const displayStyle_Ninth = (product.name_team_Ninth === '') ? 'display: none;' : '';
                const displayStyle_ = (product.name_team_Ninth === '') ? 'height: 500;' : '';
                const displayStyle_1 = (product.name_team_seven === '') ? 'height: 300;' : '';
                const displayStyle_2 = (product.name_team_Five === '') ? 'height: 240;' : '';
                const displayStyle_3 = (product.name_team_third === '') ? 'height: 140;' : '';

                swiper_items_sale.innerHTML += 
                `
              
                  <div class="side_bar_league" style="${displayStyle}">
                      <div id="swiper_items_sal" class="products">
                                  <h1>${product.side_bar_league}</h1>
                        </div>
                        </div>
                  <div class="aaa" style="${displayStyle_} ${displayStyle_1} ${displayStyle_2} ${displayStyle_3}" >
                    <span>
                              <a class="url" style="${displayStyle}" data-url="${product.First_team}">
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
                              // 
                    <span>
                              <a class="url" style="${displayStyle_Second}" data-url="${product.third_team}">
                              <div class="The_third__match
  ">
                                <img src="${product.third_img}" alt="">
                              <p class="First_team"> ${product.name_team_third}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_fourth__match">
                                  <img src="${product.fourth_img}" alt="">
                                <p class="Second_team">${product.name_team_fourth}</p>
                                  </div>
                                
                              </a>
                    </span>
                    //  
                    <span>
                              <a class="url" style="${displayStyle_Five}" data-url="${product.Five_team}">
                              <div class="The_Five__match">
                                <img src="${product.Five_img}" alt="">
                              <p class="First_team"> ${product.name_team_Five}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_sixth__match">
                                  <img src="${product.sixth_img}" alt="">
                                <p class="Second_team">${product.name_team_sixth}  </p>
                                  </div>
                                
                              </a>
                      </span>
                      // 
                      <span>
                              <a class="url"  style="${displayStyle_seven}"data-url="${product.seven_team}" >
                              <div class="The_seven__match">
                                <img src="${product.seven_img}" alt="">
                              <p class="First_team"> ${product.name_team_seven}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_eighth__match">
                                  <img src="${product.eighth_img}" alt="">
                                <p class="Second_team">${product.name_team_eighth}  </p>
                                  </div>
                                
                              </a>
                      </span>
                      // 
                      <span>
                              <a class="url" style="${displayStyle_Ninth}" data-url="${product.Ninth_team}">
                              <div class="The_Ninth__match">
                                <img src="${product.Ninth_img}" alt="">
                              <p class="First_team"> ${product.name_team_Ninth}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_tenth__match">
                                  <img src="${product.tenth_img}" alt="">
                                <p class="Second_team">${product.name_team_tenth}  </p>
                                  </div>
                                
                              </a>


                      </span>                        
              </div>
              `
          
          })
          const allMatches = document.querySelectorAll('.url');
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
          
          fetch("json/items_yesterday.json")
          .then(response => response.json())
          .then(data =>{

              const swiper_items_sale = document.getElementById("swiper_items_yesterday")
            
              all_products_json = data
              

              const swiper_items_sal = document.getElementById("swiper_items_sal")
            
              all_products_json = data

            
            

            
              data.videos.forEach(product => {
                const displayStyle = (product.name_team_First === '') ? 'display: none;' : '';
                const displayStyle_Second = (product.name_team_third === '') ? 'display: none;' : '';
                const displayStyle_Five = (product.name_team_Five === '') ? 'display: none;' : '';
                const displayStyle_seven = (product.name_team_seven === '') ? 'display: none;' : '';
                const displayStyle_Ninth = (product.name_team_Ninth === '') ? 'display: none;' : '';
                const displayStyle_ = (product.name_team_Ninth === '') ? 'height: 500;' : '';
                const displayStyle_1 = (product.name_team_seven === '') ? 'height: 300;' : '';
                const displayStyle_2 = (product.name_team_Five === '') ? 'height: 240;' : '';
                const displayStyle_3 = (product.name_team_third === '') ? 'height: 140;' : '';

                swiper_items_sale.innerHTML += 
                `
              
                  <div class="side_bar_league" style="${displayStyle}">
                      <div id="swiper_items_sal" class="products">
                                  <h1>${product.side_bar_league}</h1>
                        </div>
                        </div>
                  <div class="aaa" style="${displayStyle_} ${displayStyle_1} ${displayStyle_2} ${displayStyle_3}" >
                    <span>
                              <a class="url" style="${displayStyle}" data-url="${product.First_team}">
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
                              // 
                    <span>
                              <a class="url" style="${displayStyle_Second}" data-url="${product.third_team}">
                              <div class="The_third__match
  ">
                                <img src="${product.third_img}" alt="">
                              <p class="First_team"> ${product.name_team_third}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_fourth__match">
                                  <img src="${product.fourth_img}" alt="">
                                <p class="Second_team">${product.name_team_fourth}</p>
                                  </div>
                                
                              </a>
                    </span>
                    //  
                    <span>
                              <a class="url" style="${displayStyle_Five}" data-url="${product.Five_team}">
                              <div class="The_Five__match">
                                <img src="${product.Five_img}" alt="">
                              <p class="First_team"> ${product.name_team_Five}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_sixth__match">
                                  <img src="${product.sixth_img}" alt="">
                                <p class="Second_team">${product.name_team_sixth}  </p>
                                  </div>
                                
                              </a>
                      </span>
                      // 
                      <span>
                              <a class="url"  style="${displayStyle_seven}"data-url="${product.seven_team}" >
                              <div class="The_seven__match">
                                <img src="${product.seven_img}" alt="">
                              <p class="seven_team"> ${product.name_team_seven}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_eighth__match">
                                  <img src="${product.eighth_img}" alt="">
                                <p class="Second_team">${product.name_team_eighth}  </p>
                                  </div>
                                
                              </a>
                      </span>
                      // 
                      <span>
                              <a class="url" style="${displayStyle_Ninth}" data-url="${product.Ninth_team}">
                              <div class="The_Ninth__match">
                                <img src="${product.Ninth_img}" alt="">
                              <p class="Ninth_team"> ${product.name_team_Ninth}</p>
                                </div>
                                <div class="The_Match_time">
                                    <h1>vs</h1>
                                  </div>
                                <div class="The_tenth__match">
                                  <img src="${product.tenth_img}" alt="">
                                <p class="Second_team">${product.name_team_tenth}  </p>
                                  </div>
                                
                              </a>


                      </span>                        
              </div>
              `
          
          })
          const allMatches = document.querySelectorAll('.url');
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
          





  var cart = document.querySelector('.main-menu');
  var btn_tomorrow = document.querySelector('.tomorrow');
  var btn_today = document.querySelector('.today');
  var btn_yesterday = document.querySelector('.yesterday');

  function open_cart() {
      cart.classList.add('active')
  }

  function close_cart() {
      cart.classList.remove('active')
  }
                  
  function open_today() {
    btn_today.classList.remove('home_today_active')
    btn_tomorrow.classList.add('home_tomorrow_active')
    btn_yesterday.classList.add('home_yesterday_active')
    btn_today.classList.remove('today')

  }

  function close_tomorrow() {
    btn_today.classList.add('home_today_active')
    btn_tomorrow.classList.remove('home_tomorrow_active')
    btn_yesterday.classList.add('home_yesterday_active')
    btn_tomorrow.classList.remove('tomorrow')

  }

  function close_yesterday() {
    btn_today.classList.add('home_today_active')
    btn_tomorrow.classList.add('home_tomorrow_active')
    btn_yesterday.classList.remove('home_yesterday_active')
    btn_yesterday.classList.remove('yesterday')

  }  
          

          