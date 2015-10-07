var TaskApp = React.createClass({

    getInitialState: function(){
        return {
             items: [
                'Go to the doctor',
                'Buy food',
                'Play basketball',
             ],
             taskbox: ''
        }
    },

    completeTask: function(event) {
        var taskIndex = parseInt(event.target.value, 10);
        var currentList = this.state.items;
        currentList.splice(taskIndex, 1);
        this.setState({items: currentList});
    },

    handleChange: function(event) {
        this.setState({ taskbox: event.target.value });
    },

    addTask:function (event){
        this.setState({
            items: this.state.items.concat([this.state.taskbox]),
            taskbox: ''
        });

        event.preventDefault();
    },

    render: function(){
        var value = this.state.taskbox;
        return(
            <div>
                <h1>My Task List </h1>

                <TaskList items={this.state.items} completeTask={this.completeTask} />

                <form onSubmit={this.addTask}>
                    <input type="text" value={value} onChange={this.handleChange}/>
                    <button> Add Task </button>
                </form>
            </div>
        );
    }
});

var TaskList = React.createClass({
    render: function() {
                var that = this;
        return (
                <div>
                    {this.props.items.map(function(task, taskIndex){
                        return (
                            <div key={taskIndex}>
                                {task}
                                <button onClick={that.props.completeTask} value={taskIndex}>Done</button>
                            </div>
                        )

                    })}
                </div>
            );
    }
});

React.render(<TaskApp />, document.getElementById('content'));

