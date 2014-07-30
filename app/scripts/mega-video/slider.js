angular.module('mega-video')
    .directive('videoSlider', function () {
        var sliderElem;
        return {
            restrict: 'E',
            templateUrl: "scripts/mega-video/slider.html",
            require: "?^megavideo",
            controllerAs: 'slider',
            link: function (scope, elem, attr, ctrl) {
                scope.setVolume = function(volume){ // make available in ctronller
                    ctrl.setVolume(parseFloat(volume) / 10);
                    sliderElem.slider('setValue', volume)
                }
                scope.setVolume(attr.initialVolume || 0); // start it
            },
            controller: function ($element, $scope) {
                sliderElem = $element.find('#slider-input')
                    .slider({ min: 0, max: 10 });

                sliderElem.on('slide', function(slEv){
                        $scope.$apply(function(){
                            $scope.setVolume(slEv.value)
                        });
                    });
            }
        };
    });