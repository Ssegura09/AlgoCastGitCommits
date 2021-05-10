class Solution {
    public int maxNumberOfBalloons(String text) {
        int[] char_counts = new int[26]; //26 spaces for the alphabet
        
        for (int i = 0; i < text.length(); i++){
            char_counts[text.charAt(i) - 'a']++;  //access the current character and subtract a to convert it into an index and increment the count (a-a = 0 index, b-a = 1 index, etc.)
        }
        //look for the minimum count of each letter, as if we can only make the word ballon with the minimum required letters
        int min = char_counts[1]; //letter b
        min = Math.min(min, char_counts[0]); // letter a - because a's index is 0 since it's the first letter of the alphabet
        min = Math.min(min, char_counts[11] / 2); //letter l - divide by 2 because we need to be sure to have 2 of these for 1 count of the word
        min = Math.min(min, char_counts[14] / 2); //letter o - divide by 2 because we need to be sure to have 2 of these for 1 count of the word
        min = Math.min(min, char_counts[13]); //letter n
        
        return min;
    }
}