// import React from 'react';
// import Particles from 'react-tsparticles';

// const Particle = () => {
//     return (
//         <div>
//              <Particles init={particlesInit} options={particlesOptions}/>
//         </div>
//     );
// };

// export default Particle;


import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";


const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
         console.log(container);
    }, []);


    const particlesOptions={
      fullScreen: { enable: true, zIndex: -1 },
      particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 2, direction: "none", random: true },
      },
  };
  
    return (
        <div>
            <div className="particles-background">
                <Particles className="particle-background" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesOptions} />
            </div>
        </div>
    );
};

export default Particle;





// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";

// const Particle = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);
//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);

//   const particlesOptions = {
//     "autoPlay": true,
//     "background": {
//       "color": {
//         "value": "#000"
//       }
//     },
//     "fullScreen": {
//       "enable": true,
//       "zIndex": -1
//     },
//     "particles": {
//       "number": {
//         "value": 100,  // Set particle count to 100
//         "density": {
//           "enable": true,
//           "value_area": 800
//         }
//       },
//       "shape": {
//         "type": "circle"
//       },
//       "color": {
//         "value": "#fff"
//       },
//       "size": {
//         "value": 5,  // Set particle size
//         "random": true
//       },
//       "move": {
//         "enable": true,
//         "speed": 3,
//         "direction": "none",
//         "outModes": {
//           "default": "out"
//         }
//       }
//     }
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       options={particlesOptions}
//       init={particlesInit}
//       loaded={particlesLoaded}
//     />
//   );
// };

// export default Particle;
