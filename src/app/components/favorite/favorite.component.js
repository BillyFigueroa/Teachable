import angular from 'angular';

import template from './favorite.html';

export const FavoriteComponent = {
    template,
    controller: class Favorite {

        constructor() {
            'ngInject';

            // Defaults
            this.favorites = [];
            this.getFavoritesFromLocal();
        }

        getFavoritesFromLocal() {
           for (var item in localStorage) {
                    this.favorites.push(JSON.parse(localStorage[item]));
            }
        }

    }
};