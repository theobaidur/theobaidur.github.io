<?php 
$page_name = 'buying';
require_once 'header.php';
?>
    <!-- Start Content -->
    <div class="main" role="main">
        


<div class="buy">

    
<!-- Start Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        

        <li><a href="index.php" title="Home">Home</a></li>
        

    <li class="active">Buying</li>

    </ol>
</div>
<!-- End Breadcrumb //-->

    

<!-- Start Interior Hero -->
<section class="hero-interior">
<div class="container">
<div class="row hero-pad">
    
    <!-- Left Column -->
    <section class="lft-content col-sm-7 col-md-8">
        <h1 class="title">
We can pre-qualify your purchase mortgage in minutes. BRILLIANT!        </h1>
        <div class="rate-wrap">
            <p class="rates-loading-error" style="display: none">Call 866-66-FASTER for our current rates.</p>
            <h2 class="interest-rate">
                <a href="rates.php">
                        <span class="buy apr-val"></span>
                    <sup class="rate-apr">APR</sup>
                </a>
            </h2>
            <p class="loan-desc"><span class="loan-desc-val"></span> 

                        <a class="disclosure-cta" id="buyDisclosure" href="#" data-toggle="tooltip" data-html="true" data-placement="top" title="<b>Disclosures</b>">Disclosures</a>
                </p>
        </div>
        <p class="lead hidden-xs">
In today&#39;s busy real estate market, timing&#39;s everything. You&#39;ve got to be able to move quickly. And that&#39;s why Greenlight Loans is your perfect solution for a purchase mortgage. Thanks to leading technology we can provide you a Pre-Qualification letter in minutes... help you lock in a highly competitive rate... provide online documents for e-signature.... and close your loan ON TIME, getting you in your home fast. That&#39;s buying a home at the Speed of Greenlight, ladies and gentlemen!        </p>

        <p class="txt-talk-to-pro hidden-xs">Talk to a Mortgage Professional to get your free quote&nbsp;today! <img class="arrow" src="Content/img/icons/arrow-righ-long.png"></p>
  
    </section>
    
    <!-- Right Column -->
    <aside class="rgt-content col-sm-5 col-md-4">
      
        <div class="int-hero-form">
            <div class="hero-form-hd">
                <h3 class="hero-form-title text-center">
