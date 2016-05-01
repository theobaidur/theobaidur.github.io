<?php 

header('Access-Control-Allow-Origin: *');

$action = !empty($_REQUEST['action'])?$_REQUEST['action']:'get';


$con=mysqli_connect("localhost","wwwdream_quiz","quizAdmin","wwwdream_quiz_data");
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


 if($action=='fetch'){
 	$total = !empty($_POST['total'])?$_POST['total']:null;
	 if($total == null){
	 	echo "Bye bye";
		 exit;
	 }

	 $marks = array($_POST['avg_2'],$_POST['avg_4'],$_POST['avg_1'],$_POST['avg_3']);
	 $min = array();

	 $jobs_query = mysqli_query($con, "SELECT * FROM job_defination");

	 while($job_defination = mysqli_fetch_assoc($jobs_query)){
	 	$id = $job_defination['id'];

	 	$totalDiff  = 0;

	 	$marks_query = mysqli_query($con, "SELECT `stressLevel`, `flexibilityLevel`, `creativityLevel`, `difficultyLevel` FROM job_marks WHERE job_id=$id");
	 	
	 	while ($cat_mark = mysqli_fetch_assoc($marks_query)) {
	 		$j = 0;
	 		foreach ($cat_mark as $cat => $point) {
	 			

	 			if(!empty($marks[$j])){
	 				$totalDiff += abs($marks[$j]-$point);
				}
				$j++;
	 		}
	 		
	 	}
		 	
	 	if($id==1 || $totalDiff < $min['diff']){
			$min['jobTitle']=$job_defination['job_title'];
			$min['diff'] = $totalDiff;
			$min['rank'] = $id;
			$min['jobDef'] = $job_defination['job_description'];
		}


	 }

	 	
 	$q1= "SELECT COUNT(*) AS num FROM results";
 	$q2= "SELECT COUNT(*) AS num FROM results WHERE result < $total"; 
 	$q3 = "INSERT INTO `results`(`result`) VALUES ($total)";



 	$temp3=mysqli_query($con,$q1);
 	$temp4=mysqli_query($con,$q2);
 	
 	$total_perticipant = 0;
 	$position = 0;

 	while($row=mysqli_fetch_assoc($temp3)){
 		$total_perticipant=$row['num'];
 		break;
 	}

 	while($row=mysqli_fetch_assoc($temp4)){
 		$position=$row['num'];
 		break;
 	}

 	if($total_perticipant==0){
 		$defeatPt=100;
 	}else{
 		$defeatPt = ($position/$total_perticipant)*100;	
 	}
 	if(mysqli_query($con,$q3)){
 		$returnData = array(
 				"job"=>$min['jobTitle'],
 				"defeatPt"=>$defeatPt,
 				"rank" => $min['rank'],
				"defination"=>$min['jobDef']
 			);

 		$json = json_encode($returnData);
 		echo $json;
 	}
 } 

if($action=='get'){
	$sql="SELECT * FROM questions";
	$result=mysqli_query($con,$sql);
	
	$questions =array();

	$temp3=mysqli_query($con,"SELECT * FROM category");
	$categories = array();
	while ($cat = mysqli_fetch_assoc($temp3)) {
		$categories[$cat['id']]= array('category_name'=>$cat['category_name'],"points"=>0, "total_question"=>0);
		$id = $cat['id'];
		$q=mysqli_query($con,"SELECT * FROM questions WHERE category_id=$id");
		$a = array();
		while($qs = mysqli_fetch_assoc($q)){
			$a[] = $qs;
		}
		shuffle($a);
		$a = array_slice($a,0 , 3);
		
		foreach($a as $elem){
			$id2 = $elem['id'];
			$temp2=mysqli_query($con,"SELECT * FROM question_options WHERE question_id=$id2");
			$options = array();
			while ($op = mysqli_fetch_assoc($temp2)) {
				$options[]=array(
						"option"=>$op['option'],
						"point"=>$op['point']
					);
			}
			shuffle($options);		
			$temp['options']=$options;
			$temp['question']=$elem['question'];
			$temp['category_id'] = $elem['category_id'];
			$questions[]=$temp;
		} 
	}

	$returnData = array(
			"questions"=>$questions,
			"categories"=>$categories
		);


	print_r(json_encode($returnData));
	mysqli_free_result($result);

}




mysqli_close($con);

?>