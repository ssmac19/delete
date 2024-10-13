import "./style.css";

import {
	Scene,
	PerspectiveCamera,
	WebGLRenderer,
	BoxGeometry,
	MeshBasicMaterial,
	Mesh,
	Clock,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const domElement = document.getElementById("app");
if (domElement) {
	domElement.appendChild(renderer.domElement);
}
function onResize() {
	if (!domElement) {
		return;
	}

	domElement.removeChild(renderer.domElement);

	const width = domElement.offsetWidth;
	const height = domElement.offsetHeight;
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height);

	domElement.appendChild(renderer.domElement);
}
window.addEventListener("resize", onResize);
onResize();

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({ color: 0x00ff00 });
const cube = new Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

import { loadScene_scene_01 } from "./polygonjs/scenes/scene_01/autogenerated/loadScene";

async function init() {
	const loadedData = await loadScene_scene_01({
		baseUrl: import.meta.env.BASE_URL,
	});
	// Polygonjs particles need a renderer in order to be simulated.
	// When you use Polygonjs as a standalone, this is taken care of automatically.
	// But if you integrate it with threejs, you need to give it the renderer that will be used.
	loadedData.scene.registerRenderer(renderer);
	// here we add polygonjs scene to your main scene.
	scene.add(loadedData.scene.threejsScene());

	const clock = new Clock();
	function animate() {
		const delta = clock.getDelta();
		requestAnimationFrame(animate);

		// when using your own renderer,
		// you need to run `.update(delta)` on polygonjs scene
		// to allow it to track the current time and update its internals
		loadedData.scene.update(delta);

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;

		renderer.render(scene, camera);
	}

	animate();
}
init();