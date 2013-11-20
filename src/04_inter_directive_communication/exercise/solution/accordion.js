angular.module('bs.accordion', [])

  .controller('BsAccordionController', function ($scope) {

    $scope.panels = [];

    this.toggleCollapse = function (panelScope) {
      panelScope.isOpen = !panelScope.isOpen;
      //close other panels if needed
      if (panelScope.isOpen) {
        angular.forEach($scope.panels, function (otherPanelScope) {
          if (otherPanelScope != panelScope) {
            otherPanelScope.isOpen = false;
          }
        });
      }
    };

    this.addPanel = function (panelScope) {
      $scope.panels.push(panelScope);
    };

    this.removePanel = function (panelScope) {
      $scope.panels.splice($scope.panels.indexOf(panelScope), 1);
    };
  })

  .directive('bsAccordion', function () {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: '/src/04_inter_directive_communication/exercise/solution/accordion.html',
      transclude: true,
      replace: true,
      controller: 'BsAccordionController'
    };
  })

  .directive('bsCollapse', function () {
    return {
      restrict: 'E',
      templateUrl: '/src/04_inter_directive_communication/exercise/solution/collapse.html',
      transclude: true,
      replace: true,
      scope: {
        heading: '@'
      },
      require: '^bsAccordion',
      link: function (scope, iElement, iAttrs, accordionCtrl) {

        scope.isOpen = false;

        scope.toggleCollapse = function () {
          accordionCtrl.toggleCollapse(scope);
        };

        accordionCtrl.addPanel(scope);

        //remove this panel from accordion when panel's element gets destroyed
        scope.$on('$destroy', function () {
          accordionCtrl.removePanel(scope);
        });
      }
    };
  });