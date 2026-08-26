function App() {
  function ProductCard() {
    return (
      <div
        style={{
          width: "300px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#252525",
          color: "white",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.5)",
          transition: "transform 0.3s ease",
        }}
      >
        <img
          src="https://imgd.aeplcdn.com/664x374/cw/ec/20361/Nissan-GTR-Front-view-84914.jpg?v=201711021421&q=80"
          alt="Nissan GTR"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            padding: "20px",
            backgroundColor: "#2d2d2d",
          }}
        >
          <h2
            style={{
              margin: "0 0 12px 0",
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Nissan GTR
          </h2>

          <h3
            style={{
              margin: "8px 0",
              color: "#4ade80",
              fontSize: "20px",
            }}
          >
            Price: ₹1
          </h3>

          <h3
            style={{
              margin: "8px 0 0 0",
              color: "#d1d5db",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Quantity: 1
          </h3>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "40px",
        background:
          "linear-gradient(135deg, #111827 0%, #1e293b 50%, #312e81 100%)",
      }}
    >
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default App;