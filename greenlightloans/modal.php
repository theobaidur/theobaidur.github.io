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
    