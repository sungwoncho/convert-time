module.exports = function (time, format) {
  const TWELVE_HOUR_REGEX = /(\d{1,2})\s*:?\s*(\d{0,2})\s*(a\.?m\.?|p\.?m\.?)/i;
  const TWENTY_FOUR_HOUR_REGEX = /(\d{1,2})\s*:\s*(\d{1,2})/i;

  function getTwoDigitHour(hour) {
    if (hour.length === 1) {
      return '0' + hour;
    } else {
      return hour;
    }
  }

  function getPeriod(hour) {
    if (parseInt(hour) >= 12) {
      return 'pm';
    } else {
      return 'am';
    }
  }

  function toTwentyFourHourTime(time, format) {
    var match = time.match(TWELVE_HOUR_REGEX);
    if (! match) return;

    var hour = match[1];
    var minute = match[2] || '00';
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

  function toTwelveHourTime(time, format) {
    var match = time.match(TWENTY_FOUR_HOUR_REGEX);
    if (! match) return;

    var hour = match[1];
    var minute = match[2];

    // Default argument for format
    if (! format) {
      format = 'hh:mm a';
    }

    if (parseInt(hour) > 12) {
      return format.replace('hh', parseInt(hour)-12)
                   .replace('HH', getTwoDigitHour(hour))
                   .replace('mm', minute)
                   .replace('a', 'pm')
                   .replace('A', 'PM');
    } else {
      return format.replace('hh', hour)
                   .replace('HH', getTwoDigitHour(hour))
                   .replace('mm', minute)
                   .replace('a', getPeriod(hour))
                   .replace('A', getPeriod(hour).toUpperCase());
    }
  }

  return toTwentyFourHourTime(time, format) || toTwelveHourTime(time, format);
};
