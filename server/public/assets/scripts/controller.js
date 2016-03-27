myApp.controller("AddController", ["$scope", "PetManager", function($scope, PetManager){
  $scope.newAnimal = {};
  $scope.submitPet = function(data) {
    PetManager.postData(data);

  };
}]);

myApp.controller("ShowController", ["$scope", "PetManager", function($scope, PetManager){
  $scope.animalArray = PetManager.data;
  PetManager.getData();
  $scope.deleteButton = function(data){
      //how to associate the button with the delete information? 
    PetManager.deleteData(data);
    console.log("meow");

  }

}]);
