angular.module('crystalClean').controller('cleaningJobController', function ($scope,$cookies,jobService) {
  console.log("here")
  $scope.lastName="Gocmen"
  var userIdCookie = $cookies.get('user_id');
  jobService.getJobs(userIdCookie).then(function(response){
    $scope.jobs=response[0].jobs
  })
});
