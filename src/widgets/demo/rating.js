angular.module('bs.rating', [])
  .directive('bsRating', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/rating/rating.tpl.html',
      scope: {
        rating: '=', //or use '=ngModel' to get the component to support validation
        maxRating: '=',
        rated: '&'
      },
      link: function (scope, iElement, iAttrs) {

        var maxRating = scope.maxRating || 5;

        scope.ratings = [];
        for (var i = 1; i <= maxRating; i++) {
          scope.ratings.push(i);
        }

        scope.isFilled = function(ratingValue) {
          return (scope.highlightedRating || scope.rating) >= ratingValue;
        };

        scope.enter = function (ratingValue) {
          scope.highlightedRating = ratingValue;
        };

        scope.leave = function (ratingValue) {
          scope.highlightedRating = undefined;
        };

        scope.select = function (ratingValue) {
          scope.rated({$new: ratingValue, $old: scope.rating});
          scope.rating = ratingValue;
        };
      }
    };
  });