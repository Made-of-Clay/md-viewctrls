(function addToWidgetFactory($) {
    "use strict";
    /* globals jQuery, console */

    $.widget('moc.mdviewctrls', {
        options: {
            controls: []
        },
        mainClass: 'md-viewctrls',

        _create() {
            this.element.addClass(this.mainClass);
        },

        _init() {
            this._reqPropsPresent();
            this._callbacksAreFuncs();
            // only reaches beyond here if no errors are thrown
            // this._buildCtrls();
        },
        _reqPropsPresent() {
            var controls = this.options.controls;
            var reqProps = ['text', 'callback'];
            controls.forEach(control => {
                var missingProps = objHasProps(control, reqProps);
                if (missingProps.length) {
                    throw new ReferenceError(`Properties are missing on the ${control.text} control`);
                }
            });
        },
        _callbacksAreFuncs() {
            var controls = this.options.controls;
            controls.forEach(control => {
                if (!isFunction(control.callback)) {
                    throw new TypeError(`The "${control.text}" control callback is not a function; type ${typeof control.callback} was passed`);
                }
            });
        },

        // _buildCtrls() {
        //     // ;
        // }
    });
    function objHasProps(obj, propsToCheck) {
        var missingProps = [];
        propsToCheck.forEach(prop => {
            if (!obj.hasOwnProperty(prop)) {
                missingProps.push(prop);
            }
        });
        return missingProps;
    }
    function isFunction(check) {
        return typeof check === 'function';
    }
})(jQuery);

//# sourceURL=md-viewctrls.js