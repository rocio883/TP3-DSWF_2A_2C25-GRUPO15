import { useState, useEffect } from "react";
import "../styles/style.css";
import React from "react";
import Gallery from "./gallery/Gallery";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8; // 8 personajes por página → 2 filas de 4
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [setError] = useState(null);

  // ✅ Array de imágenes para la galería
  const galleryImages = [
    { url: "/images/1.jpg", thumbnailUrl: "/images/1.jpg", alt: "Logo1", title: "Logo 1" },
    { url: "/images/2.jpg", thumbnailUrl: "/images/2.jpg", alt: "Logo2", title: "Logo 2" },
    { url: "/images/3.jpg", thumbnailUrl: "/images/3.jpg", alt: "Logo3", title: "Logo 3" },
    { url: "/images/4.jpg", thumbnailUrl: "/images/4.jpg", alt: "Logo4", title: "Logo 4" },
    // agregá más imágenes según necesites
  ];

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters");
        const data = await res.json();
        setTotalPages(Math.ceil(data.length / limit));
        const start = (page - 1) * limit;
        const end = start + limit;
        setCharacters(data.slice(start, end));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, setError]);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages));
  const prevPage = () => setPage((p) => Math.max(p - 1, 1));

  return (
    <section className="characters-section">
      <h2>PERSONAJES DE GAME OF THRONES</h2>
      <p className="characters-intro">
        Data obtenida de la API pública <strong>"Game of Thrones Character Api"</strong>
      </p>

      {/* Controles de paginación arriba */}
      <div className="pagination-controls top-controls">
        <button className="pagination-btn" onClick={prevPage} disabled={page === 1}>
          ◀ Anterior
        </button>
        <span className="pagination-info">
          Página {page} / {totalPages}
        </span>
        <button className="pagination-btn" onClick={nextPage} disabled={page === totalPages}>
          Siguiente ▶
        </button>
      </div>

      {loading ? (
        <p className="loading">Cargando personajes...</p>
      ) : (
        <>
          {/* Grid de personajes */}
          <div className="characters-grid">
            {characters.map((char) => (
              <div key={char.id} className="character-card">
                <div className="character-image">
                  <img
                    src={char.imageUrl}
                    alt={char.fullName}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                    }}
                  />
                </div>
                <div className="character-info">
                  <h3>{char.fullName}</h3>
                  <p>
                    <strong>Título:</strong> {char.title || "Sin título"}
                  </p>
                  <p>
                    <strong>Familia:</strong> {char.family || "Desconocida"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controles de paginación abajo */}
          <div className="pagination-controls bottom-controls">
            <button className="pagination-btn" onClick={prevPage} disabled={page === 1}>
              ◀ Anterior
            </button>
            <span className="pagination-info">
              Página {page} / {totalPages}
            </span>
            <button className="pagination-btn" onClick={nextPage} disabled={page === totalPages}>
              Siguiente ▶
            </button>
          </div>

          {/* === Sección de Galería === */}
          <section className="gallerySection">
            <h2>Galería de Imágenes</h2>
            <Gallery images={galleryImages} />
          </section>
        </>
      )}
    </section>
  );
}

export default Characters;
