import template from './search-results.html';

export const SearchResultsComponent = {
    bindings: {
        gems: '<'
    },
    template,
    controller: class SearchResults {

        constructor($stateParams, SearchService) {
            'ngInject';

            this.SearchService = SearchService;

            // Grab search parameter to use for Search header
            this.queryTarget = $stateParams.query;
        }

        $onInit(SearchService) {
            // map through all the favorites and if it has a localStorage entry add a favorite key
            this.gems = this.SearchService
                                .addFavoritesFromLocalStorage(this.gems);
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