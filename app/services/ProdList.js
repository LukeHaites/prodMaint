/**
 * Created by Luke on 30/06/2014.
 */

prodMaint.factory('prodList', function ($http, $log) {
    return {
        getAll: function(successcb) {
            $http({method: 'GET', url: 'http://localhost:3030/api/products/'})
                .success(function(data, status, headers, config) {
                    successcb(data);
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers, config);
                })
        },
        deleteItem: function(id) {
            $http({method: 'DELETE', url: 'http://localhost:3030/api/products/'+id})
                .success(function(data, status, headers, config) {
                    console.log("Item " + id + " deleted");
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers, config);
                })
        },
        editItem: function(id, item) {
            $http({method: 'PUT', url: 'http://localhost:3030/api/products/'+id, data: item})
                .success(function(data, status, headers, config) {
                    console.log("Item " + id + " updated");
                })
                .error(function(data, status, headers, config){
                    $log.warn(data, status, headers, config);
                })
        }
    };
});