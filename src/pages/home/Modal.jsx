import ReactDOM from "react-dom";

const BACKDROP_STYLE = {
  zIndex: 10,
  width: "100%",
  minHeight: "100%",
  position: "absolute",
  top: 0,
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,0.5)",
};

const CONTENT_STYLE = {
  zIndex: 20,
  width: "100%",
  maxWidth: "480px",
  marginTop: "1em",
  position: "relative",
  backgroundColor: "#FFF",
  padding: "1em",
  boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.3)",
  overflow: "auto",
};

const HEADER_STYLE = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const BUTTON_STYLE = {
  cursor: "pointer",
  padding: "0.5em",
};

export default function Modal({ title, open, onClose, children }) {
  if (!open) return null;

  const closeButtonHandler = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div style={BACKDROP_STYLE}>
      <div style={CONTENT_STYLE}>
        <div style={HEADER_STYLE}>
          <h2>{title}</h2>
          <span style={BUTTON_STYLE} onClick={closeButtonHandler}>
            X
          </span>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
