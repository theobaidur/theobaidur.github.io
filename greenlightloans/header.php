<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>
        	<?php 
        	$cssFile = 'global.css';
        	switch ($page_name) {
				case 'about':
					echo "Mortgage refinancing with great customer service | Greenlight Loans";
					break;
				case 'refinancing':
					echo "Refinance with ARM, FHA and HARP lower yr payment | Greenlight Loans";
					break;
				case 'buying':
					echo "Prequalify for purchase mortgage, get low rates | Greenlight Loans";
					break;
				case 'rates':
					echo "Today&#39;s low rate mortgages, fixed, ARM, FHA, HARP | Greenlight Loans";
					break;
				case 'calculator':
					echo "Calculate monthly mortgage payment and amortization | Greenlight Loans";
					break;
				case 'disclosures':
					echo "Disclosures | Greenlight Loans";
					break;
				case 'privacy':
					echo "Privacy | Greenlight Loans";
					break;
				case 'licensing':
					echo "Licensing | Greenlight Loans";
					break;				
				default:
					echo "Greenlight Loans";
					break;
			}
        ?>

        </title>
        <meta name="description" content="Greenlight Loans leading technology enables us to provide superior personal service: custom loans, low rates and fast closings. Read our customer testimonials.">
        <meta name="keywords" content="Superior Personal Service, Customer Testimonials">
        <meta name="viewport" content="width=device-width">
        <link rel="canonical" href="about.php">
        <link rel="shortcut icon" href="favicon.ico">
        <?php 
        	$cssFile = 'global.css';
        	switch ($page_name) {
				case 'about':
					$cssFile = 'about.css';
					break;
				case 'refinancing':
					$cssFile='refi.css';
					break;
				case 'buying':
					$cssFile='buying.css';
					break;
				case 'rates':
					$cssFile='rates.css';
					break;
				case 'calculator':
					$cssFile='calc.css';
					break;
				case 'disclosures':
				case 'privacy':
				case 'licensing':
					$cssFile='global.css';
					break;				
				default:
					
					break;
			}
        ?>
        <link rel="stylesheet" href="Content/css/<?php echo $cssFile ?>" media="all">

        <!--[if (lt IE 10) & (!IEMobile)]>
        <link rel="stylesheet" href="/Content/css/ie.css" media="all">
        <![endif]-->

        <script src="//use.typekit.net/mnj6ygb.js"></script>
        <script>try { Typekit.load(); } catch (e) { }</script>
        <script src="bundles/modernizr.?v=c1ivlke9ly2d5BnQoP-W7l-4lA2BkZB9V5pCwh3NfMs1"></script>


        <!-- Start Google Analytics -->
        <script>
            (function (i, s, o, g, r, a, m) {
                i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                    (i[r].q = i[r].q || []).push(arguments)
                }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
            })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

            ga('create', 'UA-48436999-1', 'greenlightloans.com', { 'cookieDomain': 'none' });
            ga('send', 'pageview');

        </script>
        <!-- End Google Analytics //-->

</head>
<body>
    
    <!--[if lt IE 9]>
        <p class="browsehappy">We noticed you are using an <strong>outdated</strong> browser. Please <a class="link" href="http://browsehappy.com/">upgrade your browser</a> to improve your overall browsing experience.</p>
    <![endif]-->

            <!-- Start Header/Navigation -->
    <header class="hd interior col-xs-12">
       <div class="container">
          <div class="row">
                <!-- Navigation -->
                <div class="nav-wrap navbar navbar-default col-xs-12" role="navigation">
                    <div class="mbl-menu-wrap col-xs-3 col-sm-3">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle visible-xs" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="visible-xs mbl-btn-menu">Menu</span>
                            </button>
                            <a class="hidden-xs" href="index.php">
                                <img class="img-responsive logo-img" src="Content/img/logos/gll-logo.svg">
                            </a>
                        </div>
                    </div>

                    <div class="col-xs-6 visible-xs">
                        <a class="navbar-brand text-center" href="index.php">
                            <img class="img-responsive mbl-logo" src="Content/img/logos/gll-logo.png">
                        </a>
                    </div>
                    <div class="col-xs-3 visible-xs omega">
                        <a id="mblCampPhoneNum" class="cta-phone pull-right" href="tel:186666327837">
                            <i class="fa fa-phone fa-3x"></i>
                        </a>
                    </div>

                    <div class="col-xs-12 col-sm-9 collapse navbar-collapse pull-right">        
                        <div class="phone-wrap col-xs-12 text-right hidden-xs">
                          <span class="navbar-phone hidden-xs"><i class="fa fa-phone fa-lg"></i> <span id="campPhoneNum">1-866-66-FASTER</span></span>
                        </div>    
                        <ul class="nav navbar-nav">
                          <li class="item <?php if($page_name=='refinancing'){echo "active";} ?>"><a href="refinancing.php">Refinancing</a></li>
                          <li class="item <?php if($page_name=='buying'){echo "active";} ?>"><a href="buying.php">Buying</a></li>
                          <li class="item <?php if($page_name=='rates'){echo "active";} ?>"><a href="rates.php">Rates</a></li>
                          <li class="item <?php if($page_name=='calculator'){echo "active";} ?>"><a href="calculator.php">Calculator</a></li>
                          <li class="item <?php if($page_name=='about'){echo "active";} ?>"><a href="about.php">About Us</a></li>
                        </ul>
                    </div>
               </div>
          </div>
       </div>
    </header>
    <!-- End Header/Navigation //-->

    