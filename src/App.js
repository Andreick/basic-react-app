import './App.css';
import NumberList from './NumberList';

function App() {
  const numbers = [23, 45, 64, 78, 'test'];
  const numbers2 = [21, 45, 56, 78, 'test'];
  const todos = [
    { id: '1', name: 'Coding', isDone: false },
    { id: '2', name: 'Walking', isDone: true },
  ];
  return (
    <div>
      <NumberList numbers={numbers} />
      <NumberList numbers={numbers2} />
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.name}
              {todo.isDone && ' - Done'}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
