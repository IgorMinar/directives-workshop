## Demo

This demo covers a rating directive as a typical example of a widget that:
* has its own template,
* is driven by model,
* uses an isolated scope.

## Covered topics

* Widgets deserve their own HTML element.
* Declarative UI driven by model applies to widgets as well - we should apply AngularJS-way inside widgets too!
* `template` / `templateUrl` + widget's own model = isolated scope. Variables can clash if we don't isolate scopes.
* Using `=` and `&` in scope definition (2-way data binding vs. reaching out to a parent scope)
* We can offer different APIs for the rating selection - either `$watch` based or callback-based
* Testing:
    * testing with externalized templateUrl - feeding the $templateCache
    * custom matchers to have compact assertions

## Bootstrap CSS

Bootstrap glyph icons can be used to render stars in the rating directives, ex.:
* filled-in star: `<span class="glyphicon glyphicon-star"></span>`
* empty star: `<span class="glyphicon glyphicon-star-empty"></span>`

Relevant bootstrap [documentation](http://getbootstrap.com/components/#glyphicons).