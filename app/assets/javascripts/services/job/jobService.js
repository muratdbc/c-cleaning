angular.module('crystalClean').factory('jobService', ['Restangular', function(Restangular){
    Restangular.setDefaultHeaders({"Content-Type":"application/json"})
    // this is service object with list of methods in it
    // this object will be used by controller
    var service = {
        getJobs: getJobs,
        getJob: getJob
    };


    // get example with given id from server by using Restangular
    function getJobs(userId){
      return Restangular.all('users/'+userId+'/jobs').getList();
    }
    function getJob(userId,cleaningId){
      return Restangular.one('users/'+userId+'/jobs/'+cleaningId).get();
    }
    return service;

}]);
