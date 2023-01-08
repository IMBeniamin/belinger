const api = {
  url: import.meta.env.PROD
    ? "https://belingapi.imben.it/api/v1"
    : "http://localhost:8000/api/v1",
};
export { api };
