<?php $page_name="index" ?>
<!DOCTYPE html>
<html class="no-js">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Refinance Your Mortgage, Low Rates, Fast Service | Greenlight Loans</title>
        <meta name="description" content="Greenlight Loans is a direct-to-consumer mortgage lender known for great personal service, offering custom loans, low rates and fast closing. 866-66-FASTER.">
        <meta name="keywords" content="Financial Services, Custom Loans, Green Light">
        <meta name="viewport" content="width=device-width">
        <link rel="canonical" href="index.php">
        <link rel="shortcut icon" href="favicon.ico">
        <link rel="stylesheet" href="Content/css/home.css" media="all">

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

        
    <!-- Start Header -->
    <header class="hd hidden-xs">
        <div class="container clearfix">
            <div class="row">
                <!-- Logo -->
                <div class="logo-wrap col-sm-3 hidden-xs">
                    <a class="" href="index.php">
                        <img class="img-responsive logo-img" src="Content/img/logos/gll-logo.svg">
                    </a>
                </div>
                <!-- Search-Login-Info -->
                <div class="util-nav col-sm-5 col-md-4 pull-right text-right" role="search">
                    <a class="navbar-link" href="https://greenlightloans.secure-loancenter.com/MyAccount/AccountLogin.aspx">Manage My Loan</a>
                    <span class="divider">&nbsp;|&nbsp;</span>
                    <span class="phone"><strong>1-866-66-<span class="highlight">FASTER</span></strong></span>
                </div>
            </div>
        </div>
    </header>
    <!-- End Header //-->

    
<section class="hero">
    <div class="jumbotron">
        <div class="container">
            <h2 class="hero-title text-center">Great Rates. Fast Service.</h2>
            <div class="offer-wrap">
                <p class="rates-loading-error text-center" style="display: none">Call 866-66-FASTER for our current rates.</p>
                <h3 class="percent-num col-xs-12 text-center">
                    <a href="rates.php"><span id="featuredRatePercentNum"></span><sup class="rate-apr">APR</sup></a>
                </h3>
                <p class="rate-apr-term col-xs-12 text-center">
                    <label id="featuredLoanTerm" class="txt-term"></label>
                    <span><a class="disclosure-cta" id="featuredLoanDisclosure" href="#" data-toggle="tooltip" data-html="true" data-placement="top" title="<b>Disclosures</b>">Disclosures</a></span>
                </p>
            </div>
            <div class="lead-gen theme-color-b mod-hero-cta">
                <h1 class="hero-subtitle text-center">Get your FREE mortgage quote today!</h1>
                <div class="row">
                    <div class="cta-lead-btn col-xs-12 col-sm-6 col-md-6">
                        <button id="btnHomeHeroRefi" type="button" data-toggle="modal" data-target=".lead-gen-form" class="modal-btn-refi btn btn-lg btn-block hidden-xs track-me" data-category="Hero" data-action="Form Open" data-label="Refinance" onclick="populateFormFields('Refi')" role="button">Refinance</button>
                        <a class="modal-btn-refi btn btn-lg btn-block visible-xs track-me" data-category="Hero" data-action="Mobile Entry" data-label="Refinance" role="button">Refinance</a>
                    </div>
                    <div class="cta-lead-btn col-xs-12 col-sm-6 col-md-6">
                        <button id="btnHomeHeroBuy" type="button" data-toggle="modal" data-target=".lead-gen-form" class="modal-btn-buy btn btn-lg btn-block hidden-xs track-me" data-category="Hero" data-action="Form Open" data-label="Buy Home" onclick="populateFormFields('Buy')" role="button">Buy a Home</button>
                        <a class="modal-btn-buy btn btn-lg btn-block visible-xs track-me" data-category="Hero" data-action="Mobile Entry" data-label="Buy Home" role="button">Buy a Home</a>
                    </div>

                    <div class="cta-lead-btn col-xs-12 visible-xs">
                        <a href="tel:186666327837" class="btn btn-lg btn-block track-me" data-category="Hero" data-action="Mobile Call" data-label="Call Now"><i class="fa fa-phone fa-lg"></i> CALL NOW</a>
                    </div>
                </div>
                <i class="sprite arrow-lg cta-arrow"></i>
                <img id="profGo" class="img-responsive blobbert-lg hero-blob animated slideInRight" src="Content/img/blobber/blobbert-lg.png">
                <i class="sprite bubble-lg animated fadeIn">
                    <label class="bubble-text">You've got the <span class="txt-stdout">Greenlight!</span></label>
                </i>
                <i class="clouds sm left animated cloud floatCloudLeft"></i>
                <i class="clouds lg right animated cloud floatCloudRight"></i>
            </div>
        </div>
    </div>
