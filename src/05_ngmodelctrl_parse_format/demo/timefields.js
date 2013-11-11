angular.module('bs.timefields', [])

  .directive('bsHourfield', function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {

        ngModelCtrl.$parsers.push(function (viewValue) {

          var newDate = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();

          //convert string input into hours
          var hours = parseInt(viewValue);
          var isValidHour = hours >= 0 && hours < 24;

          //toggle validity
          ngModelCtrl.$setValidity('hourfield', isValidHour);

          //return model value
          if (isValidHour) {
            newDate.setHours(hours);
          }

          return newDate;
        });

        ngModelCtrl.$formatters.push(function (modelValue) {

          var isModelADate = angular.isDate(modelValue);
          ngModelCtrl.$setValidity('hourfield', isModelADate);

          return isModelADate ? modelValue.getHours() : undefined;
        });
      }
    };
  })


/**
 * Let's have a look at an alternative way of defining parsers / formatters. What we are trying
 * to do here is to decouple parsing / formatting functions from any DOM manipulation
 * in order to ease unit-testing.
 */
  .directive('bsMinutefield', function (minutesParserFactory, minutesFormatterFactory) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        ngModelCtrl.$parsers.push(minutesParserFactory(ngModelCtrl, 'minutefield'));
        ngModelCtrl.$formatters.push(minutesFormatterFactory(ngModelCtrl, 'minutefield'));
      }
    };
  })

  .factory('minutesFormatterFactory', function () {
    return function(ngModelCtrl, validationKey) {
      return function minutesFormatter(modelValue) {
        var isModelADate = angular.isDate(modelValue);
        ngModelCtrl.$setValidity(validationKey, isModelADate);

        return isModelADate ? modelValue.getMinutes() : undefined;
      };
    };
  })

  .factory('minutesParserFactory', function () {
    return function(ngModelCtrl, validationKey) {
      return function minutesParser(viewValue) {
        var newDate = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();

        //convert string input into minutes
        var minutes = parseInt(viewValue);
        var isValidMinute = minutes >= 0 && minutes < 60;

        //toggle validity
        ngModelCtrl.$setValidity(validationKey, isValidMinute);

        //return model value
        if (isValidMinute) {
          newDate.setMinutes(minutes);
        }

        return newDate;
      };
    };
  });

