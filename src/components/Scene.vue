<script setup>
import { ref, onMounted } from "vue";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const canvas = ref(null);
const sceneStyle = ref({
  transform: "translateY(0%)",
  transition: "transform 0.3s ease",
});

const isDragging = ref(false);
const startY = ref(0);
const currentY = ref(0);

const handleMouseDown = (event) => {
  isDragging.value = true;
  startY.value = event.clientY;
  currentY.value = event.clientY;
  sceneStyle.value.transition = "none";
};

const handleMouseMove = (event) => {
  if (isDragging.value) {
    currentY.value = event.clientY;
    const delta = currentY.value - startY.value;
    sceneStyle.value.transform = `translateY(${Math.min(delta, 0)}px)`;
  }
};

const handleMouseUp = () => {
  if (isDragging.value) {
    isDragging.value = false;
    sceneStyle.value.transition = "transform 0.3s ease";
    if (currentY.value < startY.value - 100) {
      sceneStyle.value.transform = "translateY(-100%)";
    } else {
      sceneStyle.value.transform = "translateY(0%)";
    }
  }
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ canvas: canvas.value });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x800000);

  const textureLoader = new THREE.TextureLoader();
  const aoTexture = textureLoader.load("public/socrates/1001_Mixed_AO.png");
  const normalTexture = textureLoader.load(
    "public/socrates/1001_Normal_OpenGL.png"
  );
  const diffuseTexture = textureLoader.load(
    "public/socrates/1001_Base_Color.png"
  );
  const roughnessTexture = textureLoader.load(
    "public/socrates/1001_Roughness.png"
  );

  const loader = new OBJLoader();
  let obj;

  loader.load("public/socrates/Socrates.obj", (object) => {
    object.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: diffuseTexture,
          aoMap: aoTexture,
          normalMap: normalTexture,
          roughnessMap: roughnessTexture,
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
    obj.scale.set(0.1, 0.1, 0.1);
    obj.position.y = -6;
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

  camera.position.set(0, 5, 15);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  // const fontLoader = new FontLoader();
  // fontLoader.load("public/helvetiker_regular.typeface.json", (font) => {
  //   const textGeometry = new TextGeometry("MARGINIS", {
  //     font: font,
  //     size: 1,
  //     height: 0.2,
  //     curveSegments: 12,
  //     bevelEnabled: true,
  //     bevelThickness: 0.03,
  //     bevelSize: 0.02,
  //     bevelOffset: 0,
  //     bevelSegments: 5,
  //   });

  //   const textMaterial = new THREE.MeshStandardMaterial({
  //     color: 0xffffff,
  //     metalness: 1,
  //     roughness: 0.3,
  //     envMapIntensity: 1.5,
  //   });

  //   const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  //   textGeometry.computeBoundingBox();
  //   const centerOffset =
  //     -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
  //   textMesh.position.set(centerOffset, -2, 5);

  //   scene.add(textMesh);
  // });

  function animate() {
    requestAnimationFrame(animate);
    if (obj) obj.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
});
</script>
<template>
  <div class="scene-container" @mousedown="handleMouseDown" :style="sceneStyle">
    <canvas ref="canvas" class="scene-canvas"></canvas>
    <h1 class="brand-name">MARGINIS</h1>
  </div>
</template>
<style scoped>
.scene-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  background: linear-gradient(135deg, #642b73, #c6426e); /* Градиентный фон */
  cursor: grab;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scene-container:active {
  cursor: grabbing;
}

.scene-canvas {
  width: 100%;
  height: 100%;
}

.brand-name {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Arial Black", sans-serif; /* Шрифт текста */
  font-size: 3rem;
  color: #fff; /* Цвет текста */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Тень текста */
}
</style>
