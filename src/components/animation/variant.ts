export const variant = {
  container: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04
      },
    },
  },
  sideVariant: {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20, // Animate from right to left
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    },
    exit: {
      opacity: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 35,
        stiffness: 100,
      }
    }
  },
  pullupVariant: {
    hidden: { y: 100, opacity: 0 },
    visible: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
    exit: { y: 0, opacity: 0 }
  }

} as const

export type VariantKeys = keyof typeof variant