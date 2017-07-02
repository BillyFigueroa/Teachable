export const Config = function($stateProvider, $urlRouterProvider, $locationProvider) {
    'ngInject';

    $stateProvider
        .state('home', {
            url       : '/',
            component : 'search',
        })
        .state('results', {
            url       : '/search?query',
            component : 'searchResults',
            resolve: {
                gems: function($stateParams, SearchService) {
                    var { query } = $stateParams;

                    return SearchService.getGemDependencies(query)
                        .then(response => response);
                }
            }
        })
        .state('gem', {
            url       : '/gem/{gem}',
            component : 'searchResultsItem',
            resolve: {
                gem: function($stateParams, SearchService) {
                    var { gem } = $stateParams;

                    return SearchService.getGem(gem)
                        .then(response => response);
                }
            }
        })
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
}