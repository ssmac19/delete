import { TypedPostNode } from '@polygonjs/polygonjs/dist/src/engine/nodes/post/_Base';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect';
import { ParamConfig, NodeParamsConfig } from '@polygonjs/polygonjs/dist/src/engine/nodes/utils/params/ParamsConfig';
import { WebGLRenderer, WebGLRenderTarget } from 'three';

class AsciiEffectPostNodeParamsConfig extends NodeParamsConfig {
  resolution = ParamConfig.VECTOR2([64, 64]);  // Resolution for the ASCII effect
  color = ParamConfig.BOOLEAN(false);          // Enable or disable color
  background = ParamConfig.BOOLEAN(true);      // Show background
  charset = ParamConfig.STRING(' .:-=+*%@#');  // ASCII characters to use
  textColor = ParamConfig.COLOR([1, 1, 1]);    // Color of the ASCII characters
  fontSize = ParamConfig.FLOAT(16);            // Size of ASCII characters
}

const ParamsConfig = new AsciiEffectPostNodeParamsConfig();

export class AsciiEffectPostNode extends TypedPostNode {
  paramsConfig = ParamsConfig;

  static type() {
    return 'asciiEffect';
  }

  initializeNode() {
    this.io.inputs.setCount(1); // Accept input (scene output)
  }

  applyEffect(renderer, writeBuffer, readBuffer, deltaTime) {
    console.log('AsciiEffectPostNode: applying ASCII effect');
    
    // Create the AsciiEffect using the provided parameters
    const effect = new AsciiEffect(renderer, this.pv.resolution, this.pv.color, this.pv.background);
    
    // Apply custom parameters for characters, color, and font size
    effect.characters = this.pv.charset;
    effect.color = this.pv.textColor;
    effect.fontSize = this.pv.fontSize;

    // Render the ASCII effect to the output buffer
    effect.render(this.scene(), writeBuffer);

    // Ensure the processed output is passed to the next node
    this.setOutput(writeBuffer);
  }
}