Get Pre-Qualified                </h3>
                <p class="hero-form-subtitle text-center">Lock in Your Rate Today</p>
            </div>
            <div class="hero-form-bd">
                <form id="intRightRailLeadForm" role="form">
                    <div class="form-group">
                        <label class="lbl-title" for="ddlLoanType">Loan Type:</label>
                        <select id="ddlLoanType" class="select-ddl form-control" name="ddlLoanType" title="Loan type is required." tabindex="1" required="">
                            <option value="">Select One
                                <option value="refinance">Refinance
                                <option value="cashout">Cash Out Refinance
                                <option value="purchase" selected="selected">Purchase
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="lbl-title" for="ddlHomeType">Home Type:</label>
                        <select id="ddlHomeType" class="select-ddl form-control" name="ddlHomeType" title="Home type is required." tabindex="10" required="">
                            <option value="">Select One
                            <option value="singlefamily">Single Family Home
                            <option value="condo">Condo
                            <option value="townhouse">Townhouse
                            <option value="multifamily">Multi Family Home
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="lbl-title" for="ddlPropState">Property State:</label>
                        <select tabindex="20" class="select-ddl form-control" id="ddlPropState" name="ddlPropState" title="Property state is required." tabindex="20" required="">
                          <option value="">Select One
                          <option value="AL">Alabama
                          <option value="AZ">Arizona
                          <option value="AR">Arkansas
                          <option value="CA">California
                          <option value="CO">Colorado
                          <option value="CT">Connecticut
                          <option value="DE">Delaware
                          <option value="DC">District of Columbia
                          <option value="FL">Florida
                          <option value="GA">Georgia
                          <option value="ID">Idaho
                          <option value="IL">Illinois
                          <option value="IN">Indiana
                          <option value="IA">Iowa
                          <option value="KS">Kansas
                          <option value="KY">Kentucky
                          <option value="LA">Louisiana
                          <option value="ME">Maine
                          <option value="MD">Maryland
                          <option value="MA">Massachusetts
                          <option value="MI">Michigan
                          <option value="MN">Minnesota
                          <option value="MS">Mississippi
                          <option value="MO">Missouri
                          <option value="MT">Montana
                          <option value="NE">Nebraska
                          <option value="NV">Nevada
                          <option value="NH">New Hampshire
                          <option value="NM">New Mexico
                          <option value="NJ">New Jersey
                          <option value="NY">New York
                          <option value="NC">North Carolina
                          <option value="ND">North Dakota
                          <option value="OH">Ohio
                          <option value="OK">Oklahoma
                          <option value="OR">Oregon
                          <option value="PA">Pennsylvania
                          <option value="RI">Rhode Island
                          <option value="SC">South Carolina
                          <option value="SD">South Dakota
                          <option value="TN">Tennessee
                          <option value="TX">Texas
                          <option value="UT">Utah
                          <option value="VT">Vermont
                          <option value="VA">Virginia
                          <option value="WA">Washington
                          <option value="WV">West Virginia
                          <option value="WI">Wisconsin
                          <option value="WY">Wyoming
                        </select>
                    </div>
                    <div class="form-group">
                        <button id="btnGetFreeQuote" class="hero-btn-int btn-cta btn btn-lg btn-block hidden-xs track-me" data-category="QuoteAside" data-action="Form Open" data-label="Get Free Quote" type="button" role="button" tabindex="30">Get a Free Quote</button>
                            <button id="btnMblFreeQuoteRefi" class="hero-btn-int btn-cta btn btn-lg btn-block visible-xs track-me" data-category="QuoteAside" data-action="Mobile Entry" data-label="Get Free Quote" type="button" role="button" onclick="mobileQuoteRedirect('buy')" tabindex="30">Get a Free Quote</button>
                        <p class="txt-or-call text-center">Or Call <span><span class="ph-num"><strong>1-866-66-<span class="txt-stdout">FASTER</span></strong></span></span></p>
                        <p class="txt-sucure-info text-center"><i class="fa fa-lock fa-1"></i> Your information is secure</p>
                    </div>
                </form>
            </div>
        </div>

    </aside>

</div>
</div>
</section>
<!-- End Interior Hero //-->

    
<section class="top-5 buy">
  <div class="container">

    <h2 class="title">HOW GREENLIGHT LOANS CAN HELP YOU BUY A HOME</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-7">

        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                  <span class="badge pull-left">1</span><span class="title-text">GET PRE-QUALIFIED FASTER</span>
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse">
              <div class="panel-body">
                 <p>In today's competitive home-buying market, you need that pre-qualification letter in hand in order to make an offer. Call us at 1-866-66-FASTER and we can provide that letter in minutes. Don't wait — get ready to go home-shopping!</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                 <span class="badge pull-left">2</span><span class="title-text">GET TERMS THAT ARE RIGHT FOR YOU</span>
                </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse">
              <div class="panel-body">
               <p>Greenlight Loans offers an array of loan options, fixed or adjustable, short or long-term, to fit the needs of your budget and your plans for the future. Let's talk — we'll help you choose the right loan package for your purchase needs.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                  <span class="badge pull-left">3</span><span class="title-text">CLOSE YOUR LOAN ON TIME</span>
                </a>
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse">
              <div class="panel-body">
                <p>Why risk losing out on a home buying deal because of slow underwriting? With our streamlined technology, we can move your purchase financing seamlessly and close your loan ON TIME. So if you need to close your transaction fast, we can make it happen, giving you the peace of mind you deserve.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                  <span class="badge pull-left">4</span><span class="title-text">WE CAN HELP YOU FIND A HOME, TOO</span>
                </a>
              </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse">
              <div class="panel-body">
               <p>As a member of the Nationstar Mortgage family, Greenlight Loans has valuable relationships that can help you identify and purchase homes:</p>
               <p>We're a preferred lender of Freddie Mac's <a class="link" href="//www.homesteps.com/">homesteps.com</a> and Fannie Mae's <a class="link" href="//www.homepath.com/">homepath.com</a>. Both of these programs help home buyers find and purchase REO (bank-owned) properties with a low down payment (which can be in the form of a gift). What's more, these programs do not require a property appraisal or private mortgage insurance.</p>
               <p>Greenlight Loans is a designated lender for the online property auction website, <a class="link" href="//www.homesearch.com/">HomeSearch.com</a>, which makes it easy for you to search for REO and Short Sale listings and place bids on these listings during their live auction dates.</p>
               <p>We also feature a <a class="link" href="https://myaffinityservices.com/hpr" target="new">Home Purchase Rewards Program</a> that offers you a Cash Reward bonus of up to $3,100 after closing in return for working with one of the program's qualified Real Estate agents.</p>              
               <p>Learn more about these programs at their websites — and we'll help you with the purchase mortgage! </p>
              </div>
            </div>
          </div>
          
      </div>

    </div>
  </div>
  </div>
