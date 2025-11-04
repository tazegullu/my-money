import logo from './logo.svg';
import styles from './App.module.css'
import { Title } from './Components';
import Bootstrap from './Bootstrap';


function App() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>{process.env.REACT_APP_API_URL}</p>

      <p>Logo from public</p>
      <img src="/logo192.png" alt=""/>

      <p>React Bootstrap</p>
      <Bootstrap/>



      





      <p>Logo from ana dizin</p>
      <img src={logo} alt=""/>
    </div>
  );
}

export default App;
