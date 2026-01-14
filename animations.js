/* ==========================================================================
   MAVROUDIS.CA - Animations & Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Add js-ready class to enable animations (progressive enhancement)
  document.documentElement.classList.add('js-ready');

  // Small delay to ensure CSS transition works
  requestAnimationFrame(() => {
    initScrollReveal();
    initHeroCanvas();
    initNodeNetwork();
    initSkylineAnimation();
    initSmoothScroll();
  });
});

/* --------------------------------------------------------------------------
   Scroll Reveal - Intersection Observer
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  // Check if element is in viewport
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
    );
  }

  // Immediately reveal elements already in viewport
  revealElements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('revealed');
    }
  });

  const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   Hero Canvas - Geometric Animation
   Modernized version of the original rotating squares
   -------------------------------------------------------------------------- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let shapes = [];

  // Colors from design system
  const colors = {
    toronto: '#2C3E50',
    torontoLight: '#95A5A6',
    miami: '#FF6B6B',
    miamiLight: '#00D9FF'
  };

  // Resize handler
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initShapes();
  }

  // Initialize geometric shapes
  function initShapes() {
    shapes = [];
    const count = Math.floor((canvas.width * canvas.height) / 50000);

    for (let i = 0; i < count; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        color: i % 2 === 0 ? colors.toronto : colors.miami,
        alpha: Math.random() * 0.15 + 0.05
      });
    }
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(shape => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.globalAlpha = shape.alpha;
      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 1;

      // Draw square
      const half = shape.size / 2;
      ctx.strokeRect(-half, -half, shape.size, shape.size);

      ctx.restore();

      // Update rotation
      shape.rotation += shape.rotationSpeed;
    });

    animationId = requestAnimationFrame(animate);
  }

  // Initialize
  window.addEventListener('resize', resize);
  resize();
  animate();

  // Cleanup on page hide
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

/* --------------------------------------------------------------------------
   Node Network - AI-themed animation for Stealth section
   -------------------------------------------------------------------------- */
function initNodeNetwork() {
  const canvas = document.getElementById('stealth-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationId;
  let nodes = [];
  let mouse = { x: null, y: null };

  const config = {
    nodeCount: 50,
    connectionDistance: 150,
    nodeSpeed: 0.5,
    nodeSize: 3,
    lineWidth: 0.5
  };

  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    initNodes();
  }

  function initNodes() {
    nodes = [];
    for (let i = 0; i < config.nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * config.nodeSpeed,
        vy: (Math.random() - 0.5) * config.nodeSpeed
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw nodes
    nodes.forEach((node, i) => {
      // Move node
      node.x += node.vx;
      node.y += node.vy;

      // Bounce off edges
      if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

      // Draw node
      ctx.beginPath();
      ctx.arc(node.x, node.y, config.nodeSize, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 217, 255, 0.6)';
      ctx.fill();

      // Connect to nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const other = nodes[j];
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.connectionDistance) {
          const alpha = 1 - (dist / config.connectionDistance);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(255, 107, 107, ${alpha * 0.3})`;
          ctx.lineWidth = config.lineWidth;
          ctx.stroke();
        }
      }

      // Connect to mouse if nearby
      if (mouse.x && mouse.y) {
        const dx = node.x - mouse.x;
        const dy = node.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.connectionDistance * 1.5) {
          const alpha = 1 - (dist / (config.connectionDistance * 1.5));
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 217, 255, ${alpha * 0.5})`;
          ctx.lineWidth = config.lineWidth * 2;
          ctx.stroke();
        }
      }
    });

    animationId = requestAnimationFrame(animate);
  }

  // Mouse tracking
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Initialize
  window.addEventListener('resize', resize);
  resize();
  animate();

  // Cleanup
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

/* --------------------------------------------------------------------------
   Skyline SVG Animation - Draw on scroll
   -------------------------------------------------------------------------- */
function initSkylineAnimation() {
  const skylines = document.querySelectorAll('.draw-path');
  if (!skylines.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.5 });

  skylines.forEach(path => observer.observe(path));
}

/* --------------------------------------------------------------------------
   Smooth Scroll for anchor links
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Utility: Throttle function for performance
   -------------------------------------------------------------------------- */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
