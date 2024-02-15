import './Appa.css';
import img from './img_avatar3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function openInNewTab(url) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}

function App() {

  const handlebutton1 = () => {
    openInNewTab('https://www.linkedin.com/feed/');
  }
  const handlebutton2 = () => {
    openInNewTab('https://github.com/');
  }
  return (
    <>
      <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
      <div className='Main'>
        <img src={img} className='profile' alt="" />
        <div className="Content">
          <h1>Manish Panwar</h1>

          <div className="box">
            <p className='paragraph'> I am a skilled and ambitious computer science student i have done B.Tech degree at Medicaps
              Institute of Techno Management. With a strong foundation in C, Java, Python, HTML, CSS, and
              JavaScript
            </p>
            <div className="container">

              <button class="b1" onClick={handlebutton1} >
               Manish Panwar
              </button>

              <button class="b2" onClick={handlebutton2} >
               manipanw143
              </button>

              <footer class="footer">
                <div class="footer-content">
                  <p><a href="" target="_blank"><i class="fa-solid fa-download"></i>Download</a></p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
