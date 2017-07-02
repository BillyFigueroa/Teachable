import angular from 'angular';

import { SearchComponent }            from './search.component';
import { SearchResultsComponent }     from './search-results/search-results.component';
import { SearchResultsItemComponent } from './search-results/search-results-item.component';
import { SearchService }              from './search.service.js';

import './search.css';

export const SearchModule = angular
    .module('search', [])
    .component('search', SearchComponent)
    .component('searchResults', SearchResultsComponent)
    .component('searchResultsItem', SearchResultsItemComponent)
    .service('SearchService', SearchService)
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        'ngInject';

        $stateProvider
            .state('home', {
                url       : '/',
                component : 'search',
            })
            .state('results', {
                url       : '/search?query',
                component : 'searchResults',
                resolve: {
                    gems: function($stateParams, SearchService) {
                        var { query } = $stateParams;

                        return SearchService.getGemDependencies(query)
                            .then(response => response);
                    }
                }
            })
            .state('gem', {
                url       : '/gem/{gem}',
                component : 'searchResultsItem',
            })
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .name;