</section>


        
    <!-- Start Global Nav -->
    <div class="nav-wrap navbar navbar-default" role="navigation">
        <div class="container">
            <div class="row">
                <div class="mbl-menu-wrap col-xs-3 col-sm-4">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle visible-xs pull-left" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="visible-xs mbl-btn-menu">Menu</span>
                        </button>
                        <span class="navbar-brand hidden-xs">1-866-66-<span class="text-highlight">FASTER</span></span>
                    </div>
                </div>
                <div class="col-xs-6 visible-xs">
                    <a class="navbar-brand text-center" href="index.php">
                        <img class="img-responsive mbl-logo" src="Content/img/logos/gll-logo.png">
                    </a>
                </div>
                <div class="col-xs-3 visible-xs omega">
                    <a href="tel:186666327837" class="cta-phone pull-right track-me" data-category="Section Navbar" data-action="Mobile Phone Call" data-label="1-866-66-FASTER">
                        <i class="fa fa-phone fa-3x"></i>
                    </a>
                </div>
                <div class="col-xs-12 col-sm-8 collapse navbar-collapse alpha omega pull-right">
                    <ul class="nav navbar-nav">
                    <li class="item"><a href="refinancing.php">Refinancing</a></li>
                    <li class="item"><a href="buying.php">Buying</a></li>
                    <li class="item"><a href="rates.php">Rates</a></li>
                    <li class="item"><a href="calculator.php">Calculator</a></li>
                    <li class="item"><a href="about.php">About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End Global Nav //-->

    <!-- Start Content -->
    <div class="main" role="main">
        




<section class="why-greenlight">
  <div class="container">
 
      <div class="row">
          <div class="col-md-12 text-center">
             <h2 class="title">Why Greenlight Loans is a <br class="hidden-subpage">Brighter Choice</h2>
          </div>
      </div>    
        
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="row">
               <div class="col-xs-4 col-sm-12 col-md-12">
                <img class="icon-circle img-responsive icon" src="Content/img/icons/icon-better.gif">
               </div>
               <div class="col-xs-8 col-sm-12 col-md-12">
                <h4 class="sub-title">Customized Loans</h4>
                <p class="hidden-xs copy">We listen to your specific needs, assess which of several loan options may be best to help you, and with the use of leading technology, we personalize several mortgage options for you in real-time. Count on us to offer the very best rates and options for your needs.</p>
               </div>
            </div>        
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="row">
             <div class="col-xs-4 col-sm-12 col-md-12">
              <img class="icon-circle img-responsive icon" src="Content/img/icons/icon-faster.gif">
              </div>
              <div class="col-xs-8 col-sm-12 col-md-12">
               <h4 class="sub-title">Faster Service</h4>
                <p class="hidden-xs copy">Our technology allows us to pre-qualify you for a loan the same day we speak with you and provide you secure access to your mortgage documents for your online signature. This enables us to close loans in as quickly as 30 days. That's the Speed of Greenlight!</p>
              </div>        
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-4">
            <div class="row">
             <div class="col-xs-4 col-sm-12 col-md-12">
              <img class="icon-circle img-responsive icon" src="Content/img/icons/icon-face-male.gif">
             </div>
              <div class="col-xs-8 col-sm-12 col-md-12">
                <h4 class="sub-title">Personal Attention</h4>
                <p class="hidden-xs copy">You deserve great personal service. You'll have a dedicated Mortgage Professional at your side every step of the way to make the process smooth for you and answer all your questions. We invite you to read what <a href="about.php#quotes">our customers say</a> about their Greenlight Loans experience.</p>
              </div>
            </div>
          </div>

      <div class="row visible-lg">
        <div class="col-md-2 col-md-offset-10">
          <i class="sprite blobbert-md"></i>
        </div>
      </div>

  </div>
</section>


