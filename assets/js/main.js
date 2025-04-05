const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickavle: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      },
    }
  });

  // fetch('https://residences-back.vercel.app/contatos', {
  //   method: "GET",
  //   headers: {"Content-type": "application/json;charset=UTF-8"}
  // })
  //   // Tratamento do sucesso
  //   .then(response => response.json())  // converter para json
  //   .then(json => console.log(json))    //imprimir dados no console
  //   .catch(err => console.log('Erro de solicitação', err));