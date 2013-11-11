angular.module('bs.popoverTpl', [])

  .directive('bsPopoverTpl', function ($http, $templateCache, $compile, $interpolate) {

    var popoverTpl =
      '<div class="popover">' +
        '<div class="arrow"></div>' +
        '<h3 class="popover-title">{{title}}</h3>' +
        '<div class="popover-content"></div>' +
        '</div>';

    return {

      compile: function compileFunction(tElement, tAttrs) {

        return function linkingFunction(scope, iElement, iAttrs) {

        };
      }
    };
  });