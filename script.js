function validateInput(num) {
    if (!Number.isInteger(num) || num < 0) {
      return false;
    }
    return true;
  }
  
  function iterativeFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function recursiveFactorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * recursiveFactorial(n - 1);
  }
  
  function calculateFactorial(method) {
    const input = document.getElementById("numberInput").value;
    const number = Number(input);
  
    if (!validateInput(number)) {
      document.getElementById("output").innerHTML = "<span class='text-red-500'>Please enter a valid non-negative integer.</span>";
      return;
    }
  
    let result;
    if (method === "iterative") {
      result = iterativeFactorial(number);
    } else {
      result = recursiveFactorial(number);
    }
  
    document.getElementById("output").innerHTML = `Factorial of <strong>${number}</strong> using <strong>${method}</strong> method is: <strong>${result}</strong>`;
  }
  