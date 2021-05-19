import logo from '../../assets/images/contoso.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main-content__container">
        <img className="logo__mobile" src={logo} alt="Contoso"></img>
        <div className="main-image__container">
          <div className="main-image"></div>
        </div>
        <div className="content__container">
        <img className="logo__desktop" src={logo} alt="Contoso"></img>
          <div className="paragraph__container">
            <p className="fist__paragraph">Curabitur lobortis id lorem id bibendum ut id consectetur.</p>
            <p className="second__paragraph">Vestibulum rutrum quam vitae fringilla tincidunt amet suspendisse nec tortor.</p>
          </div>
          <div className="input__container">
            <input className="input" type="text" placeholder="Your O365 email"></input>
            <button className="button" type="button">Send</button>
          </div>
        </div>
        <div className="bottom__container"></div>
      </div>
    </div>
  );
}

export default App;
