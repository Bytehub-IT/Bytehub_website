import React, { useRef, useEffect, useCallback } from 'react';

// --- Particle Background for Hero Section (Canvas) ---
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationFrameId = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const handleMouseMove = useCallback((e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.color = `rgba(0, ${Math.floor(100 + Math.random() * 155)}, 255, ${0.5 + Math.random() * 0.5})`;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        const dx = mouse.current.x - this.x;
        const dy = mouse.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150;
        const force = (maxDistance - distance) / maxDistance;
        const directionX = forceDirectionX * force * this.density * 0.05;
        const directionY = forceDirectionY * force * this.density * 0.05;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dx_base = this.x - this.baseX;
            this.x -= dx_base / 20;
          }
          if (this.y !== this.baseY) {
            const dy_base = this.y - this.baseY;
            this.y -= dy_base / 20;
          }
        }
      }
    }

    const initParticles = () => {
      particles.current = [];
      const numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.current.push(new Particle(x, y));
      }
    };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    setCanvasSize();

    const connectParticles = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.current.length; a++) {
        for (let b = a; b < particles.current.length; b++) {
          const distance = Math.sqrt(
            (particles.current[a].x - particles.current[b].x) ** 2 +
            (particles.current[a].y - particles.current[b].y) ** 2
          );
          if (distance < 100) {
            opacityValue = 1 - (distance / 100);
            ctx.strokeStyle = `rgba(0, 150, 255, ${opacityValue * 0.8})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles.current[a].x, particles.current[a].y);
            ctx.lineTo(particles.current[b].x, particles.current[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.current.length; i++) {
        particles.current[i].update();
        particles.current[i].draw();
      }
      connectParticles();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>;
};

export default ParticleBackground;
