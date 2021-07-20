
const app = new SpeRuntime.Application();
const elementq = document.getElementById("canvas3d")
function runSplineScene(element,sceneObject) {
	app.start(sceneObject, elementq);
}
