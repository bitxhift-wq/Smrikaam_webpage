import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  BarChart2,
  TrendingUp,
  Cloud,
  Cpu,
  Wifi,
  Code2,
  Lock,
  ShieldCheck,
  Database,
  Target,
  Mountain,
  Eye,
  ArrowUpRight,
  ArrowDown,
} from 'lucide-react';

/**
 * Smrikaam3DCoreSection
 * 
 * High-precision architectural engineering intelligence core visual system.
 * Rebuilt to match the monochrome, high-contrast engineering aesthetic of the reference:
 * - 100% Theme-Aware (Instantly inverts between Dark & Light themes).
 * - Central 3D Isometric Hypercube with internal structural struts, glowing core, and radial coordinate grid.
 * - Left: "WHO WE ARE" editorial block + 6 capsule capability pills with circuit traces.
 * - Right: "WHAT WE BUILD" + 6 circular technical nodes + "EXPLORE SERVICES ↗".
 * - Center: Dynamic SVG neural network connecting all left and right nodes to the 3D Core with flowing data pulses.
 * - Bottom: "OUR GOAL", "OUR MISSION", "OUR VISION" connected purpose cards + "INTELLIGENT SYSTEMS → OPERATIONAL EXCELLENCE → BUSINESS IMPACT" ribbon.
 */
