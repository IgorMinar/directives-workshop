## Demo

This demo covers an alert directive as seen on Bootstrap's [demo page](http://getbootstrap.com/components/#alerts).
It is typical example of a "widget with a hole", that can wrap over other HTML markup with AngularJS directives.

Example usage:

```html
<bs-alert type="success" close="closeMe()">Hey, it worked!</bs-alert>
```

This simple directive also demonstrates how AngularJS directives can be used to create your own HTML vocabluary and
remove HTML markup duplication.

## Covered topics

* Understanding transclusion:
    * conceptually it takes content from the directive element and puts it in the final template,
    * content can contain other AngularJS directives so it is all recursive.
* Indicating where the transcluded content should go:
    * we can mark a place where the content should be placed by using the `ngTransclude` directive,
    * if a more fine-grained control is needed we could use a transclusion function.
* Transclusion scope and its pitfalls (to be demonstrated with an input)
* Multiple elements asking for transclusion on the same element
* Reminders:
    * A widget usually means element-level directive
    * We need an isolated scope here since a widgets has its own model
* Don't hesitate to create such simple directives as those remove markup duplication and create your own DSL

## Bootstrap CSS

Bootstrap 3 is using the following HTML structure to render the alert widget:

```html
<div class='alert [alert type]'>
    <button type='button' class='close'>&times;</button>
    <div>Alert's content goes here...</div>
</div>
```

where the `[alert type]` class can be one of: `alert-success`, `alert-info`, `alert-warning`, `alert-danger`.