import angular from 'angular';

import template      from './favorite.html';
import SearchResults from '../searchBar/search-results.component.js';

export default angular
    .module('app.favorite', [])
    .component('favorite', {
        controller: class Favorite {

            constructor() {
                'ngInject';

                // Defaults
                this.favorites = [];
                this.getFavoritesFromLocal();
            }

            getFavoritesFromLocal() {
               for (var item in localStorage) {
                        this.favorites.push(JSON.parse(localStorage[item]));
                }
            }

        },
        template
    })
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        'ngInject';

        $stateProvider
            .state('favorites', {
                url       : '/favorites',
                component : 'favorite',
            })
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    }).name;