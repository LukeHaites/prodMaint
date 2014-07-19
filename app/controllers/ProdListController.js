/**
 * Created by Luke on 12/07/2014.
 */

'use strict';

prodMaint.controller('prodListCtrl',
    function prodListCtrl($scope, prodList) {
        $scope.sortorder = 'name';
        prodList.getAll(function(data){
            $scope.items = data;
        });

        $scope.deleteItem = function(id) {
            prodList.deleteItem(id);
        }
    }
);