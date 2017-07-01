import angular from 'angular';

import template from './search-results-item.html';
import './search.css'

export default angular
    .module('app.searchResultsItem', [])
    .component('searchResultsItem', {
        controller: class SearchResultsItem {

            constructor($http, $stateParams) {
                'ngInject';

                // Dependencies
                this.$http  = $http;

                // Defaults
                this.gem = {};

                var { hash, gem } = $stateParams;
                this.queryTarget = gem;

                // This should go in a Service or a Factory
                this.$http.get(`https://rubygems.org/api/v1/gems/${gem}.json`).then((response) => {
                    this.gem = response.data;
                });
            }

        },
        template
    })
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        'ngInject';

        $stateProvider
            .state('gem', {
                url       : '/gem/{gem}',
                component : 'searchResultsItem',
            })
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    }).name;