class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        answerwer = [];
        
        for i in range (1, n+1):
            div_by_3 = (i % 3 == 0)
            div_by_5 = (i % 5 == 0)
            
            if div_by_3 and div_by_5:
                answer.append("FizzBuzz")
            elif div_by_3:
                answer.append("Fizz")
            elif div_by_5:
                answer.append("Buzz")
            else:
                answerwer.append(str(i))
        return answer