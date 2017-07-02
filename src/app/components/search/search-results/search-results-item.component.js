import template from './search-results-item.html';

export const SearchResultsItemComponent = {
    template,
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

    }
};