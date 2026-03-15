import { ImageResponse } from "next/og";

import { brandPalette } from "@/content/brand";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandPalette.canvas,
          color: brandPalette.ink,
          borderRadius: 36,
          border: `5px solid ${brandPalette.brass}`,
          boxShadow: "inset 0 0 0 5px rgba(18, 19, 24, 0.08)",
          fontSize: 108,
          lineHeight: 1,
          fontFamily: "Georgia",
          position: "relative",
        }}
      >
        <span style={{ transform: "translateX(-6px)" }}>G</span>
        <span
          style={{
            position: "absolute",
            right: 38,
            top: 34,
            bottom: 34,
            width: 4,
            background: brandPalette.oxblood,
            opacity: 0.92,
          }}
        />
      </div>
    ),
    size,
  );
}
