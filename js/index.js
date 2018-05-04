(function(){
let n;
do {
    alert('Please enter number');
    n = parseInt(prompt('Enter number'));
} while (isNaN(n))
document.write('Your number:' + n + '<br>');

function fibon(n) {
    if (n == 0){
        return 0;
    }else if (n == 1 || n == 2){
        return 1;
    }
    let fib1 = 1,
        fib2 = 1,
        fib3;
    for (let i = 3; i <= n; i++) {
        fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return fib3;
}
document.write('Fibonacci number:' + fibon(n) + '<br>');

function fib(n) {
    if (n < 2)
        return n;
    return fib(n - 1) + fib(n - 2);
}
document.write('Fibonacci number:' + fib(n) + '<br>');


function fibonacci(n) {
    let fibArr = [1, 1];
    if (n == 0)
        return 0;
    else if (n == 1 || n == 2)
        return 1;
    for (let j = 2; j <= n; j++) {
        fibArr.push(fibArr[j - 1] + fibArr[j - 2]);
    }
    return fibArr[n-1];
}
document.write('Fibonacci number:' + fibonacci(n));
});