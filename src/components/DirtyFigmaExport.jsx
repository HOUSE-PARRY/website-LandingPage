import React, { useState } from "react";
import PopupCountdown from "../components/PopupCountdown.jsx";

export function Underlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        padding: 40,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            fontWeight: "700",
            lineHeight: "30px",
            color: "black",
            letterSpacing: -2,
          }}
        >
          HOUSEPARRY
        </p>
        <div style={{ flex: "1 1 0%", display: "flex", gap: "2em" }}></div>
        <p
          style={{
            flex: "1 1 0%",
            height: 30,
            fontSize: 30,
            lineHeight: "30px",
            textAlign: "right",
            color: "black",
            cursor: "pointer",
          }}
        >
          🥳
        </p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            height: "100%",
            fontSize: 16,
            lineHeight: "1.5em",
            color: "black",
          }}
        >
          <b>
            Effortlessly select venues, vendors, and party services tailored for
            unforgettable experiences
          </b>
          <br />
          Your One-stop shop for Party Planning
          <br />
          <b>—</b>
        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            transform: "rotate3d(0, 0, 1, 90deg) translate3d(100%,10px,0)",
            transformOrigin: "right",
            fontSize: 12,
            fontWeight: "700",
            lineHeight: "100%",
            textAlign: "right",
            color: "black",
            whiteSpace: "nowrap",
          }}
        >
          LET &nbsp; US &nbsp; PARTY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ●
        </p>
      </div>

      <div style={{ height: 10 }} />

      <div
        className="full"
        style={{
          fontFamily: "'Antonio', sans-serif",
          width: "100%",
          flex: "1 1 0%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            flex: "1 1 0%",
            fontSize: 250,
            lineHeight: "1em",
            color: "black",
            margin: 0,
            letterSpacing: -10,
          }}
        >
          HOUSE
        </p>
        <div style={{ width: 10 }} />
        <p
          style={{
            flex: "1 1 0%",
            fontSize: 250,
            lineHeight: "100%",
            textAlign: "right",
            color: "black",
            margin: 0,
            letterSpacing: -10,
          }}
        >
          PARRY
        </p>
      </div>
      <div style={{ height: 60 }} />
      <div
        style={{
          pointerEvents: "all",
          pointer: "auto",
          width: "100%",
          padding: 0,
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <p
          className="full"
          style={{
            whiteSpace: "nowrap",
            flex: "1 1 0%",
            fontSize: 14,
            lineHeight: "1.5em",
            color: "black",
          }}
        >
          <b>Plan Your Party Now</b>
          <br />
          Host an Unforgettable Party
        </p>
        <div style={{ width: 10 }} />
        <p
          className="full"
          style={{
            fontFamily: "'Antonio', sans-serif",
            flex: "1 1 0%",
            fontSize: 16,
            fontWeight: "700",
            lineHeight: "1em",
            textAlign: "center",
            color: "black",
            letterSpacing: -0.5,
            whiteSpace: "nowrap",
          }}
        >
          REVOLUTIONIZE YOUR HOUSE PARTY PLANNING
        </p>
        <div style={{ width: 10 }} />
        <p
          className="full"
          style={{
            flex: "1 1 0%",
            fontSize: 12,
            lineHeight: "1em",
            textAlign: "right",
            color: "black",
          }}
        ></p>
      </div>
    </div>
  );
}

export function Overlay() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => setIsPopupVisible(true);
  const hidePopup = () => setIsPopupVisible(false);
  return (
    <div style={{ position: "absolute", bottom: 40, right: 40 }}>
      <PopupCountdown isVisible={isPopupVisible} closePopup={hidePopup} />
      <p
        style={{
          flex: "1 1 0%",
          fontSize: 12,
          lineHeight: "1em",
          textAlign: "right",
          color: "black",
        }}
        onClick={() => showPopup()}
      >
        <a href="http://houseparry.com">LEARN MORE</a>{" "}
      </p>
    </div>
  );
}
