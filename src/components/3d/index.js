// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const catUrl = new URL("../../assets/cat/scene.gltf", import.meta.url);

// const renderer = new THREE.WebGLRenderer(
//     {
//         canvas: document.querySelector('#demo-canvas'),
//     }
// );

// renderer.setSize(window.innerWidth, window.innerHeight);

// // document.body.appendChild(renderer.domElement);

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000);
// const orbit = new OrbitControls(camera, renderer.domElement);

// camera.position.set(10, 10, 10);
// orbit.update()
// // Lưới ở landing
// const gridHelper = new THREE.GridHelper(30, 30);
// scene.add(gridHelper);

// // Thực hiện load 3D model
// const assetsLoader = new GLTFLoader();
// assetsLoader.load(catUrl.href, (gltf) => {
//   const model = gltf.scene;
//   // scene ở đây là scene của threeJS
//   scene.add(model);

// //   mixer = new THREE.AnimationMixer(model);
// //   const clips = gltf.animations;
//   // const clip = THREE.AnimationClip.findByName(clips, 'HeadAction');
//   // const action = mixer.clipAction(clip);
//   // action.play();

//   // Thực hiện loading 1 loạt animation của model và chạy đồng thời.
// //   clips.forEach((clip)=> {
// //     const action = mixer.clipAction(clip);
// //     action.play();
// //   });

// }, undefined, (error) => {
//   console.error(error);
// });