        
    
fetch("/team/barcelona/barcelona.json")
.then(response => response.json())
.then(data =>{

    const information_team = document.getElementById("information")
    const section = document.getElementById("section")
    const the_Formation = document.getElementById("the_Formation")

    all_products_json = data


    data.forEach(product => {

           
        time_team.innerHTML += `
      
     <div class="time">
        <div class="time_first__match">
            <img class="time_img" src="${product.First_img}" alt="">
            <p class="First_team">${product.name_team_First} </p>
        </div>
        <div class="Match_time">
         <nav>
            </nav>
            <h1 class="h1_v">v</h1>
            <h1 class="h1_s">s</h1>

        </div>
        <div class="time_Second__match">
            <img src="${product.Second_img}" alt="">
            <p class="Second_team">${product.name_team_Second} </p>
        </div>
        <div class="pattern" aria-hidden="true"></div>
        
              

        `

    })

    // <img class="img_time" src="/image/Image_fx(35).jpg" alt="">
    
   
    data.forEach(product => {

           
      information_team.innerHTML += `
    
          <div class="about">
            <h1>${product.offers.type} </h1>

            <div class="about_match">
            <span class="i1">${product.offers.Championship}</span>
            <span class="i2">${product.offers.channel}</span>
            <span class="i3">${product.offers.commentator}</span>
            <span class="i4">${product.offers.Match_date_and_time}</span>
            <span class="i5">${product.offers.stadium}</span>

            </div>
          </div>
            

      `

    })
    data.forEach(product => {

           
      the_Formation.innerHTML += `
    
          <samp>
            
                <img src="${product.offers.Formation}" alt="">
           
        </samp>
            

      `

    })








    data.forEach(product => {
    
      const Before_the_start = (product.iframe !== '') ? 'display: none;' : '';
      const btn_f = (product.iframe === '') ? 'display: none;' : '';
      const isIframeEmpty = product.iframe_1   === '';
      const iframeDisplayStyle = isIframeEmpty ? 'display: none;' : 'display: block;';
      const messageDisplayStyle = isIframeEmpty ? 'display: block;' : 'display: none;';
      const isIframeEmpty2 = product.iframe_2   === '';
      const iframeDisplayStyle2 = isIframeEmpty2 ? 'display: none;' : 'display: block;';
      const messageDisplayStyle2 = isIframeEmpty2 ? 'display: block;' : 'display: none;';



      section.innerHTML +=
        `
      <div class="btn_f" >
        <button class="btn_S" onclick="open_v1()">
          <span class="h1_btn_S">Server</span>
          <span class="icon_btn_S">
           <ion-icon name="server-outline"></ion-icon>
        </button>

        <button class="btn_S" onclick="open_v2()">
          <span class="h1_btn_S">Server</span>
          <span class="icon_btn_S">
           <ion-icon name="server-outline"></ion-icon>
        </button>

        <button class="btn_S" onclick="open_v3()">
          <span class="h1_btn_S">Server</span>
          <span class="icon_btn_S">
           <ion-icon name="server-outline"></ion-icon>
        </button> 

      </div>

        <div class="Before_the_start" style="${Before_the_start}" >
        <h1 class="h11">سيبدأ البث المباشر</h1>
        <i class="fa-solid fa-tv"></i>
        <h1 class="h12">قبل بداية المباراة بـ 30 دقيقة </h1>
    </div>

      <div class="video_f v1" >
         <h1 style="${messageDisplayStyle}"> لا يوجد</h1>
       <iframe allowfullscreen="true" frameborder="0" height="100%" scrolling="1" 
         src="${product.iframe_1}" 
         width="100%" style="${iframeDisplayStyle}">
       </iframe> 
      </div>

      <div class="video_f v2">
         <h1 style="${messageDisplayStyle2}"> لا يوجد</h1>
        <iframe allowfullscreen="true" frameborder="0" height="100%" scrolling="1" 
         src="${product.iframe_2}" 
         width="100%"  style="${iframeDisplayStyle2}">
        </iframe> 
      </div> 

      <div class="video_f v3">
         <h1 style="${messageDisplayStyle}"> لا يوجد</h1>
       <iframe allowfullscreen="true" frameborder="0" height="100%" scrolling="1" 
        src="${product.iframe3}" 
        width="100%">
       </iframe> 

   </div> 
          
         
          `
          
    })
})




