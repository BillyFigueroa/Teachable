export class SearchService {
    constructor($http) {
        'ngInject';

        this.$http = $http;
    }

    getGemDependencies(query) {
        return this.$http.get(`https://rubygems.org/api/v1/search.json?&query=${query}`)
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