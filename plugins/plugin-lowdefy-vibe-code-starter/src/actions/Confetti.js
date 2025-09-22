import JSConfetti from 'js-confetti';

async function Confetti({ params }) {
  const jsConfetti = new JSConfetti();
  const { emojis, confettiRadius = 3, confettiNumber = 50, emojiSize = 10 } = params;
  jsConfetti.addConfetti({
    emojis,
    confettiRadius,
    confettiNumber,
    emojiSize,
  });
  return;
}

export default Confetti;
