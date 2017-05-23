angular.module('crystalClean').controller('cleaningJobController', function ($scope,$cookies,jobService) {
  console.log("here")
  $scope.lastName="Gocmen"
  var userIdCookie = $cookies.get('user_id');
  jobService.getJobs(userIdCookie).then(function(response){
    $scope.jobs=response[0].jobs
  })
  // this get the results from google auto complete
  $scope.result1 = '';
  $scope.options1 = null;
  $scope.details1 = '';

  $scope.addCleaning=function(){

   }
});
