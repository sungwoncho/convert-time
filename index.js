module.exports = function (time, format) {
  var twelveHourTimeRegex = /(\d{1,2})\s*:?\s*(\d{0,2})\s*(a\.?m\.?|p\.?m\.?)/i;
  var match = time.match(twelveHourTimeRegex);

  function getTwoDigitHour(hour) {
    if (hour.length === 1) {
      return '0' + hour;
    } else {
      return hour;
    }
  }

  function toTwentyFourHourTime(match, format) {
    var hour = match[1];
    var minute =match[2] || '00';
    var period = match[3].replace(/\./g, '')
                         .toLowerCase();

    // Default argument for format
    if (! format) {
      format = 'hh:mm';
    }

    if (period == 'pm' && hour !== '12') {
      return format.replace('hh', parseInt(hour)+12)
                   .replace('mm', minute);
    } else {
      return format.replace('hh', hour)
                   .replace('HH', getTwoDigitHour(hour))
                   .replace('mm', minute);
    }
  }

  if (match) {
    return toTwentyFourHourTime(match, format);
  }
};
