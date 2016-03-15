var moment = require('moment');
var displayTime = require('./../js/clock.js').displayTime;
var Alarm = require('./../js/clock.js').Alarm;
var alarmTime = require('./../js/clock.js').alarmTime;



$(document).ready(function(){
  setInterval(displayTime, 1000);
  $(".btn").click(function(){
    var hour = $('#hour').val();
    var minute = $("#minute").val();
    var ampm = $(".ampm").val();
    var newAlarm = new Alarm(hour, minute, ampm);
    newAlarm.alarmTime(hour, minute, ampm);
  });
});
