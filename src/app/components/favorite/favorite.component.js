import angular from 'angular';

import template from './favorite.html';

export const FavoriteComponent = {
    template,
    controller: class Favorite {

        constructor(FavoriteService) {
            'ngInject';

            this.FavoriteService = FavoriteService;
        }

        $onInit() {
            // Defaults
            this.favorites = this.FavoriteService.getFavoritesFromLocal();
        }

    }
};