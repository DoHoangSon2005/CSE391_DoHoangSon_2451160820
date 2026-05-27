function pipe(...fns) {

    return function(value) {

        return fns.reduce((result, fn) => {
            return fn(result);
        }, value);

    };

}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);

console.log(process(5));

function memoize(fn) {

    const cache = {};

    return function(n) {

        if (cache[n]) {
            console.log("Lấy từ cache");
            return cache[n];
        }

        const result = fn(n);

        cache[n] = result;

        return result;

    };

}

const expensiveCalc = memoize((n) => {

    console.log("Đang tính...");

    let result = 0;

    for (let i = 0; i < n; i++) {
        result += i;
    }

    return result;

});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));

function debounce(fn, delay) {

    let timer;

    return function(...args) {

        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay);

    };

}

const search = debounce((query) => {

    console.log("Searching:", query);

}, 500);

search("iphone");
search("iphone 16");
search("iphone 16 pro");

async function retry(fn, maxAttempts = 3) {

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {

        try {

            return await fn();

        } catch (error) {

            console.log("Lần", attempt, "thất bại");

            if (attempt === maxAttempts) {
                throw error;
            }

        }

    }

}

let count = 0;

async function testApi() {

    count++;

    if (count < 3) {
        throw new Error("API lỗi");
    }

    return "Thành công!";
}

retry(testApi)
    .then(result => console.log(result))
    .catch(error => console.log(error.message));