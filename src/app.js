import * as THREE from 'three'
import {
  addPass,
  useCamera,
  useGui,
  useRenderSize,
  useScene,
  useTick
} from './render/init.js'
// import postprocessing passes
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { BlendShader } from 'three/examples/jsm/shaders/BlendShader.js'
import { CopyShader } from 'three/examples/jsm/shaders/CopyShader.js'

import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'

const startApp = () => {
  const scene = useScene()
  const camera = useCamera()
  const gui = useGui()

  const dirLight = new THREE.DirectionalLight('#ffffff', 1)
  const ambientLight = new THREE.AmbientLight('#ffffff', 0.5)
  scene.add(dirLight, ambientLight)





  const geometry = new THREE.PlaneGeometry()
  const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader
  })
  const ico = new THREE.Mesh(geometry, material)
  scene.add(ico)
  




  // GUI
  const cameraFolder = gui.addFolder('Camera')
  cameraFolder.add(camera.position, 'z', 0, 10)
  cameraFolder.open()

  useTick(({ timestamp, timeDiff }) => {
  })
}

export default startApp;
