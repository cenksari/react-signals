import React from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = (): React.JSX.Element => {
  console.log('App rendered');

  return (
    <div className='container flex flex-col flex-v-center'>
      <Header />

      <TodoForm />

      <TodoList title='Not completed' todos='uncompleted' />

      <TodoList title='Completed' todos='completed' />

      <Footer />
    </div>
  );
};

export default App;
