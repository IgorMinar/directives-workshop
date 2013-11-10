## Demo

A demo consist of 2 time fields (hours and minutes) that can be used to build
time-picker widgets.

## Covered topics

* Role of parsing and formatting pipelines:
    * parse: ui->model
    * format: model->ui
    * validation
* Patterns:
    * failed parsing binds `undefined` to the model
    * failed formatting should result in `undefined` being returned
* Testing:
    * DOM-based testing requires a bit of gymnastic to trigger input changes (different on different browsers)
    * it is good to test parsing / formatting functions in isolation (see minutesfield.spec.js)
