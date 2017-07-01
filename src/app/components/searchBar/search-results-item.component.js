import angular from 'angular';

import './search.css'

class SearchResultsItem {
    constructor($http, $stateParams) {
        // Dependencies
        this.$http  = $http;

        // Defaults
        this.gem = {};

        var { hash, gem } = $stateParams;
        this.queryTarget = gem;

        // This should go in a Service or a Factory
        this.$http.get(`https://rubygems.org/api/v1/gems/${gem}.json`).then((response) => {
            console.log(response.data);
            this.gem = response.data;
        });
    }
}

export default angular
    .module('app.searchResultsItem', [])
    .component('searchResultsItem', {
        controller   : SearchResultsItem,
        template     : `
            <div class="container-fluid results-container">
                <div class="row justify-content-sm-center py-3">
                    <div class="col-10">
                        <p class="display-4 py-3">
                            {{ $ctrl.gem.name }} <span class="text-muted font-italic target-text">{{ $ctrl.gem.version }}<span>
                        </p>
                        <hr />
                    </div>
                </div>

                <div class="row justify-content-sm-center py-3">
                    <div class="col-7">
                        <div class="pb-3">
                            {{ $ctrl.gem.info }}
                        </div>

                        <hr />

                        <div class="row py-3">
                            <div class="col-6">
                                <h6 class="text-muted text-uppercase pb-3"><small>versions:</small></h6>
                                <p><strong>{{ $ctrl.gem.version }}</strong> &dash;</p>
                            </div>
                            <div class="col-6">
                                <div ng-repeat="(key, dep) in $ctrl.gem.dependencies">
                                    <h6 class="text-muted text-uppercase py-3"><small>{{ key }} dependencies ({{ dep.length }})</small></h6>
                                    <p ng-repeat="(k, v) in dep"><strong>{{ v.name }}</strong> - {{ v.requirements }}</p>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div class="row py-3">
                            <div class="col-12">
                                <h6 class="text-muted text-uppercase pb-3"><small>authors:</small></h6>
                                <p>{{ $ctrl.gem.authors }}</p>

                                <h6 class="text-muted text-uppercase py-3"><small>owners:</small></h6>
                                <p>n/a</p>

                                <h6 class="text-muted text-uppercase pb-3"><small>sha 256 checksum:</small></h6>
                                <p>{{ $ctrl.gem.sha }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3 bl-1 lp-6">
                        <div class="pb-3">
                            <small class="text-uppercase"><strong>total downloads</strong></small>
                            <h4><strong>{{ $ctrl.gem.downloads | number }}</strong></h4>
                        </div>

                        <div class="pb-3">
                            <small class="text-uppercase"><strong>for this version</strong></small>
                            <h4><strong>{{ $ctrl.gem.version_downloads | number }}</strong></h4>
                        </div>
                    </div>
                </div>
            </div>
        `
    }).name;