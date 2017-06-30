import angular from 'angular';

import template from './search-bar.html';

class SearchBar {
    constructor($state) {
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
        controllerAs : 'search',
        template
    }).name;