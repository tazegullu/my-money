import logo from './logo.svg';
import styles from './App.module.css'
import { Title } from './Components';


function App() {
  return (
    <div className={styles.App}>
      <Title>{process.env.NODE_ENV}</Title>
      <Title theme="dark">{process.env.NODE_ENV}</Title>
      <p>{process.env.REACT_APP_API_URL}</p>
      <img src="/logo192.png" alt=""/>
      <img src={logo} alt=""/>
    </div>
  );
}

export default App;
