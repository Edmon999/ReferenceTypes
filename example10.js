const fibo = (n) => {
  let fiboArr = [0, 1];
  for (let i = 0; i < n - 2; i++) {
    let newEl = fiboArr[i + 1] + fiboArr[i];
    fiboArr.push(newEl);
  }
  console.log(fiboArr[fiboArr.length - 1]);
};
fibo(8);