var cart = document.querySelector('.main-menu');
function open_cart() {
    cart.classList.add('active')
}

function close_cart() {
    cart.classList.remove('active')
}


// Function to fetch data from JSON and create multiple countdowns
async function setupCountdowns() {
  try {
    const response = await fetch('/team/barcelona/barcelona.json'); // تأكد من تغيير اسم الملف
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const matches = await response.json();

    // Get the container where all countdowns will be placed
    const timeTeamContainer = document.getElementById('time_team');

    // Iterate through each match in the JSON array
    matches.forEach(match => {
      // Check if the match object has a countDownDate
      if (match.countDownDate) {
        // Create a unique container for each countdown
        const timerContainer = document.createElement('div');
        timerContainer.id = `timer-container-${match.id}`;
        
        // Append the new container to the #time_team element
        timeTeamContainer.appendChild(timerContainer);

        // Start the countdown for this specific match
        startSingleCountdown(match);
      }
    });

  } catch (error) {
    console.error('Error fetching or parsing countdown data:', error);
    document.getElementById('time_team').innerHTML = "Error loading match data.";
  }
}

// Function to handle a single countdown timer
function startSingleCountdown(match) {
  const countDownDate = new Date(match.countDownDate).getTime();
  const timerId = `timer-${match.id}`;

  // Create the HTML elements for the countdown display
  const container = document.getElementById(`timer-container-${match.id}`);
  container.innerHTML = `
    <div id="${timerId}">
      <span id="days-${match.id}"></span> Days 
      <span id="hours-${match.id}"></span> Hours 
      <span id="minutes-${match.id}"></span> Minutes 
      <span id="seconds-${match.id}"></span> Seconds
    </div>
  `;

  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML for this specific timer
    document.getElementById(`days-${match.id}`).innerHTML = days;
    document.getElementById(`hours-${match.id}`).innerHTML = hours;
    document.getElementById(`minutes-${match.id}`).innerHTML = minutes;
    document.getElementById(`seconds-${match.id}`).innerHTML = seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById(`${timerId}`).innerHTML = "EXPIRED";
    }
  }, 1000);
}

// Start the whole process
setupCountdowns();

function open_v1() {
  // 1. Get a reference to the button element using its class 'btn1'
  const btn_v2 = document.querySelector('.v2');
  const btn_v1 = document.querySelector('.v1');
  const btn_v3 = document.querySelector('.v3');
  const Server = document.querySelector('.Before_the_start');

  // if (Server) {
  //   Server.classList.toggle('startV1');
  // }
  if (btn_v1) {
    btn_v1.classList.toggle('vad');
  }
  if (btn_v2) {
    btn_v2.classList.remove('vad2');

  }
  if (btn_v3) {
    btn_v3.classList.remove('vad3');

  }

  else {
    console.error("Button element with class '.btn1' not found.");
  }

}

function open_v2() {
  const btn_v2 = document.querySelector('.v2');
  const btn_v1 = document.querySelector('.v1');
  const btn_v3 = document.querySelector('.v3');
  const Server = document.querySelector('.Before_the_start');


  // if (Server) {
  //   Server.classList.toggle('startV1');
  // }

  if (btn_v2) {
    btn_v2.classList.toggle('vad2');

  }
  if (btn_v1) {
    btn_v1.classList.remove('vad');
  }
  if (btn_v3) {
    btn_v3.classList.remove('vad3');

  }

  else {
    console.error("Button element with class '.btn1' not found.");
  }
}

function open_v3() {

  const btn_v3 = document.querySelector('.v3');
  const btn_v2 = document.querySelector('.v2');
  const Server = document.querySelector('.Before_the_start');
  const btn_v1 = document.querySelector('.v1');
  // if (Server) {
  //   Server.classList.toggle('startV1');
  // }
  if (btn_v3) {
    btn_v3.classList.toggle('vad3');
  }
  if (btn_v2) {
    btn_v2.classList.remove('vad2');
  }
  if (btn_v1) {
    btn_v1.classList.remove('vad');
  }
  else {
    console.error("Button element with class '.btn1' not found.");
  }
}
