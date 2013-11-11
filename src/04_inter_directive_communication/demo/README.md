## Demo

This demo builds a simplified version of a tabset directive as seen on the Bootstrap's
[demo page](http://getbootstrap.com/javascript/#tabs).

## Covered topics

* Directive controllers, they syntax and roles:
    * inter-directive communication through controllers
    * while templates can be overridden to customize UI, controllers are here to extend behavior
    * different ways of requiring a controller (on the same element, ^, ?)
* Tests:
    * controllers are good since allow us to test logic on the lowest possible level, without DOM interactions
    * using the $controller service to instantiate controllers
* listening to scope's $destroy event to clean up after yourself

## Bootstrap CSS

Bootstrap 3 is using the following HTML structure to render a tabset:

```html
<div>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
      <li class="active"><a>Home</a></li>
      <li><a>Profile</a></li>
      <li><a>Messages</a></li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active">...</div>
      <div class="tab-pane">...</div>
      <div class="tab-pane">...</div>
    </div>
</div>
```
To activate a given tab the `active` class needs to be added to an `<li>` element representing a heading
as well as to a tab-pane div.