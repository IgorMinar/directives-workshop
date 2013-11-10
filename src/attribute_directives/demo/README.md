## Demo

This demo shows how to build a simple tooltip directive,
similar to the one shown on the Bootstrap's [demo page](http://getbootstrap.com/javascript/#tooltips)

## Covered topics

* creating directive basics
    * declaring directives - `.directive()` factory method
    * factory method vs. compile vs. link
* prefix directives to avoid collisions, ideally with your own project identifier (2-3 letters)
* DOM manipulation goes into directives
* direct DOM manipulation in a directive - jQury can be useful for low-level DOM routines
* element passed to a directive is already jQuery / jqLite - wrapped
* observing attributes vs. attribute value straight from the DOM
* registering DOM event handlers
* normalization of directive / attribute names
* tests
    * introduction to the DOM-based directives testing
    * jQuery is useful for:
        * matching rendered HTML
        * triggering events

## Bootstrap CSS

Bootstrap 3 uses the following markup to create tooltip elements:

```html
<div class="tooltip">
    <div class="tooltip-inner">I'm tooltip's content</div>
    <div class="tooltip-arrow"></div>
</div>
```

Tooltips, after being created are inserted after the host element in the DOM tree.
Tooltip's text goes into the `div.tooltip-inner` element.

There are 2 additional important CSS classes at play as well:
* - one of `top`, `bottom`, `left`, `right` - needs to be added to `div.tooltip` to indicate positioning
* - `in` - to actually show a tooltip

Tooltip can be seen in action on Bootstrap's [demo page](http://getbootstrap.com/javascript/#tooltips)