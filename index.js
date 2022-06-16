// this is a function that is going to listen to any even that is happening 
window.addEventListener('load', ()=> {

    // we don't variable to change so we use const
    const form = document.querySelector("#new_task_form");
    const input = document.querySelector("#new_task_input");
    //where our list is appearing
    const list_el = document.querySelector("#task");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

            // whatever value pick it here
        task = input.value;

        const task_el = document.createElement('div');
        //create a div and give it a class name
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');

        task_content_el.classList.add('content');

        task_el.appendChild('task_content_el');

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type=('text');
        task_input_el.value=task;

        task_input_el.setAttribute("readonly", "readonly"); // this method take a key value. But will only be read not much over it.

        //take the task input_el and make it a child of the task content element
        task_content_el.appendChild(task_content_el);
        //Now model the action of these acts like delet, edit...

        const task_action_el = document.createElement('div');

        //give this div a class name

        task_action_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('Edit');
        //add attributes
        task_edit_el.innerText='Edit';

        // create delete button
        const task_delete_el =  document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_action_el);

        input.value=' ';

        list_el.appendChild(task_el);

        task_edit_el.addEventListener('click', (e) => {
            if(task_edit_el.innerText.toLowerCase() == 'Edit'){
                task_edit_el.innerText='Save';
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }else{
                task_edit_el.innerText = 'Edit';
                task_input_el.setAttribute('readonly', 'readonly');
            }
        });

        task_delete_el.addEventListener('click', (e)=>{
            list_el.removeChild(task_el);
        });
    });



});
