function print(x) {
    console.log(x);
}

var objects = [null, "BUNNY", "CAT"];

// generates a promise to get a value from a db
function getValuePromise(val) {
    // promise to get a value x from a database that takes around 200ms
    const promise = new Promise((resolve, reject) => {
        let x = null;
        // get value from db (~200ms)
        setTimeout(() => {
            x = objects[val];

            // if was able to get val successfully, resolve the promise and return x;
            // else reject the promise
            if (x != null) {
                resolve(x);
            } else {
                reject("**couldnt fetch object**");
            }
        }, 1000);
    });

    return promise;
}

async function queryDB() {
    try {
        // WAITTTT for this promise to get the 2nd object from the DB
        const fetchedVal = await getValuePromise(2);
        // and only then, do
        print("the object we wanted was : " + fetchedVal);

        const fval2 = await getValuePromise(1);
        print("the object we wanted was : " + fval2);

        const fval3 = await getValuePromise(1);
        print("the object we wanted was : " + fval3);
    } catch (err) {
        // if the try block sends us any kind of error signals, be it by any promise or otherwise, catch it, and
        print(err);
    } finally {
        print("-------------- END -------------");
    }
}

queryDB();

/**
 * BUT! With promises, if you wanted to queue up 3 async events at the same time, you could. Instead of chaining .then()s
 * you could just do
 * p1.then()
 * p2.then()
 * p3.then()
 *
 * But with async await there's no good way of doing this. You have to await p1 to fulfill/reject, then p2 and so on
 *
 * So if you're dealing with things that require other things first, async/await is a good idea. Otherwise, if they're
 * independent, probably use promises in ||
 */
