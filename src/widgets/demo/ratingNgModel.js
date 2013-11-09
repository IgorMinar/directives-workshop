angular.module('bs.rating2', [])
  .directive('bsRating2', function () {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'templates/rating/rating.tpl.html',
      scope: {
        maxRating: '&'
      },
      require: 'ngModel',
      link: function (scope, iElement, iAttrs, ngModelCtrl) {

        var maxRating = scope.maxRating() || 5;

        function resetCurrentSelection() {
          scope.newRating = ngModelCtrl.$viewValue;
        }

        scope.ratings = [];
        for (var i = 0; i < maxRating; i++) {
          scope.ratings.push(i + 1);
        }

        ngModelCtrl.$render = function() {
          resetCurrentSelection();
        };

        ngModelCtrl.$formatters.push(function(modelValue) {
          var viewModel = parseInt(modelValue);
          if (viewModel >= 0 && viewModel < maxRating) {
            ngModelCtrl.$setValidity('rating', true);
            return viewModel;
          } else {
            ngModelCtrl.$setValidity('rating', false);
            return 0;
          }
        });

        scope.enter = function (score) {
          scope.newRating = score;
        };

        scope.leave = function (score) {
          resetCurrentSelection();
        };

        scope.rate = function (score) {
          ngModelCtrl.$setViewValue(score);
          resetCurrentSelection();
        };

        //initial rendering
        resetCurrentSelection();
      }
    };
  });