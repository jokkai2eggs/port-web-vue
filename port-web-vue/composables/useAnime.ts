import anime from 'animejs/lib/anime.es.js'

export default function () {
  const order_sequence = {
    staggeringOpacity: (target: any, distance: number = 250) => {
      anime({
        targets: target,
        opacity: [0, 1],
        translateX: [-distance, 0],
        translateZ: 0,
        delay: anime.stagger(50), // increase delay by 100ms for each elements.
      })
    },
  }

  return {
    ...order_sequence,
  }
}
