import { useNavigate } from "react-router";

export default function DesaHome() {
  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/images/desa/village2.jpg')`,
        backgroundSize: "fit-cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center px-6 text-center">
        <div className="text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Dashboard Desa
          </h1>
          <p className="text-white/80 mb-6">
            sebuah platform digital yang membantu pemerintah desa memantau,
            mengelola, dan menganalisis data pembangunan desa secara terpusat.
            Dari administrasi penduduk, keuangan, hingga program pemberdayaan
            masyarakat — semua dapat diakses dalam satu tampilan yang mudah dan
            transparan.
          </p>
          <div className="flex space-x-3 justify-center">
            <button
              onClick={() => navigate("/products")}
              className="bg-white text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
