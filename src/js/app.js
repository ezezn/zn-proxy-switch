/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define("app", [
    'angular',
    'angular-ui-router',
    //'text!',
    './component/titlebar/index',
    //    './core/ui-components/index',
    //    './core/player/index',
    //    './home/index',
    //    './core/background/index',
    './modules/home/index',
    './states'
], function(ng) {
    'use strict';

    return ng.module('app', [
        'app.component.titlebar',
        //        'app.core.ui.components',
        //        'app.core.player',
        //        'app.core.background',
        //        'app.core.launcher',
        'app.module.home',
        'app.states',
        'ui.router'
    ]).run(function($state, $rootScope) {

        // Create the menubar


        $state.go('home');
    });
});