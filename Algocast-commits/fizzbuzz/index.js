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

function test(obj){

  for(let i =0; i < string.length; i++){
    if (string == "Steph"){
      return 'BooBooBooster'
    } else {
      return string;
    }
  }
}
string(["Steph", "Mike"])

class Solution {
  public List<String> fizzBuzz(int n) {
      
      List<String> l = new ArrayList<>();
      for(int i=1; i<=n;i++){
          if((i%3==0) && (i%5 != 0))
              l.add("Fizz");
          else if((i%5==0) && (i%3 != 0))
              l.add("Buzz");
          else if((i%3==0) && (i%5==0))
              l.add("FizzBuzz");
          else
              l.add(String.valueOf(i));
      }

      return l;
  }
}