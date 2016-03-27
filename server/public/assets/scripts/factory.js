myApp.factory("PetManager", ["$http", function($http){
  var greeting = function() {
    console.log("Works");
  };


  var getData = function() {
    $http.get("/pets").then(function(response){
      data.result = response.data;
      console.log(data);
    });
  };

  var data = {};

  var postData = function(data){
    $http.post("/pets", data).then(function(response){
      console.log(response.data);
      getData();
    });
  };

  var deleteData = function(data){
    $http.delete("/pets", data).then(function(response){
      console.log(data);
      console.log(response.data.name);
      getData();
    });
  }


  return {
    postData: postData,
    getData: getData,
    deleteData: deleteData,
    greeting: greeting,
    data: data
  };
}]);
