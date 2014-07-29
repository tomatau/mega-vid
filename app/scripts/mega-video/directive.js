angular.module('mega-video', [])
            // scope on both is consistent
            // controller can give itself to link via scope
            // controller can sort of give itself to everything via this
            // this is inconvenient in link but possible
            // this is available easily in child controllers
    .directive('megavideo', function ($sce) {
        return {
            restrict: 'E',
            templateUrl: "scripts/mega-video/tmpl.html",
            transclude: true,
            scope: true,
            controllerAs: 'video',
            link: function (scope, elem, attr) {
                scope.height = attr.height || "";
                scope.width = attr.width || "";
                // controller 'this' is at scope.video
                scope.sources = v({
                        webmSrc: { type: 'video/webm' },
                        mp4Src: { type: 'video/mp4' },
                        oggSrc: { type: 'video/ogg' },
                    }).chain()
                    .filter(function(srce){ return ( attr[srce] != null ); })
                    .map(function(key, sourceType, arr){
                        return {
                            src: $sce.trustAsResourceUrl(attr[key]),
                            type: sourceType.type,
                        };
                    })
                    .value();
            },
            controller: function ($scope, $element) {
                // this.sources = sources;
                var player = $element.find('video')[0],
                    status;
                angular.extend(this, {
                    play: function () {
                        player.play();
                        status = 'play';
                    },
                    pause: function () {
                        player.pause();
                        status = 'pause';
                    },
                    stop: function () {
                        player.pause();
                        player.currentTime = 0;
                        status = 'stop';
                    },
                    togglePlay: function () {
                        ( status == 'play' )
                            ? this.pause()
                            : this.play();
                    },
                    setVolume: function (level) {
                        player.volume = level;
                    }
                });
            }
        }
    });