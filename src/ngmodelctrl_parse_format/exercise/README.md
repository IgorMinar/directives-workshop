## Exercise

Create a date field that parses and formats a date according to a specified format.
A date field should work with model of type `Date` and a desired format should be specified as `String`.
Example usage:

```html
<input ng-model="myDate" bs-datefield="YYYY-MM-DD">
```

### Use moment.js library for data parsing and formatting

While doing the exercise you can use the [moment.js](http://momentjs.com/) library. Some hints:
* parsing date with moment.js:
    * parse string to a moment: `var parsedMoment = moment(viewValue, dateFormat);`
    * check parsing status: `parsedMoment.isValid()`
    * get date object from a moment: `parsedMoment.toDate()`
* formatting:
    * `moment(modelValue).format(dateFormat)`
