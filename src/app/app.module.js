import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import './app.css';

import SearchBar         from './components/searchBar/search-bar.component';
import SearchResults     from './components/searchBar/search-results.component';
import SearchResultsItem from './components/searchBar/search-results-item.component';
import Favorite          from './components/favorite/favorite.component';
import Navigation        from './components/common/header/navigation.module';

const MODULE_NAME = 'teachable';

export default angular
    .module(MODULE_NAME, [
        uiRouter,
        Navigation,
        SearchBar,
        SearchResults,
        Favorite,
        SearchResultsItem,
    ])
    .component(MODULE_NAME, {
        template: `
            <navigation></navigation>
            <div ui-view></div>
        `
    }).name;

angular.bootstrap(document, [MODULE_NAME]);