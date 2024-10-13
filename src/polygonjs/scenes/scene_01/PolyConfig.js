import { AsciiEffectPostNode } from '../../../engine/nodes/post/AsciiEffectPostNode'; // Adjust the path as needed

export function configurePolygonjs(poly) {
  if (false) {
    console.log("poly", poly);
  }

  // Register the AsciiEffectPostNode
  poly.nodesRegister.register(AsciiEffectPostNode, 'customPostNodes');
}

export function configureScene(scene) {
  if (false) {
    console.log("scene", scene);
  }

  // Ensure the scene starts at frame 0
  scene.setFrame(0);
}
