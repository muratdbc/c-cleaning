angular.module('crystalClean').factory('jobService', ['Restangular', function(Restangular){

    // this is service object with list of methods in it
    // this object will be used by controller
    var service = {
        getJobs: getJobs
    };


    // get example with given id from server by using Restangular
    function getExample(userId){
        return Restangular.all('examples'+userId+'/jobs').getList();
    }

    return service;

}]);