<section class="calc-wrap">
  <div class="container">
      <div class="row">
          <div class="hidden-xs col-sm-2 col-md-1">
              <i class="sprite calc"></i>
          </div>
          <div class="visible-xs col-xs-12">
              <h3 class="sub-title">Calculator</h3>
          </div>
          <div class="col-xs-12 col-sm-7 col-md-8">
              <h2 class="title">What will my payment be?</h2>
              <h3 class="sub-title hidden-xs">Use our Helpful Calculator</h3>
          </div>
          <div class="col-xs-12 col-sm-3 col-md-3">
              <div class="calc-cta">
                  <a class="btn btn-cta btn-lg btn-block track-me" href="calculator.php" data-category="Module" data-action="Go to Calculator" data-label="What will my payment be?" role="button">Use Calculator</a>
              </div>
          </div>
      </div>
  </div>
</section>



<section class="featured-loans">
  <div class="container">
    <div class="row">        
        <div class="col-xs-12 col-md-8 col-md-offset-2">
            <h2 class="title text-center">The Right Mortgage<br>Solution for You</h2>
            <p class="lead text-center hidden-xs">Our Mortgage Professionals pride themselves on listening to your specific needs so they can customize the best loan solutions for you.  After all, no two people or financial situations are alike! There are many options available to you:</p>
        </div>
    </div>
    <div class="row">
    <div class="col-md-8 col-md-offset-2">
      <div class="row">
        <!-- Nav tabs -->
        <ul id="mortgageTabs" class="nav nav-tabs text-center">
          <li class="col-xs-12 col-md-3 active"><a href="#fixed" data-toggle="tab">FIXED/ARM</a></li>
          <li class="col-xs-12 col-md-3"><a href="#fha" data-toggle="tab">FHA</a></li>
          <li class="col-xs-12 col-md-3"><a href="#harp" data-toggle="tab">HARP</a></li>
          <li class="col-xs-12 col-md-3"><a href="#purchase" data-toggle="tab">PURCHASE</a></li>
        </ul>
      </div>
        <!-- Tab panes -->
          <div class="tab-content">
              <div class="tab-pane fade clearfix in active" id="fixed">
                  <div class="triangle pos-1"></div>
                                <ul class="no-bullets text-left pull-left">
                                    <li><i class="fa fa-check"></i> Lower your interest rate</li>
                                    <li><i class="fa fa-check"></i> Lower your monthly payment</li>
                                    <li><i class="fa fa-check"></i> Take out cash</li>
                                    <li><i class="fa fa-check"></i> Shorten your term & save interest</li>
                                </ul> 
              </div>
              <div class="tab-pane fade clearfix" id="fha">
                    <div class="triangle pos-2"></div>
                                <ul class="no-bullets text-left pull-left">
                                    <li><i class="fa fa-check"></i> Less-than-perfect credit OK</li>
                                    <li><i class="fa fa-check"></i> Lower equity required for refinancing</li>
                                    <li><i class="fa fa-check"></i> Flexible down payment options</li>
                                    <li><i class="fa fa-check"></i> Your down payment can be a gift</li>
                                </ul>  
              </div>
              <div class="tab-pane fade clearfix" id="harp">
                  <div class="triangle pos-3"></div>
                                <ul class="no-bullets text-left pull-left">
                                      <li><i class="fa fa-check"></i> Lower your payment and/or shorten your term</li>
                                      <li><i class="fa fa-check"></i> Little or no equity needed to qualify</li>
                                      <li><i class="fa fa-check"></i> More lenient underwriting</li>
                                      <li><i class="fa fa-check"></i> In most cases, no appraisal needed</li>
                                </ul>  
              </div>
             <div class="tab-pane fade clearfix" id="purchase">
                  <div class="triangle pos-4"></div>
                                <ul class="no-bullets text-left pull-left">
                                      <li><i class="fa fa-check"></i> Get same-day pre-qualification letter, free</li>
                                      <li><i class="fa fa-check"></i> Many loan types and terms available</li>
                                      <li><i class="fa fa-check"></i> Access to bank-owned homes for sale</li>
                                      <li><i class="fa fa-check"></i> Flexible financing solutions for home purchase</li>
                                      <li><i class="fa fa-check"></i> Close your loan ON TIME, ON SCHEDULE</li>
                                </ul>  
             </div>
         </div>
    </div>
    </div><!-- /.row -->
  </div><!-- /.container -->
</section><!-- /.featured-rates -->
	<?php include_once 'free_quote.php'; ?>
    </div>
    <!-- End Content //-->

  <?php 
  require_once 'modal.php';
  require_once 'footer.php'; 
  
  ?>  

