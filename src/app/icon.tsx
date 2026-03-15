import { ImageResponse } from "next/og";

import { brandPalette } from "@/content/brand";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: brandPalette.ink,
          color: brandPalette.paper,
          borderRadius: 16,
          border: `3px solid ${brandPalette.brass}`,
          fontSize: 38,
          lineHeight: 1,
          fontFamily: "Georgia",
          position: "relative",
        }}
      >
        <span style={{ transform: "translateX(-2px)" }}>G</span>
        <span
          style={{
            position: "absolute",
            right: 14,
            top: 14,
            bottom: 14,
            width: 2,
            background: brandPalette.brass,
            opacity: 0.8,
          }}
        />
      </div>
    ),
    size,
  );
}
