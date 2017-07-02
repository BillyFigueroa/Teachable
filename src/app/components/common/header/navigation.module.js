import angular  from 'angular';

import { Navigation } from './navigation.component';

export const NavigationModule = angular
    .module('navigation', [])
    .component('navigation', Navigation)
    .name;