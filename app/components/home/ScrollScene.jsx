"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollScene() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const foldSectionRef = useRef(null);
  const heavySectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!canvasRef.current || !containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      canvasRef.current.style.display = "none";
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x04060d, 10, 32);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 1.6, 5);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const keyLight = new THREE.DirectionalLight(0x7c3aed, 1.2);
    keyLight.position.set(3, 5, 6);
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.8);
    fillLight.position.set(-3, 2, -4);
    scene.add(ambient, keyLight, fillLight);

    const auroraGroup = new THREE.Group();
    scene.add(auroraGroup);

    const waveGeometry = new THREE.PlaneGeometry(9, 4, 160, 60);
    const waveMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b0f1a,
      emissive: 0x0f172a,
      metalness: 0.4,
      roughness: 0.4,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });
    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2.8;
    waveMesh.position.set(0, -0.25, 0);
    auroraGroup.add(waveMesh);
    const basePositions = waveGeometry.attributes.position.array.slice();

    const auroraGeometry = new THREE.BufferGeometry();
    const auroraCount = 850;
    const auroraPositions = new Float32Array(auroraCount * 3);
    const auroraSpeeds = new Float32Array(auroraCount);
    for (let i = 0; i < auroraCount; i += 1) {
      const i3 = i * 3;
      auroraPositions[i3] = (Math.random() - 0.5) * 10;
      auroraPositions[i3 + 1] = Math.random() * 1.8 + 0.2;
      auroraPositions[i3 + 2] = (Math.random() - 0.5) * 5;
      auroraSpeeds[i] = Math.random() * 0.6 + 0.35;
    }
    auroraGeometry.setAttribute("position", new THREE.BufferAttribute(auroraPositions, 3));
    const auroraMaterial = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });
    const auroraPoints = new THREE.Points(auroraGeometry, auroraMaterial);
    auroraGroup.add(auroraPoints);

    const trailGeometry = new THREE.BufferGeometry();
    const trailCount = 160;
    const trailPositions = new Float32Array(trailCount * 3);
    const trailSpeed = new Float32Array(trailCount);
    for (let i = 0; i < trailCount; i += 1) {
      const idx = i * 3;
      trailPositions[idx] = (Math.random() - 0.5) * 8;
      trailPositions[idx + 1] = Math.random() * 1.2;
      trailPositions[idx + 2] = (Math.random() - 0.5) * 4;
      trailSpeed[i] = Math.random() * 0.6 + 0.3;
    }
    trailGeometry.setAttribute("position", new THREE.BufferAttribute(trailPositions, 3));
    const trailMaterial = new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.05,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    const trails = new THREE.Points(trailGeometry, trailMaterial);
    auroraGroup.add(trails);

    const resize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    const scrollState = { aurora: 0 };
    let animationFrame;
    const renderScene = () => {
      animationFrame = requestAnimationFrame(renderScene);
      const time = performance.now() * 0.00045;

      const positions = waveGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const base = basePositions[i + 2];
        const x = positions[i];
        const z = positions[i + 1];
        positions[i + 2] =
          base +
          Math.sin(x * 0.9 + time * 4 + scrollState.aurora * 3) * 0.25 +
          Math.cos(z * 1.4 + time * 2) * 0.14;
      }
      waveGeometry.attributes.position.needsUpdate = true;
      waveGeometry.computeVertexNormals();

      const auroraAttr = auroraGeometry.attributes.position;
      for (let i = 0; i < auroraCount; i += 1) {
        const idx = i * 3;
        auroraAttr.array[idx] += Math.sin(time + i) * 0.002 * auroraSpeeds[i];
        auroraAttr.array[idx + 1] += Math.cos(time * 1.4 + i) * 0.0015 * auroraSpeeds[i];
        if (auroraAttr.array[idx] > 5) auroraAttr.array[idx] = -5;
        if (auroraAttr.array[idx] < -5) auroraAttr.array[idx] = 5;
      }
      auroraAttr.needsUpdate = true;

      const trailAttr = trailGeometry.attributes.position;
      for (let i = 0; i < trailCount; i += 1) {
        const idx = i * 3;
        trailAttr.array[idx + 1] += 0.002 * trailSpeed[i] + scrollState.aurora * 0.004;
        if (trailAttr.array[idx + 1] > 2) trailAttr.array[idx + 1] = 0;
      }
      trailAttr.needsUpdate = true;

      trails.rotation.y += 0.0007 + scrollState.aurora * 0.0015;
      auroraGroup.rotation.y = -0.3 + scrollState.aurora * 0.5;

      renderer.render(scene, camera);
    };
    renderScene();

    const auroraTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heavySectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    auroraTimeline
      .fromTo(
        auroraGroup.position,
        { z: -2 },
        { z: 1, ease: "power1.inOut" },
        0,
      )
      .fromTo(
        auroraGroup.scale,
        { x: 0.9, y: 0.9, z: 0.9 },
        { x: 1.1, y: 1.1, z: 1.1, ease: "power1.out" },
        0,
      )
      .to(scrollState, { aurora: 1, duration: 1, ease: "none" }, 0);

    const cleanup = () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
      renderer.dispose();
      waveGeometry.dispose();
      waveMaterial.dispose();
      auroraGeometry.dispose();
      auroraMaterial.dispose();
      trailGeometry.dispose();
      trailMaterial.dispose();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger?.vars?.trigger === foldSectionRef.current || trigger?.vars?.trigger === heavySectionRef.current) {
          trigger.kill();
        }
      });
    };

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrame);
      } else {
        renderScene();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      cleanup();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative isolate w-full bg-[#05070E]">
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />
      <section
        ref={foldSectionRef}
        data-home-section="fold"
        className="relative flex min-h-[80vh] flex-col items-start justify-center gap-6 px-6 py-24 text-white sm:px-10 lg:px-24"
      >
        <div className="max-w-2xl rounded-3xl border border-white/10 bg-[#05070E]/80 p-8 text-white shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.5em] text-indigo-200">Immersive Experience</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            A strategy that reveals itself through every interaction.
          </h2>
          <p className="mt-4 text-base text-slate-100/80">
            We choreograph each launch like a tactile, cinematic experience—motion, typography, and technology flowing seamlessly together.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:-translate-y-0.5"
          >
            Discover the approach →
          </Link>
        </div>
      </section>

      <section
        ref={heavySectionRef}
        data-home-section="aurora"
        className="relative flex min-h-[90vh] flex-col justify-center gap-8 px-6 py-24 text-white sm:px-10 lg:px-24"
      >
        <div className="max-w-2xl rounded-3xl border border-white/10 bg-[#05070E]/85 p-8 text-white shadow-2xl backdrop-blur">
          <p className="text-xs uppercase tracking-[0.5em] text-indigo-200">Immersive scroll</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            Motion-native storytelling for the visionaries.
          </h2>
          <p className="mt-4 text-base text-slate-100/80">
            Aurora ribbons, volumetric light, and particle trails react to your scroll velocity. Lighting stays loyal to Enoves' palette while the scene opens a cinematic tunnel toward our work.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              See it in action
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-gradient-to-r from-[#7c3aed] via-[#9333ea] to-[#0ea5e9] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Build with us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

