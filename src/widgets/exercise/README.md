## Exercise

Create a pagination directive as seen on the Bootstrap's [demo page](http://getbootstrap.com/components/#pagination).
This directive should be used as an HTML element and should work with the following attributes:
* `page` - model indicating index (0-based) of an active (selected page)
* `collection-size` - (integer) total number of items in a collection to be iterated over
* `page-size` - (integer, optional - defaults to 10) - number of collection items per page.

Example usage:

```html
<bs-pagination page="currentPage" collection-size="items" page-size="20"></bs-pagination>
```

The directive should watch changes to the `collection-size` and `page-size` attributes and update UI
 in response to model changes.

## Bootstrap CSS

Bootstrap 3 is using the following HTML structure to render the pagination widget:

```html
<ul class="pagination pagination-lg">
  <li class="disabled"><a href="#">&laquo;</a></li>
  <li class="active"><a href="#">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">5</a></li>
  <li><a href="#">&raquo;</a></li>
</ul>
```

A pagination is simply an un-ordered list with the `pagination` class.
Each item (`<li>`) inside the pagination widget can be in one of 3 states, marked with a CSS class:
* default (no additional CSS class)
* `active` - indicating that a give item is selected
* `disabled` - indicating that a give item is disabled and can't be selected
