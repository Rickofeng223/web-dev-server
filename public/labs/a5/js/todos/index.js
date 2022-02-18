alert("Hello World!");

$("#wd-todo").append(`
    <div class="container">
        <h1>Todo example</h1>
        <ul><li>item A</li></ul>
    </div>
`);

import TodoList from "./TodoList.js";
// the following means inside id wd-todo add following from TodoList.js
$("#wd-todo").append(` <div class="container">   
        <h1>Todo Check box example</h1>
        ${TodoList()} 
    </div>
`);

