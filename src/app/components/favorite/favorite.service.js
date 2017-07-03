export class FavoriteService {
    constructor($http, RUBYGEM_API) {
        'ngInject';
    }

    getFavoritesFromLocal() {
        var favorites = [];

        for (var item in localStorage) {
            favorites.push(JSON.parse(localStorage[item]));
        }

        return favorites;
    }
}