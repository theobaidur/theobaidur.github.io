<?php 
$page_name= "about";
require_once 'header.php';

?>    

    <!-- Start Content -->
    <div class="main" role="main">
        


<div class="about-us">
    
<!-- Start Breadcrumb -->
<div class="container">
    <ol class="breadcrumb">
        

        <li><a href="index.php" title="Home">Home</a></li>
        

    <li class="active">About</li>

    </ol>
</div>
<!-- End Breadcrumb //-->

    <!-- Section: Intro -->
    <section class="intro">
        
        <div class="container">
        <div class="row">
            <section class="section-intro col-md-12 text-center">
                <h1 class="title">Our Story</h1>
                <p class="lead">Greenlight was founded in Irvine, California in 2001. We quickly became one of the country's fastest growing direct-to-consumer mortgage lenders, by focusing on three&nbsp;fundamentals:</p>
                <div class="row text-center">
                    <div class="icon-callout col-xs-12 col-sm-4">
                        <img class="icon-circle img-responsive icon" src="Content/img/icons/icon-better.gif">
                        <h4 class="sub-title">Customized Loans</h4>      
                    </div>
                    <div class="icon-callout col-xs-12 col-sm-4">
                        <img class="icon-circle img-responsive icon" src="Content/img/icons/icon-faster.gif">
                        <h4 class="sub-title">Faster Service</h4>
                    </div>
                    <div class="icon-callout col-xs-12 col-sm-4">
                        <img class="icon-circle img-responsive icon" src="Content/img/icons/icon-face-male.gif">
                        <h4 class="sub-title">Personal Attention</h4>
                    </div>
                </div> 
                <p class="lead">We work every day to provide a superior mortgage experience for our customers, and we succeed by continually adopting leading-edge technology. Greenlight Loans became part of the Nationstar Mortgage family of companies in 2013. Nationstar Mortgage Holdings, Inc. (NYSE: NSM), based in Lewisville, Texas, offers servicing, origination, and real estate services to financial institutions and consumers. Nationstar is one of the largest mortgage servicers in the U.S.</p>
            </section>
        </div>
        </div>

        <!-- Clouds -->
        <i class="clouds sm left animated cloud floatCloudLeft"></i>
        <i class="clouds lg right animated cloud floatCloudRight"></i>

    </section>

    <!-- Section: Video -->
    <section class="section-videos">

        <div class="container">
        <div class="row">
            <section class="col-md-12 text-center">

                <h2 class="title">Our Message</h2>
                <p class="lead">We share our promise of faster service and lower rates with the help of our friendly mascot "Greenlight" — a bright, fast-moving character who shines light on our latest offers. Here are some of our latest TV spots, usually featuring our famous "You've Got The Greenlight!" jingle.</p>
                
                <!-- Row 1: Videos Navigation -->
                <div class="row vid-nav">
                    <div class="center-block">
                        <a class="btn-videonav btn btn-lg btn-cta active" role="button" data-video-src="86067746">Light 5</a>
                        <a class="btn-videonav btn btn-lg btn-cta" role="button" data-video-src="86067747">Greenlight Goes West</a>
                        <a class="btn-videonav btn btn-lg btn-cta" role="button" data-video-src="86067514">The Help Network</a>
                    </div>
                </div>

                <!-- Row 1: Videos Shown -->
                <div class="row videos hidden-xs">
                    <div class="video-wrap">
                        <p class="status">
                        <iframe id="featuredVideo" width="660" height="448" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                    </div>
                </div>

                <!-- Row 2: Legal Disclaimer -->
                <div class="row legal-disclaimer hidden-xs">
                    <div class="col-md-12 text-center">
                        <p><strong>Note:</strong> Offers shown may not be currently available. For our latest offers, check out our <a href="rates.php">Rates</a> page. Then give us a call!</p>
                    </div>
                </div>

            </section>
        </div>
        </div>

    </section>

    <!-- Section: Testimonials -->
    <a name="quotes"></a>
    <section class="section-testimonials">
    <div class="container">

        <div class="row">
            <section class="col-md-12 text-center">
                
                <h2 class="title">Our Customers Speak</h2>
                
                <!-- Start Client Testimonials -->
                <div id="clientComments" class="row"></div>
                <!-- End Client Testimonials //-->
                
                <!-- View More -->
                <div class="row">
                    <div class="col-md-12 text-center">
                        <a class="btn-cta-dark btn btn-lg col-xs-12 col-sm-4 col-sm-offset-4 col-md-2 col-md-offset-5" href="http://www.trustlink.org/Reviews/Greenlight-Financial-Services-205825230" role="button">View All</a>
                    </div>
                </div>

            </section>
        </div>

    </div>
    </section>

</div>
    </div>
    <!-- End Content //-->

    
