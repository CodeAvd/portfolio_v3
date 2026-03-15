import Link from "next/link";

import { brandIdentity } from "@/content/brand";

import styles from "./brand-lockup.module.css";

type BrandLockupProps = {
  className?: string;
  compact?: boolean;
  href?: string;
};

function BrandMonogram() {
  return (
    <svg
      viewBox="0 0 96 96"
      aria-hidden="true"
      className={styles.svg}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="14" y="14" width="68" height="68" rx="18" stroke="currentColor" strokeWidth="6" />
      <path
        d="M56 28H38C31.3726 28 26 33.3726 26 40V56C26 62.6274 31.3726 68 38 68H56"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <path d="M56 48H44" stroke="currentColor" strokeWidth="7" strokeLinecap="square" />
      <path d="M64 24V72" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
    </svg>
  );
}

function LockupContent() {
  return (
    <>
      <span className={styles.mark} aria-hidden="true">
        <BrandMonogram />
      </span>
      <span className={styles.copy}>
        <span className={styles.wordmark}>{brandIdentity.wordmark}</span>
        <span className={styles.descriptor}>{brandIdentity.descriptor}</span>
      </span>
    </>
  );
}

export function BrandLockup({ className = "", compact = false, href }: BrandLockupProps) {
  const classNames = `${styles.root} ${compact ? styles.compact : ""} ${className}`.trim();

  if (href) {
    return (
      <Link className={classNames} href={href}>
        <LockupContent />
      </Link>
    );
  }

  return (
    <div className={classNames}>
      <LockupContent />
    </div>
  );
}
