define(['./module'], function(navigator) {
    'use strict';

    navigator.directive('znNavigator', ['$document', 'navigatorDispatcher', function($document, NavigatorDispatcher) {

        var preventDefault = function(evt) {
                evt.preventDefault();
                evt.stopPropagation();
                return false;
            },
            isNotSameIncoming = function(a, b) {
                return !(a && b && a.origin == b.origin && a.code == b.code && a.holding == b.holding);
            },
            digestIncoming = function(incomingObj) {
                var cmd;
                // console.log(incomingObj);
                if (lastIncoming) {
                    incomingObj.holding = lastIncoming.code == incomingObj.code &&
                        incomingObj.origin !== 'keyUp' &&
                        lastIncoming.origin !== 'keyUp';
                } else {
                    incomingObj.holding = false;
                }
                preventDefault(incomingObj.event);
                if (isNotSameIncoming(incomingObj, lastIncoming)) {
                    /*cmd = navigatorCommandCreator.createCommand(incomingObj);
                    if (cmd) {
                        navigatorManager.dispatch(cmd);
                    }*/
                    console.log(incomingObj);
                }
                lastIncoming = incomingObj;
            },
            lastIncoming = false;

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                console.log('Init Navigation Catcher');
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