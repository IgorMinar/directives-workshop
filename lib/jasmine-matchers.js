// jasmine matcher for expecting an element to have a css class
// https://github.com/angular/angular.js/blob/master/test/helpers/matchers.js
beforeEach(function() {
  this.addMatchers({
    toHaveClass: function(clazz) {
      this.message = function() {
        return "Expected '" + angular.mock.dump(this.actual) + "' to have class '" + clazz + "'.";
      };
      return this.actual.hasClass ?
        this.actual.hasClass(clazz) :
        angular.element(this.actual).hasClass(clazz);
    }
  });
});