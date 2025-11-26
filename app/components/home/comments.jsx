// import { useRef, useEffect, useState } from 'react';
// import * as THREE from 'three';

// // 1. DATA CONFIGURATION
// // --- ALL IMAGES NOW POINT TO THE SINGLE, KNOWN WORKING LOCAL FILE ---
// const LOCAL_IMAGE_URL = '/images/noman.png';

// const techStacks = [
//   // All logos are set to the working image path
//   { name: 'React', color: '#61DAFB', logo: LOCAL_IMAGE_URL },
//   { name: 'Next.js', color: '#FFFFFF', logo: LOCAL_IMAGE_URL },
//   { name: 'Node.js', color: '#339933', logo: LOCAL_IMAGE_URL },
//   { name: 'TypeScript', color: '#3178C6', logo: LOCAL_IMAGE_URL },
//   { name: 'JavaScript', color: '#F7DF1E', logo: LOCAL_IMAGE_URL },
//   { name: 'Python', color: '#3776AB', logo: LOCAL_IMAGE_URL },
//   { name: 'Django', color: '#092E20', logo: LOCAL_IMAGE_URL },
//   { name: 'Flask', color: '#FFFFFF', logo: LOCAL_IMAGE_URL },
//   { name: 'MongoDB', color: '#47A248', logo: LOCAL_IMAGE_URL },
//   { name: 'PostgreSQL', color: '#4169E1', logo: LOCAL_IMAGE_URL },
//   { name: 'Redis', color: '#DC382D', logo: LOCAL_IMAGE_URL },
//   { name: 'AWS', color: '#FF9900', logo: LOCAL_IMAGE_URL },
//   { name: 'Vercel', color: '#FFFFFF', logo: LOCAL_IMAGE_URL },
//   { name: 'Docker', color: '#2496ED', logo: LOCAL_IMAGE_URL },
//   { name: 'Kubernetes', color: '#326CE5', logo: LOCAL_IMAGE_URL },
//   { name: 'WordPress', color: '#21759B', logo: LOCAL_IMAGE_URL },
//   { name: 'Shopify', color: '#96BF48', logo: LOCAL_IMAGE_URL },
//   { name: 'HubSpot', color: '#FF7A59', logo: LOCAL_IMAGE_URL },
//   { name: 'Salesforce', color: '#00A1E0', logo: LOCAL_IMAGE_URL }
// ];

// const CENTRAL_LOGO_URL = LOCAL_IMAGE_URL;

// export default function TechStackOrbit() {
//   const containerRef = useRef( null );
//   const sceneRef = useRef( null );
//   const mouseRef = useRef( { x: 0, y: 0 } );
//   const dragRef = useRef( {
//     isDragging: false,
//     startX: 0,
//     currentX: 0,
//     velocity: 0,
//     lastX: 0,
//     lastTime: 0
//   } );
//   const [ isLoaded, setIsLoaded ] = useState( false );

//   useEffect( () => {
//     if ( !containerRef.current ) return;

//     // --- RESPONSIVE SETTINGS ---
//     const isMobile = window.innerWidth < 768;
//     const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

//     let orbitRadius = 18;
//     let cameraZ = 35;
//     let cameraY = 5;

//     if ( isMobile ) {
//       orbitRadius = 12;
//       cameraZ = 25;
//       cameraY = 3;
//     } else if ( isTablet ) {
//       orbitRadius = 15;
//       cameraZ = 30;
//       cameraY = 4;
//     }

//     // --- SCENE SETUP ---
//     const scene = new THREE.Scene();
//     scene.fog = new THREE.FogExp2( 0x05070E, 0.015 );
//     sceneRef.current = scene;

//     const camera = new THREE.PerspectiveCamera(
//       50,
//       containerRef.current.clientWidth / containerRef.current.clientHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = cameraZ;
//     camera.position.y = cameraY;

//     const renderer = new THREE.WebGLRenderer( {
//       antialias: true,
//       alpha: true,
//       powerPreference: 'high-performance'
//     } );
//     renderer.setSize( containerRef.current.clientWidth, containerRef.current.clientHeight );
//     renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 1.2;
//     containerRef.current.appendChild( renderer.domElement );

