# Convert-time

[![Build Status](https://travis-ci.org/sungwoncho/convert-time.svg?branch=master)](https://travis-ci.org/sungwoncho/convert-time)

Convert a string between 12-hour time and 24-hour time with customizable format.


## Install

    npm install convert-time


## Usage

```js
var convertTime = require('convert-time');

convertTime('2pm');
// => '14:00'
convertTime('2a.m.');
// => '2:00'
convertTime('15:00');
// => '3:00 pm'
convertTime('2:00', 'HH : mm A');
// => '14 : 00 PM'
```


## API

### convertTime(time, [format])

If `time` is in 12-hour time, convert it to 24-hour time, and vice-versa. Use
`format` to customize the output, if provided.

`time` is a string representing time in either 12-hour or 24-hour format.
`format` is an optional string argument to specify the output format. Acceptable
values are:

* `hh` - Hour. It can be one or two digits.
* `HH` - Hour. It is always two digits. If one digit, `0` is appended in
the front. (e.g. `3` becomes `03`)
* `mm` - Minute. It can be one or two digits.
* `MM` - Minute. It is always two digits. If one digit, `0` is appended in
the front. (e.g. `9` becomes `09`)
* `a` - Period. `am` or `pm`.
* `A` - Capitalized period. `AM` or `PM`.

Default values for format are:

* `hh:MM` for 12-hour to 24-hour conversion.
* `hh:MM a` for 24-hour to 12-hour conversion.


## License

MIT
