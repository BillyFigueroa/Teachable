import template from './search-results-item.html';

export const SearchResultsItemComponent = {
    bindings: {
        gem: '<'
    },
    template,
    controller: class SearchResultsItem {

        constructor($http, $stateParams) {
            'ngInject';

            // Dependencies
            this.$http  = $http;

            var { gem } = $stateParams;
            this.queryTarget = gem;
        }

    }
};