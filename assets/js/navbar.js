const searchInputDropdown = document.getElementById('search');

searchInputDropdown.addEventListener("submit",(evento)=>{

    evento.preventDefault()
    

    const valor=document.getElementById("floatingInput").value;
    console.log(valor);
   
    //console.log(evento.target);
    searchInputDropdown.reset()

})