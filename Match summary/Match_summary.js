        
    
fetch("/Match summary/Match_summary.json")
.then(response => response.json())
.then(data =>{

    const information_team = document.getElementById("information")
    const section = document.getElementById("section")
    const the_Formation = document.getElementById("the_Formation")

    all_products_json = data

    data.videos.forEach(product => {
    
      const displayStyle = (product.iframe === '') ? 'display: none;' : '';

      section.innerHTML += `
    
       <iframe allowfullscreen="true" frameborder="0" height="100%" scrolling="1" 
          src="${product.iframe}" 
          width="100%">style="${displayStyle}
       </iframe>
          
         
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

