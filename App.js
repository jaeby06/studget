import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Login from './Components/Login'
import Landing from './Components/Landing'
import Register from './Components/Register'
import Recover from './Components/Recover'
import Dashboard from './Components/Dashboard'

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <Landing onSwitch={() => setCurrentPage('login')} onRegister={() => setCurrentPage('register')}/>
      case 'login':
        return <Login onSwitch={() => setCurrentPage('recover')} onRegister={() => setCurrentPage('register')} onLogin={() => setCurrentPage('dashboard')} onClick={() => setCurrentPage('landing')} />;
      case 'dashboard':
        return <Dashboard />
      case 'register':
        return <Register onSwitch={() => setCurrentPage('login')} />;
      case 'recover':
        return <Recover onSwitch={() => setCurrentPage('login')} />;
      default:
        return <Landing onSwitch={() => setCurrentPage('login')} onRegister={() => setCurrentPage('register')} />;
    }
  };

  return (
    <PaperProvider>
      {renderPage()}
    </PaperProvider>
  );
};

export default App;