<section class="lead-gen-form modal fade" role="dialog" aria-hidden="true" data-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-body">
                
                <!-- Top Button Close -->
                <button type="button" class="close track-me" data-category="Form" data-action="Form Close" data-label="Close Icon" data-dismiss="modal" aria-hidden="true">&times;</button>

                <form id="leadGenForm" role="form">
                    <input type="hidden" name="lead_sub" id="lead_sub" value="66FASTER">
                    <fieldset>
                    <ul class="list no-bullets list-column row">
                        <li class="li-item-confirm text-center col-xs-12 hidden">
                            <h2 class="confirm-title"><span id="confirmTitle"></span></h2>
                            <p class="confirm-subtitle"><span id="confirmSubtitle"></span></p>
                            <img class="center-block" src="Content/img/blobber/blobbert-lg.png">
                            
                            <!-- Load Google Conversion Tracking Code -->
                            <div id="GoogleAdConvTracking"></div>

                        </li>
                        <li class="li-item col-xs-12 alert alert-danger text-center hidden">
                            <div class="pad">
                                <p class="msg"><strong>Oh snap!</strong> <label class="srv-msg"></label></p>
                            </div>
                        </li>
                        <li class="li-item col-xs-12 col-sm-4">
                            <div class="pad">
                                <div class="step-num">
                                    <h4 class="lead-modal-title"><span class="circle">1</span> What kind of loan do you need?</h4>
                                </div>
                                <div class="form-group">
                                    <label class="field-title" for="loan_type">Loan Type:</label>
                                    <select tabindex="0" class="form-control input-lg" id="loan_type" name="loan_type" title="Loan type is required." required="">
                                        <option value="">Select One
                                        <option value="refinance">Refinance
                                        <option value="cashout">Cash Out Refinance
                                        <option value="purchase">Purchase
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="field-title" for="prop_type">Property Type:</label>
                                    <select tabindex="10" class="form-control input-lg" id="prop_type" name="prop_type" title="Property type is required." required="">
                                        <option value="">Select One
                                        <option value="singlefamily">Single Family Home
                                        <option value="condo">Condo
                                        <option value="townhouse">Townhouse
                                        <option value="multifamily">Multi Family Home
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="field-title" for="prop_state">Property State:</label>
                                    <select tabindex="20" class="form-control input-lg" id="prop_state" name="prop_state" title="Property state is required." required="">
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
                            </div>
                        </li>
                        <li class="li-item col-xs-12 col-sm-4">
                            <div class="pad">
                                <div class="step-num">
                                    <h4 class="lead-modal-title"><span class="circle">2</span> Tell us about yourself.</h4>
                                </div>
                                <div class="form-group">
                                    <label class="field-title" for="first_name">First Name:</label>
                                    <input tabindex="30" type="text" class="form-control input-lg" id="first_name" name="first_name" title="First name is required." maxlength="30" placeholder="First Name" required="">
                                </div>
                                <div class="form-group">
                                    <label class="field-title" for="last_name">Last Name:</label>
                                    <input tabindex="40" type="text" class="form-control input-lg" id="last_name" name="last_name" title="Last name is required." maxlength="30" placeholder="Last Name" required="">
                                </div>
                                <div class="form-group">
                                    <label class="field-title" for="emailAddr">Email Address:</label>
                                    <input tabindex="50" type="email" class="form-control input-lg" id="emailAddr" name="emailAddr" title="Valid email address is required." placeholder="Email Address" required="">
                                </div>
                            </div>
                        </li>
                        <li class="li-item col-xs-12 col-sm-4">
                            <div class="pad">
                                <div class="step-num">
                                    <h4 class="lead-modal-title"><span class="circle">3</span> What's your primary phone number?</h4>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12">
                                        <label class="field-title" for="areaPhone">Phone:</label>
                                    </div>
                                    <div class="col-sm-4 form-group phone-num">
                                        <input tabindex="60" type="tel" class="form-control input-lg" id="areaPhone" name="areaPhone" pattern="/d{3}" title="Required" data-next-field="prefixPhone" maxlength="3" placeholder="###" required="">
                                    </div>
                                    <div class="col-sm-4 form-group phone-num">
                                        <input tabindex="70" type="tel" class="form-control input-lg" id="prefixPhone" name="prefixPhone" pattern="/d{3}" title="Required" data-next-field="suffixPhone" maxlength="3" placeholder="###" required="">
                                    </div>
                                    <div class="col-sm-4 form-group phone-num">
                                        <input tabindex="80" type="tel" class="form-control input-lg" id="suffixPhone" name="suffixPhone" pattern="/d{4}" title="Required" maxlength="4" placeholder="####" required="">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12 form-group">
                                        <div class="legal checkbox">
                                            <label class="txt-legal"><input tabindex="90" class="chk-legal" id="iAcceptRules" type="checkbox" name="iAcceptRules" title="You must agree to this notice." checked="checked" required=""> By submitting this information, I understand that I am consenting for you to contact me to discuss mortgage loan products and rate options at the email address and the phone number provided including via text, automated or prerecorded means. I understand that my consent is not required as a condition to purchase a good or service.</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <section class="safe-secure col-xs-12">
                        <div id="formContent">
                            <div class="row">
                                <div class="col-sm-5 col-md-4 col-lg-8">
                                    <p class="safe-secure-title"><i class="fa fa-lock fa-2x pull-left"></i>Safe and Secure</p>
                                </div>
                                <div class="col-sm-7 col-md-8 col-lg-4">
                                    <button tabindex="100" id="btnLeadGenSubmit" type="submit" class="btn btn-success btn-lg btn-block track-me" data-category="Form" data-action="Submission Attempt" data-label="Get Free Quote">Get a Free Quote</button>
                                </div>
                            </div>
                        </div>
                        <div id="successContent" class="hidden">
                            <div class="row">
                                <div class="col-sm-6 col-sm-offset-3 text-center">
                                    <a id="btnCloseConfirm" class="btn btn-success btn-lg btn-block track-me" data-category="Form" data-action="Form Close" data-label="Confirm Close" role="button">Close</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    </fieldset>
                </form>

            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</section>
    
<?php require_once 'footer.php'; ?>