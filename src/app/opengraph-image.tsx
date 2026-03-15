import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { brandPalette, brandWordmark } from "@/content/brand";

export const runtime = "nodejs";
export const alt = "Grigorii premium support systems portfolio cover image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const portraitData = await readFile(
    join(process.cwd(), "public/images/profile/grigorii-portrait.png"),
    "base64",
  );
  const portraitSrc = `data:image/png;base64,${portraitData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: `linear-gradient(180deg, ${brandPalette.canvas} 0%, #ebe2d5 100%)`,
          color: brandPalette.ink,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 18%, rgba(179, 138, 82, 0.22), transparent 24%), radial-gradient(circle at 88% 20%, rgba(106, 53, 50, 0.18), transparent 24%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 24,
            border: "1px solid rgba(18, 19, 24, 0.12)",
            borderRadius: 28,
          }}
        />

        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "42px 46px",
            justifyContent: "space-between",
            gap: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: 690,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  color: brandPalette.slate,
                  fontSize: 24,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    padding: "7px 14px",
                    border: "1px solid rgba(18, 19, 24, 0.14)",
                    borderRadius: 999,
                  }}
                >
                  Portfolio
                </span>
                <span>{brandWordmark.signature}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                <span style={{ fontSize: 34, color: brandPalette.slate }}>
                  {brandWordmark.name} / {brandWordmark.descriptor}
                </span>
                <span
                  style={{
                    fontSize: 92,
                    lineHeight: 0.92,
                    letterSpacing: "-0.08em",
                  }}
                >
                  Calm systems for noisy support work.
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                }}
              >
                {[
                  "45% lower repetitive tier-1 volume",
                  "35% faster first response time",
                  "70% less manual ops load",
                ].map((item) => (
                  <span
                    key={item}
                    style={{
                      display: "flex",
                      padding: "8px 14px",
                      border: "1px solid rgba(18, 19, 24, 0.14)",
                      borderRadius: 999,
                      color: brandPalette.slate,
                      fontSize: 20,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  maxWidth: 640,
                  fontSize: 30,
                  lineHeight: 1.35,
                  color: brandPalette.slate,
                }}
              >
                Premium portfolio and recruiter-ready dossier for technical support,
                escalations, workflow automation, and public-safe case proof.
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: 340,
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                display: "flex",
                position: "absolute",
                inset: 0,
                borderRadius: 28,
                border: "1px solid rgba(255, 252, 247, 0.28)",
                background:
                  "linear-gradient(180deg, rgba(18, 19, 24, 0.08), rgba(18, 19, 24, 0.35))",
                overflow: "hidden",
              }}
            >
              <img
                src={portraitSrc}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                position: "absolute",
                inset: 18,
                border: "1px solid rgba(255, 252, 247, 0.34)",
                borderRadius: 20,
              }}
            />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
