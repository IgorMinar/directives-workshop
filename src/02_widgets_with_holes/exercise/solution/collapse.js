angular.module('bs.collapse', [])
  .directive('bsCollapse', function () {
    return {
      restrict: 'E',
      templateUrl: 'collapse.html',
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