//     // --- LIGHTING ---
//     const ambientLight = new THREE.AmbientLight( 0x4a5f8f, 0.4 );
//     scene.add( ambientLight );

//     const keyLight = new THREE.DirectionalLight( 0x8b9eff, 1.5 );
//     keyLight.position.set( 10, 15, 10 );
//     scene.add( keyLight );

//     const rimLight = new THREE.DirectionalLight( 0xff00ff, 0.6 );
//     rimLight.position.set( -8, 5, -10 );
//     scene.add( rimLight );

//     const fillLight = new THREE.PointLight( 0x00e5ff, 0.8, 50 );
//     fillLight.position.set( 0, -5, 15 );
//     scene.add( fillLight );

//     // --- TEXTURE LOADER MANAGER ---
//     const loadingManager = new THREE.LoadingManager();
//     loadingManager.onLoad = () => {
//       // This runs only when ALL textures are confirmed loaded
//       setIsLoaded( true );
//     };
//     loadingManager.onError = ( url ) => {
//       // Crucial for debugging: If you see this, the file path is wrong.
//       console.error( `Failed to load texture: ${ url }. Check your /public folder path.` );
//     };

//     // --- LOADER SETUP: Set crossOrigin to empty string for local files ---
//     const textureLoader = new THREE.TextureLoader( loadingManager );
//     textureLoader.setCrossOrigin( '' );

//     // --- CENTRAL LOGO (BILLBOARD) ---
//     const logoGroup = new THREE.Group();
//     scene.add( logoGroup );

//     // Load Central Logo (using the working method)
//     textureLoader.load( CENTRAL_LOGO_URL, ( texture ) => {
//       texture.colorSpace = THREE.SRGBColorSpace;

//       const logoSize = isMobile ? 3 : 5;
//       const logoGeometry = new THREE.PlaneGeometry( logoSize, logoSize );
//       const logoMaterial = new THREE.MeshBasicMaterial( {
//         map: texture,
//         transparent: true,
//         side: THREE.DoubleSide,
//         depthWrite: false,
//       } );
//       const logoMesh = new THREE.Mesh( logoGeometry, logoMaterial );
//       logoGroup.add( logoMesh );
//       logoGroup.userData.mesh = logoMesh;
//     } );

//     // Central Glow (Behind the logo)
//     const glowSize = isMobile ? 3.5 : 6;
//     const glowGeometry = new THREE.SphereGeometry( glowSize, 32, 32 );
//     const glowMaterial = new THREE.MeshBasicMaterial( {
//       color: 0x4f46e5,
//       transparent: true,
//       opacity: 0.15,
//       side: THREE.BackSide,
//       depthWrite: false,
//     } );
//     const glow = new THREE.Mesh( glowGeometry, glowMaterial );
//     scene.add( glow );

//     // --- ORBITAL RING ---
//     const ringCurve = new THREE.EllipseCurve(
//       0, 0,
//       orbitRadius, orbitRadius,
//       0, 2 * Math.PI,
//       false,
//       0
//     );
//     const ringPoints = ringCurve.getPoints( 100 );
//     const ringGeometry = new THREE.BufferGeometry().setFromPoints(
//       ringPoints.map( p => new THREE.Vector3( p.x, 0, p.y ) )
//     );
//     const ringMaterial = new THREE.LineBasicMaterial( {
//       color: 0x6366f1,
//       transparent: true,
//       opacity: 0.2,
//       linewidth: 2
//     } );
//     const ring = new THREE.Line( ringGeometry, ringMaterial );
//     ring.rotation.x = Math.PI / 6;
//     scene.add( ring );

//     // --- TECH STACK CAPSULES ---
//     const capsules = [];
//     const angleStep = ( Math.PI * 2 ) / techStacks.length;
//     const capsuleScale = isMobile ? 0.6 : 1;

//     techStacks.forEach( ( tech, i ) => {
//       // Calculate position
//       const angle = i * angleStep;
//       const x = Math.cos( angle ) * orbitRadius;
//       const z = Math.sin( angle ) * orbitRadius;

