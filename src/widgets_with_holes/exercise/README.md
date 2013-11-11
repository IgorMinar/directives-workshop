## Exercise

Based on the experience gained from analyzing the `bs-alert` directive, create a collapse directive
that could be used to quickly create collapsible sections with a title, similar to the one on the
[Bootstrap 3 demo page](http://getbootstrap.com/javascript/#collapse).

Example usage:

```html
<bs-collapse heading="Expand and collapse me!">
        So I can show and hide this content...
</bs-collapse>
```

It should be possible to interpolate the `heading` attribute so the following syntax could be used:
`heading="A title: {{title}}"`.


## Bootstrap CSS

Bootstrap 3 is using the following HTML structure to render the alert widget:

```html
<div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
            <a class="accordion-toggle">Title goes here!</a>
        </h4>
    </div>
    <div class="panel-collapse">
        <div class="panel-body>Content goes here...</div>
    </div>
</div>
```

The `div.panel-collapse` element should get the `in` class  when expanded.
The mentioned class should be removed when a panel gets collapsed.
Also the `height` style should be toggled between `auto` (expanded) and `0` (collapsed).

Collapse toggling should happen by clicking on the `<a>` element of the heading.

See index.html which is already wired to use the component you are about to write.
