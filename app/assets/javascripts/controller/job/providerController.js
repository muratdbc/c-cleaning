angular.module('crystalClean').controller('providerJobDetailsController',
function($scope,$stateParams,$cookies,jobService,FileUploader){
  var userIdCookie = $cookies.get('user_id');
  jobService.getJob(userIdCookie,$stateParams.cleaningId).then(function(response){
    $scope.job=response.job
  })
//   $scope.uploaderOptions  =  {
//     removeAfterUpload:  false,
//     s3Upload: true,
//     s3Options: {
//         accessKeyId:  'AKIAJ2T2UGRVGHAXPZBQ',
//         secretAccessKey:  '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',
//         region:  'us-west-2',
//         bucket:  'c-cleaning',
//         folder:  'uploads/'
//     }
//
// };
//   var uploader = $scope.uploader = new FileUploader($scope.uploaderOptions);
//   FileUploader.onSuccessItem = function (item, response, status, headers) {
//       // Your code here
//       console.log(response)
//   };
//   // FILTERS
//
//   uploader.filters.push({
//     name: 'imageFilter',
//     fn: function(item /*{File|FileLikeObject}*/, options) {
//        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
//             return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
//         }
//     });
   $scope.sizeLimit      = 10585760; // 10MB in Bytes
   $scope.creds = {
      bucket: 'c-cleaning',
      access_key: 'AKIAJ2T2UGRVGHAXPZBQ',
      secret_key: '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'
    }

   $scope.submit = function() {
     AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
     AWS.config.region = 'us-west-2';
     var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });


         // Perform File Size Check First
         var fileSize = Math.round(parseInt($scope.files.size));
         if (fileSize > $scope.sizeLimit) {
           toastr.error('Sorry, your attachment is too big. <br/> Maximum '  + $scope.fileSizeLabel() + ' file attachment allowed','File Too Large');
           return false;
         }
         // Prepend Unique String To Prevent Overwrites
         var uniqueFileName = $scope.uniqueString() + '-' + $scope.file.name;

         var params = { Key: uniqueFileName, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };

         bucket.putObject(params, function(err, data) {
           if(err) {
             alert("something went wrong try again")
             return false;
           }
           else {
              console.log(data)
           }
         })
     }

     $scope.fileSizeLabel = function() {
     // Convert Bytes To MB
     return Math.round($scope.sizeLimit / 1024 / 1024) + 'MB';
   };

   $scope.uniqueString = function() {
     var text     = "";
     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

     for( var i=0; i < 8; i++ ) {
       text += possible.charAt(Math.floor(Math.random() * possible.length));
     }
     return text;
   }
});
angular.module('crystalClean').controller('providerJobController', function ($scope,$cookies,jobService) {
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
    console.log($scope.result1)
    console.log($scope.unitNumber)
    console.log($scope.job_date)
    console.log($scope.job_time)
    console.log($scope.notes)
    console.log($scope.back_to_back)
   }
});
