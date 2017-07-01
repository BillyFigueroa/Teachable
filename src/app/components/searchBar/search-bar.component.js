import angular from 'angular';

import template from './search-bar.html';

class SearchBar {
    constructor($state) {
        'ngInject';

        this.$state     = $state;
        this.searchWord = null;
    }

    findGems() {
        this.$state.go('results', {query: this.searchWord});
    }
}

export default angular
    .module('app.search', [])
    .component('searchBar', {
        controller   : SearchBar,
        template
    }).name;