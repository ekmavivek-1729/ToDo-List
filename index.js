

const add_todo = () => {
    // console.log("start");
    let title = document.getElementById('title').value;
    let desc = document.getElementById('desc').value;

    // localStorage.setItem(todos, [{title,desc},{title,desc},{title,desc}])

    // todos =>[]

    let todos=[];

    //string
    let = localTodos = localStorage.getItem('todos');

    if(localTodos != null)
        todos = JSON.parse(localTodos);

    let todoObject = {
        id : Math.trunc(Math.random() * 1000),
        title : title,
        desc : desc
    };

    todos.push(todoObject);
    //console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));

    show_todo();
};



//show data
const show_todo = () => {
    // console.log("Show");
    let todoString = localStorage.getItem("todos");

    let content = "";

    if(todoString == null){
        //No ToDO
        content += "<h3 class = 'text-white'>NO TODO TO SHOW</h3>";
    }else{
        let todos = JSON.parse(todoString);
        for(let todo of todos.reverse()){
            content += `<div class="card">
                            <div class="card-body"> 

                                <h3> ${todo.title}</h3>
                                <p> ${todo.desc}</p>

                            </div>
                        </div>`;
        }
    }

        document.getElementById('main-content').innerHTML = content;
};

show_todo();