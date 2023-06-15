import anime from 'animejs/lib/anime.es.js'

export default function () {
  const order_sequence = {
    staggeringOpacity: (
      target: any,
      x: number = 250,
      y: number = 0,
      delay?: number,
      duration?: number
    ) => {
      anime({
        targets: target,
        opacity: [0, 1],
        translateX: [-x, 0],
        translateY: [-y, 0],
        translateZ: 0,
        delay: anime.stagger(delay ? delay : 50), // increase delay by 100ms for each elements.
        duration: duration ? duration : 1000,
      })
    },
  }

  return {
    ...order_sequence,
  }
}
