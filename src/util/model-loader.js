import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();

export default (url, id) => {
  return new Promise((resolve, reject) => {
    loader.load(url, gltf => {
      const result = { model: gltf.scene };
      resolve(result);
    });
  });
};
