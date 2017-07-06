angular.module('osiastedian', [])
  .controller('SkillsController', function($scope, $http) {
    $scope.SkillSets = [];
    $http.get("data/SkillList.json").
    then(function(response){
      for(var i=0; i<response.data.length ; i++)
      {
          $http.get("data/"+response.data[i]).
          then(function(response)
            {
              $scope.SkillSets.push(response.data);
            }      
          );
      }
    });
  });