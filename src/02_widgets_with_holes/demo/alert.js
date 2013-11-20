angular.module('bs.alert', [])
  .directive('bsAlert', function () {
    return {
      restrict: 'E',              // trigger on Element e.g. `<bs-alert></bs-alert>`
      templateUrl: '/src/02_widgets_with_holes/demo/alert.html',  // template location
      transclude: true,           // enable transclusion of contents of the template element
      scope: {                    // isolate scope variable mappings
        type: '@',                // one-way data-binding from the current `type` attribute value to scope
        close: '&'                // expose function that will evaluate expression specified by `close` attribute
      },
      link: function (scope, iElement, iAttrs) {
        scope.closeable = "close" in iAttrs;
      }
    };
  });
