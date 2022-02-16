
var filterapp = angular.module("filterapp",[]);

filterapp.controller("myctrl",function($scope,$http){
   
    $http.get('https://2147229mca.github.io/veh_json/vehdetaiuls.json')
    .success(function(response)
    {
        $scope.cars = response.cars;
        console.log( response.cars);
    });

    $scope.sortType = 'SL_No';
    $scope.sortReverse = false;
});

// custom flter 
filterapp.filter('firstletter', function() {
    return function(name) {
        const str = name.toLowerCase() ;
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2;
    }
});

filterapp.filter('vnumber', function() {
    return function(regno) {
        const str = regno.toUpperCase().trim() ;
        const str2 = str[0]+str[1]+'-'+str[2]+str[3]+'-'+str[4]+str[5]+'-'+str.slice(6,10);
        return str2;
    }
});
