/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 求出a、b的最大公约数。
 * @param a int 
 * @param b int 
 * @return int
 */

// 用更相减损法求最大公约数
function gcd( a ,  b ) {
    // write code here
    while(1){
        if(a<b){
            b -= a
        }else if(a>b){
            a -= b
        }else{
            return  a
        }
    }
    
}


// 用辗转相除法求最大公约数
function gcd1( a ,  b ) {
    // write code here
    while(a * b){
        if(a<b){
            b %= a
        }else if(a>b){
            a %= b
        }
    }
    return  a>b ? a:b
}

module.exports = {
    gcd : gcd
};
