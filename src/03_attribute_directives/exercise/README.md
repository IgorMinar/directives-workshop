## Exercise

Create a popover directive similar to the one seen on the
Bootstrap's [demo page](http://getbootstrap.com/javascript/#popovers)

You don't need to spend time on DOM-positioning logic - there is an utility function -
`calculatePosition(hostEl, elToPosition, placement)` -
that can position a DOM element in relation to another one (`/lib/positioning.js`).
Check its jsDoc for more details.

## Bootstrap CSS

Bootstrap 3 uses the following markup to create popover elements:

```html
<div class="popover">
    <div class="arrow"></div>
    <h3 class="popover-title">I'm a title!</h3>
    <div class="popover-content">Content goes here...</div>
</div>
```

**Heads up!** Popover elements needs to get `display: block` styling to have their position
 calculated correctly and assure proper display.

Popovers's content goes into the `div.popover-content` element while its title to the `div.popover-title` element.
There is one more, important CSS classes at play here:
one of `top`, `bottom`, `left`, `right` - needs to be added to `div.popover` to indicate positioning.


Popovers, after being created are inserted after the host element in the DOM tree.
By default popovers are shown / hidden in response to the DOM click events.

See index.html which is already wired to use the component you are about to write.
