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


tableModule.filter("hasSlider",function(){
	return function(header){
		var output = [];
		for(i=0; i< header.length; i++){
			if(header[i].prop.hasSlider){
				output.push(header[i]);
			}
		}
		return output;
	}
});

tableModule.filter("tabFilter",function(){
	return function(persons, index, value){
		//console.log(value);
		var output = [];
		for(i=0; i<persons.length; i++){
			if(persons[i][index]==value){
				output.push(persons[i]);
			}
		}
		return output;
	}
});

   
tableModule.controller('tableController', function($scope, CsvService) {
	/*Slider values*/
	
	$scope.slider = {
		min:{
			
		},
		max:{
			
		},
		minValue:{
			
		},
		maxValue:{
			
		}
	}
	
	/*Tabs*/
	
	$scope.tabs = [{
		name : "Tab 1",
		index : 'Tab',
		value : 1,
		active : true,
		max : 4,
		min : 1
	},
	{
		name : "Tab 2" ,
		active : false,
		index : 'Tab',
		value : 2,
		max : 5,
		min : 1
	},
	{
		name : "Tab 3",
		active : false,
		index : 'Tab',
		value : 3,
		max : 5,
		min : 1
	},
	{
		name : "Tab 4",
		active : false,
		index : 'Tab',
		value : 4,
		max : 5,
		min : 1
	},
	{
		name : "Tab 5",
		active : false,
		index : 'Tab',
		value : 5,
		max : 5,
		min : 1
	},
	{
		name : "Tab 6",
		active : false,
		index : 'Tab',
		value : 6,
		max : 5,
		min : 1
	}
	];
	
	/*Table headers*/
	
	$scope.tableHeaders = [{
		name  : "Name",
		index : "Name",
		prop : {
			isSortable : true,
			hasSlider : false,
			isEditable: false
		},
		validation:{
			isString : true,
			isNumber : false,
			ifNull : ''
		} 
	},{
		name  : "State",
		index : "State",
		prop : {
			isSortable : true,
			hasSlider : false,
			isEditable: false
		},
		validation:{
			isString : true,
			isNumber : false,
			ifNull : ''
		} 
	},{
		name  : "Cost",
		index : "Cost",
		prop : {
			isSortable : true,
			hasSlider : true,
			isEditable: false
		},
		validation:{
			isString : false,
			isNumber : true,
			ifNull : 0
		} 
	},{
		name  : "Value",
		index : "Value",
		prop : {
			isSortable : true,
			hasSlider : true,
			isEditable: true,
			maxLength : 6
		},
		validation:{
			isString : false,
			isNumber : true,
			ifNull : 0
		} 
	},{
		name  : "Avg",
		index : "Avg",
		prop : {
			isSortable : true,
			hasSlider : true,
			isEditable: false
		},
		validation:{
			isString : false,
			isNumber : true,
			ifNull : 0
		} 
	}];
	
	$scope.sortIndex = '';
	$scope.sortReverse = true;
	
	$scope.setSortProp = function($index, $isSortable){
		if($isSortable){
			$scope.sortIndex = $index;
			$scope.sortReverse = !$scope.sortReverse;
			//console.log($scope.sortReverse);
		}
	}
	
	$scope.rangeFilter = function(person) {
		for(i=0; i<$scope.tableHeaders.length; i++){
			if(!$scope.tableHeaders[i].prop.hasSlider){
				continue;
			}
	
			var index = $scope.tableHeaders[i].index;
	
			var val = parseFloat(person[index]);
	
			var minVal = $scope.slider.minValue[index];
			var maxVal = $scope.slider.maxValue[index];
			
			if (minVal && val < Math.ceil(minVal)) {
				return false;
			}

			if (maxVal && val > Math.ceil(maxVal)) {
				return false;
				
			}	
			
		}
		
		return true;
	};
	
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
		var lines = $data.split(/\r?\n/);

		var result = [];

		var headers = lines[0].split(",");
		//console.log(headers);
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
				
				
				
				for(i=0; i < $scope.tableHeaders.length; i++){
					
					if($scope.tableHeaders[i].prop.hasSlider){
						var index = $scope.tableHeaders[i].index;	
						$scope.slider.min[index] = $scope.slider.minValue[index] = Math.min.apply(null, $items.map(function(a) {
							return a[index] ? Math.ceil(a[index]) : 0;
						}));
						
						$scope.slider.max[index] = $scope.slider.maxValue[index] = Math.max.apply(null, $items.map(function(a) {
							return a[index] ? Math.ceil(a[index]) : 0;
						}));
					}
					
					 if($scope.tableHeaders[i].validation.isNumber){
						var index = $scope.tableHeaders[i].index;
						 for(j=0; j< $items.length; j++){
							 $items[j][index] = parseFloat($items[j][index]);	
						 }	
					 }
					
				}
				
				
				
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
	
	$scope.save = function(){
		$scope.validateTabs();
		
		if($scope.errorMsg=='' || 1){
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
