import  ImageInSrc  from './imageInSrc.png'
import  video1 from './video1.mp4'

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
          <img   src="/ImageInPublic.png"    alt='image 1'   />
          <img   src={ImageInSrc}    alt='image 2'   />
         <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" width='100px ' height='100px'
          alt="new"
          />
        </div>
        
      <br/> <hr/>
      <div className="img2">
          <img 
            src="https://www.entreprises-magazine.com/wp-content/uploads/2020/05/Gomycode-et-Tunisia-Jobs-696x385.jpg" width='400px ' height='200px'
             alt="new"
      /> <br/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/O6P86uwfdR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
        
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BURRD_nWJh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
            <video width="520" height="400" controls>
               <source src={video1} type="video/mp4" />
            </video>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/fCZVL_8D048" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              {/* <video width="420px" height="440px">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4"  />
              </video> */}
           <div> <Footer/> </div> 
    </div>
  );
}

export default App;
