var swiper = new Swiper(".swiper", {
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	slidesPerView: 4,
	spaceBetween: 20,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 40,
		  },
		620: {
		  slidesPerView: 1,
		  spaceBetween: 40,
		},
		680: {
		  slidesPerView: 2,
		  spaceBetween: 40,
		},
		920: {
		  slidesPerView: 3,
		  spaceBetween: 40,
		},
		1240: {
		  slidesPerView: 4,
		  spaceBetween: 40,
		},
	  } 
  });

  // Funciones de la Seccion Galeria
  const todasImgesGallery = document.querySelectorAll('.img');
  const containerImageExpan = document.querySelector('.container-img'); 
  const imageShow = document.querySelector('.img-show');
  const copy = document.querySelector('.copy');
  const closeEnX = document.querySelector('.bx.bx-x');

  todasImgesGallery.forEach(image =>{
	image.addEventListener('click', ()=>{
		//alert("Click");
		addImage(image.getAttribute('src'), image.getAttribute('alt'));	
	})
  })

  const addImage = (srcImg, altImg)=> {
	containerImageExpan.classList.toggle('move');
	imageShow.classList.toggle('show');
	imageShow.src = srcImg;
	copy.innerHTML = altImg;
  }

  closeEnX.addEventListener('click', ()=> {
	containerImageExpan.classList.toggle('move');
	imageShow.classList.toggle('show');
  });

//   // Mapa del footer
//   function initMap() {
// 	var location = { lat: 40.7128, lng: -74.0060 }; // Coordenadas de ubicación (ejemplo: Nueva York)
  
// 	var map = new google.maps.Map(document.getElementById('map'), {
// 	  center: location,
// 	  zoom: 12
// 	});
  
// 	var marker = new google.maps.Marker({
// 	  position: location,
// 	  map: map,
// 	  title: 'Ubicación'
// 	});
//   }

//   // Formulario

//   document.getElementById("miFormulario").addEventListener("submit", function(event) {
//     event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

//     // Obtiene los datos del formulario
//     var formData = new FormData(document.getElementById("miFormulario"));

//     // Realiza la solicitud de envío utilizando Fetch
//     fetch("procesar_formulario.php", {
//       method: "POST",
//       body: formData
//     })
//     .then(function(response) {
//       // Maneja la respuesta de la solicitud
//       if (response.ok) {
//         // La solicitud se completó correctamente
//         console.log("Formulario enviado correctamente");
//       } else {
//         // La solicitud no se completó correctamente
//         console.log("Error al enviar el formulario");
//       }
//     })
//     .catch(function(error) {
//       // Maneja cualquier error de la solicitud
//       console.log("Error en la solicitud: " + error);
//     });
//   });

