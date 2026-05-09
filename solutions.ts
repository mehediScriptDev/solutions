// problem 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0);
};

const check = filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 10]);
// console.log(check);

// problem 2
const reverseString = (something: string) => {
  let targett = something;
  let mainTarget: string[] = targett.split("");
  let last = mainTarget.reverse();
  let result = last.join("");
  return result;
};

// problem 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// problem 4
const getProperty = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// problem 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    return {
        ...book,
        isRead: true
    }
        
}

// problem 6
class Person{
    name:string;
    age:number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

class Student extends Person{
    Grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.Grade = grade;
    }
    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.Grade}`;
    }
}


// problem 7
function getIntersection(arr: number[], arr1: number[]): number[] {
    let common: number[] = [];

  for (const item of arr1) {
    if (arr.includes(item)) {
      common.push(item);
    }
  }

  return common;
}


