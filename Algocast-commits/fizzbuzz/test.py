class Solution(object):
    def fizzBuzz(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        ans = [];
        
        for i in range (1, n+1):
            div_by_3 = (i % 3 == 0)
            div_by_5 = (i % 5 == 0)
            
            if div_by_3 and div_by_5:
                ans.append("FizzBuzz")
            elif div_by_3:
                ans.append("Fizz")
            elif div_by_5:
                ans.append("Buzz")
            else:
                ans.append(str(i))
        return ans