import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
// 1. IMPORT THE NEW CUSTOM HOOK (Import changed to default, assuming usetypingeffect.js uses 'export default')
import { useTypingEffect } from './usetypingeffect';

// 1. DATA CONFIGURATION (No changes here, keeping for completeness)
const techStacksOriginal = [
  { name: 'React', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', color: '#339933', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', color: '#3178C6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', color: '#092E20', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/django/django-original.svg' },
  { name: 'Flask', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'MongoDB', color: '#47A248', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', color: '#4169E1', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', color: '#DC382D', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'AWS', color: '#FF9900', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Vercel', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Docker', color: '#2496ED', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', color: '#326CE5', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
  { name: 'WordPress', color: '#21759B', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Shopify', color: '#96BF48', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
  { name: 'HubSpot', color: '#FF7A59', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/hubspot/hubspot-original.svg' },
  { name: 'Salesforce', color: '#00A1E0', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },

  // --- 10 NEW TECH STACKS ---
  { name: 'Angular', color: '#DD0031', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Vue.js', color: '#4FC08D', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'Svelte', color: '#FF3E00', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg' },
  { name: 'PHP', color: '#777BB4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', color: '#FF2D20', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'Ruby', color: '#CC342D', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
  { name: 'Rails', color: '#CC0000', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
  { name: 'Golang', color: '#00ADD8', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'C#', color: '#239120', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Java', color: '#007396', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
];


// Duplicate for a denser sphere effect
const techStacks = [
  ...techStacksOriginal,
  ...techStacksOriginal,
  ...techStacksOriginal.slice( 0, 10 )
];

// Content for the new left section (Commitments)
const commitments = [
  {
    title: "Code Purity",
    description: "Commitment to clean, documented, and resilient codebases that reduce technical debt.",
    icon: '✨'
  },
  {
    title: "Infrastructure First",
    description: "Architecting cloud-native solutions with security, scalability, and compliance built-in, not bolted on.",
    icon: '🛡️'
  },
  {
    title: "Sustainable Velocity",
    description: "Delivering rapid iteration cycles without compromising long-term maintainability or team health.",
    icon: '🚀'
  },
];


export default function TechStackOrbit() {
  const containerRef = useRef( null );
  const sceneRef = useRef( null );
  const sphereGroupRef = useRef( new THREE.Group() );
  const dragRef = useRef( {
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    lastTime: 0
  } );
  const [ isLoaded, setIsLoaded ] = useState( false );

  // --- TYPING ANIMATION HOOK CALLS ---
  const categoryText = 'Technology';
  // FIXED: Removed extra 'B'
  const mainTitleText = 'Built with industry-leading technologies';
  // FIXED: Removed extra 'O'
  const descriptionText = 'Our engineering teams leverage a modern, scalable stack to deliver Fortune-100-quality digital experiences';

  const category = useTypingEffect( categoryText, 50, 0 );
  const title = useTypingEffect( mainTitleText, 60, categoryText.length * 50 + 200 );
  const description = useTypingEffect( descriptionText, 40, categoryText.length * 50 + mainTitleText.length * 60 + 500 );

  const isCategoryDone = !category.isTyping;
  const isTitleDone = !title.isTyping;
  const typedTitle = title.displayedText.replace( 'technologies', '' );

  const Cursor = ( { isTyping } ) => (
    <span
      className={ `inline-block w-[2px] h-full ml-1 bg-white align-bottom transition-opacity duration-500 
      ${ isTyping ? 'opacity-100 animate-blink' : 'opacity-0' }` }
      style={ { verticalAlign: 'text-top' } }
    >
      &nbsp;
    </span>
  );
  // ------------------------------------


  useEffect( () => {
    if ( !containerRef.current ) return;

    // --- SCENE CONSTANTS ---
    const SPHERE_RADIUS = 5;
    const LOGO_SIZE = 1.6;
    const CAMERA_Z = 25;

    // Responsive adjustments
    const isMobile = window.innerWidth < 768;
    const finalSphereRadius = isMobile ? 5 : SPHERE_RADIUS;
    const finalLogoSize = isMobile ? 1.0 : LOGO_SIZE;
    const logoOffset = 0.05;

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0x05070E, 0.015 );
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = CAMERA_Z;

    const renderer = new THREE.WebGLRenderer( {
      antialias: true,
      alpha: true,
      powerPreference: 'low-power'
    } );
    renderer.setSize( containerRef.current.clientWidth, containerRef.current.clientHeight );
    renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) );
    containerRef.current.appendChild( renderer.domElement );

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.6 );
    scene.add( ambientLight );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
    directionalLight.position.set( 5, 10, 8 );
    scene.add( directionalLight );

    const backLight = new THREE.DirectionalLight( 0xadd8e6, 0.5 );
    backLight.position.set( -5, -5, -10 );
    scene.add( backLight );

    // Add the main group to the scene
    const sphereGroup = sphereGroupRef.current;
    scene.add( sphereGroup );

    // --- TEXTURE LOADER MANAGER ---
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => {
      setIsLoaded( true );
    };
    const textureLoader = new THREE.TextureLoader( loadingManager );
    textureLoader.setCrossOrigin( 'anonymous' );


    // --- SOLID BASE SPHERE (TRANSPARENT) ---
    const solidSphereGeometry = new THREE.SphereGeometry( finalSphereRadius, 32, 32 );
    const solidSphereMaterial = new THREE.MeshStandardMaterial( {
      color: 0x1e293b,
      roughness: 0.6,
      metalness: 0.3,
      side: THREE.FrontSide,
      transparent: true,
      opacity: 0,
      depthWrite: false
    } );
    const solidSphere = new THREE.Mesh( solidSphereGeometry, solidSphereMaterial );
    sphereGroup.add( solidSphere );


    // --- TECH STACK SPHERE CONSTRUCTION ---

    const iconGeometry = new THREE.PlaneGeometry( finalLogoSize, finalLogoSize );

    const numLogos = techStacks.length;
    const goldenRatio = ( 1 + Math.sqrt( 5 ) ) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    techStacks.forEach( ( tech, i ) => {
      const logoGroup = new THREE.Group();

      const t = i / numLogos;
      const inclination = Math.acos( 1 - 2 * t );
      const azimuth = angleIncrement * i;

      // Calculate position slightly outside the solid sphere's radius
      const x = ( finalSphereRadius + logoOffset ) * Math.sin( inclination ) * Math.cos( azimuth );
      const y = ( finalSphereRadius + logoOffset ) * Math.sin( inclination ) * Math.sin( azimuth );
      const z = ( finalSphereRadius + logoOffset ) * Math.cos( inclination );

      logoGroup.position.set( x, y, z );

      // Orient the group to face directly outward from the sphere's center
      logoGroup.lookAt( new THREE.Vector3( x * 2, y * 2, z * 2 ) );


      textureLoader.load( tech.logo, ( texture ) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        const iconMaterial = new THREE.MeshBasicMaterial( {
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          alphaTest: 0.1,
        } );
        const iconMesh = new THREE.Mesh( iconGeometry, iconMaterial );

        logoGroup.add( iconMesh );

        // Optional: Add a subtle glow behind each logo
        const dotGeometry = new THREE.CircleGeometry( finalLogoSize * 0.5, 6 );
        const dotMaterial = new THREE.MeshBasicMaterial( {
          color: new THREE.Color( tech.color ),
          transparent: true,
          opacity: 0.2,
          depthWrite: false
        } );
        const dotMesh = new THREE.Mesh( dotGeometry, dotMaterial );

        dotMesh.position.z = -0.01;
        logoGroup.add( dotMesh );
      } );

      sphereGroup.add( logoGroup );
    } );


    // --- INPUT HANDLING ---

    const handlePointerDown = ( e ) => {
      dragRef.current.isDragging = true;
      const clientX = e.touches ? e.touches[ 0 ].clientX : e.clientX;
      const clientY = e.touches ? e.touches[ 0 ].clientY : e.clientY;
      dragRef.current.startX = clientX;
      dragRef.current.startY = clientY;
      dragRef.current.currentX = clientX;
      dragRef.current.currentY = clientY;
      dragRef.current.lastTime = Date.now();
      containerRef.current.style.cursor = 'grabbing';
    };

    const handlePointerMoveGlobal = ( e ) => {
      if ( dragRef.current.isDragging ) {
        const clientX = e.touches ? e.touches[ 0 ].clientX : e.clientX;
        const clientY = e.touches ? e.touches[ 0 ].clientY : e.clientY;

        const deltaX = clientX - dragRef.current.currentX;
        const deltaY = clientY - dragRef.current.currentY;
        const deltaTime = Date.now() - dragRef.current.lastTime;

        if ( deltaTime > 0 ) {
          dragRef.current.velocityX = ( deltaX / deltaTime ) * 15;
          dragRef.current.velocityY = ( deltaY / deltaTime ) * 15;
        }
        dragRef.current.currentX = clientX;
        dragRef.current.currentY = clientY;
        dragRef.current.lastTime = Date.now();
      }
    };

    const handlePointerUp = () => {
      dragRef.current.isDragging = false;
      if ( containerRef.current ) containerRef.current.style.cursor = 'grab';
    };

    containerRef.current.addEventListener( 'mousedown', handlePointerDown );
    containerRef.current.addEventListener( 'touchstart', handlePointerDown, { passive: true } );
    window.addEventListener( 'mousemove', handlePointerMoveGlobal );
    window.addEventListener( 'touchmove', handlePointerMoveGlobal, { passive: true } );
    window.addEventListener( 'mouseup', handlePointerUp );
    window.addEventListener( 'touchend', handlePointerUp );

    // --- ANIMATION LOOP ---
    const autoRotationX = 0.01;
    const autoRotationY = 0.008;
    const friction = 0.98;
    const dragSensitivity = 0.01;

    const animate = () => {
      // Apply friction when not dragging
      if ( !dragRef.current.isDragging ) {
        dragRef.current.velocityX *= friction;
        dragRef.current.velocityY *= friction;
      }

      const dragFactorX = Math.abs( dragRef.current.velocityX * dragSensitivity ) > 0.0001 ? dragRef.current.velocityX * dragSensitivity : 0;
      const dragFactorY = Math.abs( dragRef.current.velocityY * dragSensitivity ) > 0.0001 ? dragRef.current.velocityY * dragSensitivity : 0;

      // Apply rotation to the entire group
      sphereGroup.rotation.y += dragFactorX + autoRotationX;
      sphereGroup.rotation.x += dragFactorY + autoRotationY;

      renderer.render( scene, camera );
      requestAnimationFrame( animate );
    };

    animate();

    // --- RESIZE ---
    const handleResize = () => {
      if ( !containerRef.current ) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( containerRef.current.clientWidth, containerRef.current.clientHeight );
    };
    window.addEventListener( 'resize', handleResize );

    return () => {
      // Cleanup listeners
      window.removeEventListener( 'mousemove', handlePointerMoveGlobal );
      window.removeEventListener( 'touchmove', handlePointerMoveGlobal );
      window.removeEventListener( 'mouseup', handlePointerUp );
      window.removeEventListener( 'touchend', handlePointerUp );
      window.removeEventListener( 'resize', handleResize );
      if ( containerRef.current ) {
        containerRef.current.removeEventListener( 'mousedown', handlePointerDown );
        containerRef.current.removeEventListener( 'touchstart', handlePointerDown );
        if ( containerRef.current.contains( renderer.domElement ) ) {
          containerRef.current.removeChild( renderer.domElement );
        }
      }
      renderer.dispose();
    };
  }, [] );

  return (
    <section className="relative w-full overflow-hidden bg-[#05070E] py-24">

      {/* --------------------------------------------- */ }
      {/* ANIMATED HEADER (Corrected Text and Cursor Logic) */ }
      {/* --------------------------------------------- */ }
      <div className="relative z-10 max-w-7xl mx-auto px-6 pointer-events-none">
        <div className="text-center">
          {/* CATEGORY TEXT */ }
          <p className="text-sm uppercase tracking-[0.45em] text-indigo-300 mb-4">
            { category.displayedText }
            <Cursor isTyping={ category.isTyping } />
          </p>

          {/* MAIN TITLE TEXT */ }
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            { typedTitle }
            { isTitleDone ? (
              // Show gradient span when typing is done
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-100 transition-opacity duration-1000">
                technologies
              </span>
            ) : (
              // Placeholder to prevent layout shift
              <span className="opacity-0">technologies</span>
            ) }
            <br />
            {/* FIXED: Cursor isTyping logic changed to just title.isTyping */ }
            <Cursor isTyping={ title.isTyping } />
          </h2>

          {/* DESCRIPTION TEXT */ }
          {/* HIDDEN: Opacity transition is now only based on if the title is done, allowing description to type instantly after title finishes */ }
          <p className={ `text-lg text-slate-300/80 max-w-2xl mx-auto transition-opacity duration-500 ${ isCategoryDone && isTitleDone ? 'opacity-100' : 'opacity-0' }` }>
            { description.displayedText }
            <Cursor isTyping={ description.isTyping } />
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------- */ }
      {/* TWO-COLUMN LAYOUT FOR COMMITMENTS AND 3D CANVAS */ }
      {/* ---------------------------------------------------- */ }
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE: Focus Purity Commitment List */ }
          <div className="text-center lg:text-left py-12 lg:py-0 pointer-events-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">
              The Engineering Philosophy
            </p>
            <h3 className="text-4xl font-extrabold text-white mb-10 leading-tight">
              Commitments to <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent opacity-100 transition-opacity duration-1000">Focus Purity</span>
            </h3>

            {/* Commitment List */ }
            <div className="space-y-8 max-w-md mx-auto lg:mx-0">
              { commitments.map( ( item, index ) => (
                <div key={ index } className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-3xl text-indigo-400 mt-1">{ item.icon }</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{ item.title }</h4>
                    <p className="text-slate-400">{ item.description }</p>
                  </div>
                </div>
              ) ) }
            </div>

            {/* CTA Button */ }
            {/* <button className="mt-10 pointer-events-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all duration-300 shadow-xl shadow-indigo-900/40">
              Learn More About Our Process
            </button> */}
          </div>


          {/* RIGHT SIDE: 3D Sphere Canvas */ }
          <div
            ref={ containerRef }
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] cursor-grab active:cursor-grabbing touch-none relative"
            style={ {
              background: 'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.1) 0%, rgba(5, 7, 14, 0) 70%)'
            } }
          />

        </div>
      </div>

      {/* Bottom CTA (Original) */ }
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm text-slate-400 mb-6">
          Need a custom stack? We architect secure, compliant platforms for enterprise-grade workloads
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button className="pointer-events-auto px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300">
            Our Capabilities
          </button>
          {/* <button className="pointer-events-auto px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300">
            Join the Team
          </button> */}
        </div>
      </div>

      {/* Loading indicator */ }
      { !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#05070E] z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
            <div className="text-indigo-400 text-lg animate-pulse">
              Initializing sphere protocols...
            </div>
          </div>
        </div>
      ) }
    </section>
  );
}