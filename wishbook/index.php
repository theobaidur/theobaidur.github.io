<!DOCTYPE html>
<html>
	<head>
	    <title>Wishbook : Wish listing</title>
		<style>
		    body{
		        font-size: 14px;
		        color:#000;
		        margin:0;
		        padding:0;
		        font-family:Arial, Helvetica, sans-serif;
		    }
		    
		    i,sup{
		        color: red;
		    }
		    
		    b{
		        color:green;
		    }
			table {
				width: 100%;
				max-width: 851px;
				margin: 0 auto;
			}

			img {
				display: block;
				border: none;
				width: 100%;
				height: auto;
			}
			textarea {
				width: 80%;
				height: 50px;
			}
			
			
			.fb_iframe_widget > span:first-child,
			.fb_iframe_widget,
			.fb_iframe_widget > span:first-child iframe{
			    display: block;
			    width: 100% !important;
			}
			
			
		</style>
	</head>
	<body>
		<table>
			<tr>
				<td colspan="2"><img src="banner.jpg" /></td>

			</tr>
			<?php
            $name = '';
            $wish = '';
            $wish_send = false;
            if ('POST' == $_SERVER['REQUEST_METHOD']) {
                if (isset($_POST['send'])) {
                    $name = trim($_POST['name']);
                    $wish = trim($_POST['wish']);
                    $error = '';
                    if (empty($name)) {
                        $error .= "<i>* Tell us your name please ! :)</i><br/>";
                    }

                    if (empty($wish)) {
                        $error .= "<i>* Tell us your wishes please ! :)</i><br/>";
                    }
                    
                    $name_2 = str_replace(" ", "_", $name);
                    
                    if(empty($error)){
                        
                        $mail = "wishlistener@gmail.com";
                        $subject = "Wishbook : Wish submission";
                        $headers = "From: ".$name_2. "@no-reply.com\r\n";
                        $headers .= "MIME-Version: 1.0\r\n";
                        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
                        $body = "<b>".$name."</b><br/> has shared his wish.<br/><hr/>";
                        $body .= "Name : <i>".$name."</i><br/>";
                        $body .="Wish : <br/><i>".$wish."</i>";
                        $msg = '';
                        $con = mail($mail, $subject, $body, $headers);
                        if($con){
                            $wish_send = TRUE;
                            $msg .= "<b>Wishbook listed your wishes. You will see your wish soon.<b>";
                            ?>
                        
                        <tr>
                            <td colspan="2"><?php echo $msg; ?></td>
                        </tr>
                        <?php
                        }else{
                            $msg .="<i>Sorry ! something went wrong with wishbook. It can't list your wish right now. Try again later.</i>";
                        }
                        
                        
                    }else{
                        ?>
                        
                        <tr>
                            <td colspan="2"><?php echo $error; ?></td>
                        </tr>
                        <?php
                    }

                }
            }
			?>
            
            <?php if(!$wish_send){ ?>
            
			<tr>
				<td colspan="2"><h3>Wishbook wants to know your wishes.</h3></td>
			</tr>

			<form action="" method="post">
				<tr>
					<td>Name : <sup>*</sup></td>
					<td>
					<input type="text" name="name" value="<?php echo $name; ?>"/><br/>
					i.e. you can write your full name or nick name
					</td>
				</tr>
				<tr>
					<td>Wishes : <sup>*</sup></td>
					<td>					
					    <textarea name="wish"><?php echo $wish; ?></textarea><br/>
					    i.e. make some good wishes. Wishbook will let others know your wish.
				    </td>
				</tr>
				<tr>
					<td colspan="2" align="center">
					<input type="submit" name="send" value="Finish" />
					</td>
				</tr>
				<tr>
				    <td colspan="2">
				        <sup>*</sup>indicates required fields.
				    </td>
				</tr>
				<tr>
				    <td colspan="2">
				        <div id="fb-root"></div>
                        <script>(function(d, s, id) {
                          var js, fjs = d.getElementsByTagName(s)[0];
                          if (d.getElementById(id)) return;
                          js = d.createElement(s); js.id = id;
                          js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=1414512985445589";
                          fjs.parentNode.insertBefore(js, fjs);
                        }(document, 'script', 'facebook-jssdk'));
                        </script>
                     <div class="fb-like-box" data-href="https://www.facebook.com/myhappywishes" data-colorscheme="light" data-show-faces="true" data-header="true" data-stream="true" data-show-border="true"></div>   
                
				        
				    </td>
				</tr>
			</form>
			<?php } ?>
		</table>
	</body>
</html>