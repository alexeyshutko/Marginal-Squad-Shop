<script setup>
import * as THREE from "three";
import { OBJLoader } from "../../public/OBJLoader";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new OBJLoader();
var obj;

loader.load("../../public/Super_meatboy_free.obj", function (object) {
  scene.add(object);
  obj = object;
});

const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
scene.add(light);

camera.position.set(10, 0, 10);

camera.lookAt(new THREE.Vector3(0, 10, 0));

// const dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
// dirLight.position.set(-8, 12, 8);
// dirLight.castShadow = true;
// dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
// scene.add(dirLight);

function animate() {
  requestAnimationFrame(animate);
  obj.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
</script>
<template></template>
