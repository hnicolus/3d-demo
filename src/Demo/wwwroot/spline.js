
const app = new SpeRuntime.Application();
const elementq = document.getElementById("canvas3d")
function runSplineScene(element,sceneObject) {
	console.log(element);
	console.log("element q :",elementq)
	app.start(sceneObject,element);
}
