const sharp = require('sharp');
const path = require('path');

const photos = [
  { src: 'living.jpg.JPG',        out: 'living.jpg' },
  { src: 'bedroom_master.jpg.JPG', out: 'bedroom_master.jpg' },
  { src: 'bedroom_twin.jpg.JPG',  out: 'bedroom_twin.jpg' },
  { src: 'dining.jpg.JPG',        out: 'dining.jpg' },
];

const dir = path.join(__dirname, 'images');

async function enhance(src, out) {
  const input = path.join(dir, src);
  const output = path.join(dir, out);

  await sharp(input)
    // Boost brightness & contrast for indoor warmth
    .modulate({ brightness: 1.22, saturation: 1.18 })
    // Punch up contrast and brighten whites
    .linear(1.15, -10)
    // Sharpen for crispness
    .sharpen({ sigma: 0.9, m1: 0.5, m2: 2.5 })
    // Convert to high quality JPEG
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
    .toFile(output);

  console.log(`✓ ${out}`);
}

(async () => {
  for (const p of photos) {
    await enhance(p.src, p.out);
  }
  console.log('\nAll done. Ready to push.');
})();
