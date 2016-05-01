<?php 
	$page_name = 'calculator';
	require_once 'header.php';
?>


    

    <!-- Start Content -->
    <div class="main" role="main">
        



<section class="calculator">
    
    
<!-- Start Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        

        <li><a href="index.php" title="Home">Home</a></li>
        

    <li class="active">Calculator</li>

    </ol>
</div>
<!-- End Breadcrumb //-->

  <div class="container">
   <div class="row">
   <div class="col-sm-7 col-md-8">
  
        <h1 class="title">How do I estimate my monthly mortgage payments?</h1>
        <p class="alpha lead col-sm-10 hidden-xs">A house is the largest purchase most of us will ever make so it's important to calculate what your payment will be and how much you can afford. This mortgage calculator helps you estimate your monthly mortgage payments.   It can also show the effect of adding extra payments as well as provide you with an estimated amortization of payments throughout the loan cycle.</p>

          <div class="row">       
            <div class="col-xs-12">
              <form accept-charset="UTF-8" action="../calculator" class="form-horizontal input-box clearfix" id="mortgage-form" method="post">
              <div class="row">     
                  <div class="col-xs-12 col-sm-6 col-md-3">
                      <label for="purchase_price" class="control-label">Purchase Price</label>
                      <div class="input-group purchase-price">
                          <span class="input-group-addon">$</span>
                          <input class="form-control" id="purchase_price" name="purchase_price" type="text" value="300000" pattern="[-+]?[0-9]*[.,]?[0-9]+">
                      </div>
                  </div>
                  <div class="col-xs-12 col-sm-6 col-md-3">
                      <label for="down_payment" class="control-label">Down Payment</label>
                      <div class="input-group down-payment">
                          <span class="input-group-addon">$</span>
                          <input class="form-control" id="down_payment" name="down_payment" type="text" value="25000" pattern="[-+]?[0-9]*[.,]?[0-9]+">
                      </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-2">
                      <label for="term" class="control-label">Term</label>
                      <div class="input-group term">
                          <input class="form-control" id="term" max="50" name="term" type="text" value="30" pattern="[-+]?[0-9]*[.,]?[0-9]+">
                          <span class="input-group-addon">Yr</span>
                      </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-3">
                      <label for="interest_rate" class="control-label">Rate</label>
                      <div class="input-group rate">
                          <input class="form-control" id="interest_rate" name="interest_rate" type="text" value="5" pattern="[-+]?[0-9]*[.,]?[0-9]+">
                          <span class="input-group-addon">%</span>
                      </div>
                  </div>
              </div>
              <div class="row">
                 <div class="col-md-12">
                    <hr>
                    <p class="control-label">Property Taxes & Insurance (Optional) <i class="fa fa-info-circle" data-toggle="tooltip" title="A typical monthly mortgage payment consists of amounts for loan principal, interest, taxes, homeowner's insurance and mortgage insurance (if applicable). Taxes and insurance are usually paid from an escrow, or impound, account. The homeowner then replenishes the funds in this account each month with a portion of the total monthly payment.  If an escrow account is not established, the homeowner is responsible for paying these amounts directly."></i></p>
                 </div>
                 <div class="col-xs-6 col-sm-6 col-md-3">
                      <label for="yearly_tax_payment" class="control-label">Tax</label>
                      <div class="input-group taxes">
                          <span class="input-group-addon">$</span>
                          <input class="form-control" id="yearly_tax_payment" name="yearly_tax_payment" type="text" value="0" pattern="[-+]?[0-9]*[.,]?[0-9]+">
                          <span class="input-group-addon">Yr</span>
                      </div>
                 </div>                  
                 <div class="col-xs-6 col-sm-6 col-md-3">
                      <label for="yearly_insurance_payment" class="control-label">Insurance</label>
                      <div class="input-group insurance">
                          <span class="input-group-addon">$</span>
                          <input class="form-control" id="yearly_insurance_payment" name="yearly_insurance_payment" type="text" value="0">
                          <span class="input-group-addon">Yr</span>
                      </div>
                </div>
                 <div class="col-xs-6 col-sm-6 col-md-2">
                      <label for="pmi" class="control-label">PMI</label>
                      <div class="input-group pmi">
                        <input class="form-control" id="pmi" name="pmi" type="text" value="0.0" pattern="[-+]?[0-9]*[.,]?[0-9]+">
                        <span class="input-group-addon">%</span>
                      </div>
                  </div>
                 <div class="col-xs-6 col-sm-6 col-md-3">
                      <label for="start_date" class="control-label">Start Date</label>
                      <div class="input-group start-date">
                          <input class="form-control" data-date-format="mm/dd" id="start_date" name="start_date" type="text">
                      </div>
                </div>
              </div>     

              <div class="row">
                  <div class="col-md-12">
                    <div class="text-center">
                        <input class="btn-calc-pymnt col-xs-12 col-sm-6 col-sm-offset-3 btn-cta btn btn-lg track-me" id="calculate-button" data-category="Calculator" data-action="Display Results" data-label="Calculate Payment" name="commit" type="submit" value="Calculate Payment">
                    </div>
                  </div>
              </div>    
          </form>

            </div>
          </div> 
        </div>
    <aside class="col-sm-5 col-md-4 right-rail hidden-xs">

        
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
    </div> <!-- /.row -->
    <div class="row">
      <div class="col-md-12">    
        <div class="mod-calc-results" id="results">
              <h2 class="sub-title">Repayment Details</h2>
                <div class="data-wrapper text-center">
                  <div class="content">
                    <div class="row">
                    <div class="monthly-results-wrap col-xs-12">
                        <div class="">
                            <span class="monthly-payment" id="monthly_payment_display"></span><br>
                            <span class="small">Estimated Monthly Payment<span id="monthly_payment_extra_display"></span></span>
                        </div>
                    </div>
                    </div>
                    <div class="row">              
                        <div class="col-sm-6 col-md-3">
                          <div class="payment-display">
                            <label class="payment-title">Loan Amount</label>
                            <span class="result-value" id="loan_amount_display"></span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="payment-display">
                            <label class="payment-title"> <span id="number_of_payments_display"></span> Payments</label>
                            <span class="result-value" id="total_cost_display"></span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="payment-display">
                            <label class="payment-title">Total Interest</label>
                            <span class="result-value" id="total_interest_display"></span>
                          </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                          <div class="payment-display">
                            <label class="payment-title">Pay-off Date</label>                            
                            <span class="result-value" id="payoff_date_display"></span>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="chart-group hidden-xs">
                    <div id="mortgage-chart" class="bar-chart-container"></div>  
                    <div class="collapsable-chart-wrapper">
                        <a data-toggle="collapse" href="#cost-breakdown" class="expand-link">Cost Breakdown <span class="glyphicon glyphicon-expand"></span></a>
                        <div id="cost-breakdown" class="collapse">
                            <div id="breakdown-chart"></div>
                        </div>
                    </div>
                </div>

                <div class="amortization hidden-xs">
                    <h2 class="sub-title">Amortization Schedule</h2>
                    <ul class="nav nav-tabs" id="amortization_tables">
                        <li class="active"><a href="#yearly_amortization">Yearly Amortization</a></li>
                        <li><a href="#monthly_amortization">Monthly Amortization</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="yearly_amortization"></div>
                        <div class="tab-pane" id="monthly_amortization"></div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  </div> <!-- /.container -->
</section>



<?php include_once 'free_quote.php'; ?>

    </div>
    <!-- End Content //-->

    

<?php 
include_once 'modal.php';
include_once 'footer.php';
?>