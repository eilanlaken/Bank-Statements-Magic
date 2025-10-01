"use client";

export default function CSVList({ items }: { items: string[] }) {
  return (
    <div>
      <h4>Recent conversions:</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              alignItems: "center",
              marginBottom: 4,
              padding: 8,
            }}
          >
            <span style={{ textDecoration: "underline" }}>{item}</span>
            <button
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: 4,
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              Download
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
