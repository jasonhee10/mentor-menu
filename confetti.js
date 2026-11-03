/* Gentle confetti drifting down behind the page. Brand colors from the 300 Connect logo. */
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var c = document.createElement("canvas");
  c.setAttribute("aria-hidden", "true");
  c.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:-1;pointer-events:none";
  document.body.prepend(c);
  var ctx = c.getContext("2d");
  var colors = ["#7B4DE0", "#A07CF0", "#1E88D6", "#4FB3EA", "#E8A91B"];
  var W, H, dpr, pieces = [];

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    c.width = W * dpr; c.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function make(startAnywhere) {
    return {
      x: Math.random() * W,
      y: startAnywhere ? Math.random() * H : -20,
      w: 7 + Math.random() * 7,
      h: 4 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: 0.35 + Math.random() * 0.6,
      swing: 0.6 + Math.random() * 1.2,
      phase: Math.random() * Math.PI * 2,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.04,
      alpha: 0.5 + Math.random() * 0.4
    };
  }
  size();
  var count = Math.round(Math.min(60, Math.max(25, W / 25)));
  for (var i = 0; i < count; i++) pieces.push(make(true));
  window.addEventListener("resize", size);

  var running = true;
  document.addEventListener("visibilitychange", function () {
    running = !document.hidden;
    if (running) requestAnimationFrame(tick);
  });

  function tick() {
    if (!running) return;
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < pieces.length; i++) {
      var p = pieces[i];
      p.phase += 0.01;
      p.y += p.vy;
      p.x += Math.sin(p.phase) * 0.4 * p.swing;
      p.rot += p.vr;
      if (p.y > H + 20) pieces[i] = p = make(false);
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.scale(1, Math.cos(p.phase * 3));
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
