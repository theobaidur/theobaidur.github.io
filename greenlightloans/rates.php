<?php 
$page_name = "rates";
require_once 'header.php';
?>
    <!-- Start Content -->
    <div class="main" role="main">
        


<div class="rates">

    
<!-- Start Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        

        <li><a href="index.php" title="Home">Home</a></li>
        

    <li class="active">Rates</li>

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
We&#39;ve Got The Rates You&#39;ve Been Looking For.        </h1>
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
Mortgage interest rates can change daily, but at Greenlight Loans we promise one thing will never change: our ability to find and lock in the best possible mortgage solution to cater to YOUR needs and specific situation.<br><br>
Remember, low interest rates can&#39;t last forever. So get in touch now using the form to the right or give us a call! We&#39;re ready to help, and always without obligation.        </p>

        <p class="txt-talk-to-pro hidden-xs">Talk to a Mortgage Professional to get your free quote&nbsp;today! <img class="arrow" src="Content/img/icons/arrow-righ-long.png"></p>
        <div class="row">
          <div class="col-md-12 visible-xs">
              <a id="btnMblFreeQuote" class="modal-btn-refi btn-cta btn btn-lg btn-block visible-xs track-me" data-category="Form" data-action="Mobile Entry" data-label="Get a Free Quote" role="button">Get a Free Quote</a>
          </div>
        </div>
  
    </section>
    
    <!-- Right Column -->
    <aside class="rgt-content col-sm-5 col-md-4">
      
        <div class="int-hero-form">
            <div class="hero-form-hd">
                <h3 class="hero-form-title text-center">
