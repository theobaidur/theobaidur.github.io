<!-- Start Footer -->
<footer class="ft">
  <div class="ft-nav">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-3 col-md-3">
                <div class="logo-wrap hidden-xs">
                  <a href="index.php">
                      <img class="img-responsive" src="Content/img/logos/gll_logo_white.svg">
                  </a>
                </div>
                <div class="contact-info">
                     <h3 class="phone">1-866-66-<span class="text-highlight">FASTER</span></h3>
                     <address class="address hidden-xs">18200 Von Karman Ave<br>Suite 300, Irvine, CA 92612</address>
                </div>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-3">
              <span class="ft-divider hidden-xs"></span>
              <ul class="menu">
                <li><a href="refinancing.php">Refinancing <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
                <li><a href="buying.php">Buying <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
                <li><a href="rates.php">Rates <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
                <li><a href="calculator.php">Calculator <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
              </ul>
            </div>
            <div class="col-xs-12 col-sm-3 col-md-3">    
              <span class="ft-divider hidden-xs"></span>        
              <ul class="menu">
                <li><a href="about.php">About Us <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
                <li><a href="https://greenlightloans.secure-loancenter.com/MyAccount/AccountLogin.aspx">My Loan Info <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
                <li><a href="https://www.nationstarmtg.com/Careers/">Careers <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
                <li><a href="disclosures.php">Disclosures <i class="fa fa-chevron-right pull-right visible-xs"></i></a></li>
              </ul>
            </div>

            <div class="col-xs-12 visible-xs text-center">
              <div class="row">
                <div class="col-xs-3"></div>   
                <div class="col-xs-6">
                    <a href="index.php">
                        <img class="img-responsive logo" src="Content/img/logos/greenlight_logo_white.png">
                    </a>
                </div>   
                <div class="col-xs-3"></div>       
              </div>
            </div>

            <div class="col-xs-12 col-sm-3 col-md-3 text-center the-family">   
              <div class="col-xs-12 hidden-xs">
                <span>A Family of</span>
              </div>
              <div class="col-xs-6 col-sm-12">
                <a href="http://www.nationstarmtg.com/"><img class="img-responsive family-logo" src="Content/img/logos/nationstar_white.png"></a>
              </div>
              <div class="col-xs-6 col-sm-12">
                <a href="http://www.homesearch.com/"><img class="img-responsive family-logo" src="Content/img/logos/homesearch_white.png"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

   <div class="ft-btm">
       <div class="container">   
         <div class="row">

     
				  <div class="col-xs-12 col-sm-3 col-md-3">
                <img class="img-responsive ehl" src="Content/img/logos/logo_ehl.png">
				  </div>

				  <div class="copyright-sect col-xs-12 col-sm-6 col-md-6 text-center">
                    <p>Copyright &copy; 2014 Nationstar Mortgage LLC dba Greenlight Loans.<br class="hidden-xs"> Nationstar Mortgage, HomeSearch and Greenlight Loans are service marks of Nationstar Mortgage LLC.<br>All rights reserved. </p>
                    <a href="privacy.php">Privacy Policy</a> | <a href="licensing.php">Licensing</a>
				  </div>

				  <div class="col-xs-12 col-sm-3 col-md-3 ft-social">
					    <a href="http://www.facebook.com/greenlightloans"><img class="img-responsive" src="Content/img/icons/facebook.png"></a>
				  </div>

		   
		    </div>
    </div>
  </div>
</footer>
<!-- End Footer //-->
    
    <script src="bundles/common.js?v=AF00Na-OP7DYSePxTaOctZVXS4mr0vL3FgzV1I6ZN7c1"></script>
	<?php 
		switch ($page_name) {
			case 'about':
				?>
				<script src="bundles/about.?v=of5MrvATPKz1Vv444AxdgDGsgNAkxB3oUl7xhIF6x9A1"></script>
				<?php
				break;
			case 'refinancing':
			case 'buying':	
				?>
				<script src="bundles/refibuying.?v=foSOb-T8NX1w0tAXnxiLwVgyCPgJxTvxiDF15lsMeUM1"></script>
				<?php
				break;
			case 'rates':
				?>
				<script src="bundles/rates.?v=Nk4WI3z2lrZVUD9n9TgNwqlZuy9xXlAxm-L7ZqxDp701"></script>
				<?php
				break;
			case 'calculator':
				?>
				<script src="bundles/calculator.?v=Y20SqKNrePLidlDAc3fm-unBQea9xDqHQu3FnjLOFyU1"></script>
			<?php
				break;			
			default:
				
				break;
		}
	
	?>
    

  
<!--// Begin IgnitionOne Tracking //-->
<script type="text/javascript">
  (function(){
  var Data = {
  }

    ,i=Data,d=document,u=encodeURIComponent,x=z='',j=d.createElement('script'),
    r=d.referrer,s=d.getElementsByTagName('script')[0];j.type='text/javascript';
    j.async=!0;r&&r.split(/[/:?]/)[3]!=d.location.hostname&&(i.ref=r);for(y in i)
    x+='&'+y+'='+u(i[y]);j.src='//com-gfs.netmng.com/'
    +'?aid=3200&siclientid='+x;s.parentNode.insertBefore(j,s);
  })();
</script>
<!--// End IgnitionOne Tracking //-->




</body>
</html>