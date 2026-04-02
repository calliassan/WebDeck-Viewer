import { useState } from "react";

const Viewer = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="viewer">
      {loading && <div className="loader">Loading...</div>}

      {error && <div className="error">Failed to load website</div>}

      <iframe
        src={url}
        title="viewer"
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />

      <p>
        If not loading,{" "}
        <a href={url} target="_blank" rel="noreferrer">
          open in new tab
        </a>
      </p>
    </div>
  );
};

export default Viewer;
