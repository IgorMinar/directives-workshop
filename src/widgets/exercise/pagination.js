angular.module('bs.pagination', [])
  .directive('bsPagination', function () {
    return {
      restrict: 'E',
      scope: {
        page: '=',
        collectionSize: '=',
        pageSize: '='
      },
      templateUrl: 'templates/pagination/pagination.tpl.html',
      link: function (scope, iElement, iAttrs) {

        function updatePagesModel() {

          //re-calculate new length of pages
          var noOfPages = Math.ceil(scope.collectionSize / (scope.pageSize || 10));

          //fill-in model needed to render pages
          scope.pages.length = 0;
          for (var i = 0; i < noOfPages; i++) {
            scope.pages.push(i);
          }

          //make sure that the selected page is within available pages range
          scope.selectPage(scope.page);
        }

        scope.pages = [];

        scope.hasPrevious = function () {
          return scope.page > 0;
        };

        scope.hasNext = function () {
          return scope.page < scope.pages.length -1;
        };

        scope.selectPage = function (pageNo) {
          scope.page = Math.max(Math.min(pageNo, scope.pages.length - 1), 0);
        };

        //re-render pages on collection / page size changes
        scope.$watch('collectionSize', updatePagesModel);
        scope.$watch('pageSize', updatePagesModel);

        //make sure that page is within available pages range on model changes
        scope.$watch('page', scope.selectPage);
      }
    };
  });