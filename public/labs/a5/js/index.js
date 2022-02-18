alert("Hello World!!!");
console.log("Hello World!!!!!!");

console.log("Variables and Constants");
global1 = 10;
console.log(global1);
var functionScoped = 2;
console.log(functionScoped);
let blockScoped = 5;
console.log(blockScoped);
const constant1 = global1 + functionScoped - blockScoped;
console.log(constant1);

console.log("Variable types");
let numberVariable = 123;
console.log(numberVariable);
let floatingPointNumber = 234.345;
console.log(floatingPointNumber);
let stringVariable = "Hello World!";
console.log(stringVariable);
let booleanVariable = true;
console.log(booleanVariable);
let isNumber = typeof numberVariable;
console.log(isNumber);
let isString = typeof stringVariable;
console.log(isString);
let isBoolean = typeof booleanVariable;
console.log(isBoolean);

console.log("Boolean Variables");
let true1 = true;
console.log(true1);
let false1 = false;
console.log(false1);
let false2 = true1 && false1;
console.log(false2);
let true2 = true1 || false1;
console.log(true2);
let true3 = !false2;
console.log(true3);
let true4 = numberVariable === 123;
console.log(true4);
let true5 = floatingPointNumber !== 321.432;
console.log(true5);
let false3 = numberVariable < 100;
console.log(false3);

console.log("If else");
if (true1) {
  console.log(true);
}

if (!false1) {
  console.log("!false1");
} else {
  console.log("false1");
}

console.log("Ternary Conditional Operator");
const loggedIn = true;
const greeting = loggedIn ? "Welcome!" : "Please login";
console.log(greeting);

console.log("Legacy ES5 function");
function add(a, b) {
  return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

console.log("New ES6 functions");
const subtract = (a, b) => {
  return a - b;
};
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

console.log("Implied return ");
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

console.log("Parenthesis and Parameters");
const square = (a) => a * a;
const plusOne = (a) => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

console.log("Arrays");
let numberArray1 = [1, 2, 3, 4, 5];
console.log(numberArray1);
let stringArray1 = ["string1", "string2"];
console.log(stringArray1);
let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  numberArray1,
  stringArray1,
];
console.log(variableArray1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);
let numberArray12 = [1, 2, 4, 5, 6];
console.log(numberArray12);
let stringArray12 = ["string1", "string3"];
console.log(stringArray12);

console.log("Array index and length");
const length1 = numberArray1.length;
console.log(length1);
const index1 = numberArray1.indexOf(3);
console.log(index1);

console.log("Add and remove data to arrays");
// adding new items
numberArray1.push(6);
stringArray1.push("string3");
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

console.log("For Loops");
for (let i = 0; i < stringArray1.length; i++) {
  console.log(stringArray1[i]);
}

console.log("The Map Function");
console.log(numberArray1);
const squares = numberArray1.map(square);
console.log(squares);
const cubes = numberArray1.map((a) => a * a * a);
console.log(cubes);

console.log("Find function");
const four = numberArray1.find((n) => n === 4);
console.log(four);
const string3 = stringArray1.find((a) => a === "string3");
console.log(string3);

console.log("Find index");
const fourIndex = numberArray1.findIndex((a) => a === 4);
console.log(fourIndex);
const string3Index = stringArray1.findIndex((a) => a === "string3");
console.log(string3Index);

console.log("The Filter Function");
console.log(`numberArray1:  ${numberArray1}`);
const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
console.log(`numbersGreaterThan2:  ${numbersGreaterThan2}`);
const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
console.log(`Even Numbers:  ${evenNumbers}`);
const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);
console.log(`Odd Numbers:  ${oddNumbers}`);

console.log("Template strings");
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);
const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);
const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);
const loggedInF = false;
const greeting2 = `Logged in: ${loggedInF ? "Yes" : "No"}`;
console.log(greeting2);

const init = () => {
  console.log("Hello world from jQuery");
  /* do the rest of the lab work here */
  const bindById = $(`#bind-by-id`);
  const bindByID1 = $(`#bind-by-id1`);
  console.log(bindByID1);
  const bindByClass = $(".bind-by-class");
  console.log("Binding to DOM");
  console.log(bindById);
  console.log(bindByClass);

  const changeStyle = $("#change-style");
  changeStyle.css("color", "red");
  const changeStyle22 = $("#change-style22");
  changeStyle22.css("color", "blue");

  const changeStyle2 = $(`.change-style`);
  changeStyle2.css("color", "blue");

  console.log("Get and set attributes");
  const getIdAttr = $("#get-id-attr");
  const id = getIdAttr.attr("id");
  console.log(id);

  const setClassAttr = $("#set-class-attr");
  setClassAttr.attr("class", "class-0"); // ("class", "class-0") if #class-0 in css is id we put "id", .class-0 we put class

  const Sclass = $(`.get-class`);
  Sclass.attr("id", "class-10");

  const addClass1Example = $("#add-class-1"); // id from html
  addClass1Example.addClass("class-1"); //this is where it add the .class-1 from index.css

  const removeClass1Example = $("#remove-class-1"); // get the id name remove-class-1 from index.html
  removeClass1Example.removeClass("class-2"); // remove the class-2 from index.html

  const hideMe = $("#hide-me");
  hideMe.hide();

  const showMe = $("#show-me");
  showMe.show();

  const newLineItem = $("<li>Line item 1</li>"); // create li element
  const anotherLineItem = $("<li>Line item 2</li>");
  const ul = $(`#append-new-elements`); // use the id name #append-new-elements
  ul.append(newLineItem); // append li element into the #append-new-elements ul
  ul.append(anotherLineItem);

  
  const removeThisLi = $(`#remove-this`);
  removeThisLi.remove(); // this will remove the single list
  const removeThisLi2 = $(`#remove-this2`).remove();
  const emptyThisUI = $(`#empty-this`);
  emptyThisUI.empty(); // empty all

  const changeThisText = $("#change-this-text");
  changeThisText.html("New New Text");
  const changeThisHtml = $("#change-this-html");
  changeThisHtml.html(
    `<li>Line item A </li> <li>Line item B </li> <li>Line item C </li>`
  );

  const child2 = $(`#child-2`);    // start from child and below is to parent
  const partent1 = child2.parents("#parent");        // to parents
  partent1.css('background-color','red').css('color','white')  // set the background color and text color
  const parent = $("#parent");
  const child = parent.find(`#child-2`);     // start from parent find the child name id child-2 
  child.css('background-color','blue')      // color the background to blue 
  const child6 = parent.find(`#child-6`).css('background-color','green').css("color",'blue');

  const handleClick= ()=> console.log('Handle clicks!!!!!!');
  const clickable = $('.clickable');   // use class name .clickable 
  clickable.click(handleClick);        // will print the console.log('handle click')
  

  
  const handleEventTarget=(event) =>{
    const target = event.target;
    console.log(target);
    $(target).css('background-color','blue').css('color','white');
  }

  const eventTarget = $("#event-target");    // set up id name event-target
  eventTarget.click(handleEventTarget);    // id name #event-target click trigger handleEventTarget
  
  let hideBtn,showBtn,hideShowHeader;
  hideBtn = $('#hide');   // set up the id hide
  showBtn = $('#show');
  hideShowHeader = $('#hide-show');
  
  const hideHandler = () => {
    hideShowHeader.hide();       // hide() the header 
  }

  const showHandler =() => {
    hideShowHeader.show();      // show() the header 
  }
  
  hideBtn.click(hideHandler);    // click hideBtn trigger hidehandler 
  showBtn.click(showHandler);    // click showBtn trigger showHandler
};
$(init);
