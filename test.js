/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for(let i=0; i < asteroids.length; i++){
        const top = stack[stack.length-1];
        const current = asteroids[i];

       if(stack.length == 0 ||  top < 0 || current > 0){
            stack.push(current);
       }else if(top + current == 0){
            stack.pop();
       }else{ // current < 0 && top > 0
            if(Math.abs(current) > Math.abs(top)){
                stack.pop();
                i--;

            }
       }
    }
    
   return stack;
};