import angular from 'angular';

import './search.css'

class SearchResults {
    constructor($http, $stateParams) {
        // Dependencies
        this.$http  = $http;

        // Defaults
        this.foundGems = {};

        var { hash, query } = $stateParams;
        this.queryTarget = query;

        // This should go in a Service or a Factory
        this.$http.get(`https://rubygems.org/api/v1/search.json?&query=${query}`).then((response) => {
            // map through all the favorites and if it has a localStorage entry add a favorite key
            this.foundGems = response.data.map(function(gem, idx) {
                var name = gem.name;
                if (localStorage.getItem(name)) {
                    gem.favorite = true;

                }

                return gem;
            });
        });
    }

    toggleFavorite(gem, ev) {
        var target = ev.currentTarget;

        if (angular.element(target).hasClass('active')) {
            angular.element(target).removeClass('active');
            localStorage.removeItem(gem.name);
        } else {
            angular.element(target).addClass('active');
            localStorage.setItem(gem.name, JSON.stringify(gem));
        }
    }
}

export default angular
    .module('app.searchResults', [])
    .component('searchResults', {
        controller   : SearchResults,
        controllerAs : 'searchResults',
        template     : `
            <div class="container-fluid results-container">
                <div class="row justify-content-sm-center py-3">
                    <div class="col-10">
                        <p class="display-4 py-3">
                            Search <span class="text-muted font-italic target-text">for {{ searchResults.queryTarget }}<span>
                        </p>

                        <hr />

                        <div data-ng-if="searchResults.foundGems.length > 0" class="results" ng-repeat="gem in searchResults.foundGems">
                            <div class="row">
                                <div class="col-10">
                                    <h4>
                                        <a ui-sref="gem({ gem: gem.name})">{{ gem.name }}</a>
                                        <small class="text-muted font-italic version-number">{{ gem.version }}</small>
                                        <a class="favorite" ng-class="{active : gem.favorite}" ng-click="searchResults.toggleFavorite(gem, $event)" href="" title="Add to favorites">&#9733;</a>
                                    </h4>
                                    {{ gem.info }}
                                </div>
                                <div class="col-2">
                                        <h4 class="text-right">
                                            {{ gem.downloads | number }}
                                        </h4>
                                        <p class="text-uppercase text-right">
                                            <small>downloads</small>
                                        </p>
                                </div>
                            </div>
                        </div>

                        <div data-ng-if="searchResults.foundGems.length == 0" class="results text-center lead">No Results found for '{{ searchResults.queryTarget }}'</div>
                    </div>
                </div>
            </div>
        `
    }).name;