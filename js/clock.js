// var moment = require('moment');

exports.Alarm = function(hour, minute, ampm) {
  this.hour = hour;
  this.minute = minute;
  this.ampm = ampm;
};

exports.displayTime = function() {
    var time = moment().format('h:mm:ss a');
    $('#clock').html(time);
};

exports.Alarm.prototype.alarmTime = function(hour, minute, ampm) {
  if (hour === moment().format('h') && minute === moment().format('mm')){
    alert("good work");
  }else {
    alert("false");
  }
};
