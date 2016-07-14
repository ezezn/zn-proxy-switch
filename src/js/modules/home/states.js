/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['../../states'], function(states) {
    'use strict';

    return states.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home', {
            templateUrl: 'js/modules/home/home.view.html',
            controller: 'HomeCtrl'
        });

    }]);
});