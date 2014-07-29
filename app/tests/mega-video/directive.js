describe('MegaVideo Directive', function () {
    var _$compile,
        currentScope,
        directiveElem,
        directiveInput = "inputText",
        compiledElem;

    beforeEach(module('mega-video'));
    beforeEach(module('tmpls'));

    beforeEach(inject(
        function($rootScope, $compile) {
            _$compile = $compile;
            currentScope = $rootScope.$new();
            directiveElem = angular.element('<megavideo>');
        }
    ));

    it('should render a video element', function () {
        compileDirective();
        compiledElem.find('video').should.have.length(1)
    });

    it('should render width', function () {
        directiveElem.attr('width', '60%');
        compileDirective();
        compiledElem.attr('width').should.equal('60%');
        directiveElem.attr('width', '200px');
        compileDirective();
        compiledElem.attr('width').should.equal('200px');
    });

    it('should create a source elem with src attr from the ogg-src directive attr', function () {
        var srcAtr = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
        directiveElem.attr('ogg-src', srcAtr);
        compileDirective();
        compiledElem.find('source[type="video/ogg"]').attr('src')
            .should.equal(srcAtr);
        compiledElem.find('source')
            .should.have.length(1)
    });

    it('should create multiple source elem from multiple *-src directive attrs', function () {
        var oggAtr = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
        var mp4Atr = 'https://archive.org/download/Duck_and_Cover/1951_duck_and_cover_512kb';
        var webmAttr = 'http://video.webmfiles.org/big-buck-bunny_trailer.webm';
        directiveElem
            .attr('ogg-src', oggAtr)
            .attr('mp4-src', mp4Atr)
            .attr('webm-src', webmAttr);

        compileDirective();
        compiledElem.find('source[type="video/ogg"]').attr('src')
            .should.equal(oggAtr);
        compiledElem.find('source[type="video/mp4"]').attr('src')
            .should.equal(mp4Atr);
        compiledElem.find('source[type="video/webm"]').attr('src')
            .should.equal(webmAttr);
        compiledElem.find('source').should.have.length(3)
    });

    it('should click and double click', function () {
        
    });

    it('should transclude into aside', function () {
        
    });

    it('should expose controller for setVolume', function () {
        var ctrl = compiledElem.data();
        console.log(ctrl)
    });

    function compileDirective(){
        compiledElem = _$compile( directiveElem.get(0) )(currentScope);
        currentScope.$digest();
    }
});