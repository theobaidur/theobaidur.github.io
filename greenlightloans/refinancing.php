<?php 
$page_name = "refinancing";
require_once 'header.php';
?>    
    <!-- Start Content -->
    <div class="main" role="main">
        


<div class="refi">
    
    
<!-- Start Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        

        <li><a href="index.php" title="Home">Home</a></li>
        

    <li class="active">Refinancing</li>

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
Lower your rate with a faster closing. A BRIGHTER WAY TO REFI!        </h1>
        <div class="rate-wrap">
            <p class="rates-loading-error" style="display: none">Call 866-66-FASTER for our current rates.</p>
            <h2 class="interest-rate">
                <a href="rates.php">
                        <span class="refi apr-val"></span>
                    <sup class="rate-apr">APR</sup>
                </a>
            </h2>
            <p class="loan-desc"><span class="loan-desc-val"></span> 

                        <a class="disclosure-cta" id="refiDisclosure" href="#" data-toggle="tooltip" data-html="true" data-placement="top" title="<b>Disclosures</b>">Disclosures</a>
                </p>
        </div>
        <p class="lead hidden-xs">
Want to lower your monthly payment? Take out cash from your equity? Shorten the term of your loan? Greenlight Loans has a wide array of refinancing options to offer you. And let&#39;s talk about speed. Day One: we can provide paperless loan documents for your online signature. And as quickly as Day 30 your loan can be closed — that&#39;s refinancing at the Speed of Greenlight!        </p>

        <p class="txt-talk-to-pro hidden-xs">Talk to a Mortgage Professional to get your free quote&nbsp;today! <img class="arrow" src="Content/img/icons/arrow-righ-long.png"></p>
  
    </section>
    
    <!-- Right Column -->
    <aside class="rgt-content col-sm-5 col-md-4">
      
        <div class="int-hero-form">
            <div class="hero-form-hd">
                <h3 class="hero-form-title text-center">
