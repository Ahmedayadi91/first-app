import  ImageInPublic from '../public/imageInPublic.png'
import  ImageInSrc  from './imageInSrc.png'
import './App.css';
import Footer from './componant/footer'
function App() {
  return (
    <div className="App">
     <div className="page">
        <h1 className="title">Your name here</h1>
        <h2 className="title2"> Bienvenue dans mon premier web site </h2>
        <br />
        <div className="img1">
          <img   src={ImageInPublic}    alt='image 1'   />
          <img   src={ImageInSrc}    alt='image 2'   />
         {/* <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" width='100px ' height='100px'
          alt="new"
          /> */}
        </div>
        
      <br/> <hr/>
      <div className="img2">
          <img 
            src="https://www.entreprises-magazine.com/wp-content/uploads/2020/05/Gomycode-et-Tunisia-Jobs-696x385.jpg" width='400px ' height='200px'
             alt="new"
      /> <br/>
      <video width="750" height="500" controls >
      <source src="https://www.youtube.com/watch?v=Rq5SEhs9lws&ab_channel=Skillthrive" type="video/mp4"/>
     </video>
      </div>
        

      </div>

            {/* <video width="320" height="240" controls>

      <source src="myVideo.mp4" type="video/mp4" />

            </video> */}
            <video className="video-container video-container-overlay" autoplay="" loop="" muted="">
                   <source type="mp4" data-reactid=".0.1.0.0.0" src="https://www.youtube.com/watch?v=OD3F7J2PeYU"/>
            </video>
            <video>
            <source src="https://www.youtube.com/watch?v=OD3F7J2PeYU"/>
            </video>
           <div> <Footer/> </div> 
    </div>
  );
}

export default App;
