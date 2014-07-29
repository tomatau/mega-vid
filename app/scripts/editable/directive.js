angular.module('editable', [])
    .directive('editme', function ($sce) {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: "scripts/editable/tmpl.html",
            controller: function ($scope, $element) {
                var cEd = $element.find('[contenteditable]');
                $scope.$watch('editing', 
                    function (editing) {
                        //  domnode hasn't updated contenteditable yet so we can't focus 
                        setTimeout(function(){
                            if (editing) cEd.focus();
                        }, 0) // OR tabindex=-1
                    }
                )
            }
        }
    })