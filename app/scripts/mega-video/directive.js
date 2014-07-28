angular.module('mega-video', [])
    .directive('megavideo', function ($sce) {
        return {
            restrict: 'E',
            templateUrl: "scripts/mega-video/tmpl.html",
            scope: true,
            link: function (scope, elem, attr, ctrl) {
                scope.player = elem.find('video')[0];
                scope.sources = v({
                        webmSrc: { type: 'video/webm' },
                        mp4Src: { type: 'video/mp4' },
                        oggSrc: { type: 'video/ogg' },
                    }).chain()
                    .filter(function(srce){
                        return attr[srce] != null;
                    })
                    .map(function(key, sourceType, arr){
                        return {
                            src: $sce.trustAsResourceUrl(attr[key])
                            ,type: sourceType.type
                        } })
                    .value();
                scope.video.height = attr.height || "";
                scope.video.width = attr.width || "";
            },
            controller: function ($scope) {
                $scope.video = {
                    play: function () {
                        $scope.player.play();
                        this.status = 'play';
                    },
                    pause: function () {
                        $scope.player.pause();
                        this.status = 'pause';
                    },
                    stop: function () {
                        $scope.player.pause();
                        $scope.player.currentTime = 0;
                        this.status = 'stop';
                    },
                    togglePlay: function () {
                        $scope.video.status == 'play' 
                            ? $scope.video.pause()
                            : $scope.video.play();
                    }
                };
            }
        }
    })