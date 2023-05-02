import ReactDOM from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
}

function Popup({ open, onClose }: Props) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className="popup-container" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <h1>
          Testimonial sent! Thank you. <span>🌹</span>
        </h1>
        <button className="remove-popup" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("portal")!
  );
}

export default Popup;
