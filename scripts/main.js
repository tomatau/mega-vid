angular.module("mega-video",[]).directive("megavideo",function(e){return{restrict:"E",templateUrl:"scripts/mega-video/tmpl.html",scope:!0,link:function(t,i,o){t.player=i.find("video")[0],t.sources=v({webmSrc:{type:"video/webm"},mp4Src:{type:"video/mp4"},oggSrc:{type:"video/ogg"}}).chain().filter(function(e){return null!=e}).map(function(t,i){return{src:e.trustAsResourceUrl(o[t]),type:i.type}}).value(),t.video.height=o.height||"",t.video.width=o.width||""},controller:function(e){e.video={play:function(){e.player.play(),this.status="play"},pause:function(){e.player.pause(),this.status="pause"},stop:function(){e.player.pause(),e.player.currentTime=0,this.status="stop"},togglePlay:function(){"play"==e.video.status?e.video.pause():e.video.play()}}}}}),angular.module("editable",[]).directive("editme",function(){return{restrict:"A",transclude:!0,templateUrl:"scripts/editable/tmpl.html"}}),angular.module("main",["mega-video","editable"]).run(function(){console.log("hi")}).controller("Ctrl",function(){});