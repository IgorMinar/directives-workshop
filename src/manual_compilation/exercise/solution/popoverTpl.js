angular.module('bs.popoverTpl', [])

  .directive('bsPopoverTpl', function ($http, $templateCache, $compile, $interpolate) {

    var popoverTpl =
      '<div class="popover">' +
        '<div class="arrow"></div>' +
        '<h3 class="popover-title">{{title}}</h3>' +
        '<div class="popover-content"></div>' +
        '</div>';

    return {

      compile: function compileFunction(tElement, tAttrs) {

        var placement = tAttrs.bsPopoverPlacement || 'top';
        var popoverTemplateElement = angular.element(popoverTpl);
        popoverTemplateElement.addClass(placement);
        popoverTemplateElement.css('display', 'block');

        return function linkingFunction(scope, iElement, iAttrs) {

          //fetch a template with content over $http, making sure that it is
          //retrieved only once (note usage of $templateCache)
          $http.get(iAttrs.bsPopoverTpl, {
            cache: $templateCache
          }).then(function (response) {

              var shown = false;
              var popoverInstanceTemplateElement = popoverTemplateElement.clone();
              popoverInstanceTemplateElement
                .find('div.popover-content')
                .html(response.data.trim());

              //prepare a linking function for the whole element, including content retrieved via $http
              var popoverLinker = $compile(popoverInstanceTemplateElement);

              var popoverInstanceEl;
              var popoverScope;

              iElement.on('click', function () {

                if (!shown) {

                  //create a child scope for popovers so directives present in popover's content
                  //have their own namespace and don't clash with other model variables
                  popoverScope = scope.$new();

                  //get the current value of a title attribute
                  popoverScope.title = $interpolate(iAttrs.bsPopoverTitle || '')(scope);
                  scope.$apply(function(){
                    popoverInstanceEl = popoverLinker(popoverScope);
                  });

                  //attach popover to the DOM to gets its size
                  iElement.after(popoverInstanceEl);

                  //calculate position
                  var popoverPosition = calculatePosition(iElement, popoverInstanceEl, placement);
                  popoverInstanceEl.css(popoverPosition);

                } else {
                  popoverScope.$destroy();
                  popoverInstanceEl.remove();
                }

                shown = !shown;
              });
            });
        };
      }
    };
  });