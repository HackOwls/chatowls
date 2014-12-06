app.controller('MessagesCtrl', function MessagesCtrl($scope, $firebase, $log,$http) {
	var APIKEY = "trnsl.1.1.20141204T090257Z.23d0a0607bff2584.f2816ba8b99aafd0c78391b4154631a6e560c8cf";
	var TRANSLATEURL = "https://translate.yandex.net/api/v1.5/tr.json/translate";

  $scope.$watch('msg', function(){
     // $log.log(arguments);

    $http(
     {
	    url: TRANSLATEURL,
	    method: 'GET',
	    params:
	    {
	        lang: "en-ru",
	        text: $scope.msg,
	        key: APIKEY
	    }
      }
    ).success(function(data) {
        console.log(data);
    });

  });

});

