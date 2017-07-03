import angular from 'angular';

import { FavoriteComponent } from './favorite.component';
import { FavoriteService }   from './favorite.service';

export const FavoriteModule = angular
    .module('favorite', [])
    .component('favorite', FavoriteComponent)
    .service('FavoriteService', FavoriteService)
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