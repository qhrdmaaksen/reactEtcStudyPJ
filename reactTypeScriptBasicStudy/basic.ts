//기본형 Primitives: number, string, boolean
//자료형 complex types: arrays, objects
//함수형 Function types, parameters

//Primitives
/*타입스크립트에서는 ‘number’와 ‘string’ 표기가 소문자로 시작된다는 거예요 이렇게 ‘Number’로 사용하면 안됩니다
대문자로 써도 오류가 발생하진 않지만 대문자로 쓰면 자바스크립트의 Number 객체를 가리키게 됩니다*/

/*숫자 지정*/
let age: number;
age = 24;
/*문자열 지정*/
let userName: string;
userName = 'vitamin777';
/*불리언 지정*/
let isInstructor: boolean;
isInstructor = true;

//more complex types
/*문자열 배열 지정*/
let hobbies: string[];
hobbies = ['coding, netflix'];
/*객체 타입 지정*/
let person: {
  name: string;
  age: number;
};
person = {
  name: 'vitamin',
  age: 34,
};
/*객체를 여러개 가진 배열*/
let people: {
  name: 'min777';
  age: 34;
}[];
//type interface
/*타입 추론으로 타입스크립트는 가능한 많은 타입을 유추하려고하며 타입 표기가 없어도 타입을 어디에 사용할지 알아내려고함*/
/*한개의 변수에 여러개의 타입을 지정
 * 하나의 변수에 문자열과 숫자를 함께 저장해야 할 수도 있죠 서로 다른 형태의 객체를 동일한 변수에 저장해야 하는 경우는 얼마든지 생길 수 있습니다
 * 이런 경우에 한 개 이상의 타입을 지정할 수 있게 해주는 기능으로 유니온(union) 타입이라는 기능*/
let course: string | number | boolean = 'react perfect guide';
course = 123;

//타입 별칭 type alias
type AliasTest = {
  name: string;
  age: number;
};
let aliasTest: AliasTest;
aliasTest = {
  name: 'vitamin',
  age: 34,
};
let aliasTest02: AliasTest[];
aliasTest02 = [
  {
    name: 'vitamin777',
    age: 34,
  },
  {
    name: 'min',
    age: 33,
  },
];

/* 함수와 타입*/
function add(a: number, b: number): number | string {
  return a + b;
}
let total = add(10, 20);
console.log(total);
/*함수에서 중요한 건 이 함수가 아무것도 반환하지 않는다는 겁니다 return 문이 없죠, 이럴 경우에 갖는
특별한 반환 타입이 바로 ‘void’입니다 void는 null 또는 undefined와 비슷하지만
항상 함수와 결합해서 사용한다는 특징이 있습니다 void는 함수에 반환 값이 없다는 걸 뜻하죠
만약 이 함수의 반환 값을 받아 작업하려면 undefined 타입으로 값을 받아야 합니다
void는 함수에만 있는 특수한 타입으로 함수의 반환 타입에 사용*/
function printOutput(value: any) {
  console.log(value);
}

//제네릭 Generic
/*제네릭의 주요 기능 여기서는 함수 작성에 도움을 줬습니다 함수에 타입 안정성과 유연성을 줬죠
자유롭게 어떤 타입이든 사용할 수 있지만, 특정 타입을 사용해 함수를 실행하고 나면
해당 타입으로 고정되어 동작하죠 이 기능은 두 가지 측면에 모두 도움이 됩니다 유연성과 타입 안정성 측면에요*/
function insertAtBeginning<T>(array: T[], value: T) {/*제네릭타입을 사용해 ts 에게 any type 아니고 array 와 value 가 같은 type 이라고 명시*/
  /*전개 연산자 사용, spreadOperator*/
  const newArray = [
    value,
    ...array,
  ]; /*기존 배열을 변경하지않으면서 새로운 배열을 얻기*/
  return newArray;
}
const demoArray = [1, 2, 3];
const updateArray = insertAtBeginning(
  demoArray,
  -1,
); /*updateArray 에는 [-1,1,2,3] 이 반환됨*/
const stringArray = insertAtBeginning(['a','b','c'],'d')
console.log(stringArray)
/*updateArray[0].split(
  '',
);*/ /*updateArray 에는 number type 이기에 split 를 사용할수 없기때문에 generic fn 사용으로 변환할 수 있음*/
