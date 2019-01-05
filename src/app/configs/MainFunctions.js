export const Pricing = (n) => {
    if(n ===0){
        var price = '-';
    }
    if(n >=1 && n <3){
        var price = '1.500';
    }
    if(n >=3 &&  n < 6){
        var price = '8.250';
    }
    if(n >= 6 &&  n < 8){
        var price = '16.250';
    }
    if(n >=8 &&  n < 10){
        var price = '21.350';
    }
    return price;
}