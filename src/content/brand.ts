import designTokens from "./design-tokens.json";

export const brandIdentity = {
  concept: "Signal Ledger",
  wordmark: "GRIGORII",
  descriptor: "support systems",
  tagline: "Operator-grade proof for support hiring",
  audience: "Support ops and technical support hiring",
  character: ["forensic", "composed", "operator-grade"],
  clichesToAvoid: [
    "generic SaaS dashboard chrome",
    "beige luxury portfolio styling",
    "crypto terminal cosplay",
  ],
  assetPaths: {
    monogram: "/brand/monogram.svg",
    wordmark: "/brand/wordmark.svg",
  },
} as const;

export const brandTokens = designTokens;
