var maxNumberOfBalloons = function(text) {
    let count = 0;
    let map = {};
    
    for (let el of text){
        map[el] = (map[el] || 0) + 1;
    }
    // console.log(map)
        
    while (map["b"] >= 1 && map["a"] >= 1 && map["l"] >= 2 && map["o"] >= 2 && map["n"] >= 1){
        count++;
        map["b"]--;
        map["a"]--;
        map["l"]-=2;
        map["o"]-=2;
        map["n"]--;
    }
    // console.log("here", map) // We're decrementing to remove the counted cases from the map.
    return count;
};

// original switch case
 // for (let i = 0; i < text.length; i++){
    //     switch(text[i]){
    //         case "b": map[text[i]] = (map[text[i]] | 0) + 1; //if syntax is not in string already, add it in and set the value to 0, then add 1
    //         break;
    //         case "a": map[text[i]] = (map[text[i]] | 0) + 1;
    //         break;
    //         case "l": map[text[i]] = (map[text[i]] | 0) + 1;
    //         break;
    //         case "o": map[text[i]] = (map[text[i]] | 0) + 1;
    //         break;
    //         case "n": map[text[i]] = (map[text[i]] | 0) + 1;
    //         break;
    //     }