import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Handle high DPI
    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // 3D Polyhedron vertices (Icosahedron / Truncated Octahedron style)
    const phi = (1 + Math.sqrt(5)) / 2;
    const rawVertices: [number, number, number][] = [
      [-1,  phi, 0], [ 1,  phi, 0], [-1, -phi, 0], [ 1, -phi, 0],
      [ 0, -1,  phi], [ 0,  1,  phi], [ 0, -1, -phi], [ 0,  1, -phi],
      [ phi, 0, -1], [ phi, 0,  1], [-phi, 0, -1], [-phi, 0,  1]
    ];

    // Edges connecting vertices
    const edges: [number, number][] = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [1, 7], [1, 8], [1, 9],
      [2, 11], [2, 10], [2, 3], [2, 4], [2, 6],
      [3, 4], [3, 6], [3, 8], [3, 9],
      [4, 5], [4, 9], [4, 11],
      [5, 9], [5, 11],
      [6, 7], [6, 8], [6, 10],
      [7, 8], [7, 10],
      [8, 9],
      [10, 11]
    ];

    // Ambient floating particles
    const particles = Array.from({ length: 45 }, () => ({
      x: (Math.random() - 0.5) * 450,
      y: (Math.random() - 0.5) * 450,
      z: (Math.random() - 0.5) * 450,
      radius: Math.random() * 1.8 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      speedZ: (Math.random() - 0.5) * 0.4,
    }));

    let rotX = 0.2;
    let rotY = 0.4;
    let rotZ = 0.1;

    // Mouse movement inside container
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      mouseRef.current.targetX = x * 0.8;
      mouseRef.current.targetY = y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render loop
    const render = () => {
      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      rotX += 0.003 + mouseRef.current.y * 0.005;
      rotY += 0.006 + mouseRef.current.x * 0.005;
      rotZ += 0.002;

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const baseScale = Math.min(width, height) * 0.32;
      const fov = 400;

      // Rotate 3D point helper
      const project = (x: number, y: number, z: number) => {
        // Rotations
        // Z
        const x1 = x * Math.cos(rotZ) - y * Math.sin(rotZ);
        const y1 = x * Math.sin(rotZ) + y * Math.cos(rotZ);
        const z1 = z;

        // Y
        const x2 = x1 * Math.cos(rotY) + z1 * Math.sin(rotY);
        const y2 = y1;
        const z2 = -x1 * Math.sin(rotY) + z1 * Math.cos(rotY);

        // X
        const x3 = x2;
        const y3 = y2 * Math.cos(rotX) - z2 * Math.sin(rotX);
        const z3 = y2 * Math.sin(rotX) + z2 * Math.cos(rotX);

        const distance = fov / (fov + z3 + 50);
        return {
          px: centerX + x3 * distance,
          py: centerY + y3 * distance,
          depth: z3,
          scale: distance
        };
      };

      // Draw background ambient particles
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.z += p.speedZ;

        if (p.x > 250) p.x = -250;
        if (p.x < -250) p.x = 250;
        if (p.y > 250) p.y = -250;
        if (p.y < -250) p.y = 250;
        if (p.z > 250) p.z = -250;
        if (p.z < -250) p.z = 250;

        const proj = project(p.x, p.y, p.z);
        const alpha = Math.max(0.1, Math.min(0.6, (proj.depth + 250) / 500));

        ctx.fillStyle = `rgba(204, 255, 0, ${alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(proj.px, proj.py, p.radius * proj.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Project vertices
      const projected = rawVertices.map(([vx, vy, vz]) => {
        return project(vx * baseScale, vy * baseScale, vz * baseScale);
      });

      // Draw Edges
      ctx.lineWidth = 1.2;
      edges.forEach(([i, j]) => {
        const p1 = projected[i];
        const p2 = projected[j];

        const avgDepth = (p1.depth + p2.depth) / 2;
        const depthAlpha = Math.max(0.12, Math.min(0.85, (avgDepth + 180) / 360));

        ctx.strokeStyle = `rgba(204, 255, 0, ${depthAlpha * 0.6})`;
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();
      });

      // Draw Vertices
      projected.forEach((p) => {
        const depthAlpha = Math.max(0.2, Math.min(1, (p.depth + 180) / 360));

        // Vertex outer glow
        const gradient = ctx.createRadialGradient(p.px, p.py, 1, p.px, p.py, 6 * p.scale);
        gradient.addColorStop(0, `rgba(204, 255, 0, ${depthAlpha})`);
        gradient.addColorStop(1, 'rgba(204, 255, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.px, p.py, 6 * p.scale, 0, Math.PI * 2);
        ctx.fill();

        // Core vertex point
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(p.px, p.py, 2 * p.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Core inner ring
      ctx.strokeStyle = 'rgba(204, 255, 0, 0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseScale * 0.85, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full aspect-square max-w-[480px] lg:max-w-[540px] mx-auto flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial from-[#CCFF00]/10 via-[#CCFF00]/2 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full relative z-10 cursor-grab active:cursor-grabbing"
      />

      {/* Floating Technical HUD Badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute top-4 left-0 sm:-left-4 z-20 px-3 py-1.5 rounded-lg bg-[#0E1017]/90 border border-white/10 backdrop-blur-md shadow-xl text-[11px] font-mono text-[#E5E7EB] flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-ping" />
        <span className="text-[#CCFF00] font-bold">CORE</span>
        <span className="text-white/40">|</span>
        <span>DSA + Full-Stack</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 right-0 sm:-right-4 z-20 px-3 py-1.5 rounded-lg bg-[#0E1017]/90 border border-white/10 backdrop-blur-md shadow-xl text-[11px] font-mono text-[#E5E7EB] flex items-center gap-2"
      >
        <span className="text-amber-400 font-bold">2×</span>
        <span>Coder of the Year</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-1/3 -left-2 sm:-left-8 z-20 px-3 py-1 rounded-lg bg-[#08090C]/80 border border-[#CCFF00]/20 backdrop-blur-sm text-[10px] font-mono text-[#9CA3AF]"
      >
        <span>rot_matrix(3D): 60fps</span>
      </motion.div>
    </div>
  );
};
