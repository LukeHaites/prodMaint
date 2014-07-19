/**
 * Created by Luke on 18/07/2014.
 */

prodMaint.controller('editItemCtrl', function($scope, $modal, prodList){
    $scope.editItem = function(){
        var modalInstance = $modal.open({
            templateUrl: 'partials/editItemModal.html',
            controller: 'editItemModalCtrl',
            resolve: {
                itemCurrent: function () {
                    return $scope.item;
                }
            }
        });

        modalInstance.result.then(function (itemData) {
            if (itemData != 'Cancel'){
                $scope.item.Code = itemData.Code;
                $scope.item.Description = itemData.Description;
                $scope.item.Season = itemData.Season;

                prodList.editItem(itemData.id, itemData);
            }
        });
    };
});

prodMaint.controller('editItemModalCtrl', function ($scope, $modalInstance, itemCurrent) {
    $scope.itemNew = {
        Code: itemCurrent.Code,
        Description: itemCurrent.Description,
        Season: itemCurrent.Season
    };

    $scope.ok = function () {
        $modalInstance.close($scope.itemNew);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('Cancel');
    };
});