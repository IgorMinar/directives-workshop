describe('pagination', function () {
  var $scope, $compile;

  beforeEach(module('bs.pagination'));
  beforeEach(module('pagination.tpl.html'));

  beforeEach(inject(function ($rootScope, _$compile_) {
    $scope = $rootScope;
    $compile = _$compile_;
  }));

  beforeEach(function() {
    this.addMatchers({
      toHavePageStates: function(requiredStates) {

        var states = [];
        var pages = this.actual.find('li');

        for (var i=0; i<pages.length; i++) {
          var state = 0;
          if (pages.eq(i).hasClass('active')) {
            state = 1;
          } else if (pages.eq(i).hasClass('disabled')) {
            state = -1;
          }
          states.push(state);
        }

        this.message = function() {
          return "Expected '" + angular.mock.dump(states) + "' to have '" + angular.mock.dump(requiredStates) + "'.";
        };

        return angular.equals(states, requiredStates);
      }
    });
  });

  function compileElement(elementString, scope) {
    var element = $compile(elementString)(scope);
    scope.$digest();
    return element;
  }

  describe('model to UI', function () {

    it('should render pagination based on model, collection size and page size', function () {

      $scope.myPage = 1;
      var elm = compileElement('<bs-pagination page="myPage" collection-size="5" page-size="2"></bs-pagination>', $scope);
      expect(elm).toHavePageStates([0, 0, 1, 0, 0]);

      $scope.$apply(function(){
        $scope.myPage = 0;
      });
      expect(elm).toHavePageStates([-1, 1, 0, 0, 0]);
    });

    it('should re-render pages in response to collection size change', function () {

      $scope.myPage = 4;
      $scope.myCollectionLen = 50;
      var elm = compileElement('<bs-pagination page="myPage" collection-size="myCollectionLen"></bs-pagination>', $scope);
      expect(elm).toHavePageStates([0, 0, 0, 0, 0, 1, -1]);

      $scope.$apply(function(){
        $scope.myCollectionLen = 30;
      });

      expect(elm).toHavePageStates([0, 0, 0, 1, -1]);
      expect($scope.myPage).toEqual(2);
    });

    it('should re-render pages in response to selected page change', function () {

      $scope.myPage = 4;
      $scope.myCollectionLen = 50;
      var elm = compileElement('<bs-pagination page="myPage" collection-size="myCollectionLen"></bs-pagination>', $scope);

      $scope.$apply(function(){
        $scope.myPage = 3;
      });
      expect(elm).toHavePageStates([0, 0, 0, 0, 1, 0, 0]);
    });

    it('should correct selected page to be within available pages range', function () {

      $scope.myPage = -5;
      $scope.myCollectionLen = 50;
      var elm = compileElement('<bs-pagination page="myPage" collection-size="myCollectionLen"></bs-pagination>', $scope);

      expect(elm).toHavePageStates([-1, 1, 0, 0, 0, 0, 0]);
      expect($scope.myPage).toEqual(0);

      $scope.$apply(function(){
        $scope.myPage = 10;
      });
      expect(elm).toHavePageStates([0, 0, 0, 0, 0, 1, -1]);
      expect($scope.myPage).toEqual(4);
    });
  });

  describe('Ui to model', function () {

    it('should update selected page on page no click', function () {

      $scope.myPage = 2;
      $scope.myCollectionLen = 50;
      var elm = compileElement('<bs-pagination page="myPage" collection-size="myCollectionLen"></bs-pagination>', $scope);

      //select
      elm.find('li > a').eq(1).click();
      expect($scope.myPage).toEqual(0);
    });

    it('should update selected page on page arrow clicks', function () {

      $scope.myPage = 0;
      $scope.myCollectionLen = 20;
      var elm = compileElement('<bs-pagination page="myPage" collection-size="myCollectionLen"></bs-pagination>', $scope);

      elm.find('li > a').eq(3).click();
      expect(elm).toHavePageStates([0, 0, 1, -1]);

      elm.find('li > a').eq(0).click();
      expect(elm).toHavePageStates([-1, 1, 0, 0]);
    });
  });
});