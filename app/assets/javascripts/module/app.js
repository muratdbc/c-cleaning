'use strict';
angular.module('crystalClean', ['ui.bootstrap','ui.router',
 'templates','ngCookies','restangular','ngAutocomplete','ui.bootstrap'])
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