Get a FREE Quote                </h3>
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

     
<section class="rates-table">
  <div class="container">
    
      <h2 class="title">Loan Purpose</h2>

      <div class="row loan-purpose">
        <!-- Refi Nav Nav tabs -->
        <ul id="ratesTabs" class="nav nav-tabs text-center">
          <li class="col-xs-12 col-sm-6 col-md-3 active"><a href="#refiRates" data-toggle="tab">Refinance</a></li>
          <li class="col-xs-12 col-sm-6 col-md-3"><a href="#buyRates" data-toggle="tab">Purchase</a></li>
        </ul>
      </div>
      <div class="tab-content">
      <div id="refiRates" class="refi-rates tab-pane fade clearfix in active">

        <h2 class="title">Refinance Rates</h2>
        <div class="row">
                  <div class="col-md-12">

                    <div class="row">
                      <!-- Refi Nav Nav tabs -->
                      <ul id="refiRatesTabs" class="nav nav-tabs text-center">
                        <li class="col-xs-12 col-sm-3 col-md-3 active"><a href="#refiFixed" data-toggle="tab">Fixed Rate</a></li>
                        <li class="col-xs-12 col-sm-3 col-md-3"><a href="#refiAdjustable" data-toggle="tab">Adjustable Rate</a></li>
                        <li class="col-xs-12 col-sm-3 col-md-3"><a href="#refiFHA" data-toggle="tab">FHA</a></li>
                        <li class="col-xs-12 col-sm-3 col-md-3"><a href="#refiHARP" data-toggle="tab">HARP</a></li>
                      </ul>
                    </div>
                      <!-- Refi Tab panes -->
                    <div class="tab-content">

                            <!-- Refi Fixed Rate -->
                            <div class="tab-pane fade clearfix in active" id="refiFixed">
                            <div class="triangle pos-1"></div>
                              <div class="col-md-12">                      
                                <div class="row">
                                <div class="rate-panel col-md-8">
                                  <table class="table">
                                      <thead>
                                      <tr>
                                          <th><h4 class="col-title">Term</h4></th>
                                          <th><h4 class="col-title">Rate</h4></th>
                                          <th><h4 class="col-title">APR</h4></th>
                                          <th></th>
                                      </tr>
                                      </thead>
                                      <tbody>
                                      <tr id="refi_fix10row">
                                          <td class="term"><span id="refi_fix10term"></span> <i id="refi_fix10assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                          <td class="rate"><span id="refi_fix10rate"></span></td>
                                          <td class="rate"><span id="refi_fix10apr"></span></td>
                                          <td class="term"><i id="refi_fix10payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                      </tr>
                                      <tr id="refi_fix15row">
                                          <td class="term"><span id="refi_fix15term"></span> <i id="refi_fix15assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                          <td class="rate"><span id="refi_fix15rate"></span></td>
                                          <td class="rate"><span id="refi_fix15apr"></span></td>
                                          <td class="term"><i id="refi_fix15payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                      </tr>
                                      <tr id="refi_fix20row">
                                          <td class="term"><span id="refi_fix20term"></span> <i id="refi_fix20assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                          <td class="rate"><span id="refi_fix20rate"></span></td>
                                          <td class="rate"><span id="refi_fix20apr"></span></td>
                                          <td class="term"><i id="refi_fix20payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                      </tr>
                                      <tr id="refi_fix30row">
                                          <td class="term"><span id="refi_fix30term"></span> <i id="refi_fix30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                          <td class="rate"><span id="refi_fix30rate"></span></td>
                                          <td class="rate"><span id="refi_fix30apr"></span></td>
                                          <td class="term"><i id="refi_fix30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                      </tr>
                                      </tbody>
                                  </table> 
                                  <div class="rates-loading-error text-center"></div>
                                </div> 
                                <div class="col-md-4">              
                                  <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                                </div>
                                </div>
                              </div>

                              <div class="col-md-12">
                                <p>*Monthly payment includes principal and interest only and do not include amounts for taxes and insurance. Actual monthly payment obligations will be greater.</p>
                              </div>
                            </div>

                            <!-- Refi Adjustable Rate -->
                            <div class="tab-pane fade clearfix" id="refiAdjustable">
                                  <div class="triangle pos-2"></div>
                          
                                  <div class="col-md-12">
                                    <div class="row">
                                      <div class="rate-panel col-md-8">
                                        <table class="table">
                                            <thead>
                                            <tr>
                                                <th><h4 class="col-title">Term</h4></th>
                                                <th><h4 class="col-title">Rate</h4></th>
                                                <th><h4 class="col-title">APR</h4></th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr id="refi_arm31row">
                                                <td class="term"><span id="refi_arm31term"></span> <i id="refi_arm31assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                                <td class="rate"><span id="refi_arm31rate"></span></td>
                                                <td class="rate"><span id="refi_arm31apr"></span></td>
                                                <td class="term"><i id="refi_arm31payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                          </tr>
                                            <tr id="refi_arm51row">
                                                <td class="term"><span id="refi_arm51term"></span> <i id="refi_arm51assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                                <td class="rate"><span id="refi_arm51rate"></span></td>
                                                <td class="rate"><span id="refi_arm51apr"></span></td>
                                                <td class="term"><i id="refi_arm51payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                            </tr>
                                            <tr id="refi_arm71row">
                                                <td class="term"><span id="refi_arm71term"></span> <i id="refi_arm71assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                                <td class="rate"><span id="refi_arm71rate"></span></td>
                                                <td class="rate"><span id="refi_arm71apr"></span></td>
                                                <td class="term"><i id="refi_arm71payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                            </tr>
                                            <tr id="refi_arm101row">
                                                <td class="term"><span id="refi_arm101term"></span> <i id="refi_arm101assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                                <td class="rate"><span id="refi_arm101rate"></span></td>
                                                <td class="rate"><span id="refi_arm101apr"></span></td>
                                                <td class="term"><i id="refi_arm101payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                            </tr>
                                            </tbody>
                                        </table> 
                                        <div class="rates-loading-error text-center"></div>
                                      </div>
                                        <div class="col-md-4">              
                                          <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                                        </div>
                                   </div>
                                  </div>
                                <div class="col-md-12">
                                  <p>*Monthly payments include principal and interest only and do not include amounts for taxes and insurance.  Actual payment obligations will be greater.<br>**The first adjusted payment illustrates the estimated monthly payment due when the interest rate is reset after the first 5 years, and when the interest rate can increase or decrease annually according to the market index.  Any change may significantly impact your monthly payment.  Because we do not know the future value of the index, the first adjusted rate and corresponding first adjusted payment are based on the current index plus a margin (the fully indexed rate).</p>
                                </div>
                      
                            </div>

                            <!-- Refi FHA Rates -->
                            <div class="tab-pane fade clearfix" id="refiFHA">
                                <div class="triangle pos-3"></div>
                            <div class="rate-panel col-md-8">
                              <table class="table">
                                  <thead>
                                  <tr>
                                      <th><h4 class="col-title">Term</h4></th>
                                      <th><h4 class="col-title">Rate</h4></th>
                                      <th><h4 class="col-title">APR</h4></th>
                                      <th></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr id="refi_fha15row">
                                      <td class="term"><span id="refi_fha15term"></span> <i id="refi_fha15assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="refi_fha15rate"></span></td>
                                      <td class="rate"><span id="refi_fha15apr"></span></td>
                                      <td class="term"><i id="refi_fha15payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                  </tr>
                                  <tr id="refi_fha30row">
                                      <td class="term"><span id="refi_fha30term"></span> <i id="refi_fha30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="refi_fha30rate"></span></td>
                                      <td class="rate"><span id="refi_fha30apr"></span></td>
                                      <td class="term"><i id="refi_fha30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                  </tr>
                                  </tbody>
                              </table> 
                              <div class="rates-loading-error text-center"></div>
                            </div>
                              <div class="col-md-4">              
                                <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                            </div>
                            </div>

                            <!-- Refi HARP Rates -->
                           <div class="tab-pane fade clearfix" id="refiHARP">
                                <div class="triangle pos-4"></div>

                           <div class="rate-panel col-md-8">
                              <table class="table">
                                  <thead>
                                  <tr>
                                      <th><h4 class="col-title">Term</h4></th>
                                      <th><h4 class="col-title">Rate</h4></th>
                                      <th><h4 class="col-title">APR</h4></th>
                                      <th></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr id="refi_relief15row">
                                      <td class="term"><span id="refi_relief15term"></span> <i id="refi_relief15assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="refi_relief15rate"></span></td>
                                      <td class="rate"><span id="refi_relief15apr"></span></td>
                                      <td class="term"><i id="refi_relief15payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                  </tr>
                                  <tr id="refi_relief30row">
                                      <td class="term"><span id="refi_relief30term"></span> <i id="refi_relief30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="refi_relief30rate"></span></td>
                                      <td class="rate"><span id="refi_relief30apr"></span></td>
                                      <td class="term"><i id="refi_relief30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                  </tr>
                                  <tr id="refi_refiPlus15row">
                                      <td class="term"><span id="refi_refiPlus15term"></span> <i id="refi_refiPlus15assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="refi_refiPlus15rate"></span></td>
                                      <td class="rate"><span id="refi_refiPlus15apr"></span></td>
                                      <td class="term"><i id="refi_refiPlus15payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                  </tr>
                                  <tr id="refi_refiPlus30row">
                                      <td class="term"><span id="refi_refiPlus30term"></span> <i id="refi_refiPlus30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="refi_refiPlus30rate"></span></td>
                                      <td class="rate"><span id="refi_refiPlus30apr"></span></td>
                                      <td class="term"><i id="refi_refiPlus30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>
                                  </tr>
                                  </tbody>
                              </table> 
                              <div class="rates-loading-error text-center"></div>
                            </div>
                              <div class="col-md-4">              
                                <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                           </div>
                       </div>
                 </div>
        </div>
        </div>

      </div>
      <div id="buyRates" class="buy-rates tab-pane fade clearfix">
        <h2 class="title">Purchase Rates</h2>
        <div class="row">
                  <div class="col-md-12">

                    <div class="row">
                      <!-- Purchase Nav Nav tabs -->
                      <ul id="buyRatesTabs" class="nav nav-tabs text-center">
                        <li class="col-xs-12 col-sm-3 col-md-3 active"><a href="#buyFixed" data-toggle="tab">Fixed Rate</a></li>
                        <li class="col-xs-12 col-sm-3"><a href="#buyAdjustable" data-toggle="tab">Adjustable Rate</a></li>
                        <li class="col-xs-12 col-sm-3"><a href="#buyFHA" data-toggle="tab">FHA</a></li>
                        <li class="col-xs-12 col-sm-3"><a href="#buyHARP" data-toggle="tab" class="mini-title">HomePath</a></li>
                      </ul>
                    </div>
                      <!-- Purchase Tab panes -->
                    <div class="tab-content">

                            <!-- Purchase Fixed Rate -->
                            <div class="tab-pane fade clearfix in active" id="buyFixed">
                            <div class="triangle pos-1"></div>

                            <div class="col-md-12">
                            <div class="row">

                            <div class="rate-panel col-md-8">
                              <table class="table">
                                  <thead>
                                  <tr>
                                      <th><h4 class="col-title">Term</h4></th>
                                      <th><h4 class="col-title">Rate</h4></th>
                                      <th><h4 class="col-title">APR</h4></th>
                                      <th></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr id="purchase_fix10row">
                                      <td class="term"><span id="purchase_fix10term"></span> <i id="purchase_fix10assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_fix10rate"></span></td>
                                      <td class="rate"><span id="purchase_fix10apr"></span></td>
                                      <td class="term"><i id="purchase_fix10payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  <tr id="purchase_fix15row">
                                      <td class="term"><span id="purchase_fix15term"></span> <i id="purchase_fix15assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_fix15rate"></span></td>
                                      <td class="rate"><span id="purchase_fix15apr"></span></td>
                                      <td class="term"><i id="purchase_fix15payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  <tr id="purchase_fix20row">
                                      <td class="term"><span id="purchase_fix20term"></span> <i id="purchase_fix20assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_fix20rate"></span></td>
                                      <td class="rate"><span id="purchase_fix20apr"></span></td>
                                      <td class="term"><i id="purchase_fix20payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  <tr id="purchase_fix30row">
                                      <td class="term"><span id="purchase_fix30term"></span> <i id="purchase_fix30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_fix30rate"></span></td>
                                      <td class="rate"><span id="purchase_fix30apr"></span></td>
                                      <td class="term"><i id="purchase_fix30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  </tbody>
                              </table> 
                              <div class="rates-loading-error text-center"></div>
                            </div>
                              <div class="col-md-4">              
                                <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                              </div>   

                              </div>
                            </div>

                                <div class="col-md-12">
                                  <p>*Monthly payment includes principal and interest only and do not include amounts for taxes and insurance. Actual monthly payment obligations will be greater.</p>
                                </div>
  
                            </div>

                            <!-- Purchase Adjustable Rate -->
                            <div class="tab-pane fade clearfix" id="buyAdjustable">
                                  <div class="triangle pos-2"></div>
                              
                            <div class="col-md-12">
                              <div class="row">
                              <div class="rate-panel col-md-8">
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th><h4 class="col-title">Term</h4></th>
                                        <th><h4 class="col-title">Rate</h4></th>
                                        <th><h4 class="col-title">APR</h4></th>
                                        <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr id="purchase_arm31row">
                                        <td class="term"><span id="purchase_arm31term"></span> <i id="purchase_arm31assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                        <td class="rate"><span id="purchase_arm31rate"></span></td>
                                        <td class="rate"><span id="purchase_arm31apr"></span></td>
                                        <td class="term"><i id="purchase_arm31payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                    </tr>
                                    <tr id="purchase_arm51row">
                                        <td class="term"><span id="purchase_arm51term"></span> <i id="purchase_arm51assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                        <td class="rate"><span id="purchase_arm51rate"></span></td>
                                        <td class="rate"><span id="purchase_arm51apr"></span></td>
                                        <td class="term"><i id="purchase_arm51payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                    </tr>
                                    <tr id="purchase_arm71row">
                                        <td class="term"><span id="purchase_arm71term"></span> <i id="purchase_arm71assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                        <td class="rate"><span id="purchase_arm71rate"></span></td>
                                        <td class="rate"><span id="purchase_arm71apr"></span></td>
                                        <td class="term"><i id="purchase_arm71payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                    </tr>
                                    <tr id="purchase_arm101row">
                                        <td class="term"><span id="purchase_arm101term"></span> <i id="purchase_arm101assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                        <td class="rate"><span id="purchase_arm101rate"></span></td>
                                        <td class="rate"><span id="purchase_arm101apr"></span></td>
                                         <td class="term"><i id="purchase_arm101payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                    </tr>
                                    </tbody>
                                </table> 
                                <div class="rates-loading-error text-center"></div>
                              </div>
                              <div class="col-md-4">              
                                <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                              </div>  
                              </div>
                            </div>

                                <div class="col-md-12">
                                  <p>*Monthly payments include principal and interest only and do not include amounts for taxes and insurance.  Actual payment obligations will be greater.<br>**The first adjusted payment illustrates the estimated monthly payment due when the interest rate is reset after the first 5 years, and when the interest rate can increase or decrease annually according to the market index.  Any change may significantly impact your monthly payment.  Because we do not know the future value of the index, the first adjusted rate and corresponding first adjusted payment are based on the current index plus a margin (the fully indexed rate).</p>
                                </div>

                            </div>

                            <!-- Purchase FHA Rates -->
                            <div class="tab-pane fade clearfix" id="buyFHA">
                                <div class="triangle pos-3"></div>
                            <div class="rate-panel col-md-8">
                              <table class="table">
                                  <thead>
                                  <tr>
                                      <th><h4 class="col-title">Term</h4></th>
                                      <th><h4 class="col-title">Rate</h4></th>
                                      <th><h4 class="col-title">APR</h4></th>
                                      <th></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr id="purchase_fha15row">
                                      <td class="term"><span id="purchase_fha15term"></span> <i id="purchase_fha15assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_fha15rate"></span></td>
                                      <td class="rate"><span id="purchase_fha15apr"></span></td>
                                      <td class="term"><i id="purchase_fha15payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  <tr id="purchase_fha30row">
                                      <td class="term"><span id="purchase_fha30term"></span> <i id="purchase_fha30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_fha30rate"></span></td>
                                      <td class="rate"><span id="purchase_fha30apr"></span></td>
                                       <td class="term"><i id="purchase_fha30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  </tbody>
                              </table> 
                              <div class="rates-loading-error text-center"></div>
                            </div>
                              <div class="col-md-4">              
                                <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                              </div>     
                            </div>

                            <!-- Purchase HomeSteps/HomePath Rates -->
                           <div class="tab-pane fade clearfix" id="buyHARP">
                                <div class="triangle pos-4"></div>

                           <div class="rate-panel col-md-8">
                              <table class="table">
                                  <thead>
                                  <tr>
                                      <th><h4 class="col-title">Term</h4></th>
                                      <th><h4 class="col-title">Rate</h4></th>
                                      <th><h4 class="col-title">APR</h4></th>
                                      <th></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr id="purchase_homestep51row">
                                      <td class="term"><span id="purchase_homestep51term"></span> <i id="purchase_homestep51assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_homestep51rate"></span></td>
                                      <td class="rate"><span id="purchase_homestep51apr"></span></td>
                                      <td class="term"><i id="purchase_homestep51payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  <tr id="purchase_homestep30row">
                                      <td class="term"><span id="purchase_homestep30term"></span> <i id="purchase_homestep30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_homestep30rate"></span></td>
                                      <td class="rate"><span id="purchase_homestep30apr"></span></td>
                                      <td class="term"><i id="purchase_homestep30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  <tr id="purchase_homepath15row">
                                      <td class="term"><span id="purchase_homepath15term"></span> <i id="purchase_homepath15assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_homepath15rate"></span></td>
                                      <td class="rate"><span id="purchase_homepath15apr"></span></td>
                                      <td class="term"><i id="purchase_homepath15payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  <tr id="purchase_homepath30row">
                                      <td class="term"><span id="purchase_homepath30term"></span> <i id="purchase_homepath30assumptions" class="fa fa-info-circle" data-toggle="tooltip" data-html="true" data-placement="right" title="<b>Rate Details</b>"></i></td>
                                      <td class="rate"><span id="purchase_homepath30rate"></span></td>
                                      <td class="rate"><span id="purchase_homepath30apr"></span></td>
                                      <td class="term"><i id="purchase_homepath30payments" class="fa fa-calendar" data-toggle="tooltip" data-html="true" data-placement="left" title="<b>Payment Schedule</b>"></i></td>  
                                  </tr>
                                  </tbody>
                              </table> 
                              <div class="rates-loading-error text-center"></div>
                            </div>
                              <div class="col-md-4">              
                                <img class="img-responsive rate-chart hidden-xs hidden-sm" src="Content/img/rates-chart.gif">
                              </div>     
                           </div>
                       </div>
                 </div>
        </div>

      </div>
  
      <div class="row">
        <div class="col-sm-12 rate-legend">
          <div class="row">
            <div class="col-sm-6">    
              <span><i class="fa fa-info-circle"></i> Rate Details</span>
              <span><i class="fa fa-calendar"></i> Payment Schedule</span>
            </div>      
  
            <div class="col-sm-6">
              <p class="time-stamp">Rates current as of<span id="ratetimestamp"></span> PST</p>
            </div>
            </div>
          </div>
        </div>
      </div>

  </div>
  </section></div>


    
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

    
