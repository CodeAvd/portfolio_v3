import { ImageResponse } from "next/og";

import { brandIdentity } from "@/content/brand";

export const alt = "Grigorii support systems portfolio cover image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px 54px",
          background:
            "linear-gradient(180deg, #fcfbf7 0%, #f1ebe0 100%)",
          color: "#181c20",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(rgba(24, 28, 32, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(24, 28, 32, 0.04) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#5d746a",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 62,
                height: 62,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                border: "2px solid #181c20",
                background: "#f7f3ec",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              G
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <span style={{ color: "#181c20", letterSpacing: "0.22em" }}>{brandIdentity.wordmark}</span>
              <span style={{ fontSize: 16, letterSpacing: "0.18em" }}>{brandIdentity.descriptor}</span>
            </div>
          </div>
          <span>{brandIdentity.concept}</span>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            maxWidth: 920,
            fontSize: 78,
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: "-0.06em",
          }}
        >
          Support systems that turn repeat noise into evidence.
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            gap: 26,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 16,
              }}
            >
              {["45% lower repeat volume", "35% faster first response", "70% less manual load"].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(24, 28, 32, 0.12)",
                    background: "rgba(255, 255, 255, 0.82)",
                    fontSize: 18,
                    color: "#313842",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                maxWidth: 760,
                fontSize: 28,
                lineHeight: 1.4,
                color: "#4f5962",
              }}
            >
              Technical support, escalation, workflow automation, and public-safe proof
              packaged to read clearly for recruiters.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: 282,
              padding: 24,
              flexDirection: "column",
              gap: 14,
              borderRadius: 28,
              border: "1px solid rgba(24, 28, 32, 0.12)",
              background: "rgba(255, 255, 255, 0.84)",
              boxShadow: "0 20px 40px rgba(24, 28, 32, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 16,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5d746a",
              }}
            >
              Operator read
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                lineHeight: 1.25,
                color: "#181c20",
              }}
            >
              Support-first credibility with systems leverage.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                lineHeight: 1.45,
                color: "#4f5962",
              }}
            >
              Signal Ledger identity across web, resume, favicon, and share cards.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
