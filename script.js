const curtidas = document.getElementById("curtidas") // peg o botão de cutidas pelo id
curtidas.addEventListener("click",aumentarcurtidas ) // quando clicar chama a função 

// função de aumentar  curtidas 
function aumentarCurtidas(){
    let quantidade = document.querySelector("span")
    quantidade.textContent++;
}

