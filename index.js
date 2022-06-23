//add Event Lister will listen to all added events in this window element
window.addEventListener('load', ()=> {
    const form = document.querySelector("#new-task-form"); //Calling class for css styling
    const input = document.querySelector('#new-task-input'); //Calling the Task that is newly input in the row.
    const list_el = document.querySelector('#tasks');//Calling class for css styling
    var counter=0; // declare the variable so to count and indicate numbers of rows every time a row task is added.
    form.addEventListener('submit', (e) => {

         //Javascript VALIDATION
        const tasks = input.value;
        //  if (tasks == "") {
        //     window.alert("Please enter some Tasks");
        //     return false;            
        // } 

         //Javascript numbering order
        counter++;
        e.preventDefault();

        const task = counter+' . '+tasks;         
        const task_el = document.createElement('div');        
        task_el.classList.add('task');  

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content'); 

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type='text';
        task_input_el.value=task;
        
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText='Edit';

        const task_del_el = document.createElement('button');
        task_del_el.classList.add('delete');
        task_del_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_del_el);

        task_el.appendChild(task_action_el);

        input.value='';

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e)=>{
            if(task_edit_el.innerText.toLowerCase()=="edit"){
                task_edit_el.innerText="Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }else{
                task_edit_el.innerText="Edit";
                task_input_el.setAttribute("readonly","readonly");
            } 
        });

        task_del_el.addEventListener('click', (e)=>{
            list_el.removeChild(task_el);
        });

    });
});