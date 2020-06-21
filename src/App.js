import React from 'react';
import logo from './logo.svg';
import Child from './Child';

import {TransactionProvider} from './transcontext';
import './App.css';

function App() {
  return (
    <div>
      <TransactionProvider>
      <Child/>
      </TransactionProvider>
    </div>
  );
}

export default App;
