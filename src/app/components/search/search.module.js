import angular from 'angular';

import { SearchComponent }            from './search.component';
import { SearchResultsComponent }     from './search-results/search-results.component';
import { SearchResultsItemComponent } from './search-results/search-results-item.component';
import { SearchService }              from './search.service.js';

import './search.css';

export const SearchModule = angular
    .module('search', [])
    .constant('RUBYGEM_API', '/api/v1')
    .component('search', SearchComponent)
    .component('searchResults', SearchResultsComponent)
    .component('searchResultsItem', SearchResultsItemComponent)
    .service('SearchService', SearchService)
    .name;