// import { useEffect } from 'react';
// import * as THREE from 'three';

// const Universe = () => {
    
//     let scene, camera, renderer, stars, starGeo;
//     const starVertices = [];


//     function init() {
//       scene = new THREE.Scene();
//       camera = new THREE.PerspectiveCamera(
//         60,
//         window.innerWidth / window.innerHeight,
//         1,
//         1000
//       );
//       camera.position.z = 1;
//       camera.rotation.x = Math.PI / 2;

//       renderer = new THREE.WebGLRenderer();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       document.body.appendChild(renderer.domElement);

//         let sprite = new THREE.TextureLoader().load("star.png");
//         let starMaterial = new THREE.PointsMaterial({
//             color: 0xaaaaaa,
//             size: 0.7,
//             map: sprite,
//         });

//         starGeo = new THREE.PolyhedronGeometry();
//         console.log( starGeo.parameters );
//         for (let i = 0; i < 6000; i++) {
//             let star = new THREE.Vector3(
//                 Math.random() * 600 - 300,
//                 Math.random() * 600 - 300,
//                 Math.random() * 600 - 300
//             );
//             star.velocity = 5;
//             star.acceleration = 1;
//             starGeo.parameters.vertices.push(star);
//             // starVertices.push(star);
//         }
//         // starGeo.setAttribute("position", starVertices);

//       stars = new THREE.Points(starGeo, starMaterial);
//       scene.add(stars);

//       window.addEventListener("resize", onWindowResize, false);

//       animate();
//     }
//     function onWindowResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     function animate() {
//         console.log( starGeo );
//         starGeo.parameters.vertices.forEach((p) => {
//         p.velocity += p.acceleration;
//         p.y -= p.velocity;

//         if (p.y < -200) {
//           p.y = 200;
//           p.velocity = 0;
//         }
//       });
//       starGeo.verticesNeedUpdate = true;
//       stars.rotation.y += 0.002;

//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     }
    
//     useEffect(() => {
//         init();
//     }, [])

//     return (
//         <div>

//         </div>
//     );
// };

// export default Universe;`

import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import star from "./star.png";

export default function Universe() {
  const ref = useRef(null);
  const texture = useTexture(star);

  useEffect(() => {
    const count = 1000;
    const positions = new Float32Array(count * 32);
    const colors = new Float32Array(count * 32);

    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
      colors[i] = Math.random();
    }
    ref.current.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    ref.current.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  }, []);

  return (
    <>
      <OrbitControls />
      <points>
        <bufferGeometry ref={ref} />
        <pointsMaterial
          size={0.1}
          vertexColors
          color={"yellow"}
          map={texture}
          transparent
          alphaMap={texture}
          depthWrite={false}
        />
      </points>
    </>
  );
}