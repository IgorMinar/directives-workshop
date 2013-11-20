angular.module('bs.collapse', [])
  .directive('bsCollapse', function () {
    return {
      restrict: 'E',
      templateUrl: '/src/02_widgets_with_holes/exercise/solution/collapse.html',
      transclude: true,
      scope: {
        heading: '@'
      },
      link: function (scope, iElement, iAttrs) {
        scope.isOpen = true;

        scope.toggleCollapse = function() {
          scope.isOpen = !scope.isOpen;
        };
      }
    };
  });
