// problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter(number => number % 2 === 0);
}

const check= filterEvenNumbers([1,2,3,4,5,6,7,8,10])
// console.log(check);


// problem 2
const reverseString = (something:string)=>{
    let targett = something;
    let mainTarget: string[] = targett.split("");
    let last = mainTarget.reverse();
    let result = last.join("");
    console.log(result);
    

}


// problem 3
type StringOrNumber = string | number;

const checkType = (input:StringOrNumber)=>{
    if(typeof input === "string"){
        return "String";
    }
    else{
        return "Number";
    }
    
}


// problem 4
const getProperty = <X>(obj:X,key:keyof X)=>{
   return obj[key]; 
}




