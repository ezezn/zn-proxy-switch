define(['./module'], function(navigator) {
    'use strict';

    navigator.directive('znNavigator', [function() {

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                console.log('Titlebar');
                $document.bind('keyup', function(e) {
                    digestIncoming({
                        origin: 'keyUp',
                        code: e.which,
                        event: e
                    });
                });

                $document.bind('keydown', function(e) {
                    digestIncoming({
                        origin: 'keyDown',
                        code: e.which,
                        event: e
                    });
                });

            }
        };
    }]);

});