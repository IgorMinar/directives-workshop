angular.module('bs.rating2', [])
  .directive('bsRating2', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/rating/rating.tpl.html',
      scope: {
        maxRating: '='
      },
      require: 'ngModel',
      link: function (scope, iElement, iAttrs, ngModelCtrl) {

        var maxRating = scope.maxRating || 5;

        scope.ratings = [];
        for (var i = 1; i <= maxRating; i++) {
          scope.ratings.push(i);
        }

        scope.isFilled = function(ratingValue) {
          return (scope.highlightedRating || ngModelCtrl.$viewValue) >= ratingValue;
        };

        scope.enter = function (ratingValue) {
          scope.highlightedRating = ratingValue;
        };

        scope.leave = function (ratingValue) {
          scope.highlightedRating = undefined;
        };

        scope.select = function (ratingValue) {
          ngModelCtrl.$setViewValue(ratingValue);
        };
      }
    };
  });