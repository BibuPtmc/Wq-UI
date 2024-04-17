// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import img1 from './image/1.jpg';

// const HomePage = () => {
//   return (
//     <div>
//       <Carousel>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src={img1}
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h3>Slide 1</h3>
//             <p>Description de la première image.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/800x400?text=Slide+2"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h3>Slide 2</h3>
//             <p>Description de la deuxième image.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/800x400?text=Slide+3"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h3>Slide 3</h3>
//             <p>Description de la troisième image.</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// };

// export default HomePage;


import React from 'react';
import { Carousel } from 'react-bootstrap';
import video1 from './video/video1.mp4'; // Importez la vidéo 1 depuis le répertoire vidéo

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <video className="d-block w-100" controls autoPlay loop preload="auto"> {/* Ajoutez les attributs loop et preload */}
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Carousel.Caption>
            <h3>WiskerQuest</h3>
            <p>Bienvenu</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
