import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU'
// import MainLayout from './layouts/MainLayout';

import './index.scss'
import Routes from './routes/Routes'
import { AuthProvider } from './context/AuthProvider.jsx';

const App = () => {
  return (
    <ConfigProvider 
      locale={ ruRU }
      theme={{
        components: {
          Layout: {
            colorBgHeader: '#FFFFF'
          }
        }
      }}
    >
      <AuthProvider>
        <Routes />
      </AuthProvider>
      {/* <MainLayout /> */}
    </ConfigProvider>
  )
}

export default App;
