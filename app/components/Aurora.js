// File: AuroraScene.js
// This file contains ONLY the Three.js & GSAP animation logic as a reusable component.

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

if ( typeof window !== "undefined" ) {
  gsap.registerPlugin( ScrollTrigger );
}

function createCircleTexture() {
  const size = 64;
  const canvas = document.createElement( "canvas" );
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext( "2d" );

  ctx.beginPath();
  ctx.arc( size / 2, size / 2, size / 2, 0, Math.PI * 2 );
  ctx.fillStyle = "white";
  ctx.fill();

  const texture = new THREE.CanvasTexture( canvas );
  texture.needsUpdate = true;
  return texture;
}

export default function AuroraScene( { containerRef, foldSectionRef, heavySectionRef } ) {
  const canvasRef = useRef( null );

  useEffect( () => {
    if ( typeof window === "undefined" ) return;
    if ( !canvasRef.current || !containerRef?.current ) return;

    if ( window.matchMedia( "(prefers-reduced-motion: reduce)" ).matches ) {
      canvasRef.current.style.display = "none";
      return;
    }

    const renderer = new THREE.WebGLRenderer( {
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    } );
    renderer.setPixelRatio( Math.min( window.devicePixelRatio, 1.75 ) );

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x04060d, 10, 32 );

    const camera = new THREE.PerspectiveCamera( 38, 1, 0.1, 100 );
    camera.position.set( 0, 1.6, 5 );

    const ambient = new THREE.AmbientLight( 0xffffff, 0.6 );
    const keyLight = new THREE.DirectionalLight( 0x7c3aed, 1.2 );
    keyLight.position.set( 3, 5, 6 );
    const fillLight = new THREE.DirectionalLight( 0x38bdf8, 0.8 );
    fillLight.position.set( -3, 2, -4 );
    scene.add( ambient, keyLight, fillLight );

    const auroraGroup = new THREE.Group();
    scene.add( auroraGroup );

    // Aurora points
    const auroraGeometry = new THREE.BufferGeometry();
    const auroraCount = 850;
    const auroraPositions = new Float32Array( auroraCount * 3 );
    const auroraSpeeds = new Float32Array( auroraCount );

    for ( let i = 0; i < auroraCount; i++ ) {
      const idx = i * 3;
      auroraPositions[ idx ] = ( Math.random() - 0.5 ) * 10;
      auroraPositions[ idx + 1 ] = Math.random() * 1.8 + 0.2;
      auroraPositions[ idx + 2 ] = ( Math.random() - 0.5 ) * 5;
      auroraSpeeds[ i ] = Math.random() * 0.6 + 0.35;
    }

    auroraGeometry.setAttribute( "position", new THREE.BufferAttribute( auroraPositions, 3 ) );

    const auroraMaterial = new THREE.PointsMaterial( {
      color: 0x67e8f9,
      size: 0.015, // Reduced for subtler effect
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
      map: createCircleTexture(),
      alphaTest: 0.01,
    } );

    const auroraPoints = new THREE.Points( auroraGeometry, auroraMaterial );
    auroraGroup.add( auroraPoints );

    // Trails
    const trailGeometry = new THREE.BufferGeometry();
    const trailCount = 160;
    const trailPositions = new Float32Array( trailCount * 3 );
    const trailSpeed = new Float32Array( trailCount );

    for ( let i = 0; i < trailCount; i++ ) {
      const idx = i * 3;
      trailPositions[ idx ] = ( Math.random() - 0.5 ) * 8;
      trailPositions[ idx + 1 ] = Math.random() * 1.2;
      trailPositions[ idx + 2 ] = ( Math.random() - 0.5 ) * 4;
      trailSpeed[ i ] = Math.random() * 0.6 + 0.3;
    }

    trailGeometry.setAttribute( "position", new THREE.BufferAttribute( trailPositions, 3 ) );

    const trailMaterial = new THREE.PointsMaterial( {
      color: 0x8b5cf6,
      size: 0.035, // Reduced for subtler effect
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      map: createCircleTexture(),
      alphaTest: 0.01,
    } );

    const trails = new THREE.Points( trailGeometry, trailMaterial );
    auroraGroup.add( trails );

    const resize = () => {
      if ( !containerRef.current ) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      renderer.setSize( width, height, false );
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener( "resize", resize );

    const scrollState = { aurora: 0 };
    let animationFrame;

    const renderScene = () => {
      animationFrame = requestAnimationFrame( renderScene );
      const time = performance.now() * 0.00045;

      const auroraAttr = auroraGeometry.attributes.position;
      for ( let i = 0; i < auroraCount; i++ ) {
        const idx = i * 3;
        auroraAttr.array[ idx ] += Math.sin( time + i ) * 0.002 * auroraSpeeds[ i ];
        auroraAttr.array[ idx + 1 ] += Math.cos( time * 1.4 + i ) * 0.0015 * auroraSpeeds[ i ];
        if ( auroraAttr.array[ idx ] > 5 ) auroraAttr.array[ idx ] = -5;
        if ( auroraAttr.array[ idx ] < -5 ) auroraAttr.array[ idx ] = 5;
      }

      auroraAttr.needsUpdate = true;

      const trailAttr = trailGeometry.attributes.position;
      for ( let i = 0; i < trailCount; i++ ) {
        const idx = i * 3;
        trailAttr.array[ idx + 1 ] += 0.002 * trailSpeed[ i ] + scrollState.aurora * 0.004;
        if ( trailAttr.array[ idx + 1 ] > 2 ) trailAttr.array[ idx + 1 ] = 0;
      }

      trailAttr.needsUpdate = true;

      trails.rotation.y += 0.0007 + scrollState.aurora * 0.0015;
      auroraGroup.rotation.y = -0.3 + scrollState.aurora * 0.5;

      renderer.render( scene, camera );
    };

    renderScene();

    gsap.timeline( {
      scrollTrigger: {
        trigger: heavySectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    } )
      .fromTo( auroraGroup.position, { z: -2 }, { z: 1 }, 0 )
      .fromTo( auroraGroup.scale, { x: 0.9, y: 0.9, z: 0.9 }, { x: 1.1, y: 1.1, z: 1.1 }, 0 )
      .to( scrollState, { aurora: 1, duration: 1 }, 0 );

    return () => {
      window.removeEventListener( "resize", resize );
      cancelAnimationFrame( animationFrame );
      renderer.dispose();
      auroraGeometry.dispose();
      auroraMaterial.dispose();
      trailGeometry.dispose();
      trailMaterial.dispose();
    };
  }, [] );

  return <canvas ref={ canvasRef } className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />;
}