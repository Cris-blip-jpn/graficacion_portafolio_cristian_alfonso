import * as THREE from 'three';

const lienzo = document.querySelector('#mi-canvas');
const escena = new THREE.Scene();
escena.background = new THREE.Color(0x0a0a1a);

const relacion = window.innerWidth / window.innerHeight;
const camara = new THREE.PerspectiveCamera(75, relacion, 0.1, 1000);
camara.position.z = 5;

const renderizador = new THREE.WebGLRenderer({
  canvas: lienzo,
  antialias: true
});
renderizador.setSize(window.innerWidth, window.innerHeight);
renderizador.setPixelRatio(window.devicePixelRatio);

//  OBJETOS 
const geometriaCubo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const materialCubo = new THREE.MeshStandardMaterial({ color: 0x00ff88, metalness: 0.3, roughness: 0.4 });
const cubo = new THREE.Mesh(geometriaCubo, materialCubo);
cubo.position.set(-2, 0, 0);
escena.add(cubo);

const geometriaEsfera = new THREE.SphereGeometry(0.8, 32, 32);
const materialEsfera = new THREE.MeshStandardMaterial({ color: 0xff4466, metalness: 0.5, roughness: 0.2 });
const esfera = new THREE.Mesh(geometriaEsfera, materialEsfera);
esfera.position.set(0, 0, 0);
escena.add(esfera);

const geometriaCilindro = new THREE.CylinderGeometry(0.6, 0.6, 1.5, 32);
const materialCilindro = new THREE.MeshStandardMaterial({ color: 0x4488ff, metalness: 0.2, roughness: 0.6 });
const cilindro = new THREE.Mesh(geometriaCilindro, materialCilindro);
cilindro.position.set(2, 0, 0);
escena.add(cilindro);

// LUCES 
const luzAmbiental = new THREE.AmbientLight(0xffffff, 0.4);
escena.add(luzAmbiental);

const luzSol = new THREE.DirectionalLight(0xffffff, 0.8);
luzSol.position.set(5, 5, 5);
escena.add(luzSol);

const luzColor = new THREE.PointLight(0xffaa00, 0.6, 15);
luzColor.position.set(-3, 2, 2);
escena.add(luzColor);

// ANIMACIÓN
function animar() {
  requestAnimationFrame(animar);
  
  cubo.rotation.x += 0.01;
  cubo.rotation.y += 0.01;
  esfera.rotation.y += 0.02;
  cilindro.rotation.x += 0.015;
  
  luzColor.position.x = Math.sin(Date.now() * 0.001) * 3;
  luzColor.position.y = Math.cos(Date.now() * 0.0015) * 2;
  
  renderizador.render(escena, camara);
}
animar();

//  AJUSTE DE PANTALLA 
window.addEventListener('resize', () => {
  camara.aspect = window.innerWidth / window.innerHeight;
  camara.updateProjectionMatrix();
  renderizador.setSize(window.innerWidth, window.innerHeight);
});

