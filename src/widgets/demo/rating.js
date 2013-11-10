angular.module('bs.rating', [])
  .directive('bsRating', function () {
    return {
      restrict: 'E',              // trigger on Element e.g. <bs-rating></bs-rating>
      templateUrl: 'rating.html', // template
      scope: {                    // isolate scope variable mappings
        rating: '=',              // two-way data-binding to the expression specified by rating attribute
                                  //    you could also use '=ngModel' instead to get the component to support validation
        maxRating: '=',           // two-way data-binding to the expression specified by max-rating attribute
        rated: '&'                // expose function that will evaluate expression specified by rated attribute
      },
      link: function (scope, iElement, iAttrs) {

        // initialize internal array that we'll be iterating over
        var ratingValues = scope.ratingValues = [];
        var maxRating;


        // watch maxRating value changes and reinitialize the internal array
        scope.$watch('maxRating', function maxRatingWatchAction(newMaxRating) {
          maxRating = parseInt(newMaxRating, 10) || 5;

          ratingValues.length = 0;
          for (var i = 1; i <= maxRating; i++) {
            ratingValues.push(i);
          }
        });


        // return true if a given position should be rendered as filled
        scope.isFilled = function(ratingValue) {
          return (scope.highlightedRating || scope.rating) >= ratingValue;
        };


        // mouseenter event handler
        scope.enter = function (ratingValue) {
          scope.highlightedRating = ratingValue;
        };


        // mouseleave event handler
        scope.leave = function () {
          scope.highlightedRating = undefined;
        };


        // click event handler
        scope.select = function (ratingValue) {
          scope.rated({$new: ratingValue, $old: scope.rating});
          scope.rating = ratingValue;
        };
      }
    };
  });
