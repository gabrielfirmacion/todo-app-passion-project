var TaskApp = React.createClass({

    getInitialState: function(){ //sets initial state or default state of the app
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
        var taskIndex = parseInt(event.target.value, 10); //10 is the radix. A number (from 2 to 36) that represents the numeral system to be used. 10 for the decimal numeral system
        var currentList = this.state.items;
        currentList.splice(taskIndex, 1); // takes out the item with that index. second argument means we are only taking out 1 item.
        this.setState({items: currentList}); //sets the the state of the app, this time removing 1 item from the list.
    },

    handleChange: function(event) {
        this.setState({ taskbox: event.target.value }); //tracks the changes made in the taskbox
    },

    addTask:function (event){
        this.setState({
            items: this.state.items.concat([this.state.taskbox]), //add the new item to the items array
            taskbox: '' //resets the taskbox to be empty after you enter a new task
        });

        event.preventDefault(); //prevents the page from loading
    },

    render: function(){ //returns the React components that will 'render' to HTML
        var value = this.state.taskbox;
        return(
            <div>
                <h1>My Task List </h1>

                <TaskList items={this.state.items} completeTask={this.completeTask} /> // calls on the TaskList component showing the items that are undeleted

                <form onSubmit={this.addTask}>
                    <input type="text" value={value} onChange={this.handleChange}/> //onChange enables the user to update the value inside the taskbox
                    <button> Add Task </button>
                </form>
            </div>
        );
    }
});

var TaskList = React.createClass({
    render: function() {
                var that = this; //giving 'this' a variable so that I can use it again later
        return (
                <div>
                    {this.props.items.map(function(taskbox, taskIndex){
                        return (
                            <div key={taskIndex}>
                                {taskbox} //prints the task
                                <button onClick={that.props.completeTask} value={taskIndex}>Done</button> //used that as a sub for this because if you use 'this', code will break because it went a level deeper when you used a map method
                            </div>
                        )

                    })}
                </div>
            );
    }
});

React.render(<TaskApp />, document.getElementById('content')); //Calling the component TaskApp which is my main component and sort of like pasting that into the div of my html file with an ID of content.

