/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer, Html } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';

import cardGLB from '../assets/lanyard/card.glb';
import lanyardPng from '../assets/lanyard/lanyard.png';

import * as THREE from 'three';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

const BLANK_PIXEL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

const FRONT_UV_RECT = { x: 0, y: 0, w: 0.5, h: 0.755 };
const BACK_UV_RECT = { x: 0.5, y: 0, w: 0.5, h: 0.757 };

const AnchoredGroup = ({ children }) => {
  const viewport = useThree((s) => s.viewport);
  const x = Math.max(1.2, viewport.width / 2 - 0.9);
  return <group position={[x, 6, 0]}>{children}</group>;
};

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1,
  children
}) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="lanyard-wrapper">
      <Canvas
        camera={{ position: position, fov: fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band
            isMobile={isMobile}
            frontImage={frontImage}
            backImage={backImage}
            imageFit={imageFit}
            lanyardImage={lanyardImage}
            lanyardWidth={lanyardWidth}
          >
            {children}
          </Band>
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

function Band({
  maxSpeed = 50,
  minSpeed = 0,
  isMobile = false,
  frontImage = null,
  backImage = null,
  imageFit = 'cover',
  lanyardImage = null,
  lanyardWidth = 1,
  children
}) {
  const band = useRef(),
    fixed = useRef(),
    j1 = useRef(),
    j2 = useRef(),
    j3 = useRef(),
    card = useRef();
  const vec = new THREE.Vector3(),
    ang = new THREE.Vector3(),
    rot = new THREE.Vector3(),
    dir = new THREE.Vector3();
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 4, linearDamping: 4 };
  const { nodes, materials } = useGLTF(cardGLB);
  const texture = useTexture(lanyardImage || lanyardPng);
  const frontTex = useTexture(frontImage || BLANK_PIXEL);
  const backTex = useTexture(backImage || BLANK_PIXEL);

  const cardMap = useMemo(() => {
    const baseMap = materials.base.map;
    if (!frontImage && !backImage) return baseMap;

    const baseImg = baseMap.image;
    const W = baseImg.width;
    const H = baseImg.height;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return baseMap;
    ctx.drawImage(baseImg, 0, 0, W, H);

    const drawFitted = (img, rect) => {
      const rx = rect.x * W;
      const ry = rect.y * H;
      const rw = rect.w * W;
      const rh = rect.h * H;
      const pick = imageFit === 'contain' ? Math.min : Math.max;
      const scale = pick(rw / img.width, rh / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      const dx = rx + (rw - dw) / 2;
      const dy = ry + (rh - dh) / 2;
      ctx.save();
      ctx.beginPath();
      ctx.rect(rx, ry, rw, rh);
      ctx.clip();
      ctx.drawImage(img, dx, dy, dw, dh);
      ctx.restore();
    };

    if (frontImage && frontTex.image) drawFitted(frontTex.image, FRONT_UV_RECT);
    if (backImage && backTex.image) drawFitted(backTex.image, BACK_UV_RECT);

    const composite = new THREE.CanvasTexture(canvas);
    composite.colorSpace = THREE.SRGBColorSpace;
    composite.flipY = baseMap.flipY;
    composite.anisotropy = 16;
    composite.needsUpdate = true;
    return composite;
  }, [frontImage, backImage, imageFit, frontTex, backTex, materials.base.map]);

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()])
  );
  const [dragged, drag] = useState(false);
  const mouseRef = useRef(new THREE.Vector2());
  const camera = useThree((s) => s.camera);
  const gl = useThree((s) => s.gl);
  const viewport = useThree((s) => s.viewport);
  // Keep the badge on the right side of the page — never let it cross the middle
  const minX = 1.2;
  const maxX = viewport.width / 2 - 0.4;
  const maxY = 3.2;
  const minY = -viewport.height / 2 + 1.8;

  const updateMouse = (e) => {
    const rect = gl.domElement.getBoundingClientRect();
    mouseRef.current.set(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
  };

  const toWorld = () => {
    const v = new THREE.Vector3(mouseRef.current.x, mouseRef.current.y, 0.5).unproject(camera);
    const d = v.clone().sub(camera.position).normalize();
    v.add(d.multiplyScalar(camera.position.length()));
    return v;
  };

  const handlePointerDown = (e) => {
    if (!card.current) return;
    e.preventDefault();
    e.target.setPointerCapture?.(e.pointerId);
    updateMouse(e);
    const w = toWorld();
    const t = card.current.translation();
    drag(new THREE.Vector3(w.x - t.x, w.y - t.y, w.z - t.z));
  };

  const handlePointerMove = (e) => {
    if (dragged) updateMouse(e);
  };

  const handlePointerUp = (e) => {
    e.target.releasePointerCapture?.(e.pointerId);
    drag(false);
  };

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1.3]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1.3]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1.3]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0]
  ]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(mouseRef.current.x, mouseRef.current.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      const nx = Math.min(Math.max(vec.x - dragged.x, minX), maxX);
      const ny = Math.min(Math.max(vec.y - dragged.y, minY), maxY);
      [card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({ x: nx, y: ny, z: vec.z - dragged.z });
    }
    if (fixed.current) {
      [j1, j2].forEach(ref => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation());
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())));
        ref.current.lerped.lerp(
          ref.current.translation(),
          delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
        );
      });
      curve.points[0].copy(j3.current.translation());
      curve.points[1].copy(j2.current.lerped);
      curve.points[2].copy(j1.current.lerped);
      curve.points[3].copy(fixed.current.translation());
      band.current.geometry.setPoints(curve.getPoints(isMobile ? 16 : 32));
      ang.copy(card.current.angvel());
      rot.copy(card.current.rotation());
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
    }
  });

  curve.curveType = 'chordal';
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <>
      <AnchoredGroup>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
          >
            {children && (
              <Html transform distanceFactor={1.2} position={[0.11, 0.48, 0.05]} zIndexRange={[100, 0]} style={{ pointerEvents: 'auto' }}>
                <div
                  style={{ cursor: dragged ? 'grabbing' : 'grab', touchAction: 'none', pointerEvents: 'auto', display: 'inline-block' }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >
                  {children}
                </div>
              </Html>
            )}
            <mesh geometry={nodes.card.geometry} visible={!children}>
              <meshPhysicalMaterial
                map={cardMap}
                map-anisotropy={16}
                clearcoat={isMobile ? 0 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} visible={!children} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} visible={!children} />
          </group>
        </RigidBody>
      </AnchoredGroup>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#e2e8f0"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          lineWidth={lanyardWidth}
        />
      </mesh>
    </>
  );
}