</section>


    

<section class="featured-loans">
  <div class="container">
      <div class="row">        
              <div class="col-md-12">
                  <h2 class="title">OUR PURCHASE MORTGAGES</h2>
              </div>
          </div>
          <div class="row buy-loans">
          <div class="col-md-12">
            <div class="row">
              <!-- Nav tabs -->
              <ul id="mortgageTabs" class="nav nav-tabs text-center">
                <li class="col-xs-12 col-md-4 active"><a href="#fixed" data-toggle="tab"><h3 class="sub-title">FIXED Rate</h3>Conventional Mortgages</a></li>
                <li class="col-xs-12 col-md-4"><a href="#arm" data-toggle="tab"><h3 class="sub-title">ARM Loans</h3>Adjustable Rate Mortgages</a></li>
                <li class="col-xs-12 col-md-4"><a href="#fha" data-toggle="tab"><h3 class="sub-title">FHA Loans</h3>Federal Housing Administration</a></li>
              </ul>
            </div>
              <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane fade clearfix in active" id="fixed">
                        <div class="triangle pos-1"></div>
                           <h2 class="sub-title">FIXED-RATE</h2>                     
                           <p class="lead">If you're planning to stay in your new home for many years and prefer to have the peace of mind of a rate and monthly payment that never changes, one of our fixed rate and payment products could be perfect for you.  With rates still at historic lows, the 30-year mortgage remains one of our most popular loans.</p>

                    </div>
                    <div class="tab-pane fade clearfix" id="arm">
                          <div class="triangle pos-2"></div>
                          <h2 class="sub-title">ARMS (Adjustable Rate Mortgages)</h2>
                          <p class="lead">Our ARMs are great solutions to give you a particularly low interest rate for the short term. If you think you'll be in your new home for just a couple of years, or are simply budgeting for a low monthly payment, an ARM loan could be a great solution for you. As an example, a 5/1 ARM has a 30-year term with a low FIXED rate and payment for the first 5 years. After that, the rate and payment may adjust once per year for the remainder of the term.</p>
                    </div>
                   <div class="tab-pane fade clearfix" id="fha">
                        <div class="triangle pos-3"></div>
                           <h2 class="sub-title">FHA LOANS</h2>                     
                           <p class="lead">An FHA (Federal Housing Administration) loan is a great solution for people whose credit history may not qualify them for conventional 30-year loans. Our FHA loans make it possible for you to purchase your dream home with flexible down payment options (and this payment can be in the form of a gift).</p>
                              
                   </div>
               </div>
          </div>
          </div><!-- /.row -->
  </div><!-- /.container -->
</section><!-- /.featured-rates -->


    <section class="rates-calc">
  <div class="container">
    <div class="row">
      <div class="col-sm-6">
        <a href="rates.php" class="clearfix track-me" data-category="Module" data-action="Go to Rates" data-label="See our featured rates">
          <img class="img-responsive pull-left hidden-xs" src="Content/img/icons/icon-rates.png">
          <h4 class="title">SEE OUR FEATURED RATES</h4>
          <p class="text-link">Save with our low rates »</p>
        </a>
      </div>
      <div class="col-sm-6">
        <a href="calculator.php" class="clearfix track-me" data-category="Module" data-action="Go to Calculator" data-label="What Will My Payment Be?">
          <img class="img-responsive pull-left hidden-xs" src="Content/img/icons/icon-calc.png">
          <h4 class="title">What Will My Payment Be?</h4>
          <p class="text-link">Use our Helpful Calculator »</p>
        </a>
      </div>
    </div>  
  </div>
</section> 

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

    




<?php include_once 'free_quote.php'; ?>


</div>
    </div>
    <!-- End Content //-->

    

    
<?php 
include_once 'modal.php';
include_once 'footer.php';
?>