function buscarPelicula() {
    var titulo = document.getElementById("titulo-input").value;
    //var url = "http://www.omdbapi.com/?apikey=d4222942&t=" + encodeURIComponent(titulo);

    var apiKey = "d4222942";
    var url = "https://www.omdbapi.com/?apikey=" + apiKey + "&t=" + encodeURIComponent(titulo);

  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        mostrarResultado(data);
      }
    };
    xhr.send();
  }
  
  function mostrarResultado(data) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "";
  
    if (data.Response === "True") {
      var titulo = data.Title;
      var anio = data.Year;
      var director = data.Director;
      var poster = data.Poster;
      var descripcion = data.Plot;
  
      var imagen = document.createElement("img");
      imagen.src = poster;
      resultadoDiv.appendChild(imagen);
  
      var tituloP = document.createElement("p");
      tituloP.innerHTML = "<strong>Título:</strong> " + titulo;
      resultadoDiv.appendChild(tituloP);
  
      var anioP = document.createElement("p");
      anioP.innerHTML = "<strong>Año:</strong> " + anio;
      resultadoDiv.appendChild(anioP);
  
      var directorP = document.createElement("p");
      directorP.innerHTML = "<strong>Director:</strong> " + director;
      resultadoDiv.appendChild(directorP);
  
      var descripcionP = document.createElement("p");
      descripcionP.innerHTML = "<strong>Descripción:</strong> " + descripcion;
      resultadoDiv.appendChild(descripcionP);
    } else {
      resultadoDiv.innerHTML = "No se encontraron resultados.";
    }
  }
  
  function buscarConEnter(event) {
    if (event.keyCode === 13) {
      // El código 13 corresponde a la tecla Enter
      buscarPelicula();
      event.preventDefault(); // Evitar el comportamiento por defecto del Enter (por ejemplo, envío de formularios)
    }
  }
  
