export class FavoriteService {
    constructor() {
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