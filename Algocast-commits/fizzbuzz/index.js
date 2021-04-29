function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

function test(string){

  for(let i =0; i < string.length; i++){
    if (string == "Steph"){
      return 'BooBooBooster'
    } else {
      return string;
    }
  }
}
string(["Steph", "Mike"])