//       const capsuleGroup = new THREE.Group();

//       // 1. Glass Shell
//       const shellGeometry = new THREE.CapsuleGeometry( 1.2 * capsuleScale, 1.5 * capsuleScale, 16, 32 );
//       const shellMaterial = new THREE.MeshPhysicalMaterial( {
//         color: 0xffffff,
//         metalness: 0.1,
//         roughness: 0.1,
//         transparent: true,
//         opacity: 0.15,
//         transmission: 0.9,
//         thickness: 0.5,
//         clearcoat: 1.0,
//         clearcoatRoughness: 0.05,
//         ior: 1.5,
//         // FIX 1: Transparent object should typically use depthWrite: false
//         depthWrite: false,
//       } );
//       const shell = new THREE.Mesh( shellGeometry, shellMaterial );
//       // FIX 2: Set shell renderOrder lower (1)
//       shell.renderOrder = 1;
//       capsuleGroup.add( shell );

//       // 2. Inner Color Glow
//       const innerGlowGeometry = new THREE.SphereGeometry( 0.8 * capsuleScale, 16, 16 );
//       const innerGlowMaterial = new THREE.MeshBasicMaterial( {
//         color: new THREE.Color( tech.color ),
//         transparent: true,
//         opacity: 0.4
//       } );
//       const innerGlow = new THREE.Mesh( innerGlowGeometry, innerGlowMaterial );
//       capsuleGroup.add( innerGlow );

//       // 3. Icon Texture - Uses the same successful path and loader as the center image
//       textureLoader.load( tech.logo, ( texture ) => {
//         texture.colorSpace = THREE.SRGBColorSpace;

//         const iconGeometry = new THREE.PlaneGeometry( 1.4 * capsuleScale, 1.4 * capsuleScale );
//         const iconMaterial = new THREE.MeshBasicMaterial( {
//           map: texture,
//           transparent: true,
//           side: THREE.DoubleSide,
//           alphaTest: 0.1,
//           opacity: 1,
//           // FIX 3: Add depthTest: false to ensure it renders over the transparent shell
//           depthTest: false
//         } );
//         const iconMesh = new THREE.Mesh( iconGeometry, iconMaterial );

//         // FIX 4: Set icon renderOrder higher (2) than the shell (1)
//         iconMesh.renderOrder = 2;

//         capsuleGroup.add( iconMesh );
//         capsuleGroup.userData.iconMesh = iconMesh;
//       } );

//       // Position the whole group
//       capsuleGroup.position.set( x, 0, z );
//       capsuleGroup.rotation.x = Math.PI / 6;
//       capsuleGroup.userData = { angle, tech };

//       scene.add( capsuleGroup );
//       capsules.push( capsuleGroup );
//     } );

//     // --- PARTICLE SYSTEM ---
//     const particleCount = isMobile ? 400 : 800;
//     const particleGeometry = new THREE.BufferGeometry();
//     const particlePositions = new Float32Array( particleCount * 3 );
//     const particleVelocities = [];

//     for ( let i = 0; i < particleCount; i++ ) {
//       particlePositions[ i * 3 ] = ( Math.random() - 0.5 ) * 80;
//       particlePositions[ i * 3 + 1 ] = ( Math.random() - 0.5 ) * 80;
//       particlePositions[ i * 3 + 2 ] = ( Math.random() - 0.5 ) * 80;

//       particleVelocities.push( {
//         x: ( Math.random() - 0.5 ) * 0.02,
//         y: ( Math.random() - 0.5 ) * 0.02,
//         z: ( Math.random() - 0.5 ) * 0.02
//       } );
//     }
//     particleGeometry.setAttribute( 'position', new THREE.BufferAttribute( particlePositions, 3 ) );
//     const particleMaterial = new THREE.PointsMaterial( {
//       color: 0x8b5cf6,
//       size: 0.15,
//       transparent: true,
//       opacity: 0.6,
//       blending: THREE.AdditiveBlending,
//       sizeAttenuation: true
//     } );
//     const particles = new THREE.Points( particleGeometry, particleMaterial );
//     scene.add( particles );

