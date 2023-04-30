$(document).ready(function(){

    //SLIDER
    if(window.location.href.indexOf('index') >-1){
      $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        touchEnabled: true, //Propiedad para cuando haga click y deslice se mueva la img
        auto: true, //Propiedad para que se mueva automaticamente
        autoHover: true,//Propiedad para que cuando mueva el click sobre la imagen esta no se mueva
      });
    }

    //POST
    if(window.location.href.indexOf('index') >-1){
      var posts = [
          {
              title: 'Prueba de titulo 1',
              date: 'Publicado: ' + moment().format('LL'),
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eius dolore facilis temporibus quibusdam, fugiat rerum veritatis sapiente sunt, dolorum omnis, eveniet praesentium adipisci? Aliquid, cumque. Placeat, corporis est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quaerat eaque esse mollitia quidem impedit similique eos, eligendi illum. Similique totam accusamus laudantium nobis aliquam dolorum aperiam! Unde, necessitatibus debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque est facere excepturi molestias vitae modi quam labore voluptatibus neque beatae, numquam veritatis non sequi voluptatem veniam perferendis ut amet.'
          },
          {
            title: 'Prueba de titulo 2',
            date: 'Publicado: ' + moment().format('LL'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eius dolore facilis temporibus quibusdam, fugiat rerum veritatis sapiente sunt, dolorum omnis, eveniet praesentium adipisci? Aliquid, cumque. Placeat, corporis est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quaerat eaque esse mollitia quidem impedit similique eos, eligendi illum. Similique totam accusamus laudantium nobis aliquam dolorum aperiam! Unde, necessitatibus debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque est facere excepturi molestias vitae modi quam labore voluptatibus neque beatae, numquam veritatis non sequi voluptatem veniam perferendis ut amet.'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado: ' + moment().format('LL'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eius dolore facilis temporibus quibusdam, fugiat rerum veritatis sapiente sunt, dolorum omnis, eveniet praesentium adipisci? Aliquid, cumque. Placeat, corporis est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quaerat eaque esse mollitia quidem impedit similique eos, eligendi illum. Similique totam accusamus laudantium nobis aliquam dolorum aperiam! Unde, necessitatibus debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque est facere excepturi molestias vitae modi quam labore voluptatibus neque beatae, numquam veritatis non sequi voluptatem veniam perferendis ut amet.'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado: ' + moment().format('LL'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eius dolore facilis temporibus quibusdam, fugiat rerum veritatis sapiente sunt, dolorum omnis, eveniet praesentium adipisci? Aliquid, cumque. Placeat, corporis est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quaerat eaque esse mollitia quidem impedit similique eos, eligendi illum. Similique totam accusamus laudantium nobis aliquam dolorum aperiam! Unde, necessitatibus debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque est facere excepturi molestias vitae modi quam labore voluptatibus neque beatae, numquam veritatis non sequi voluptatem veniam perferendis ut amet.'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado: ' + moment().format('LL'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut possimus eius dolore facilis temporibus quibusdam, fugiat rerum veritatis sapiente sunt, dolorum omnis, eveniet praesentium adipisci? Aliquid, cumque. Placeat, corporis est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quaerat eaque esse mollitia quidem impedit similique eos, eligendi illum. Similique totam accusamus laudantium nobis aliquam dolorum aperiam! Unde, necessitatibus debitis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa itaque est facere excepturi molestias vitae modi quam labore voluptatibus neque beatae, numquam veritatis non sequi voluptatem veniam perferendis ut amet.'
        },
      ];
      
      posts.forEach((item, index) =>{
        var post = `
        <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
        `;
        
        $('#posts').append(post);
      })};

      //SELECTOR DE TEMAS
      var theme = $('#theme');

      $('#to-green').click(function(){
        theme.attr('href', 'src/css/green.css');//EL ATRIBUTO ATTR ES PARA CAMBIAR LA PROPIEDAD A UNA COSA
      });

      $('#to-red').click(function(){
        theme.attr('href', 'src/css/red.css');
      });

      $('#to-blue').click(function(){
        theme.attr('href', 'src/css/blue.css');
      });

      $('#to-black').click(function(){
        theme.attr('href', 'src/css/black.css');
      });

      //EVENTO SUBIR LA PAG
      $('.subir').click(function(e){
          e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
      });


      //LOGIN FALSO

      $('#login form').submit(function(){
        let form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
      });

      var form_name = localStorage.getItem('form_name');
      if(form_name != null && form_name != undefined ){
        var about_parrafo = $('#about p');
        about_parrafo.html('<br><strong>Bienvenido, ' + form_name + '</strong>');
        about_parrafo.append('<a href="#" id="logout">Cerrar sesión</a>')
        $('#login').hide();

        $('#logout').click(function(){
            localStorage.clear();//Limpia todas las variables del localstorage
            location.reload();//Se utiliza para recargar la pág
        });
      }

      //ACORDEON
      if(window.location.href.indexOf('about') >-1){
        $('#acordeon').accordion({
            collapsible: true,
        });

      }
      if(window.location.href.indexOf('reloj') >-1){
          setInterval(function(){
            var reloj = moment().format('h:mm:ss a');
            $('#reloj').html(reloj);

          }, 1000);
        
      }

      //VALIDACION

      if(window.location.href.indexOf('contact') >-1){
        $.validate({
            lang: 'es'
          });
          $('#calendario').datepicker({
            dateFormat:'dd-mm-yy'
          });
      }
      
      
    });