export default function Smrikaam3DCoreSection() {
  const [hoveredNode, setHoveredNode] = useState(null); // 'cap-0'..'cap-5', 'build-0'..'build-5', 'goal', 'mission', 'vision'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : true
  );

  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Theme observer: updates state instantly when html.dark is toggled in NavBar/ControlBar
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // Left: 6 Engineering Capabilities (Pills with circuit paths)
  const capabilities = [
    { id: 'cap-0', title: 'AI / ML', icon: Brain },
    { id: 'cap-1', title: 'Data & Analytics', icon: BarChart2 },
    { id: 'cap-2', title: 'Cloud & DevOps', icon: Cloud },
    { id: 'cap-3', title: 'IIoT & Connected Systems', icon: Cpu },
    { id: 'cap-4', title: 'Software Engineering', icon: Code2 },
    { id: 'cap-5', title: 'Data & App Security', icon: Lock },
  ];

  // Right: 6 What We Build (Circular framed nodes)
  const buildItems = [
    {
      id: 'build-0',
      title: 'DATA ANALYTICS & BI',
      desc: 'Transform raw data into meaningful insights with advanced analytics and visual intelligence.',
      icon: TrendingUp,
    },
    {
      id: 'build-1',
      title: 'DATA ENGINEERING',
      desc: 'Build robust data platforms, pipelines and architecture for reliable and scalable data flows.',
      icon: Database,
    },
    {
      id: 'build-2',
      title: 'DEVOPS & CLOUD ENGINEERING',
      desc: 'Modernize infrastructure, automate deployments and build cloud-native systems that scale seamlessly.',
      icon: Cloud,
    },
    {
      id: 'build-3',
      title: 'INDUSTRIAL IOT',
      desc: 'Connect machines, collect real-time data and unlock operational intelligence at the edge.',
      icon: Wifi,
    },
    {
      id: 'build-4',
      title: 'GENERATIVE & AGENTIC AI',
      desc: 'Build GenAI applications and intelligent agents that automate, augment and accelerate decisions.',
      icon: Brain,
    },
    {
      id: 'build-5',
      title: 'DATA GOVERNANCE & COMPLIANCE',
      desc: 'Ensure data quality, security, privacy and compliance across your enterprise ecosystem.',
      icon: ShieldCheck,
    },
  ];

  // Bottom: 3 Core Strategic Purpose Nodes
  const pillars = [
    {
      id: 'goal',
      title: 'OUR GOAL',
      desc: 'Create innovative solutions that drive business growth and operational excellence.',
      icon: Target,
    },
    {
      id: 'mission',
      title: 'OUR MISSION',
      desc: 'Deliver secure, scalable and intelligent solutions through engineering excellence and continuous innovation.',
      icon: Mountain,
    },
    {
      id: 'vision',
      title: 'OUR VISION',
      desc: 'To be a global leader in engineering intelligence and enterprise transformation.',
      icon: Eye,
    },
  ];

  // Handle Mouse Parallax
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // 3D Canvas Isometric Wireframe Hypercube Engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = canvas.offsetWidth || 420;
    let height = canvas.offsetHeight || 420;

    const setupCanvas = () => {
      width = canvas.offsetWidth || 420;
      height = canvas.offsetHeight || 420;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();
    window.addEventListener('resize', setupCanvas);

    // Geometry Dimensions
    const sOuter = 72;
    const sInner = 36;

    const makeBoxVertices = (s) => [
      [-s, -s, -s],
      [s, -s, -s],
      [s, s, -s],
      [-s, s, -s],
      [-s, -s, s],
      [s, -s, s],
      [s, s, s],
      [-s, s, s],
    ];

    const outerVertices = makeBoxVertices(sOuter);
    const innerVertices = makeBoxVertices(sInner);

    // 3D Isometric Projection
    const project = (x, y, z, rotX, rotY, cx, cy) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      const fov = 440;
      const distance = 350;
      const scale = fov / (distance + z2);

      return {
        px: cx + x1 * scale,
        py: cy + y2 * scale,
        depth: z2,
      };
    };

    const render = () => {
      time += 0.009;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const dark = document.documentElement.classList.contains('dark');

      // Theme-Aware Color Mapping
      const strokeMain = dark ? 'rgba(255, 255, 255, 0.75)' : 'rgba(20, 20, 20, 0.75)';
      const strokeCore = dark ? 'rgba(255, 255, 255, 0.95)' : 'rgba(15, 23, 42, 0.95)';
      const strokeFaint = dark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(20, 20, 20, 0.14)';
      const strokeStrut = dark ? 'rgba(255, 255, 255, 0.28)' : 'rgba(20, 20, 20, 0.22)';
      const faceOuter = dark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)';
      const faceInner = dark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
      const glowAura = dark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.04)';
      const nodeColor = dark ? '#ffffff' : '#0f172a';

      // 1. Subtle Central Coordinate Axes & Concentric Tick Rings
      ctx.save();
      ctx.translate(cx, cy);

      // Coordinate axes
      ctx.beginPath();
      ctx.moveTo(-160, 0);
      ctx.lineTo(160, 0);
      ctx.moveTo(0, -160);
      ctx.lineTo(0, 160);
      ctx.strokeStyle = strokeFaint;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Concentric Rings with radial tick marks
      [100, 140, 175].forEach((radius, rIdx) => {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.strokeStyle = strokeFaint;
        ctx.lineWidth = 1;
        ctx.setLineDash([1, 6]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Orbiting node tick
        const tickAngle = time * (0.3 - rIdx * 0.08) + rIdx;
        const tx = Math.cos(tickAngle) * radius;
        const ty = Math.sin(tickAngle) * radius;
        ctx.beginPath();
        ctx.arc(tx, ty, 2, 0, Math.PI * 2);
        ctx.fillStyle = strokeMain;
        ctx.fill();
      });
      ctx.restore();

      // 2. Radial Ambient Core Glow
      const glowGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 140);
      glowGrad.addColorStop(0, glowAura);
      glowGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // 3. 3D Cube Rotation Angles with Mouse Parallax
      const rotY = 0.62 + time * 0.22 + mousePos.x * 0.4;
      const rotX = 0.54 + Math.sin(time * 0.28) * 0.03 + mousePos.y * 0.4;
      const floatY = Math.sin(time * 0.75) * 5;

      const projOuter = outerVertices.map(([vx, vy, vz]) =>
        project(vx, vy + floatY, vz, rotX, rotY, cx, cy)
      );

      const projInner = innerVertices.map(([vx, vy, vz]) =>
        project(vx, vy + floatY, vz, -rotX * 1.15, -rotY * 1.25, cx, cy)
      );

      // Faces definitions
      const faces = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [0, 1, 5, 4],
        [2, 3, 7, 6],
        [0, 3, 7, 4],
        [1, 2, 6, 5],
      ];

      // Draw Outer Translucent Planes
      faces.forEach((face) => {
        ctx.beginPath();
        ctx.moveTo(projOuter[face[0]].px, projOuter[face[0]].py);
        for (let i = 1; i < face.length; i++) {
          ctx.lineTo(projOuter[face[i]].px, projOuter[face[i]].py);
        }
        ctx.closePath();
        ctx.fillStyle = faceOuter;
        ctx.fill();
      });

      // Draw Inner Core Planes
      faces.forEach((face) => {
        ctx.beginPath();
        ctx.moveTo(projInner[face[0]].px, projInner[face[0]].py);
        for (let i = 1; i < face.length; i++) {
          ctx.lineTo(projInner[face[i]].px, projInner[face[i]].py);
        }
        ctx.closePath();
        ctx.fillStyle = faceInner;
        ctx.fill();
      });

      // Cube Edge Pairs
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      // Structural Diagonal Struts between outer and inner cubes
      ctx.lineWidth = 1;
      ctx.strokeStyle = strokeStrut;
      ctx.setLineDash([2, 3]);
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(projOuter[i].px, projOuter[i].py);
        ctx.lineTo(projInner[i].px, projInner[i].py);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Outer Wireframe Edges
      ctx.lineWidth = 1.3;
      ctx.strokeStyle = strokeMain;
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projOuter[i].px, projOuter[i].py);
        ctx.lineTo(projOuter[j].px, projOuter[j].py);
        ctx.stroke();
      });

      // Inner Core Wireframe Edges
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = strokeCore;
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projInner[i].px, projInner[i].py);
        ctx.lineTo(projInner[j].px, projInner[j].py);
        ctx.stroke();
      });

      // Outer Vertex Glowing Nodes
      projOuter.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.px, p.py, 3, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      // Inner Core Vertex Nodes
      projInner.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.px, p.py, 2, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      // Center Singularity Point
      ctx.beginPath();
      ctx.arc(cx, cy + floatY, 4, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isDark]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="smrikaam-core relative w-full bg-[var(--color-bg)] text-[var(--color-text)] py-12 md:py-16 px-4 sm:px-6 md:px-10 lg:px-14 overflow-hidden select-none transition-colors duration-300"
      aria-label="SMRIKAAM Engineering Intelligence Core"
    >
      {/* Background Architectural Grid & Subtle Radial Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle Radial Glow Layer behind 3D cube */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-radial from-[var(--color-accent)]/8 to-transparent blur-3xl" />
        
        {/* Fine Architectural Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-border-strong) 1px, transparent 1px), linear-gradient(90deg, var(--color-border-strong) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Main Responsive Spatial Canvas */}
      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        
        {/* ============================================================ */}
        {/* TOP / MIDDLE SPATIAL REGION: WHO WE ARE | 3D CORE | WHAT WE BUILD */}
        {/* ============================================================ */}
        <div className="relative min-h-[640px] lg:min-h-[740px] flex flex-col lg:block">
          
          {/* ========================================================== */}
          {/* SVG NEURAL NETWORK TRACES (DESKTOP LAYER) */}
          {/* ========================================================== */}
          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
            viewBox="0 0 1440 740"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* --- LEFT TRACE LINES: CAPABILITIES (01..06) -> 3D CORE --- */}
            {[
              { id: 'cap-0', dotX: 400, dotY: 380, path: 'M 320 380 L 400 380 L 590 280 L 640 310' },
              { id: 'cap-1', dotX: 400, dotY: 432, path: 'M 320 432 L 400 432 L 585 340 L 630 350' },
              { id: 'cap-2', dotX: 400, dotY: 484, path: 'M 320 484 L 400 484 L 570 385 L 630 385' },
              { id: 'cap-3', dotX: 400, dotY: 536, path: 'M 320 536 L 400 536 L 570 425 L 635 420' },
              { id: 'cap-4', dotX: 400, dotY: 588, path: 'M 320 588 L 400 588 L 580 465 L 645 450' },
              { id: 'cap-5', dotX: 400, dotY: 640, path: 'M 320 640 L 400 640 L 600 495 L 660 470' },
            ].map((trace) => {
              const isHovered = hoveredNode === trace.id;
              const hasAnyHover = hoveredNode !== null;
              return (
                <g key={trace.id}>
                  {/* Circuit Trace Path */}
                  <path
                    d={trace.path}
                    stroke={isHovered ? 'var(--color-accent)' : 'var(--color-border-strong)'}
                    strokeWidth={isHovered ? 2.4 : 1.1}
                    strokeDasharray={isHovered ? 'none' : '3 4'}
                    opacity={hasAnyHover && !isHovered ? 0.2 : 0.85}
                    className="transition-all duration-300"
                  />

                  {/* Intermediate Node Dot */}
                  <circle
                    cx={trace.dotX}
                    cy={trace.dotY}
                    r={isHovered ? 4.5 : 3}
                    fill={isHovered ? 'var(--color-accent)' : 'var(--color-border-strong)'}
                    opacity={hasAnyHover && !isHovered ? 0.25 : 1}
                  />

                  {/* Flowing Data Pulse Dot */}
                  <circle r={isHovered ? 3.5 : 2} fill="var(--color-accent)">
                    <animateMotion
                      path={trace.path}
                      dur={`${2.4 + Math.random() * 0.6}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {/* --- RIGHT TRACE LINES: 3D CORE -> WHAT WE BUILD (01..06) --- */}
            {[
              { id: 'build-0', dotX: 1020, dotY: 195, path: 'M 800 310 L 850 280 L 1020 195 L 1080 195' },
              { id: 'build-1', dotX: 1020, dotY: 275, path: 'M 810 350 L 855 340 L 1020 275 L 1080 275' },
              { id: 'build-2', dotX: 1020, dotY: 355, path: 'M 810 385 L 870 385 L 1020 355 L 1080 355' },
              { id: 'build-3', dotX: 1020, dotY: 435, path: 'M 805 420 L 870 425 L 1020 435 L 1080 435' },
              { id: 'build-4', dotX: 1020, dotY: 515, path: 'M 795 450 L 860 465 L 1020 515 L 1080 515' },
              { id: 'build-5', dotX: 1020, dotY: 595, path: 'M 780 470 L 840 495 L 1020 595 L 1080 595' },
            ].map((trace) => {
              const isHovered = hoveredNode === trace.id;
              const hasAnyHover = hoveredNode !== null;
              return (
                <g key={trace.id}>
                  {/* Circuit Trace Path */}
                  <path
                    d={trace.path}
                    stroke={isHovered ? 'var(--color-accent)' : 'var(--color-border-strong)'}
                    strokeWidth={isHovered ? 2.4 : 1.1}
                    strokeDasharray={isHovered ? 'none' : '3 4'}
                    opacity={hasAnyHover && !isHovered ? 0.2 : 0.85}
                    className="transition-all duration-300"
                  />

                  {/* Intermediate Node Dot */}
                  <circle
                    cx={trace.dotX}
                    cy={trace.dotY}
                    r={isHovered ? 4.5 : 3}
                    fill={isHovered ? 'var(--color-accent)' : 'var(--color-border-strong)'}
                    opacity={hasAnyHover && !isHovered ? 0.25 : 1}
                  />

                  {/* Flowing Data Pulse Dot */}
                  <circle r={isHovered ? 3.5 : 2} fill="var(--color-accent)">
                    <animateMotion
                      path={trace.path}
                      dur={`${2.5 + Math.random() * 0.6}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}

            {/* --- BOTTOM BRANCH LINES: 3D CORE -> PURPOSE CARDS --- */}
            <path
              d="M 720 550 L 720 630"
              stroke="var(--color-border-strong)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
            />
            {/* Branch to Goal (Left) */}
            <path
              d="M 720 630 C 620 630, 300 630, 270 680"
              stroke="var(--color-border-strong)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
            />
            {/* Branch to Mission (Center) */}
            <path
              d="M 720 630 L 720 680"
              stroke="var(--color-border-strong)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
            />
            {/* Branch to Vision (Right) */}
            <path
              d="M 720 630 C 820 630, 1140 630, 1170 680"
              stroke="var(--color-border-strong)"
              strokeWidth="1.2"
              strokeDasharray="3 4"
            />
          </svg>

          {/* ========================================================== */}
          {/* UPPER-LEFT CONTENT: WHO WE ARE & 6 CAPABILITY PILLS */}
          {/* ========================================================== */}
          <div className="lg:absolute lg:top-0 lg:left-0 lg:w-[380px] z-20 space-y-6">
            
            {/* Section Header Block */}
            <div className="space-y-3">
              <div className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                <span>WHO WE ARE</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-[var(--color-text)] tracking-tight leading-[1.08]">
                Engineering Intelligence Across AI, Data, Cloud &amp; <span className="text-amber-400 dark:text-amber-300">IIoT.</span>
              </h2>

              <div className="space-y-2.5 text-[15px] sm:text-[16px] md:text-[18px] text-[var(--color-text-secondary)] leading-[1.6] font-normal">
                <p>
                  We are a technology development and engineering company helping enterprises build intelligent systems across AI, Data, Cloud, IIoT and Software.
                </p>
                <p className="text-[var(--color-text-muted)]">
                  We combine deep engineering with domain understanding to design, build and scale solutions that create real impact.
                </p>
              </div>
            </div>

            {/* 6 Engineering Capability Capsule Pills */}
            <div className="space-y-2.5 pt-2">
              <div className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                <span>ENGINEERING CAPABILITIES</span>
              </div>

              <div className="space-y-2 max-w-full sm:max-w-[320px]">
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  const isHovered = hoveredNode === cap.id;
                  return (
                    <div
                      key={cap.id}
                      tabIndex={0}
                      onMouseEnter={() => setHoveredNode(cap.id)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onFocus={() => setHoveredNode(cap.id)}
                      onBlur={() => setHoveredNode(null)}
                      className={`relative flex items-center justify-between px-3.5 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                        isHovered
                          ? 'border-[var(--color-accent)] bg-[var(--color-surface)] shadow-md translate-x-1.5'
                          : 'border-[var(--color-border)] bg-[var(--color-surface-subtle)]/80 hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface)]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] bg-[var(--color-bg)]">
                          <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text)]">
                          {cap.title}
                        </span>
                      </div>

                      {/* Right Connection Tip Marker */}
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          isHovered
                            ? 'bg-[var(--color-accent)] scale-125'
                            : 'bg-[var(--color-border-strong)]'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ========================================================== */}
          {/* CENTER VISUAL: 3D CORE ISOMETRIC HYPERCUBE */}
          {/* ========================================================== */}
          <div className="my-8 lg:my-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-[460px] flex flex-col items-center justify-center z-10 pointer-events-none">
            {/* Real 3D Hypercube Canvas */}
            <div className="max-w-full w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] relative flex items-center justify-center overflow-hidden">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* ========================================================== */}
          {/* UPPER-RIGHT CONTENT: WHAT WE BUILD & 6 CIRCULAR NODES */}
          {/* ========================================================== */}
          <div className="lg:absolute lg:top-0 lg:right-0 lg:w-[420px] z-20 space-y-5">
            
            {/* Header Block */}
            <div className="space-y-1.5">
              <div className="text-[11px] text-[var(--color-text-muted)] uppercase tracking-[0.2em] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-accent)]" />
                <span>WHAT WE BUILD</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-[var(--color-text)] tracking-tight leading-[1.08]">
                Technology. Engineered End to End.
              </h2>
            </div>

            {/* 6 What We Build Items with Circular Framed Icons */}
            <div className="space-y-3">
              {buildItems.map((item) => {
                const Icon = item.icon;
                const isHovered = hoveredNode === item.id;
                return (
                  <div
                    key={item.id}
                    tabIndex={0}
                    onMouseEnter={() => setHoveredNode(item.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onFocus={() => setHoveredNode(item.id)}
                    onBlur={() => setHoveredNode(null)}
                    className={`flex items-start gap-3.5 transition-all duration-200 cursor-pointer p-1.5 rounded-lg ${
                      isHovered ? '-translate-x-1 bg-[var(--color-surface-subtle)]/80' : 'hover:bg-[var(--color-surface-subtle)]/40'
                    }`}
                  >
                    {/* Circular Technical Icon Frame */}
                    <div
                      className="w-8 h-8 rounded-full border border-[var(--color-border-strong)] shrink-0 flex items-center justify-center bg-[var(--color-surface)] text-[var(--color-text)] transition-transform duration-200"
                      style={{
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.8} />
                    </div>

                    {/* Title & Description */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[var(--color-text)] mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] leading-[1.5] font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Explore Services Button (Box Style matching reference) */}
            <div className="pt-2">
              <Link
                to="/services"
                className="inline-flex items-center justify-between px-5 py-2.5 border border-[var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-subtle)] text-xs font-semibold uppercase tracking-widest transition-all duration-200 group"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

        {/* ============================================================ */}
        {/* BOTTOM REGION: OUR GOAL / OUR MISSION / OUR VISION CARDS */}
        {/* ============================================================ */}
        <div className="mt-14 pt-8 relative z-20">
          
          {/* 3 Strategic Purpose Connected Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-center">
            
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              const isHovered = hoveredNode === pillar.id;
              return (
                <div key={pillar.id} className="relative flex items-center">
                  
                  {/* Card Body */}
                  <div
                    tabIndex={0}
                    onMouseEnter={() => setHoveredNode(pillar.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onFocus={() => setHoveredNode(pillar.id)}
                    onBlur={() => setHoveredNode(null)}
                    className={`w-full p-5 rounded-xl border transition-all duration-200 flex flex-col items-center text-center cursor-pointer ${
                      isHovered
                        ? 'border-[var(--color-accent)] bg-[var(--color-surface)] shadow-lg'
                        : 'border-[var(--color-border)] bg-[var(--color-surface-subtle)]/70 hover:border-[var(--color-border-strong)]'
                    }`}
                  >
                    {/* Circular Icon Badge */}
                    <div
                      className="w-12 h-12 rounded-full border border-[var(--color-border-strong)] flex items-center justify-center mb-3 bg-[var(--color-surface)] text-[var(--color-accent)] transition-transform duration-200"
                    >
                      <PillarIcon className="w-5 h-5" strokeWidth={1.8} />
                    </div>

                    {/* Title */}
                    <h4 className="font-heading text-base font-bold uppercase tracking-wider text-[var(--color-text)] mb-1.5">
                      {pillar.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs md:text-[13px] text-[var(--color-text-secondary)] leading-[1.5] font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Dashed Horizontal Connector Line between cards on desktop */}
                  {idx < 2 && (
                    <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-30 text-[var(--color-border-strong)]">
                      <span className="text-[10px] tracking-tighter">-----</span>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* Downward Arrow to Strategic Ribbon */}
          <div className="flex flex-col items-center justify-center mt-6 text-[var(--color-text-muted)]">
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </div>

          {/* Strategic Flow Ribbon: INTELLIGENT SYSTEMS -> OPERATIONAL EXCELLENCE -> BUSINESS IMPACT */}
          <div className="mt-3 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-6 py-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] shadow-sm text-[10px] sm:text-[11px] tracking-widest uppercase text-[var(--color-text)] font-semibold">
              <span>INTELLIGENT SYSTEMS</span>
              <span className="text-[var(--color-text-muted)]">→</span>
              <span>OPERATIONAL EXCELLENCE</span>
              <span className="text-[var(--color-text-muted)]">→</span>
              <span>BUSINESS IMPACT</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
