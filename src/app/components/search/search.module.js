import angular from 'angular';

import { SearchComponent }            from './search.component';
import { SearchResultsComponent }     from './search-results/search-results.component';
import { SearchResultsItemComponent } from './search-results/search-results-item.component';

import './search.css';

export const SearchModule = angular
    .module('search', [])
    .component('search', SearchComponent)
    .component('search.results', SearchResultsComponent)
    .component('search.results.item', SearchResultsItemComponent)
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        'ngInject';

        $stateProvider
            .state('home', {
                url       : '/',
                component : 'search',
            })
            .state('results', {
                url       : '/search?query',
                component : 'search.results',
            })
            .state('gem', {
                url       : '/gem/{gem}',
                component : 'search.results.item',
            })
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .name;