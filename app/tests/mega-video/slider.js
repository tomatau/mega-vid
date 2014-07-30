describe('Slider Directive', function () {
    var _$compile,
        currentScope,
        directiveElem,
        directiveInput = "inputText",
        compiledHTML;

    beforeEach(module('mega-video'));
    beforeEach(module('tmpls'));

    beforeEach(inject(
        function($rootScope, $compile) {
            _$compile = $compile;
            currentScope = $rootScope.$new();

            directiveElem = angular.element('<megavideo>').html(
                angular.element('<video-slider>')
            );
                // .html(directiveInput);
        }
    ));

    it('should render an input', function () {
        compileDirective();
        compiledHTML.find('video-slider').find('input').should.have.length(1)
    });

    it('should set initial volume', function () {
        var sliderSpy = sinon.spy(angular.element.prototype, 'slider');
        directiveElem.find('video-slider').attr('initial-volume', '2');
        compileDirective();
        expect(sliderSpy).toHaveBeenCalledWith({
            min: 0,
            max: 10
        });
        expect(sliderSpy).toHaveBeenCalledWith('setValue', '2');
        sliderSpy.restore();
    });

    it('should set the value when dragged', function () {
        // sinon.stub(angular.element.prototype, 'slider').returns({
        //         on: function(){},
        //         slider: function(){}
        //     });
        compileDirective();
        var setVolumeSpy = sinon.spy(directiveElem.data('$megavideoController'), 'setVolume');
        var sliderScope = directiveElem.find('video-slider').data('$scope')
        sliderScope.setVolume(3);
        expect(setVolumeSpy).toHaveBeenCalledWith(0.3)
    });

    function compileDirective(){
        compiledHTML = _$compile( directiveElem.get(0) )(currentScope);
        currentScope.$digest();
    }
});