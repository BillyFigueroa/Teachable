import angular from 'angular';

import { FavoriteComponent } from './favorite.component';

export const FavoriteModule = angular
    .module('favorite', [])
    .component('favorite', FavoriteComponent)
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        'ngInject';

        $stateProvider
            .state('favorites', {
                url       : '/favorites',
                component : 'favorite',
            })
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .name;