import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import './app.css';
import './components/search/search.css';

import { SearchModule }  from './components/search/search.module';
import SearchResults     from './components/search/search-results/search-results.component';
import SearchResultsItem from './components/search/search-results/search-results-item.component';
import Favorite          from './components/favorite/favorite.component';
import Navigation        from './components/common/header/navigation.module';

const MODULE_NAME = 'teachable';

export default angular
    .module(MODULE_NAME, [
        uiRouter,
        Navigation,
        SearchModule,
        Favorite,
    ])
    .component(MODULE_NAME, {
        template: `
            <navigation></navigation>
            <div ui-view></div>
        `
    }).name;

angular.bootstrap(document, [MODULE_NAME]);