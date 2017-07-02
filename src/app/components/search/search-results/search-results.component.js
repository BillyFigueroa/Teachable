import template from './search-results.html';

export const SearchResultsComponent = {
    template,
    controller: class SearchResults {

        constructor($http, $stateParams) {
            'ngInject';

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
};