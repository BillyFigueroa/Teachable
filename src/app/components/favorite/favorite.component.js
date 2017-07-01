import angular from 'angular';

import SearchResults from '../searchBar/search-results.component.js';

class Favorite {
    constructor($http, $stateParams) {
        // Dependencies
        this.$http  = $http;

        // Defaults
        this.favorites = [];
        this.getFavoritesFromLocal();
    }

    getFavoritesFromLocal() {
        for (var item in localStorage) {
            this.favorites.push(JSON.parse(localStorage[item]));
        }
    }
}

export default angular
    .module('app.favorite', [])
    .component('favorite', {
        controller   : Favorite,
        template     : `

            <div class="container-fluid results-container">
                <div class="row justify-content-sm-center py-3">
                    <div class="col-10">
                        <p class="display-4 py-3" style="font-family: roboto">
                            Favorites
                        </p>
                        <hr />
                        <div class="results" ng-repeat="gem in $ctrl.favorites">
                            <div class="row">
                                <div class="col-10">
                                    <h4>
                                        <a ui-sref="gem({ gem: gem.name})">{{ gem.name }}</a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).name;