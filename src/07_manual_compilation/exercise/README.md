## Exercise

Build on top of the previously seen popover directive and extended in the way
that its content can contain HTML markup as well as other AngularJS directives.
A template for the content is to be fetched using XHR request.

## Bootstrap CSS

Bootstrap 3 uses the following markup to create popover elements:

```html
<div class="popover">
    <div class="arrow"></div>
    <h3 class="popover-title">I'm a title!</h3>
    <div class="popover-content">Content goes here...</div>
</div>
```

Popovers, after being created are inserted after the host element in the DOM tree.

Popovers's content goes into the `div.popover-content` element while its title to the `div.popover-title` element.
There is one more, important CSS classes at play here:
one of `top`, `bottom`, `left`, `right` - needs to be added to `div.popover` to indicate positioning.
Additionally the popover elements needs to get `display: block` styling to have its position
calculated and be displayed properly.

By default popovers are shown / hidden in response to the DOM click events.

Popover can be seen in action on Bootstrap's [demo page](http://getbootstrap.com/javascript/#popovers)