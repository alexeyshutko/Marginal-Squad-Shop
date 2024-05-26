<script setup>
import * as THREE from "three";
import { OBJLoader } from "../../public/OBJLoader";
import { FontLoader } from "../../public/FontLoader";
import { TextGeometry } from "../../public/TextGeometry";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x800000); // Устанавливаем цвет фона (бардовый)
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const aoTexture = textureLoader.load(
  "../../public/meat_boy/internal_ground_ao_texture.jpeg"
);
const normalTexture = textureLoader.load(
  "../../public/meat_boy/_meat_normal_map2.png"
);
const diffuseTexture = textureLoader.load(
  "../../public/meat_boy/meatboy_texture.png"
);

const loader = new OBJLoader();
let obj;

loader.load("../../public/meat_boy/Super_meatboy_free.obj", function (object) {
  object.traverse(function (child) {
    if (child.isMesh) {
      child.material = new THREE.MeshStandardMaterial({
        map: diffuseTexture,
        aoMap: aoTexture,
        normalMap: normalTexture,
        metalness: 0,
        roughness: 0.5,
      });
      child.geometry.setAttribute(
        "uv2",
        new THREE.BufferAttribute(child.geometry.attributes.uv.array, 2)
      );
    }
  });

  scene.add(object);
  obj = object;
});

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
dirLight.position.set(-8, 12, 8);
dirLight.castShadow = true;
scene.add(dirLight);

const pointLight = new THREE.PointLight(0xffffff, 0.8);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

camera.position.set(10, 10, 10);
camera.lookAt(new THREE.Vector3(0, 0, 0));

// Загрузка шрифта и создание текста
const fontLoader = new FontLoader();
fontLoader.load("path/to/helvetiker_regular.typeface.json", function (font) {
  const textGeometry = new TextGeometry("MARGINIS", {
    font: font,
    size: 1,
    height: 0.2,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 5,
  });

  const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Черный цвет для текста
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  // Центрирование текста
  textGeometry.computeBoundingBox();
  const centerOffset =
    -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
  textMesh.position.set(centerOffset, 1, 0); // Подняли текст немного вверх

  scene.add(textMesh);
});

function animate() {
  requestAnimationFrame(animate);
  if (obj) obj.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
</script>

<template></template>
