angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.dogs = [
        {rank: '1', dog: 'Yogi'},
        {rank: '2', dog: 'Cad'},
        {rank: '3', dog: 'Lucy'}
    ];
});
