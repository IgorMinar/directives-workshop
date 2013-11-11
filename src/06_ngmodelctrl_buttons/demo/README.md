## Demo

Create checkbox buttons where each button in a group can be clicked to toggle model values.
Multiple buttons can be checked in a given group.

## Covered topics

* Requiring other directive's mandatory controller (on the same element)
* Understanding and plugging into the `NgModelController.$render()` infrastructure:
    * `NgModelController.$render()` is invoked every time model changes lead to `NgModelController.$viewValue` changes
    * default implementation of the `$render` method is empty, custom implementation should update DOM
    * no need to observe model, it is already observed in `NgModelController`
* Understanding and using `NgModelController.$setViewValue()` to propagate control state from the DOM to the model
* Using `Scope.$eval()` to get just-in-time value of an attributes' expression (no need to use `Scope.$watch`)
* No need to create an isolated scope as there is no model that is internal to this directive

## Bootstrap CSS

Bootstrap uses the following HTML structure to render a group of buttons:

```html
<div class="btn-group">
    <button type="button" class="btn btn-primary">Left</button>
    <button type="button" class="btn btn-primary">Middle</button>
    <button type="button" class="btn btn-primary">Right</button>
</div>
```

Notable CSS classes:
* `btn` - default styling of Bootstrap buttons
* `active` - added to a button element to mark it as "checked"
