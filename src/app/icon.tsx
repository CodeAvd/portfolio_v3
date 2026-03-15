import { ImageResponse } from "next/og";

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
          borderRadius: 18,
          border: "4px solid #181c20",
          background: "linear-gradient(180deg, #fcfbf7 0%, #f1ebe0 100%)",
          color: "#181c20",
          fontSize: 34,
          fontWeight: 700,
        }}
      >
        G
      </div>
    ),
    size,
  );
}
