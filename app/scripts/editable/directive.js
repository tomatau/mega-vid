angular.module('editable', [])
    .directive('editme', function ($sce) {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: "scripts/editable/tmpl.html"
        }
    })