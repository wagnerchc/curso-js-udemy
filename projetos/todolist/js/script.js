class Todo{
    constructor(){
        //Quantidade de tarefas adicionadas
        this.totalTasks=document.querySelectorAll('.task').length;
    }
    addTask(taskText){
        //Clonar a div class="task"
        let template=document.querySelector('.task').cloneNode(true);
        //Retirando a class="hide" da div que foi clonada
        template.classList.remove('hide');
        //Varíavel do texto do template que será substituído
        let templateText=template.querySelector('.task-title');
        //Atribuir o texto digitado no input a varíavel acima
        templateText.textContent = taskText;
        //Varíavel para imprimir no HTML
        let list=document.querySelector('#tasks-container');
        //Adicionar o template já compreenchido com o texto do input
        list.appendChild(template);
        //Adicionar dois eventos (remover e concluir)
        this.addEvents();
    }
    addEvents(){
        //Adicionar os dois eventos a última task adicionada
        let removeBtns=document.querySelectorAll('.fa-trash');
        let removeBtn=removeBtns[removeBtns.length-1];
        let doneBtns=document.querySelectorAll('.fa-check');
        let doneBtn=doneBtns[doneBtns.length-1];
        //Adicionar evento de remover a tarefa
        removeBtn.addEventListener('click', function(){
            todo.removeTask(this);
        });
        //Adicionar evento de completar a tarefa
        doneBtn.addEventListener('click', function(){
            todo.completeTask(this);
        });
        this.checkTasks('add');
    }
    removeTask(task){
        //Identificar o elemento pai >> class="task"
        let parentEl=task.parentElement;
        //Remover o elemento pai e seus filhos
        parentEl.remove();
        this.checkTasks('remove');
    }
    completeTask(task){
        //Adiciona a classe no ícone "fa fa-check"
        task.classList.add('done');
    }
    checkTasks(command){
        //Pegar a mensagem
        let msg=document.querySelector('#empty-tasks');
        //Lógica de adicionar ou remover tasks
        if(command=='add'){
            this.totalTasks+=1;
        }else{
            this.totalTasks-=1;
        }
        //Se tiver mais que 1 task
        if(this.totalTasks==1){
            msg.classList.remove('hide');
        }else{
            msg.classList.add('hide');
        }
    }
}
//Instância o objeto da Classe Todo
let todo=new Todo();
//
let addBtn=document.querySelector('#add');
addBtn.addEventListener('click',function(e){
    //Para o evento antes de ser enviado ao banco de dados, que não há nessa aplicação
    e.preventDefault();
    //Variável do texto digitado no input
    let taskText=document.querySelector('#task');
    //Verificar se foi digitado algum texto antes de adicionar
    if(taskText.value!=''){
        todo.addTask(taskText.value);
    }else{
        alert('Descreva a tarefa no campo antes de clicar em adicionar');
    }
    //Limpara o input após adicionar uma tarefa
    taskText.value='';
});