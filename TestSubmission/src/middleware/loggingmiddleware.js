export const logEvent = (eventType, data) => {
  const log = {
    timestamp: new Date().toISOString(),
    eventType,
    data,
  };
  
  // Example: Send to backend logging API or local storage
  // For test purpose, let's just store logs in localStorage
  const existing = JSON.parse(localStorage.getItem("logs") || "[]");
  existing.push(log);
  localStorage.setItem("logs", JSON.stringify(existing));
};
