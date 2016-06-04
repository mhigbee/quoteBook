/**
 * Created by matthigbee on 6/2/16.
 */
angular.module('quoteBook').controller('MainCtrl', function($scope, dataService){

    $scope.quotes = dataService.getData();

    $scope.deleteMe = function(textToDelete){
        dataService.removeData(textToDelete);
    }

    $scope.addQuote = function(){
        var newQuote = {
            text:$scope.newQuoteText,
            author:$scope.newQuoteAuthor
        }
        if(dataService.addData(newQuote))
        {
            $scope.newQuoteText = '';
            $scope.newQuoteAuthor= '';
        }
    }
});