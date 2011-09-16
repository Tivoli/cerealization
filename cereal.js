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

console.log("Dumping:");
var start = new Date();
for(i=0; i<1000000; i++) {
    JSON.stringify(data_as_array);
}
var fin = new Date();
var run_time = (fin - start) / 1000; /* in seconds */
console.log("  JSON: " + run_time);

/*
 * Time loading into native
 */

console.log("Loading:");
var start = new Date();
for(i=0; i<1000000; i++) {
    JSON.parse(data_as_json);
}
var fin = new Date();
var run_time = (fin - start) / 1000; /* in seconds */
console.log("  JSON: " + run_time);

var start = new Date();
var data_for_eval = '(' + data_as_json + ')';
for(i=0; i<1000000; i++) {
    eval(data_for_eval);
}
var fin = new Date();
var run_time = (fin - start) / 1000; /* in seconds */
console.log("  eval(): " + run_time);