//     // --- INPUT HANDLING ---
//     const handleMouseMove = ( e ) => {
//       if ( !containerRef.current ) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       mouseRef.current.x = ( ( e.clientX - rect.left ) / rect.width ) * 2 - 1;
//       mouseRef.current.y = -( ( e.clientY - rect.top ) / rect.height ) * 2 + 1;
//     };

//     const handlePointerDown = ( e ) => {
//       dragRef.current.isDragging = true;
//       const clientX = e.touches ? e.touches[ 0 ].clientX : e.clientX;
//       dragRef.current.startX = clientX;
//       dragRef.current.currentX = clientX;
//       dragRef.current.lastX = clientX;
//       dragRef.current.lastTime = Date.now();
//       containerRef.current.style.cursor = 'grabbing';
//     };

//     const handlePointerMoveGlobal = ( e ) => {
//       if ( dragRef.current.isDragging ) {
//         const clientX = e.touches ? e.touches[ 0 ].clientX : e.clientX;
//         const deltaX = clientX - dragRef.current.currentX;
//         const deltaTime = Date.now() - dragRef.current.lastTime;
//         if ( deltaTime > 0 ) {
//           dragRef.current.velocity = ( deltaX / deltaTime ) * 10;
//         }
//         dragRef.current.currentX = clientX;
//         dragRef.current.lastX = clientX;
//         dragRef.current.lastTime = Date.now();
//       }
//     };

//     const handlePointerUp = () => {
//       dragRef.current.isDragging = false;
//       if ( containerRef.current ) containerRef.current.style.cursor = 'grab';
//     };

//     window.addEventListener( 'mousemove', handleMouseMove );
//     containerRef.current.addEventListener( 'mousedown', handlePointerDown );
//     containerRef.current.addEventListener( 'touchstart', handlePointerDown, { passive: true } );
//     window.addEventListener( 'mousemove', handlePointerMoveGlobal );
//     window.addEventListener( 'touchmove', handlePointerMoveGlobal, { passive: true } );
//     window.addEventListener( 'mouseup', handlePointerUp );
//     window.addEventListener( 'touchend', handlePointerUp );

//     // --- ANIMATION LOOP ---
//     let time = 0;
//     let rotationAngle = 0;
//     const baseOrbitSpeed = 0.002;

//     const animate = () => {
//       time += 0.01;

//       // Rotation Logic
//       if ( !dragRef.current.isDragging && Math.abs( dragRef.current.velocity ) < 0.001 ) {
//         rotationAngle += baseOrbitSpeed;
//       } else {
//         if ( !dragRef.current.isDragging ) {
//           dragRef.current.velocity *= 0.95; // Friction
//         }
//         rotationAngle += dragRef.current.velocity * 0.01;
//       }

//       // 1. Central Logo Animation (Pulse + Billboard)
//       logoGroup.quaternion.copy( camera.quaternion );

//       const pulseScale = 1 + Math.sin( time * 2 ) * 0.05;
//       logoGroup.scale.setScalar( pulseScale );

//       // Pulse the glow behind it
//       glow.scale.setScalar( 1 + Math.sin( time * 2 + 0.5 ) * 0.1 );

//       // 2. Rotate Ring
//       ring.rotation.y = rotationAngle;

//       // 3. Orbit Capsules
//       capsules.forEach( ( capsule, i ) => {
//         const currentAngle = capsule.userData.angle + rotationAngle;
//         const x = Math.cos( currentAngle ) * orbitRadius;
//         const z = Math.sin( currentAngle ) * orbitRadius;
//         const y = Math.sin( currentAngle * 2 + i ) * 0.5;

//         capsule.position.set( x, y, z );

//         // Make icons inside capsules always face camera
//         if ( capsule.userData.iconMesh ) {
//           capsule.userData.iconMesh.quaternion.copy( camera.quaternion );
//         }

//         // Inner glow pulse
//         if ( capsule.children[ 1 ] ) {
//           capsule.children[ 1 ].scale.setScalar( 1 + Math.sin( time * 3 + i ) * 0.1 );
//         }
//       } );

