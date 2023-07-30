import "../style/index.css";

/**
 *  EDITAR SOLO DENTRO DE ESTA FUNCIÓN RENDER
 *  Esta función se llama cada vez que el usuario cambia tipos o cambia cualquier entrada
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // aquí hacemos las preguntas lógicas para tomar decisiones sobre cómo construir el html
  // if includeCover==false luego restablecemos el código de la portada sin la etiqueta <img> para que la portada sea transparente.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  // restablecer el cuerpo del sitio web con la nueva salida html
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
  ${
    variables.includeCover
      ? `<div class="cover"><img src="${variables.background}" /></div>`
      : "<div class='cover'></div>"
  }
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name ? variables.name : "Nombre"} ${
    variables.lastname ? variables.lastname : "Apellido"
  } </h1>
          <h2>${variables.role ? variables.role : "Rol"}</h2>
          <h3>${variables.city ? variables.city : "Ciudad"}, ${
    variables.country ? variables.country : "País"
  }</h3>
          <ul class=${variables.socialMediaPosition}>
            <li><a href=${
              variables.twitter
            }><i class="fab fa-twitter"></i></a></li>
            <li><a href=${
              variables.github
            }><i class="fab fa-github"></i></a></li>
            <li><a href=${
              variables.github
            }><i class="fab fa-linkedin"></i></a></li>
            <li><a href=${
              variables.instagram
            }><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * No cambie ninguna de las líneas a continuación, aquí es donde hacemos la lógica para los menús desplegables
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //renderizar la tarjeta por primera vez

  //Esto no se Toca .....

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- agregar un oyente a cada entrada
      const attribute = e.target.getAttribute("for"); // cuando cualquier entrada cambia, recopile el valor
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // renderizar de nuevo la tarjeta con un nuevo valor
    });
  });
};
