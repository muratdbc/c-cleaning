
var directives = angular.module('directives', []);

directives.directive('file', function() {
  return {
    restrict: 'AE',
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        var files = event.target.files;
        var file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
      });
    }
  };
});

angular.module('crystalClean', ['ui.bootstrap',
 'ui.router',
 'templates',
 'ngCookies',
 'restangular',
 'directives',
 'ngFileUpload',
 'ngAutocomplete','ui.bootstrap'])
.config([
 '$stateProvider',
 '$urlRouterProvider',
 '$locationProvider',
 function($stateProvider, $urlRouterProvider, $locationProvider){
     $stateProvider.state('cleanings', {
          url: '/customer/cleanings',templateUrl: 'jobs/cleaning.html',
          controller: 'cleaningJobController'
      }).state('addCleaning', {
          url: '/customer/cleanings/new',templateUrl: 'jobs/addcleaning.html',
          controller: 'cleaningJobController'
      }).state('cleaningDetail', {
           url: '/customer/cleanings/:cleaningId',templateUrl: 'jobs/cleaningDetail.html',
           controller: 'cleaningJobDetailsController'
      }).state('providerCleanings', {
            url: '/provider/cleanings',templateUrl: 'provider/cleaning.html',
            controller: 'providerJobController'
      }).state('providerCleaningsDetail', {
             url: '/provider/cleanings/:cleaningId',templateUrl: 'provider/cleaningDetail.html',
             controller: 'providerJobDetailsController'
      });
    $urlRouterProvider.otherwise('/customer/cleanings');
    $locationProvider.html5Mode({
       enabled:true,
       requireBase: false
     });
}]);
