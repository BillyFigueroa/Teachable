import angular  from 'angular';

export default angular
    .module('app.navigation', [])
    .component('navigation', {
        template     : `
            <nav class="navbar navbar-toggleable-md navbar-inverse">
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" ui-sref="home" ui-sref-active="active">Teachable</a>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav text-uppercase">
                  <li class="nav-item">
                    <a class="nav-link" ui-sref="favorites" ui-sref-active="active"><small>Favorites</small></a>
                  </li>
                </ul>
              </div>
            </nav>
        `
    }).name;