var TaskApp = React.createClass({
    getInitialState: function(){
        return {
             items: [
                'Go to the doctor',
                'Buy food',
                'Play basketball',
             ],
             task: ''
        }
    },

    completeTask: function(event) {
        var taskIndex = parseInt(event.target.value, 10);
        console.log(event.target.value);
        console.log(taskIndex);
        var currentList = this.state.items;
        currentList.splice(taskIndex, 1);
        this.setState({items: currentList});
    },

    onChange: function(event) {
        this.setState({ task: event.target.value });
    },



    addTask:function (event){
        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: ''
        })

        event.preventDefault();
    },

    render: function(){
        return(
            <div>
                <h1>My Task List </h1>
                <TaskList items={this.state.items} completeTask={this.completeTask} />

                <form onSubmit={this.addTask}>
                    <input onChange={this.onChange} type="text" value={this.state.task}/>
                    <button> Add Task </button>
                </form>
            </div>
        );
    }
});

var TaskList = React.createClass({
    render: function(){

        return <div>
                    {this.props.items.map((task, taskIndex) =>
                        <div key={taskIndex}>
                            {task}
                            <button onClick={this.props.completeTask} value={taskIndex}> Done </button>
                        </div>
                    )}
                </div>;
    }
 });

React.render(<TaskApp />, document.getElementById('content'));

