import React from "react";
import Countdown from "react-countdown";

const PopupCountdown = ({ isVisible, closePopup }) => {
  const launchDate = new Date("2025-07-30T00:00:00"); // Set your launch date

  if (!isVisible) return null; // Render nothing if not visible

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "85%",
          height: "65vh",
          background: "linear-gradient(135deg, #ffd700, #000)",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
          position: "relative",
        }}
      >
        <p style={{ fontSize: "1rem", margin: "0 0 5px" }}>
          <b>HOUSEPARRY</b> – your ultimate destination for everything related
          to party planning. We've stepped back to improve and enhance our
          services, thanks to the overwhelming traffic you've shown us. We're
          incredibly grateful for your support!
        </p>
        <h1 style={{ fontSize: "1.5rem", margin: "2px 0 10px" }}>
          WE ARE COMING BACK, STRONGER AND BETTER THAN EVER!
        </h1>

        <div
          style={{
            fontSize: "2rem",
            marginBottom: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "5px", // Space between time blocks
          }}
        >
          <Countdown
            date={launchDate}
            renderer={({ days, hours, minutes, seconds }) => (
              <div
                style={{
                  display: "flex",
                  gap: "4px", // Space between values
                  alignItems: "center",
                  fontWeight: "bold",
                }}
              >
                {/* Day block with background and border */}
                <div
                  style={{
                    color: "#000",
                    padding: "5px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #000",
                  }}
                >
                  {days}d
                </div>
                <span style={{ fontSize: "2rem" }}>:</span>
                {/* Hour block with background and border */}
                <div
                  style={{
                    color: "#000",
                    padding: "5px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #000",
                  }}
                >
                  {hours}h
                </div>
                <span style={{ fontSize: "2rem" }}>:</span>
                {/* Minute block with background and border */}
                <div
                  style={{
                    color: "#000",
                    padding: "5px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #000",
                  }}
                >
                  {minutes}m
                </div>
                <span style={{ fontSize: "2rem" }}>:</span>
                {/* Second block with background and border */}
                <div
                  style={{
                    color: "#000",
                    padding: "5px",
                    backgroundColor: "#fff",
                    borderRadius: "5px",
                    border: "1px solid #000",
                  }}
                >
                  {seconds}s
                </div>
              </div>
            )}
          />
        </div>

        <button
          type="button"
          onClick={closePopup}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            color: "#000",
            backgroundColor: "#ffd700",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            position: "absolute",
            bottom: "14px",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupCountdown;
