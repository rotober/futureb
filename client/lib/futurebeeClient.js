/**
 * Created by roberto on 12/03/15.
 */

angular.module('futurebee', [
    'angular-meteor',
    'ui.router',
    'angularUtils.directives.dirPagination']);

function onReady() {
  angular.bootstrap(document, ['futurebee'])
};



