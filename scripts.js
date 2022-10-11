let peliculas = JSON.parse(file).results
let input_peliculas = document.getElementById("input_peliculas")
let contenedor = document.getElementById("contenedor")

function buscar_pelicula_onclick(){
    let pelicula = recorrer_peliculas(input_peliculas.value)
    
    contenedor.innerHTML = `
      <p>Title: ${pelicula.title}</p>
      <p>Year: ${pelicula.year}</p>
      <p>Cast: ${pelicula.cast}</p>
      <p>Genres: ${pelicula.genres}</p>
    `
  }

function recorrer_peliculas(nombre_pelicula) {
    for(let i = 0; i<peliculas.length; i++){
        if(peliculas[i].title.toLowerCase() == nombre_pelicula.toLowerCase()) {
            return peliculas[i]
        }
    }
} 
