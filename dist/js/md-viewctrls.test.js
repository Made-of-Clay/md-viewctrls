describe('md-viewctrls', function () {
    var container;

    before(function () {
        container = $('#container');
    });

    describe('init widget', function () {
        it('should add a class to the container on init', function () {
            let hasClass = () => container.hasClass('md-viewctrls');
            // var hasClass = container.hasClass('md-viewctrls');
            expect(hasClass()).to.be.false;
            container.mdviewctrls();
            expect(hasClass()).to.be.true;
        });
        it('should error if required options are not passed', function () {
            let init = () => {
                container.mdviewctrls({
                    controls: [{ foo: 'bar' }]
                });
            };
            expect(init).to.throw(ReferenceError);
        });
        it('should error if callbacks are not functions', function () {
            let init = () => {
                container.mdviewctrls({
                    controls: [{
                        text: 'Edit',
                        callback: 'foo'
                    }]
                });
            };
            expect(init).to.throw(TypeError);
        });
        it('should build a control button');
        it('should trigger callback on click of button');
        it('should build up to 2 controls before hiding the rest in vertical dot icon');
        it('should show/hide list of buttons when clicking vertical dot');
        it('should trigger callback on click of list item (button)');
    });
});