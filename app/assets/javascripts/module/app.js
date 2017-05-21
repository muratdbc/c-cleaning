'use strict';
angular.module('crystalClean', ['ui.bootstrap','ui.router',
 'templates','ngCookies'])
.config([
 '$stateProvider',
 '$urlRouterProvider',
 '$locationProvider',
 function($stateProvider, $urlRouterProvider, $locationProvider){
     $stateProvider.state('customer', {
          url: '/customer/cleanings',templateUrl: 'jobs/cleaning.html',
          controller: 'cleaningJobController'
      }).
     state('addCleaning', {
          url: '/customer/cleanings/new',templateUrl: 'jobs/addcleaning.html',
          controller: 'cleaningJobController'
      });
    $urlRouterProvider.otherwise('/customer/cleanings');
    $locationProvider.html5Mode({
       enabled:true,
       requireBase: false
     });
 }]);
