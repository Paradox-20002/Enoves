import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useTypingEffect } from './usetypingeffect';

const techStacksOriginal = [
  { name: 'React', color: '#61DAFB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', color: '#339933', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', color: '#3178C6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', color: '#F7DF1E', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Python', color: '#3776AB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Django', color: '#092E20', logo: 'https://cdn.jsdelivr.com/gh/devicons/devicon/icons/django/django-original.svg' },
  { name: 'Flask', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'MongoDB', color: '#47A248', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', color: '#4169E1', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', color: '#DC382D', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'AWS', color: '#FF9900', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Vercel', color: '#FFFFFF', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
  { name: 'Docker', color: '#2496ED', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', color: '#326CE5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
  { name: 'WordPress', color: '#21759B', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
  { name: 'Shopify', color: '#96BF48', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg' },
  { name: 'HubSpot', color: '#FF7A59', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hubspot/hubspot-original.svg' },
  { name: 'Salesforce', color: '#00A1E0', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
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

const techStacks = [
  ...techStacksOriginal,
  ...techStacksOriginal,
  ...techStacksOriginal.slice(0, 10),
];

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
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const sphereGroupRef = useRef(new THREE.Group());
  const dragRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    velocityX: 0,
    velocityY: 0,
    lastTime: 0
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const categoryText = 'Technology';
  const mainTitleText = 'Built With Industry-Leading';
  const descriptionText =
    'Our engineering teams leverage a modern, scalable technology stack and industry best practices to deliver Fortune-100-quality digital experiences. By combining cutting-edge tools, robust architectures, and meticulous attention to detail, we ensure every solution is high-performing, secure, and built to scale.';

  const category = useTypingEffect(categoryText, 50, 0);
  const title = useTypingEffect(mainTitleText, 60, categoryText.length * 50 + 200);
  const description = useTypingEffect(
    descriptionText,
    40,
    categoryText.length * 50 + mainTitleText.length * 60 + 500
  );

  const isCategoryDone = !category.isTyping;
  const isTitleDone = !title.isTyping;
  const typedTitle = title.displayedText.replace('technologies', '');

  const Cursor = ({ isTyping }) => (
    <span
      className={`inline-block w-[2px] ml-1 bg-white transition-opacity duration-500 
        ${isTyping ? 'opacity-100 animate-blink' : 'opacity-0'}`}
      style={{ height: '1em' }}
    />
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const SPHERE_RADIUS = 6.5;
    const LOGO_SIZE = 1.5;
    const CAMERA_Z = 25;

    const isMobile = window.innerWidth < 768;
    const finalSphereRadius = isMobile ? 5.5 : SPHERE_RADIUS;
    const finalLogoSize = isMobile ? 0.8 : LOGO_SIZE;
    const logoOffset = 0.05;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070E, 0.015);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = CAMERA_Z;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'low-power'
    });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(5, 10, 8);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xadd8e6, 0.5);
    backLight.position.set(-5, -5, -10);
    scene.add(backLight);

    const sphereGroup = sphereGroupRef.current;
    scene.add(sphereGroup);

    const loadingManager = new THREE.LoadingManager();
    loadingManager.onLoad = () => setIsLoaded(true);

    const textureLoader = new THREE.TextureLoader(loadingManager);
    textureLoader.setCrossOrigin('anonymous');

    const solidSphereGeometry = new THREE.SphereGeometry(finalSphereRadius, 32, 32);
    const solidSphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.6,
      metalness: 0.3,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    const solidSphere = new THREE.Mesh(solidSphereGeometry, solidSphereMaterial);
    sphereGroup.add(solidSphere);

    const iconGeometry = new THREE.PlaneGeometry(finalLogoSize, finalLogoSize);
    const numLogos = techStacks.length;

    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = Math.PI * 2 * goldenRatio;

    techStacks.forEach((tech, i) => {
      const logoGroup = new THREE.Group();

      const t = i / numLogos;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const x = (finalSphereRadius + logoOffset) * Math.sin(inclination) * Math.cos(azimuth);
      const y = (finalSphereRadius + logoOffset) * Math.sin(inclination) * Math.sin(azimuth);
      const z = (finalSphereRadius + logoOffset) * Math.cos(inclination);

      logoGroup.position.set(x, y, z);
      logoGroup.lookAt(new THREE.Vector3(x * 2, y * 2, z * 2));

      textureLoader.load(tech.logo, (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        const iconMaterial = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          alphaTest: 0.1,
        });

        const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
        logoGroup.add(iconMesh);

        const dotGeometry = new THREE.CircleGeometry(finalLogoSize * 0.5, 6);
        const dotMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color(tech.color),
          transparent: true,
          opacity: 0.2,
          depthWrite: false
        });

        const dotMesh = new THREE.Mesh(dotGeometry, dotMaterial);
        dotMesh.position.z = -0.01;
        logoGroup.add(dotMesh);
      });

      sphereGroup.add(logoGroup);
    });

    const handlePointerDown = (e) => {
      dragRef.current.isDragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      dragRef.current.startX = clientX;
      dragRef.current.startY = clientY;
      dragRef.current.currentX = clientX;
      dragRef.current.currentY = clientY;
      dragRef.current.lastTime = Date.now();

      containerRef.current.style.cursor = 'grabbing';
    };

    const handlePointerMoveGlobal = (e) => {
      if (!dragRef.current.isDragging) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - dragRef.current.currentX;
      const deltaY = clientY - dragRef.current.currentY;

      const deltaTime = Date.now() - dragRef.current.lastTime;
      if (deltaTime > 0) {
        dragRef.current.velocityX = (deltaX / deltaTime) * 15;
        dragRef.current.velocityY = (deltaY / deltaTime) * 15;
      }

      dragRef.current.currentX = clientX;
      dragRef.current.currentY = clientY;
      dragRef.current.lastTime = Date.now();
    };

    const handlePointerUp = () => {
      dragRef.current.isDragging = false;
      if (containerRef.current) containerRef.current.style.cursor = 'grab';
    };

    containerRef.current.addEventListener('mousedown', handlePointerDown);
    containerRef.current.addEventListener('touchstart', handlePointerDown, { passive: true });

    window.addEventListener('mousemove', handlePointerMoveGlobal);
    window.addEventListener('touchmove', handlePointerMoveGlobal, { passive: true });

    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);

    const autoRotationX = 0.01;
    const autoRotationY = 0.008;
    const friction = 0.98;
    const dragSensitivity = 0.01;

    const animate = () => {
      if (!dragRef.current.isDragging) {
        dragRef.current.velocityX *= friction;
        dragRef.current.velocityY *= friction;
      }

      const dragFactorX =
        Math.abs(dragRef.current.velocityX * dragSensitivity) > 0.0001
          ? dragRef.current.velocityX * dragSensitivity
          : 0;

      const dragFactorY =
        Math.abs(dragRef.current.velocityY * dragSensitivity) > 0.0001
          ? dragRef.current.velocityY * dragSensitivity
          : 0;

      sphereGroup.rotation.y += dragFactorX + autoRotationX;
      sphereGroup.rotation.x += dragFactorY + autoRotationY;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;

      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handlePointerMoveGlobal);
      window.removeEventListener('touchmove', handlePointerMoveGlobal);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('resize', handleResize);

      if (containerRef.current) {
        containerRef.current.removeEventListener('mousedown', handlePointerDown);
        containerRef.current.removeEventListener('touchstart', handlePointerDown);

        if (containerRef.current.contains(renderer.domElement)) {
          containerRef.current.removeChild(renderer.domElement);
        }
      }

      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#04060D] py-20 lg:px-24">

      <div className="relative z-10 max-w-7xl mx-auto px-6 pointer-events-none">
        <div className="text-center">

          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-gray-100 leading-tight flex flex-wrap items-center justify-center gap-1 mb-4 lg:items-start lg:justify-start">
            {typedTitle}

            {isTitleDone ? (
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Technologies
              </span>
            ) : (
              <span className="opacity-0">Technologies</span>
            )}

            <Cursor isTyping={title.isTyping} />
          </h2>

          <p
            className={`text-lg text-justify text-gray-100 max-w-6xl transition-opacity duration-500 flex items-center justify-center gap-1 lg:items-start lg:justify-start ${
              isCategoryDone && isTitleDone ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {description.displayedText}
            <Cursor isTyping={description.isTyping} />
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="text-center py-10 lg:text-left lg:py-0 pointer-events-auto">
            <p className="text-lg uppercase tracking-[0.3em] text-violet-400 font-bold mb-4">
              The Engineering Philosophy
            </p>

            <h3 className="text-4xl font-extrabold text-gray-100 mb-10 leading-tight">
              Commitments to{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Focus Purity
              </span>
            </h3>

            <div className="space-y-8 max-w-md mx-auto lg:mx-0">
              {commitments.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 text-3xl text-gray-100 mt-1 border-2 border-gray-400 rounded-2xl w-15 h-15 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-violet-400 mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={containerRef}
            className="w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[550px] cursor-grab active:cursor-grabbing touch-none relative"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.1) 0%, rgba(5, 7, 14, 0) 70%)'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <button className="pointer-events-auto px-6 py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105">
          Our Capabilities
        </button>
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#05070E] z-50">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>

            <div className="text-indigo-400 text-lg animate-pulse">
              Initializing sphere protocols...
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
