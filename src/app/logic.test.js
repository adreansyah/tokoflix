// import {Pricing,Splitingdate} from './configs/MainFunctions';

// test('Rate By price', () => {
//     expect(Splitingdate('2018-01.01')).toBe("2018")
// });

// test('Pricing', () => {
//     expect(Pricing(2)).toBe("1.500")
// });

class Car {
    constructor(type,color,status){
        this.type  = type;
        this.color; 
        this.engineStart = status;     
    }

    isEngineStart(){
        this.engineStart = 'On';
        console.log('Mesin Nyalah');
    }    

    isEngineOff(){
        this.engineStart = 'Off';
        console.log('Mesin Mati');
    }

    set Color(color){    
        this.color = color;
    }
    
    get Color(){        
        return typeof this.color;        
    }    

    static IsEngineOn(state){               
        if(state.engineStart === 'Off'){
            console.log('Mesin Mati');
        }
        else{
            console.log('Mesin Nyalah');
        }
    
    }
}


test('Rate By price', () => {
    expect(new Car()).toBe({"engineStart": undefined, "type": undefined})
});