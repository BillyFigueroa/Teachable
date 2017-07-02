import template from './search.html';

export const SearchComponent = {
    template,
    controller: class SearchBar {

        constructor($state) {
            'ngInject';

            this.$state     = $state;
            this.searchWord = null;
        }

        findGems() {
            this.$state.go('results', {query: this.searchWord});
        }

    }
};