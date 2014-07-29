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

            directiveElem = angular.element('<video-slider initial-volume="2">');
                // .html(directiveInput);
        }
    ));

    // it('should render a video element', function () {
    //     compileDirective();
    //     compiledHTML.find('video').should.have.length(1)
    // });

    // it('should render width', function () {
    //     directiveElem.attr('width', '60%');
    //     compileDirective();
    //     compiledHTML.attr('width').should.equal('60%');
    // });

    // it('should create a source elem with src attr from the ogg-src directive attr', function () {
    //     var srcAtr = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
    //     directiveElem.attr('ogg-src', srcAtr);
    //     compileDirective();
    //     compiledHTML.find('source[type="video/ogg"]').attr('src')
    //         .should.equal(srcAtr);

    //     // console.log(compiledHTML[0])
    //     compiledHTML.find('source').should.have.length(1)
    // });

    // it('should create multiple source elem from multiple *-src directive attrs', function () {
    //     var oggAtr = 'https://ia600500.us.archive.org/1/items/Duck_and_Cover/1951_duck_and_cover.ogv';
    //     var mp4Atr = 'https://archive.org/download/Duck_and_Cover/1951_duck_and_cover_512kb';
    //     var webmAttr = 'http://video.webmfiles.org/big-buck-bunny_trailer.webm';
    //     directiveElem
    //         .attr('ogg-src', oggAtr)
    //         .attr('mp4-src', mp4Atr)
    //         .attr('webm-src', webmAttr);

    //     compileDirective();
    //     compiledHTML.find('source[type="video/ogg"]')
    //         .attr('src')
    //         .should.equal(oggAtr);
    //     compiledHTML.find('source[type="video/mp4"]')
    //         .attr('src')
    //         .should.equal(mp4Atr);
    //     compiledHTML.find('source[type="video/webm"]')
    //         .attr('src')
    //         .should.equal(webmAttr);
    //     compiledHTML.find('source').should.have.length(3)
    // });

    function compileDirective(){
        compiledHTML = _$compile( directiveElem.get(0) )(currentScope);
        currentScope.$digest();
    }
});