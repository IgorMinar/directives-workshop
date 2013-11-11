angular.module('bs.tabs', [])

  .controller('BsTabsController', function ($scope) {

    // internal array of all registered tabs for this tabset
    $scope.tabs = [];

    // event handler for selecting active tab
    $scope.selectActiveTab = function (tabIdx) {
      if (tabIdx >= 0 && tabIdx < $scope.tabs.length) {
        angular.forEach($scope.tabs, function (tab) {
          tab.isActive = false;
        });
        $scope.tabs[tabIdx].isActive = true;
      }
    };

    // api exposed to individual tabs so that they can register themselves with the tabset
    this.addTab = function (tabScope) {
      $scope.tabs.push(tabScope);
      //it is the first tab in the collection or an active tab was added, let's make it active
      if ($scope.tabs.length === 1 || tabScope.isActive) {
        $scope.selectActiveTab($scope.tabs.length - 1);
      }
    };

    // api exposed to individual tabs so that they can deregister themselves with the tabset
    this.removeTab = function (tabScope) {
      $scope.tabs.splice($scope.tabs.indexOf(tabScope), 1);
    };
  })

  .directive('bsTabs', function () {
    return {
      restrict: 'EA',                  // Element or Attribute
      scope: {},                       // get isolate scope without any mapping
      templateUrl: 'tabs.html',        // template location
      transclude: true,                // turn on content transclusion
      replace: true,                   // replace the current element with the root element of the template
      controller: 'BsTabsController'   // controller
    };
  })

  .directive('bsTab', function () {
    return {
      restrict: 'EA',                  // Element or Attribute
      scope: {                         // isolate scope definition with mapping
        heading: '@'                   // observe the value of `heading` attribute and place it on the isolate scope as `heading`
      },
      templateUrl: 'tab.html',         // template location
      transclude: true,                // turn on content transclusion
      replace: true,                   // replace the current element with the root element of the template
      require: '^bsTabs',              // require that this directive be placed on a child element of bsTabs directive element
      link: function (scope, element, attrs, tabsCtrl) {

        // when the component is instatiated register it with the parent tabs controller
        tabsCtrl.addTab(scope);

        // when the context of this element is going away, deregister it from the parent tabs controller
        scope.$on('$destroy', function () {
          tabsCtrl.removeTab(scope);
        });
      }
    };
  });
