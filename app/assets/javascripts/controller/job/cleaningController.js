angular.module('crystalClean').controller('cleaningJobController', function ($scope,$cookies,CleaningService) {
  console.log("here")
  $scope.lastName="Gocmen"
  var userIdCookie = $cookies.get('user_id');
  jobs=CleanigService.getjobs(userIdCookie)
});
