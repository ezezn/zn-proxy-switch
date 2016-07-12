define(['./module'], function(navigator) {
    'use strict';

    navigator.constant('NAV_KEY_CODES', {
        '38': 'pad_up',
        '39': 'pad_right',
        '40': 'pad_down',
        '37': 'pad_left',
        '13': 'enter',
        '27': 'escape',
        '32': 'space'
    });

    navigator.constant('NAV_KEY', {
        PAD_UP: 'pad_up',
        PAD_RIGHT: 'pad_right',
        PAD_DOWN: 'pad_down',
        PAD_LEFT: 'pad_left',
        ENTER: 'enter',
        ESC: 'escape',
        SPACE: 'space'
    });

    navigator.constant('NAV_KEY_ALLOW_HOLD', {
        'pad_up': true,
        'pad_right': true,
        'pad_down': true,
        'pad_left': true,
        'enter': true,
        'escape': false,
        'space': false
    });
});