Get a FREE quote                </h3>
                <p class="hero-form-subtitle text-center">Lock in Your Rate Today</p>
            </div>
            <div class="hero-form-bd">
                <form id="intRightRailLeadForm" role="form">
                    <div class="form-group">
                        <label class="lbl-title" for="ddlLoanType">Loan Type:</label>
                        <select id="ddlLoanType" class="select-ddl form-control" name="ddlLoanType" title="Loan type is required." tabindex="1" required="">
                            <option value="">Select One
                                <option value="refinance" selected="selected">Refinance
                                <option value="cashout">Cash Out Refinance
                                <option value="purchase">Purchase
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
                            <button id="btnMblFreeQuoteBuy" class="hero-btn-int btn-cta btn btn-lg btn-block visible-xs track-me" data-category="QuoteAside" data-action="Mobile Entry" data-label="Get Free Quote" type="button" role="button" onclick="mobileQuoteRedirect('refi')" tabindex="30">Get a Free Quote</button>
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

    
<section class="top-5 refi">
  <div class="container">

    <h2 class="title">HOW CAN REFINANCING HELP YOU? LET'S SHINE LIGHT ON IT.</h2>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-7">

        <div class="panel-group" id="accordion">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                  <span class="badge pull-left">1</span><span class="title-text">GET CASH TO SPEND HOW YOU WISH</span>
                </a>
              </h4>
            </div>
            <div id="collapseOne" class="panel-collapse collapse">
              <div class="panel-body">
               <p>A cash-out refi lets you tap into the equity your home has earned. Use cash for anything you want: make home improvements for you to enjoy while increasing the value of your home. Pay off high-interest credit cards, tuition bills, take a special vacation — whatever you want to do.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                 <span class="badge pull-left">2</span><span class="title-text">LOWER YOUR MONTHLY PAYMENT AMOUNT</span>
                </a>
              </h4>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse">
              <div class="panel-body">
               <p>With mortgage interest rates still at historic lows, there's no better time than right now to refinance and lower your monthly out-of-pocket payment. Why pay more than you have to? Use our <a class="link" href="calculator.php">calculator to compare rates and terms</a>, and see how they will affect your monthly bill. </p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                  <span class="badge pull-left">3</span><span class="title-text">SWITCH TO THE PREDICTABILITY OF A FIXED LOAN</span>
                </a>
              </h4>
            </div>
            <div id="collapseThree" class="panel-collapse collapse">
              <div class="panel-body">
               <p>If you currently have an ARM (adjustable rate mortgage) loan, protect yourself from an annual rise in mortgage payment by switching to a fixed rate. Our most popular is the 30-year fixed loan, which guarantees a stable rate and payment for the long term. We have many options to choose from — apply now and we'll customize the best options for your situation.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                  <span class="badge pull-left">4</span><span class="title-text">SAVE ON INTEREST PAYMENTS WITH A SHORTER TERM</span>
                </a>
              </h4>
            </div>
            <div id="collapseFour" class="panel-collapse collapse">
              <div class="panel-body">
                <p>With today's low rates, it's easier than you think to pay off your mortgage sooner, saving you potentially thousands of dollars on interest payments over the long term. Homeowners with several years left to pay on their 30-year or even 20-year loan may benefit from this option.</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                  <span class="badge pull-left">5</span><span class="title-text">CONSOLIDATE DEBT AND GET IT UNDER CONTROL</span>
                </a>
              </h4>
            </div>
            <div id="collapseFive" class="panel-collapse collapse">
              <div class="panel-body">
               <p>Are you carrying high-interest credit card debt? Consolidate your mortgage and all that other debt into one monthly bill at a low interest rate. This simple move could save you thousands in interest. And unlike credit card debt, mortgage interest is often tax-deductible (discuss your situation with a tax professional).</p>
              </div>
            </div>
          </div>
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix">
                  <span class="badge pull-left">6</span><span class="title-text">GET FINANCIAL RELIEF EVEN WITH NO HOME EQUITY</span>
                </a>
              </h4>
            </div>
            <div id="collapseSix" class="panel-collapse collapse">
              <div class="panel-body">
               <p>Greenlight Loans offers Government-sponsored HARP Loans that enable homeowners who have lost equity to refinance at today's low rates. The underwriting is lenient, and in most cases no new appraisal or mortgage insurance is required.</p>
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
                  <h2 class="title">OUR REFINANCE LOANS</h2>
              </div>
          </div>
          <div class="row refi-loans">
          <div class="col-md-12">
            <div class="row">
              <!-- Nav tabs -->
              <ul id="mortgageTabs" class="nav nav-tabs text-center">
                <li class="col-xs-12 col-md-4 active"><a href="#fixed" data-toggle="tab"><h3 class="sub-title">FIXED and ARM</h3>Fixed and Adjustable Rate Mortgages</a></li>
                <li class="col-xs-12 col-md-4"><a href="#fha" data-toggle="tab"><h3 class="sub-title">FHA Loans</h3>Federal Housing Administration</a></li>
                <li class="col-xs-12 col-md-4"><a href="#harp" data-toggle="tab"><h3 class="sub-title">HARP Loan</h3>Home Affordable Refinance Program</a></li>
              </ul>
            </div>
              <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane fade clearfix in active" id="fixed">
                        <div class="triangle pos-1"></div>
                                      <h2 class="sub-title">FIXED RATE LOANS</h2>
                                      <p class="lead">If you're planning to stay in your home for many years and prefer to have the peace of mind of a rate and monthly payment that never changes, one of our fixed rate and payment products could be perfect for you. With rates still at historic lows, the 30-year mortgage remains one of our most popular loans.</p>
                                      <h2 class="sub-title">ARMs (Adjustable Rate Mortgages)</h2>
                                      <p class="lead">Our ARMs are great solutions to give you a particularly low interest rate for the short term. If you're planning on moving in a couple of years or just want the relief of a lower monthly payment, an ARM loan could be a great solution for you. As an example, a 5/1 ARM has a 30-year term with a FIXED rate and payment for the first 5 years. After that, the rate and payment may adjust once per year for the remainder of the term.</p>
                    </div>
                    <div class="tab-pane fade clearfix" id="fha">
                          <div class="triangle pos-2"></div>
                                      <h2 class="sub-title">FHA LOANS</h2>
                                      <p class="lead">An FHA (Federal Housing Administration) loan is a great solution for people whose credit history may not qualify them for conventional 30-year loans. It's also a good refinancing solution for those with less than 20% equity in their home. We offer different FHA Loan options, such as the security of a fixed rate and payment or a 5/1 adjustable rate mortgage.</p>
                                      <h2 class="sub-title">STREAMLINE FHA</h2>
                                      <p class="lead">Do you already have an FHA first mortgage on your home? You can take advantage of our Streamline FHA refinance that can bring you a lower rate and monthly payment, even if you owe more on your current mortgage than the home's current market value. With no appraisal required in most cases, lower credit requirements, and limited documentation needed, our Streamline FHA can be the easiest way for you to reduce your monthly mortgage payment.</p>
                    </div>
                   <div class="tab-pane fade clearfix" id="harp">
                        <div class="triangle pos-3"></div>
                                      <h2 class="sub-title">HARP Loans</h2>
                                      <p class="lead">The Federal Government's HARP program (Home Affordable Refinance Program) has been helping homeowners all across the country whose mortgage balance exceeds their home's value, enabling them to refinance into today's low interest rates. If you have little or no equity in your home, our HARP loan may help you to lower your monthly payment and/or shorten your loan term.</p>
                                      <p class="lead">In many cases, no new appraisal is needed nor is mortgage insurance (if none is in place on your current mortgage), so the underwriting process is fast.</p>
                                      <p class="lead">The guidelines are pretty simple: If your current loan was originated before June 1, 2009, is owned by Fannie Mae or Freddie Mac, and you've continued to make your monthly payments, you may qualify for a HARP loan.  You can determine whether your mortgage is owned by either Freddie Mac or Fannie Mae by checking the following websites:  <a href="//www.freddiemac.com/mymortgage" class="text-link" target="new">www.freddiemac.com/mymortgage</a> or <a href="//www.knowyouroptions.com/loanlookup" class="text-link" target="new">www.knowyouroptions.com/loanlookup</a></p>
                                      <p class="lead">You've been doing the right thing, honoring your monthly commitment. Our HARP Loans can do right by you, with a fast and easy refinancing solution.</p>
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