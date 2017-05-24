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
  $scope.popup1 = {
    opened: false
  };
  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.format = 'dd-MM-yyyy'
  $scope.dateOptions = {
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };
  $scope.dt=""
  $scope.openJobDatePopup = function() {
    $scope.popup1.opened = true;
  };



  $scope.addCleaning=function(){

   }
});