//       // 4. Particles
//       const positions = particles.geometry.attributes.position.array;
//       for ( let i = 0; i < particleCount; i++ ) {
//         positions[ i * 3 ] += particleVelocities[ i ].x;
//         positions[ i * 3 + 1 ] += particleVelocities[ i ].y;
//         positions[ i * 3 + 2 ] += particleVelocities[ i ].z;

//         // Wrap around
//         if ( Math.abs( positions[ i * 3 ] ) > 40 ) particleVelocities[ i ].x *= -1;
//         if ( Math.abs( positions[ i * 3 + 1 ] ) > 40 ) particleVelocities[ i ].y *= -1;
//         if ( Math.abs( positions[ i * 3 + 2 ] ) > 40 ) particleVelocities[ i ].z *= -1;
//       }
//       particles.geometry.attributes.position.needsUpdate = true;

//       // 5. Camera Parallax
//       const parallaxStrength = isMobile ? 1 : 3;
//       camera.position.x = THREE.MathUtils.lerp( camera.position.x, mouseRef.current.x * parallaxStrength, 0.05 );
//       camera.position.y = THREE.MathUtils.lerp( camera.position.y, cameraY - mouseRef.current.y * 2, 0.05 );
//       camera.lookAt( 0, 0, 0 );

//       renderer.render( scene, camera );
//       requestAnimationFrame( animate );
//     };

//     animate();

//     // --- RESIZE ---
//     const handleResize = () => {
//       if ( !containerRef.current ) return;
//       camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize( containerRef.current.clientWidth, containerRef.current.clientHeight );
//     };
//     window.addEventListener( 'resize', handleResize );

//     return () => {
//       window.removeEventListener( 'mousemove', handleMouseMove );
//       window.removeEventListener( 'mousemove', handlePointerMoveGlobal );
//       window.removeEventListener( 'touchmove', handlePointerMoveGlobal );
//       window.removeEventListener( 'mouseup', handlePointerUp );
//       window.removeEventListener( 'touchend', handlePointerUp );
//       window.removeEventListener( 'resize', handleResize );

//       renderer.dispose();
//       if ( containerRef.current?.contains( renderer.domElement ) ) {
//         containerRef.current.removeChild( renderer.domElement );
//       }
//     };
//   }, [] );

//   return (
//     <section className="relative w-full overflow-hidden bg-[#05070E] py-24">
//       {/* Content Overlay */ }
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pointer-events-none">
//         <div className="text-center mb-12">
//           <p className="text-sm uppercase tracking-[0.45em] text-indigo-300 mb-4">
//             Technology
//           </p>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
//             Built with industry-leading
//             <br />
//             <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
//               technologies
//             </span>
//           </h2>
//           <p className="text-lg text-slate-300/80 max-w-2xl mx-auto">
//             Our engineering teams leverage a modern, scalable stack to deliver
//             Fortune-100-quality digital experiences
//           </p>
//         </div>
//       </div>

//       {/* 3D Canvas */ }
//       <div
//         ref={ containerRef }
//         className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] cursor-grab active:cursor-grabbing touch-none"
//         style={ {
//           background: 'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.1) 0%, rgba(5, 7, 14, 0) 70%)'
//         } }
//       />

//       {/* Bottom CTA */ }
//       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-12">
//         <p className="text-sm text-slate-400 mb-6">
//           Need a custom stack? We architect secure, compliant platforms for enterprise-grade workloads
//         </p>
//         <div className="flex items-center justify-center gap-4 flex-wrap">
//           <button className="pointer-events-auto px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
//             Our Capabilities
//           </button>
//           <button className="pointer-events-auto px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300">
//             Join the Team
//           </button>
//         </div>
//       </div>

//       {/* Loading indicator */ }
//       { !isLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center bg-[#05070E] z-50">
//           <div className="flex flex-col items-center gap-4">
//             <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
//             <div className="text-indigo-400 text-lg animate-pulse">
//               Initializing orbital systems...
//             </div>
//           </div>
//         </div>
//       ) }
//     </section>
//   );
// }