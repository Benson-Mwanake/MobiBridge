import React from "react";

export default function LoaderPage() {
  // Pure inline CSS animations to completely bypass tailwind.config.js issues
  const styles = `
    @keyframes loaderBounce {
      0%, 100% { transform: translateY(0) scale(0.9); opacity: 0.6; }
      50% { transform: translateY(-6px) scale(1.1); opacity: 1; }
    }
    @keyframes archBreathe {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1)); }
      50% { transform: scale(1.02); filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3)); }
    }
    @keyframes linePulse {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.8; }
    }
    .custom-node-1 { animation: loaderBounce 1.2s infinite ease-in-out; }
    .custom-node-2 { animation: loaderBounce 1.2s infinite ease-in-out 0.3s; }
    .custom-node-3 { animation: loaderBounce 1.2s infinite ease-in-out 0.6s; }
    .custom-line-1 { animation: linePulse 1.2s infinite ease-in-out 0.15s; }
    .custom-line-2 { animation: linePulse 1.2s infinite ease-in-out 0.45s; }
    .custom-arch { animation: archBreathe 3s infinite ease-in-out; }
  `;

  return (
    <div
      style={{
        backgroundColor: "#022c22", // Deep emerald-950 fallback
        color: "#ffffff",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed", // Enforces full viewport override
        top: 0,
        left: 0,
        zIndex: 9999,
        fontFamily: "monospace",
        boxSizing: "border-box",
        margin: 0,
        padding: "24px",
      }}
    >
      {/* Injecting pure CSS frames explicitly */}
      <style>{styles}</style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "320px",
          width: "100%",
        }}
      >
        {/* =========================================================================
            THE LOGO CONTAINER (Recreated cleanly from rounded_image.jpg)
           ========================================================================= */}
        <div
          style={{
            width: "192px",
            height: "192px",
            backgroundColor: "#064e3b", // Emerald-900 background
            borderRadius: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "32px 24px",
            position: "relative",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            border: "1px solid rgba(16, 185, 129, 0.2)",
            boxSizing: "border-box",
          }}
        >
          {/* Top Layer: 3 Communicating Nodes and connecting paths */}
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "between",
              position: "relative",
              zIndex: 20,
              marginTop: "8px",
            }}
          >
            {/* Left Node */}
            <div
              className="custom-node-1"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "50%",
              }}
            />

            {/* Left Linking Data Line */}
            <div
              className="custom-line-1"
              style={{
                flexGrow: 1,
                height: "3px",
                backgroundColor: "rgba(25, 230, 140, 0.3)",
                margin: "0 8px",
                borderRadius: "2px",
              }}
            />

            {/* Middle Node (Arched up higher layout path) */}
            <div
              className="custom-node-2"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "50%",
                transform: "translateY(-16px)",
              }}
            />

            {/* Right Linking Data Line */}
            <div
              className="custom-line-2"
              style={{
                flexGrow: 1,
                height: "3px",
                backgroundColor: "rgba(25, 230, 140, 0.3)",
                margin: "0 8px",
                borderRadius: "2px",
              }}
            />

            {/* Right Node */}
            <div
              className="custom-node-3"
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#ffffff",
                borderRadius: "50%",
              }}
            />
          </div>

          {/* Bottom Layer: The Bridge Arch */}
          <div
            className="custom-arch"
            style={{ width: "100%", relative: "z-10", marginBottom: "4px" }}
          >
            <svg
              viewBox="0 0 100 40"
              style={{ width: "100%", fill: "#ffffff" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Structural bridge archway matching image profile */}
              <path d="M5,35 L12,35 C12,35 25,16 50,16 C75,16 88,35 88,35 L95,35 L95,24 C85,24 70,8 50,8 C30,8 15,24 5,24 Z" />
              <rect x="5" y="22" width="7" height="14" rx="1" />
              <rect x="88" y="22" width="7" height="14" rx="1" />
            </svg>
          </div>
        </div>

        {/* =========================================================================
            STATUS TEXT
           ========================================================================= */}
        <div style={{ marginTop: "32px" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              letterSpacing: "0.25em",
              color: "#34d399",
              textTransform: "uppercase",
              display: "block",
            }}
          >
            MobiBridge
          </span>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(209, 250, 229, 0.5)",
              marginTop: "8px",
              margin: 0,
            }}
          >
            Establishing operational pathways...
          </p>
        </div>
      </div>
    </div>
  );
}
