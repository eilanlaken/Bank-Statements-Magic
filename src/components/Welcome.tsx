import { FcGoogle } from "react-icons/fc";
import { AiOutlineFilePdf, AiOutlineFileExcel } from "react-icons/ai";
import { GiToken } from "react-icons/gi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function Welcome() {
  const bulletStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem",
    gap: "0.75rem",
    fontSize: "1.1rem",
  };

  const iconStyle: React.CSSProperties = {
    width: "24px",
    height: "24px",
    flexShrink: 0,
  };

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        maxWidth: 800,
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Bank Statements Magic
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Convert PDF bank statements to Excel spreadsheets in 1 click.
      </p>

      <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem" }}>
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          <li style={bulletStyle}>
            <FcGoogle style={iconStyle} />
            Log in with your Gmail account (we won’t spam you, only notify for
            actions)
          </li>
        </div>

        <AiOutlineArrowDown
          style={{ fontSize: "1.5rem", margin: "0.5rem 0", color: "#999" }}
        />

        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          <li style={bulletStyle}>
            <GiToken style={{ ...iconStyle, color: "gold" }} />
            You get 10 free tokens so you can start converting{" "}
            <b>immediately</b>
          </li>
        </div>
        <AiOutlineArrowDown
          style={{ fontSize: "1.5rem", margin: "0.5rem 0", color: "#999" }}
        />

        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          <li style={bulletStyle}>
            <AiOutlineFilePdf style={{ ...iconStyle, color: "#E53E3E" }} />{" "}
            {/* PDF red */}
            <AiOutlineFileExcel
              style={{ ...iconStyle, color: "#2E7D32" }}
            />{" "}
            {/* Excel green */}
            Convert PDF → Excel, 1 token = 1 page
          </li>
        </div>
        <AiOutlineArrowDown
          style={{ fontSize: "1.5rem", margin: "0.5rem 0", color: "#999" }}
        />
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "#f5f5f5",
            padding: "1rem 1.5rem",
            borderRadius: "8px",
            textAlign: "center",
            marginBottom: "0.5rem",
          }}
        >
          <li style={bulletStyle}>
            <MdOutlineShoppingCart style={{ ...iconStyle, color: "#4CAF50" }} />
            Buy tokens, <b>no subscriptions</b>
          </li>
        </div>
      </ul>
    </div>
  );
}
