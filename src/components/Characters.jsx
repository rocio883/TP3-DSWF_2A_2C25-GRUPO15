import { useState, useEffect } from "react";
import "../styles/style.css";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 8; // 8 personajes por página → 2 filas de 4
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [setError] = useState(null);

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
        Data obtenida de la API pública{" "}
        <strong>"Game of Thrones Character Api"</strong>
      </p>

      {/* ✅ Controles arriba */}
      <div className="pagination-controls top-controls">
        <button
          className="pagination-btn"
          onClick={prevPage}
          disabled={page === 1}
        >
          ◀ Anterior
        </button>

        <span className="pagination-info">
          Página {page} / {totalPages}
        </span>

        <button
          className="pagination-btn"
          onClick={nextPage}
          disabled={page === totalPages}
        >
          Siguiente ▶
        </button>
      </div>

      {loading ? (
        <p className="loading">Cargando personajes...</p>
      ) : (
        <>
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

          {/* ✅ Controles abajo */}
          <div className="pagination-controls bottom-controls">
            <button
              className="pagination-btn"
              onClick={prevPage}
              disabled={page === 1}
            >
              ◀ Anterior
            </button>

            <span className="pagination-info">
              Página {page} / {totalPages}
            </span>

            <button
              className="pagination-btn"
              onClick={nextPage}
              disabled={page === totalPages}
            >
              Siguiente ▶
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Characters;
