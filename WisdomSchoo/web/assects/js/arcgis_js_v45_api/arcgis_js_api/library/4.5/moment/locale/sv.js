//>>built
(function(b,a){"object"===typeof exports&&"undefined"!==typeof module&&"function"===typeof require?a(require("../moment")):"function"===typeof define&&define.amd?define(["../moment"],a):a(b.moment)})(this,function(b){return b.defineLocale("sv",{months:"januari februari mars april maj juni juli augusti september oktober november december".split(" "),monthsShort:"jan feb mar apr maj jun jul aug sep okt nov dec".split(" "),weekdays:"s\u00f6ndag m\u00e5ndag tisdag onsdag torsdag fredag l\u00f6rdag".split(" "),
weekdaysShort:"s\u00f6n m\u00e5n tis ons tor fre l\u00f6r".split(" "),weekdaysMin:"s\u00f6 m\u00e5 ti on to fr l\u00f6".split(" "),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Ig\u00e5r] LT",nextWeek:"[P\u00e5] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"f\u00f6r %s sedan",
s:"n\u00e5gra sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en m\u00e5nad",MM:"%d m\u00e5nader",y:"ett \u00e5r",yy:"%d \u00e5r"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(a){var b=a%10;return a+(1===~~(a%100/10)?"e":1===b?"a":2===b?"a":"e")},week:{dow:1,doy:4}})});