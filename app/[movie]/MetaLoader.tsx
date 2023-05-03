"use client";

function MetaLoader() {
  return (
    <button
      onClick={() => {
        fetch("/api/hello")
          .then((r) => r.text())
          .then((d) => console.log(d));
      }}
    >
      MetaLoader
    </button>
  );
}

export default MetaLoader;
