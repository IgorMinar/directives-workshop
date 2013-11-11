## Exercise

Based on the buttons-checkbox demo create a similar directive for radio buttons. Such buttons should
work in a way that only one button in a given group (bound to the same model variable) is checked at
any given time. The example usage should look like:

```html
<div class="btn-group">
    <button type="button" class="btn" ng-model="model" bs-btn-radio="0">Left</button>
    <button type="button" class="btn" ng-model="model" bs-btn-radio="1">Middle</button>
    <button type="button" class="btn" ng-model="model" bs-btn-radio="2">Right</button>
</div>
```

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