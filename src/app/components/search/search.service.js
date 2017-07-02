export class SearchService {
    constructor($http, RUBYGEM_API) {
        'ngInject';

        this.$http  = $http;
        this.gemApi = RUBYGEM_API;
    }

    getGem(gem) {
        return this.$http.get(`${this.gemApi}/gems/${gem}.json`)
            .then(response => response.data);
    }

    getGemDependencies(query) {
        return this.$http.get(`${this.gemApi}/search.json?&query=${query}`)
            .then(response => response.data);
    }

    // map through all the favorites and if it has a
    // localStorage entry add a favorite key
    addFavoritesFromLocalStorage(gems) {
        return gems.map(function(gem, idx) {
            var name = gem.name;
            if (localStorage.getItem(name)) {
                gem.favorite = true;

            }

            return gem;
        });
    }
}