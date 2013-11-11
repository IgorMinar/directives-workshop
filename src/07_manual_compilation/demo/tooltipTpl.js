angular.module('bs.tooltipTpl', [])
  .directive('bsTooltipTpl', function ($http, $templateCache, $compile) {

    var tooltipTpl =
      '<div class="tooltip">' +
        '<div class="tooltip-inner"></div>' +
        '<div class="tooltip-arrow"></div>' +
        '</div>';

    return {

      compile: function compileFunction(tElement, tAttrs) {

        var placement = tAttrs.bsTooltipPlacement || 'top';
        var tooltipTplEl = angular.element(tooltipTpl);
        tooltipTplEl.addClass(placement);

        return function linkingFunction(scope, iElement, iAttrs) {

          //fetch a template with content over $http, making sure that it is
          //retrieved only once (note usage of $templateCache)
          $http.get(iAttrs.bsTooltipTpl, {
            cache: $templateCache
          }).then(function (response) {

              var tooltipTemplateElement = tooltipTplEl.clone();
              tooltipTemplateElement.find('div.tooltip-inner').html(response.data.trim());

              var tooltipLinker =  $compile(tooltipTemplateElement);
              var tooltipScope;
              var tooltipInstanceEl;

              //register DOM handlers only when a template is fetched and ready to be used
              iElement.on('mouseenter', function () {

                tooltipScope = scope.$new();
                scope.$apply(function(){
                  tooltipInstanceEl = tooltipLinker(tooltipScope);
                });

                //attach tooltip to the DOM to get its size (needed to calculate positioning)
                iElement.after(tooltipInstanceEl);

                //calculate position
                var ttipPosition = calculatePosition(iElement, tooltipInstanceEl, placement);
                tooltipInstanceEl.css(ttipPosition);
                //finally show the tooltip
                tooltipInstanceEl.addClass('in');
              });

              iElement.on('mouseleave', function () {
                tooltipScope.$destroy();
                tooltipInstanceEl.remove();
              });
            });
        };
      }
    };
  });