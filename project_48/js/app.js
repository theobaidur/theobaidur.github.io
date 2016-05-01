var tableModule = angular.module('theApp', ['ui-rangeSlider','ngScrollbar']);

//$http.post('/index.html', data).success(successCallback);


tableModule.factory('CsvService', ['$http',
function($http) {
	return {
		get : function($path, callback) {
			return $http.get($path).success(callback);		
		},

		post : function($path, $data, callback) {
			//headers:{'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'};
			return $http.post($path, $data,{ headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'} }  ).success(callback);
		}
		
	};
	
}]);

tableModule.filter("as", function($parse) {
  return function(value, path) {
  	return $parse(path).assign(this, value);
  };
});

tableModule.controller('tableController', function($scope, CsvService) {
	
	/* frame */
	
	$scope.frame = 0;
	/*
	0 -> Index page,
	1 -> Loading page
	2 -> Result page
	 * */

	/* slider */

	$scope.min = 0;
	$scope.max = 10050;
	$scope.minV = 0;
	$scope.maxV = 10050;
	$scope.minA = 0;
	$scope.maxA = 10050;
	
	
	$scope.minPrice = 0;
	$scope.maxPrice = 10050;
	$scope.minVal = 0;
	$scope.maxVal = 10050;
	$scope.minAvg = 0;
	$scope.maxAvg = 10050;
	
	
	$scope.numResult = {
		min : 1,
		max : 200,
		minResult : 1,
		maxResult : 200,
		increment : 1 
		
	}
	
	

	/*CSV files*/
	$scope.csvs = [{
		name : "CSV 1",
		url : "data/CSV1.csv"
	}, {
		name : "CSV 2",
		url : "data/CSV2.csv"
	}, {
		name : "CSV 3",
		url : "data/CSV3.csv"
	}]

	$scope.currentCsv = {
		"selected" : null
	};
	
	/*Filter property*/
	
	$scope.sortProp = '';
	$scope.sortProb2 = '';
	
	
	/*check boxes*/
	$scope.checkbox1 = false;
	$scope.checkbox2 = false;
	
	
	/*Table data*/
	$scope.persons = [];
	$scope.personsSelected = [];
	$scope.results = [];
	
	/*Tab validation data*/
	$scope.errorMsg = '';
	
	$scope.tabElemRange = {
		tab_1 : {
			min:1,
			max:6,
			elem:[]
		},
		tab_2 : {
			min:2,
			max:15,
			elem:[]
		},
		tab_3 : {
			min:3,
			max:20,
			elem:[]
		},
		tab_4 : {
			min:1,
			max:7,
			elem:[]
		},
		tab_5 : {
			min:1,
			max:4,
			elem:[]
		},
		tab_6 : {
			min:1,
			max:4,
			elem:[]
		}
		
	}
	
	
	
	$scope.validateTabs = function(){
		var range = $scope.tabElemRange;
		//console.log(1);
		//console.log(range);
		if(!(range.tab_1.elem.length >= range.tab_1.min && range.tab_1.elem.length <= range.tab_1.max)){
			$scope.errorMsg +=("* Tab 1 should have minimum "+range.tab_1.min+" and maximum "+range.tab_1.max+" items \n");
		}
		
		if(!(range.tab_2.elem.length >= range.tab_2.min && range.tab_2.elem.length <= range.tab_2.max)){
			$scope.errorMsg +=("* Tab 2 should have minimum "+range.tab_2.min+" and maximum "+range.tab_2.max+" items \n");
		}
		
		if(!(range.tab_3.elem.length >= range.tab_3.min && range.tab_3.elem.length <= range.tab_3.max)){
			$scope.errorMsg +=("* Tab 3 should have minimum "+range.tab_3.min+" and maximum "+range.tab_3.max+" items \n");
		}
		
		if(!(range.tab_4.elem.length >= range.tab_4.min && range.tab_4.elem.length <= range.tab_4.max)){
			$scope.errorMsg +=("* Tab 4 should have minimum "+range.tab_4.min+" and maximum "+range.tab_4.max+" items \n");
		}
		
		if(!(range.tab_5.elem.length >= range.tab_5.min && range.tab_5.elem.length <= range.tab_5.max)){
			$scope.errorMsg +=("* Tab 5 should have minimum "+range.tab_5.min+" and maximum "+range.tab_5.max+" items \n");
		}
		
		if(!(range.tab_6.elem.length >= range.tab_6.min && range.tab_6.elem.length <= range.tab_6.max)){
			$scope.errorMsg +=("* Tab 6 should have minimum "+range.tab_6.min+" and maximum "+range.tab_6.max+" items \n");
		}
		
		
		
	}
	
	$scope.perseCsv = function($data) {
		var lines = $data.split("\n");

		var result = [];

		var headers = lines[0].split(",");

		for (var i = 1; i < lines.length; i++) {

			var obj = {};
			var currentline = lines[i].split(",");

			for (var j = 0; j < headers.length; j++) {
				obj[headers[j]] = currentline[j];
			}

			result.push(obj);

		}
		return result;
	}

	$scope.changeData = function() {
		if ($scope.currentCsv) {
			CsvService.get($scope.currentCsv.url, function(results) {
				$items = $scope.perseCsv(results);
				$scope.minPrice = $scope.min = Math.min.apply(null, $items.map(function(a) {
					return a.Cost ? a.Cost : 0;
				}));
				
				$scope.maxPrice = $scope.max = Math.max.apply(null, $items.map(function(a) {
					return a.Cost ? a.Cost : 0;
				}));
				
				$scope.minV = $scope.minVal = Math.min.apply(null, $items.map(function(a) {
					return a.Value ? parseInt(a.Value) : 0;
				}));
				
				$scope.maxV = $scope.maxVal = Math.max.apply(null, $items.map(function(a) {
					return a.Value ? parseInt(a.Value) : 0;
				}));
				
				$scope.minA = $scope.minAvg = Math.min.apply(null, $items.map(function(a) {
					return a.Avg ? parseInt(a.Avg) : 0;
				}));
				
				$scope.maxA = $scope.maxAvg = Math.max.apply(null, $items.map(function(a) {
					return a.Avg ? parseInt(a.Avg) : 0;
				}));
				
				
				angular.copy($items, $scope.persons);
			});
		}
	}

	$scope.selectThis = function($item) {
		var range = $scope.tabElemRange;
		//console.log($item.Tab);
		if($item.Tab==1 && range.tab_1.elem.length >= range.tab_1.max){
			alert("Tab 1 should have minimum "+range.tab_1.min+" and maximum "+range.tab_1.max+" items");
			return;
		}
		
		if($item.Tab==2 && range.tab_2.elem.length >= range.tab_2.max){
			alert("Tab 2 should have minimum "+range.tab_2.min+" and maximum "+range.tab_2.max+" items");
			return;
		}
		
		if($item.Tab==3 && range.tab_3.elem.length >= range.tab_3.max){
			alert("Tab 3 should have minimum "+range.tab_3.min+" and maximum "+range.tab_3.max+" items");
			return;
		}
		
		if($item.Tab==4 && range.tab_4.elem.length >= range.tab_4.max){
			alert("Tab 4 should have minimum "+range.tab_4.min+" and maximum "+range.tab_4.max+" items");
			return;
		}
		
		if($item.Tab==5 && range.tab_5.elem.length >= range.tab_5.max){
			alert("Tab 5 should have minimum "+range.tab_5.min+" and maximum "+range.tab_5.max+" items");
			return;
		}
		
		if($item.Tab==6 && range.tab_6.elem.length >= range.tab_6.max){
			alert("Tab 6 should have minimum "+range.tab_6.min+" and maximum "+range.tab_6.max+" items");
			return;
		}
		
		
		$persons = $scope.persons;
		$index = $persons.indexOf($item);
		$scope.persons.splice($index, 1);
		$copy = angular.copy($item);
		$scope.personsSelected.push($copy);
	}

	$scope.removeThis = function($item) {
		$persons = $scope.personsSelected;
		$index = $persons.indexOf($item);
		$scope.personsSelected.splice($index, 1);
		$copy = angular.copy($item);
		$scope.persons.push($copy);
	}


	$scope.maxMinFilter = function(person) {
		var cost = parseFloat(person.Cost);
		if (!cost) {
			return false;
		}

		if ($scope.minPrice && cost < $scope.minPrice) {
			return false;
		}

		if ($scope.maxPrice && cost > $scope.maxPrice) {
			return false;
		}

		return true;
	};
	
	$scope.valueChange = function(person){
		var val = person.Value;
		if(!val){
			person.Value = 0;
		}else if(!val.toString().match(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)){
			alert("Positive decimal numbers only");
			person.Value = 0;
		}
		
		if(val < $scope.minV){
			$scope.minVal = $scope.minV = Math.ceil(val);
		}
		
		if(val > $scope.maxV){
		 $scope.maxVal = $scope.maxV=Math.ceil(val);
		}
	} 
	
	$scope.maxMinValueFilter = function(person) {
		var val = parseFloat(person.Value);

		if ($scope.minVal && val < parseInt($scope.minVal)) {
			return false;
		}

		if ($scope.maxVal && val > parseInt($scope.maxVal)) {
			return false;
		}

		return true;
	};
	
	$scope.maxMinAvgFilter = function(person) {
		var val = parseFloat(person.Avg);
		if (!val) {
			return false;
		}

		if ($scope.minAvg && val < parseInt($scope.minAvg)) {
			return false;
		}

		if ($scope.maxAvg && val > parseInt($scope.maxAvg)) {
			return false;
		}

		return true;
	};
	
	
	
	$scope.download = function(){
		csvContent = "data:text/csv;charset=utf-8,";
		csvContent +="Tab, Name, State, Value, Cost \n";
		$scope.results.forEach(function(array, index){
			csvContent +="Result "+(index+1)+"\n";
				
			  array.data.forEach(function(array2, index){
				dataString = array2.Tab+","+array2.Name+","+array2.State+","+array2.Value+","+array2.Cost+"\n";
   				csvContent += dataString;
			});
			csvContent +="Total, -, -, "+array.totalValue[0]+", "+array.totalCost[0]+" \n";
		});
		
		var a         = document.createElement('a');
			a.href        = encodeURI(csvContent);
			a.target      = '_blank';
			a.download    = 'results.csv';

			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		
	}
	
	
	var calculateMin = function (){
		var totalMin = 0;
		for(i in $scope.tabElemRange){
			var elem = $scope.tabElemRange[i].elem;
			if(elem.length){
				elem.sort(function(a, b) {
				    return parseFloat(a.Cost) - parseFloat(b.Cost);
				});
				for(j=0; j<$scope.tabElemRange[i].min && j<elem.length; j++){
						totalMin += parseFloat(elem[j].Cost);
						
					} 
				}
   
			}
  
		return totalMin;
		}
	
	$scope.save = function(){
		$scope.validateTabs();
		if(calculateMin() > 10000){
			$scope.errorMsg +="Must be under $60k";
		}
		
		if($scope.errorMsg==''){
			$data = {
				"tableData":JSON.stringify($scope.personsSelected),
				"checkbox1":$scope.checkbox1,
				"checkbox2":$scope.checkbox2,
				"minResult":$scope.numResult.minResult,
				"maxResult":$scope.numResult.maxResult,
				"increament":$scope.numResult.increment
			}
			
			$postData = JSON.stringify($data);
			$testData = JSON.stringify($scope.personsSelected[1].Value);
			$scope.frame = 1;
			CsvService.post('result.json', $.param($data), function(data, status){
				$scope.frame = 2;
				$scope.results = data;
			});	
		}else{
			alert($scope.errorMsg);
			$scope.errorMsg = '';
		}
		
		
		
	}
});
