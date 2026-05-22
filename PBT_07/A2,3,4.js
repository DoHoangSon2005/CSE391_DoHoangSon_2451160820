console.log(typeof null);              // ???
console.log(typeof undefined);         // ???
console.log(typeof NaN);              // ???
console.log("5" + 3);                 // ???
console.log("5" - 3);                 // ???
console.log("5" * "3");              // ???
console.log(true + true);            // ???
console.log([] + []);                // ???
console.log([] + {});                // ???
console.log({} + []);                // ???

console.log(5 == "5");                // ???
console.log(5 === "5");               // ???
console.log(null == undefined);       // ???
console.log(null === undefined);      // ???
console.log(NaN == NaN);             // ???
console.log(0 == false);             // ???
console.log(0 === false);            // ???
console.log("" == false);            // ???

if ("0") console.log("A");           // In hay không?
if ("") console.log("B");            // In hay không?
if ([]) console.log("C");            // In hay không?
if ({}) console.log("D");            // In hay không?
if (null) console.log("E");          // In hay không?
if (0) console.log("F");             // In hay không?
if (-1) console.log("G");            // In hay không?
if (" ") console.log("H");           // In hay không? (space)