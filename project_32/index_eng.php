<?php
require_once('Mobile_Detect.php');
$detect = new Mobile_Detect;
 ?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"><link rel="stylesheet" type="text/css" href="css/ie8.css" /> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"><link rel="stylesheet" type="text/css" href="css/ie8.css" /><![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"><link rel="stylesheet" type="text/css" href="css/ie8.css" /><![endif]-->
<!--[if IE]><script src="js/modernizr-2.6.2.min.js"></script><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title></title>
<meta name="description" content="">
<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/main.css">
<link rel="stylesheet" href="css/style_eng.css">
<link rel="stylesheet" href="css/superslides.css">
<link rel="stylesheet" href="css/animate.css">
<link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lato:100italic' rel='stylesheet' type='text/css'>
<script src="js/jquery-1.10.2.min.js"></script>
<script src="js/jquery-ui.js"></script>

<?php
 if ( !$detect->isMobile() ) {
echo '<script src="js/scripts.js"></script>';
}else {
	echo '<script src="js/scripts_mobile.js"></script>';
	};
 ?>

 <script type="text/javascript">
  $(function(){
    $("<select />").attr("id","main_nav_mob").insertAfter("#main_nav").change(function(){
      var a = $(this).find("option:selected").val();
      $target = $(a);
      var top = $target.length ? $target.offset().top-60 : 0; 
        $('html, body').stop().animate({
            'scrollTop': top
        }, 2500, 'easeInOutQuint', function () {
        });
    });

// Create default option "Go to..."
$("<option />", {
   "selected": "selected",
   "value"   : "",
   "text"    : "Go to..."
}).appendTo("#main_nav_mob");

// Populate dropdown with menu items
$("#main_nav a").each(function() {
 var el = $(this);
 $("<option />", {
     "value"   : el.attr("href"),
     "text"    : el.text()
 }).appendTo("#main_nav_mob");
});
  });
</script>
 

<script src="js/jquery.superslides.js"></script>
<script src="js/jquery.scrollorama.js"></script> 


 
</head>
<body>
<header id="menu">
  <h1><a href="#main"><img id="logo" border="0" src="images/portsoft-logo.png" width="168" height="38" alt="Portsoft" title="Portsoft"></a></h1>
  <nav>
    <ul id="language">
	  <li id="es"><a href="index.php"></a></li>
      <li id="en"><a href="index_eng.php"></a></li>
    </ul>
    <ul id="main_nav">
      <li id="menu_services"><a href="#services">Servicios</a></li>
      <li id="menu_about"><a href="#about">Quienes somos</a></li>
      <li id="menu_clients"><a href="#clients">Clientes</a></li>
      <li id="menu_news"><a href="#news">Novedades</a></li>
      <li id="menu_contact"><a href="#contact">Contacto</a></li>
    </ul>
  </nav>
</header>
<section id="main">
  <div class="wide-container">
    <div id="slides">
      <ul class="slides-container">
        
        <!-- Slider 1 -->
        <li class="uno">
          <div class="bloque">
            <h2 class="animated fadeInLeft">WEBSITES<br>            
            <h3 class="animated2 fadeInLeft">Your idea,<br>
               our goal.</h3>
            <div class="slider-more-btn-cont animated fadeInUp" id="slider1-btn-pos"> <a class="slider-more-btn" href="#services">What we do?</a> </div>
            <div class="social-cont">
            	<div class="fb-btn-slider social-slider-bg"><a href="#"></a></div>
                <div class="tw-btn-slider social-slider-bg"><a href="#"></a></div>
            	<div class="gplus-btn-slider social-slider-bg"><a href="#"></a></div>
            	<div class="youtube-btn-slider social-slider-bg"><a href="#"></a></div>
            </div>
            <img class="animated fadeInRight preserve" src="images/slider1-img.png" width="1000" height="673"> </div>
        </li>
        
        <!-- Slider 2 -->
        <li class="dos">
          <div class="bloque">
            <h2 class="animated fadeInLeft">
              <span class="size2">WEB</span><span class="size3">&</span><br>
              <span class="size4">MOBILE</span>
              <br>APPLICATIONS
            </h2>
                            
            <h3 class="animated2 fadeInLeft">Designed<br>
              just for you.</h3>
            <div class="slider-more-btn-cont animated fadeInUp" id="slider2-btn-pos"> <a class="slider-more-btn" href="#services">What we do?</a> </div>
            <div class="social-cont">
            	<div class="fb-btn-slider social-slider-bg"><a href="#"></a></div>
                <div class="tw-btn-slider social-slider-bg"><a href="#"></a></div>
            	<div class="gplus-btn-slider social-slider-bg"><a href="#"></a></div>
            	<div class="youtube-btn-slider social-slider-bg"><a href="#"></a></div>
            </div>
            <img class="animated fadeInRight preserve" src="images/slider2-img.png" width="900" height="624"> </div>
        </li>
        
        <!-- Slider 3 -->
        <li class="tres">
          <div class="bloque">
            <h2 class="animated fadeInLeft"><span class="size2">ONLINE</span>
            <br>MARKETING
              </h2>
            <h3 class="animated2 fadeInLeft">Get more<br>
              customers.</h3>
            <div class="slider-more-btn-cont animated fadeInUp" id="slider3-btn-pos"> <a class="slider-more-btn" href="#services">What we do?</a> </div>
            <div class="social-cont">
            	<div class="fb-btn-slider social-slider-bg"><a href="#"></a></div>
                <div class="tw-btn-slider social-slider-bg"><a href="#"></a></div>
            	<div class="gplus-btn-slider social-slider-bg"><a href="#"></a></div>
            	<div class="youtube-btn-slider social-slider-bg"><a href="#"></a></div>
            </div>
            <img class="animated fadeInRight preserve" src="images/slider3-img.png" width="827" height="686"> </div>
        </li>
      </ul>
      <nav class="slides-navigation"> <a href="#" class="next"></a> <a href="#" class="prev"></a> </nav>
    </div>
  </div>
</section>

<!-- SERVICIOS -->
<section id="services" class="scrollblock">
  <header>
    <h2>SERVICIOS</h2>
    <p>Ayudamos a que tu empresa se integre al mundo digital. Desarrollamos desde la idea al producto final, logrando trabajos atractivos y funcionales para hacer crecer su negocio.</p>
  </header>
  
  <!-- DISEÑO WEB -->
  <article class="one-service white-bg">
    <div class="art-container" id="web-design"> <img class="icon01" src="images/services-icon-01.png" width="305" height="245">
      <aside class="right">
      <h3>Diseño Web</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    </aside>
  </article>
  <!-- SEO -->
  <article class="one-service grey-bg">
    <div class="art-container" id="seo"> <img class="icon02" src="images/services-icon-02.png" width="345" height="264">
      <aside class="left">
      <h3>Posicionamiento Web</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequr. </p>
    </div>
    </aside>
  </article>
  <!-- APP CORP -->
  <article class="one-service white-bg">
    <div class="art-container" id="app-corp"> <img class="icon03" src="images/services-icon-03.png" width="339" height="259">
      <aside class="right">
      <h3>Aplicaciones corporativas</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    </aside>
  </article>
  <!-- APP MOVILES -->
  <article class="one-service grey-bg">
    <div class="art-container" id="app-mov"> <img class="icon04" src="images/services-icon-04.png" width="339" height="259">
      <aside class="left">
      <h3>Aplicaciones corporativas</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    </aside>
  </article>
  <!-- E COMMERCE -->
  <article class="one-service white-bg">
    <div class="art-container" id="e-com"> <img class="icon05" src="images/services-icon-05.png" width="278" height="240">
      <aside class="right">
      <h3>E-commerce</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
    </div>
    </aside>
  </article>
  <!-- SOCIAL MEDIA -->
  <article class="last-service grey-bg">
    <div class="art-container" id="social"> <img class="icon06" src="images/services-icon-06.png" width="387" height="240">
      <aside class="left short">
      <h3>Social Media</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. . </p>
    </div>
    </aside>
  </article>
</section>

<!-- ABOUT -->
<section id="about" class="scrollblock">
  <div id="about-container">
    <h2 class="title1" id="alcanzamos">ACHIEVING GOALS</h2>
    <h2 class="title2" id="enEquipo">through<br>teamwork</h2>
    <img src="images/about-arrow.png" width="57" height="115" id="about-arrow">
    <article id="somosPortsoft">
      <h3>Somos portsoft</h3>
      <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
    </article>
    <div id="bg-gradient"></div>
    <div id="bg-solid"></div>
  </div>
</section>

<!-- CLIENTS -->
<section id="clients" class="scrollblock">
  <header>
    <h2>NUESTROS CLIENTES</h2>
    <p>Hemos tenido el privilegio de trabajar y crecer con una amplia gama de clientes, tanto grandes como pequeños. ¡Queremos que vos seas el próximo!</p>
  </header>
  <div id="clients-content">
    <div class="logo-content"><img src="images/CustomerLogos/logo_11.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_13.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_15.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_17.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_29.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_31.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_33.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_35.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_47.jpg"></div>
    <div class="logo-content"><img src="images/CustomerLogos/logo_49.jpg"></div>
    <div class="logo-content last-logo"><img src="images/CustomerLogos/logo_51.jpg"></div>
  </div>
</section>

<!-- NEWS -->
<section id="news" class="scrollblock">
  <header>
    <h2>TE TRAEMOS LAS ÚLTIMAS NOVEDADES</h2>
    <p>Parte de nuestra trabajo es estar al día con la actualidad que nos rodea, tanto en el ámbito tecnológico, tendencias y hasta interés general..</p>
  </header>
  <div id="news-content"> 
    <!-- COLUMNA 1 -->
    <div class="column">
      <article id="art01"> <img src="images/news-image01.jpg">
        <div class="news-art-container">
          <header>
            <h3>Titular noticia 1</h3>
          </header>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esseorem ipsum dolor sit amet, consectetur adipisicing elit, semodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
        </div>
      </article>
      <article id="art03">
        <div class="news-art-container">
          <header>
            <h3>Titular noticia 1</h3>
          </header>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu</p>
        </div>
      </article>
    </div>
    
    <!-- COLUMNA 2 -->
    <div class="column">
      <article id="art02">
        <div class="news-art-container">
          <header>
            <h3>Titular noticia 1</h3>
          </header>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore euorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esseorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
        </div>
      </article>
      <article id="art04"> <img src="images/news-image02.jpg">
        <div class="news-art-container">
          <header>
            <h3>Titular noticia 1</h3>
          </header>
          <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eurem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseqrem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq</p>
        </div>
      </article>
    </div>
  </div>
</section>
<section id="contact">
  <header>
    <h2>ESTEMOS EN CONTACTO</h2>
    <p>Acá se inicia nuestra relación. Hacenos la consulta que tengas,
      y te estaremos respondiendo en los próximos días.</p>
  </header>
  <div id="contact-content">
    <div id="form-container">
    <div id="form-errors">
        <div class="formError" id="name_error">Ingres&aacute; tu nombre</div>
        <div class="formError" id="mail_error">Ingrese un correo electr&oacute;nico v&aacute;lido.</div>
        <div class="formError" id="msg_error">Hacenos tu comentario o pregunta</div>
        <div id="formSuccess">¡Tu consulta ha sido enviada!</div>
       <div id="formMainError">Se ha producido un error. Int&eacute;ntalo m&aacute;s tarde.</div>

    </div>
      <form name="form" id="form" action="" method="post">
        <input type="text" class="validate[required]" name="name" id="name" value="" placeholder="Nombre*" >
        <input type="text" name="mail" id="mail" value="" placeholder="Correo electrónico*" class="validate[required,custom[email]]">
        <textarea name="msg" id="msg" class="validate[required]" placeholder="Mensaje"></textarea>
        <input type="submit" name="send" id="send" value="Enviar">
      </form>

    </div>
    <div id="data-container">
      <h3>SEGUINOS!</h3>
      <p>Compartimos a diario información de interés<br>
        y te mantenemos al día de nuestros últimos trabajos.</p>
      <div id="fb-btn" class="social-btn-02"><a href="#"></a></div>
      <div id="tw-btn" class="social-btn-02"><a href="#"></a></div>
      <div id="gplus-btn" class="social-btn-02"><a href="#"></a></div>
      <div id="youtube-btn" class="social-btn-02"><a href="#"></a></div>
      <div class="info-container"><img src="images/tel-icon.png">+54 011 4397 4696</div>
      <div class="info-container"><img src="images/mail-icon.png">info@portsoft.com.ar</div>
      <div class="info-container"><img src="images/tag-icon.png">Corrientes 1234, Buenos Aires, Argentina</div>
    </div>
  </div>
</section>
<div id="loading">
<img src="images/loader.gif">
</div>
<footer id="main_footer">
  <div id="footer-content">
    <nav>
      <ul>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">Quienes somos</a></li>
        <li><a href="#clients">Clientes</a></li>
        <li><a href="#ews">Novedades</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
    <div id="year">Portsoft | 2013</div>
  </div>
</footer>

</body>
</html>