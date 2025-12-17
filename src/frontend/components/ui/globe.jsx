import { useEffect, useMemo, useRef } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "../../../data/globe.json";

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const aspect = 1.2;
const cameraZ = 300;

/* ----------------------------- Globe ----------------------------- */

export function Globe({ globeConfig = {}, data = [] }) {
  const globe = useMemo(() => new ThreeGlobe(), []);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  /* -------- Material (same as reference) -------- */
  useEffect(() => {
    const mat = globe.globeMaterial();
    mat.color = new Color(defaultProps.globeColor);
    mat.emissive = new Color(defaultProps.emissive);
    mat.emissiveIntensity = defaultProps.emissiveIntensity;
    mat.shininess = defaultProps.shininess;
  }, [globe, defaultProps]);

  /* -------- Build globe (polygons, arcs, points) -------- */
  useEffect(() => {
    if (!data?.length) return;

    let points = [];
    for (let i = 0; i < data.length; i++) {
      const arc = data[i];
      points.push(
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: arc.color,
          lat: arc.startLat,
          lng: arc.startLng,
        },
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: arc.color,
          lat: arc.endLat,
          lng: arc.endLng,
        }
      );
    }

    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex(
          (v2) => v2.lat === v.lat && v2.lng === v.lng
        ) === i
    );

    globe
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globe
      .arcsData(data)
      .arcStartLat((d) => d.startLat)
      .arcStartLng((d) => d.startLng)
      .arcEndLat((d) => d.endLat)
      .arcEndLng((d) => d.endLng)
      .arcColor((d) => d.color)
      .arcAltitude((d) => d.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap((d) => d.order)
      .arcDashGap(15)
      .arcDashAnimateTime(defaultProps.arcTime);

    globe
      .pointsData(filteredPoints)
      .pointColor((d) => d.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globe
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) /
          defaultProps.rings
      );
  }, [globe, data, defaultProps]);

  /* -------- Ring animation (same logic) -------- */
  useEffect(() => {
    if (!data?.length) return;

    const interval = setInterval(() => {
      const indices = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5)
      );

      globe.ringsData(
        data
          .filter((_, i) => indices.includes(i))
          .map((d) => ({
            lat: d.startLat,
            lng: d.startLng,
            color: d.color,
          }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [globe, data]);

  return <primitive object={globe} />;
}

/* ------------------------- WebGL Config ------------------------- */

function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0); // same as reference
  }, [gl, size]);

  return null;
}

/* ----------------------------- World ----------------------------- */

export function World({ globeConfig, data }) {
  const scene = useMemo(() => {
    const s = new Scene();
    s.fog = new Fog(0xffffff, 400, 2000);
    return s;
  }, []);

  return (
    <Canvas
      scene={scene}
      camera={new PerspectiveCamera(50, aspect, 180, 1800)}
    >
      <WebGLRendererConfig />

      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />

      <Globe globeConfig={globeConfig} data={data} />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

/* ----------------------------- Utils ----------------------------- */

export function hexToRgb(hex) {
  const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return res
    ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16),
      }
    : null;
}

export function genRandomNumbers(min, max, count) {
  const arr = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}
