import * as Icons from "./../icons";

export default function IconPreview() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)",
        gap: "16px",
      }}
    >
      {Object.entries(Icons).map(([name, Icon]) => (
        <div key={name} style={{ textAlign: "center" }}>
          <Icon width={32} height={32} />
          <div style={{ fontSize: "12px", marginTop: "4px" }}>{name}</div>
        </div>
      ))}
    </div>
  );
}
