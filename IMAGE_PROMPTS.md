# Image prompts for near coffee.space

Generate these, export as **.webp** (OG image as .jpg), and drop them into `assets/images/` with the exact filenames below.
The site picks them up on its own. Until a file exists, a painted gradient in matching colors fills its spot, so you can add them one at a time.

## Shared style (add to the end of every prompt)

> shot on 35mm film, Kodak Portra 400, fine grain, warm tungsten and soft window light, palette of deep espresso brown, warm cream, and burnt-orange ember, shallow depth of field, quiet, minimal, editorial still life, no text, no logos

**Midjourney:** add `--style raw --v 7` plus the `--ar` given below.
**GPT-image / Gemini / Flux:** state the aspect ratio in words ("vertical 4:5 image").
**Negative prompt (SD/Flux):** text, watermark, logo, plastic, oversaturated, cartoon, extra fingers, busy background

---

### 1. `hero-cup.webp`: hero arch, 4:5 (960×1200)
A single hand-thrown matte ceramic cup of black coffee on dark volcanic stone in a pitch-black room. One warm rim light from behind. The steam rises and slowly curls into a soft spiral galaxy, with tiny glowing specks in the vapor like distant stars. Lots of negative space above the cup. Mood: a tiny universe in a cup. `--ar 4:5`

### 2. `pour-over.webp`: "Slow pours", 4:5 (800×1000)
Close-up of a gooseneck kettle pouring a thin, glassy stream of water into a ceramic pour-over cone. Strong amber backlight turns the water into molten gold. Bloom foam on the grounds, a few droplets frozen mid-air, a dark background. `--ar 4:5`

### 3. `window-light.webp`: "Good light", 4:5 (800×1000)
A quiet window seat in a New York brownstone café at 8am. Soft sage-tinted daylight through old wavy glass. A linen cushion, an open paperback face-down, a half-finished cortado on the sill, and long shadows from the window mullions across a plaster wall. No people. `--ar 4:5`

### 4. `neighbors.webp`: "Neighbors", 4:5 (800×1000)
Overhead view of a small round marble café table. Two pairs of hands, different ages and skin tones, each wrapped around a ceramic cup, almost touching. A croissant on a small plate, crumbs, warm afternoon light. Intimate, no faces. `--ar 4:5`

### 5. `storefront-dusk.webp`: gallery tall tile, 3:4 (900×1200)
A narrow New York brownstone storefront at blue hour. Large arched window glowing warm orange from within, a silhouetted espresso machine, plants, and a single bentwood chair outside on the sidewalk. Light drizzle makes the pavement reflect the glow. Cinematic, lonely-but-cozy, Edward Hopper mood. `--ar 3:4`

### 6. `bean-constellation.webp`: gallery wide tile, 16:9 (1600×900)
Roasted coffee beans scattered sparsely across a matte black surface, shot from directly above, arranged so they read like a star map. Thin hairline chalk lines connect a few beans into constellations. One bean glows faintly orange like a small sun. Deep space feeling, a macro still life. `--ar 16:9`

### 7. `latte-planet.webp`: gallery square tile, 1:1 (1000×1000)
Top-down shot of a latte in a speckled cream ceramic cup on a dark walnut table. The latte art is a perfect ringed planet like Saturn, poured in microfoam, with tiny dots of foam as moons around it. Soft directional light, crisp foam texture. `--ar 1:1`

### 8. `counter-detail.webp`: gallery square tile, 1:1 (1000×1000)
Detail of a café counter: cream terrazzo with flecks of terracotta and sage, the chrome group head of an espresso machine just out of focus, three stacked handmade cups, and a small brass bell. Morning light, a few stray coffee grounds. `--ar 1:1`

### 9. `og-image.jpg`: social share card, 1200×630
A wide, dark, minimalist composition: a single coffee cup seen from the side on the right third, with steam rising into a faint orbit ring that arcs across the frame like a planetary ring. Deep espresso-black background, a warm ember glow, and empty space on the left for the logo. Add the wordmark "near coffee.space" in an elegant serif yourself in Figma or Canva afterward; image models garble text. `--ar 1200:630`

---

### Bonus: optional hero video loop
For Runway, Kling, or Sora: *"Locked-off macro shot, steam rising from a ceramic coffee cup in darkness, slowly swirling into a spiral galaxy with faint star specks, warm rim light, 6 second seamless loop, film grain."* Export as a muted 6s MP4 under 3 MB and ask me to wire it into the hero.
