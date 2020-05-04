import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { Todo, fetchTodos, deleteTodo } from "../actions";

//kind of workaround
//not ideal but works
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: Function;
}

class Main extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      fetching: false,
    };
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: true });
    }
  }

  onFetchClick = () => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onFetchClick}>Fetch</button>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export const MainPage = connect(mapStateToProps, { fetchTodos, deleteTodo })(
  Main
);
