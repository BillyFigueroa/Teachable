import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import './app.css';
import './components/search/search.css';

import { SearchModule }   from './components/search/search.module';
import { FavoriteModule } from './components/favorite/favorite.module';
import Navigation        from './components/common/header/navigation.module';

const MODULE_NAME = 'teachable';

export default angular
    .module(MODULE_NAME, [
        uiRouter,
        Navigation,
        SearchModule,
        FavoriteModule
    ])
    .component(MODULE_NAME, {
        template: `
            <navigation></navigation>
            <div ui-view></div>
        `
    })
    .name;

angular.bootstrap(document, [MODULE_NAME]);