"use client";

import { motion, useReducedMotion } from "motion/react";

import styles from "./ambient-hero.module.css";

export function AmbientHero() {
  const reduceMotion = useReducedMotion();

  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.crosshair} />
      <div className={`${styles.route} ${styles.routePrimary}`} />
      <div className={`${styles.route} ${styles.routeSecondary}`} />

      <motion.div
        className={`${styles.node} ${styles.nodeLead}`}
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 5.4,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <div className={`${styles.node} ${styles.nodeSupport}`} />
      <div className={`${styles.node} ${styles.nodeArchive}`} />

      <motion.div
        className={styles.scan}
        animate={reduceMotion ? undefined : { x: ["-12%", "112%"] }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
    </div>
  );
}
