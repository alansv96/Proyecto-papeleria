document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(producto =>{
  
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?producto.classList.remove("filtro")
              :producto.classList.add("filtro")
        })
  
    }
  
  
  })



var carouselWidth1 = $('.carousel-product-inner')[0].scrollWidth;
var cardWidth = $('.carousel-product-item').width();

 var scrollPosition = 0;

 $('.didactico .carousel-control-next').on('click', function () {
    if (scrollPosition < (carouselWidth1 - (cardWidth * 2))) {
        console.log('n');
        scrollPosition = scrollPosition + cardWidth;
        $('.carousel-product-inner').animate({scrollLeft: scrollPosition}), 600
    }
 })

 $('.didactico .carousel-control-prev').on('click', function () {
    if (scrollPosition > 0) {
        console.log('p');
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-product-inner').animate({scrollLeft: scrollPosition}), 600
    }
 })



