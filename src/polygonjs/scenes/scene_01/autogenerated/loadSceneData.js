import { SceneDataManifestImporter } from "@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData";
const manifest = {
  properties: "1728782286208",
  root: "1675552563896",
  nodes: {
    geo1: "1728779769437",
    "geo1/MAT": "1675552563896",
    ground: "1728779769437",
    "ground/MAT": "1675552563896",
    "ground/MAT/meshStandardBuilder1": "1728779769437",
    COP: "1675552563896",
    lights: "1728779769437",
    cameras: "1728779769437",
    "cameras/cameraControls1": "1728782286208",
    "cameras/cameraPostProcess1": "1728782286208",
    "cameras/cameraRenderer1": "1728782286208",
  },
  shaders: {
    "/ground/MAT/meshStandardBuilder1": {
      vertex: "1728779769437",
      fragment: "1728779769437",
      "customDepthMaterial.vertex": "1728779769437",
      "customDepthMaterial.fragment": "1728779769437",
      "customDistanceMaterial.vertex": "1728779769437",
      "customDistanceMaterial.fragment": "1728779769437",
      "customDepthDOFMaterial.vertex": "1728779769437",
      "customDepthDOFMaterial.fragment": "1728779769437",
    },
  },
  jsFunctionBodies: {},
};

export const loadSceneData_scene_01 = async (options = {}) => {
  const sceneDataRoot = options.sceneDataRoot || "./polygonjs/scenes";
  return await SceneDataManifestImporter.importSceneData({
    sceneName: "scene_01",
    urlPrefix: sceneDataRoot + "/scene_01",
    manifest: manifest,
    onProgress: options.onProgress,
  });
};
