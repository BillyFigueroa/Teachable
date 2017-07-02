import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import './app.css';

import { Config }           from './app.config';
import { SearchModule }     from './components/search/search.module';
import { FavoriteModule }   from './components/favorite/favorite.module';
import { NavigationModule } from './components/common/header/navigation.module';

const MODULE_NAME = 'teachable';

export default angular
    .module(MODULE_NAME, [
        uiRouter,
        SearchModule,
        FavoriteModule,
        NavigationModule
    ])
    .component(MODULE_NAME, {
        template: `
            <navigation></navigation>
            <div ui-view></div>
        `
    })
    .config(Config)
    .name;

angular.bootstrap(document, [MODULE_NAME]);