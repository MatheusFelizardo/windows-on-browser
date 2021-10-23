import React from 'react';
import SystemWrapper from './components/System/SystemWrapper';
import './styles/global.css';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();

function App() {
  return (
    <SystemWrapper />
  );
}

export default App;
