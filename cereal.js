/*
 * Prepare data structures
 */
var data_as_array = {
    foo: "bar",
    food: "barf",
    good: "bars",
    dood: "where your car?",
    "wheres your car": "dude"
};
var data_as_json = JSON.stringify(data_as_array);

/*
 * Time dumping to string
 */

var i = 1000000;
console.log("Dumping:");
console.time('  JSON to string');
while (i--) {
  JSON.stringify(data_as_array);
}
console.timeEnd('  JSON to string')

/*
 * Time loading into native
 */

i = 1000000;
console.log("Loading:");
console.time('  String to JSON');
while (i--) {
  JSON.parse(data_as_json);
}
console.timeEnd('  String to JSON');

i = 1000000;
var data_for_eval = '(' + data_as_json + ')';
console.time('  eval()');
while (i--) {
  eval(data_for_eval);
}
console.timeEnd('  eval()');
