"use strict";
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = Object.fromEntries(new FormData(event.target));
  const payload = { schemaVersion: 1, status: "input-only", fields };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "waybill-input.json";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.getElementById("status").textContent = "Подготовлен JSON с исходными данными. Заполненный бланк пока не создаётся.";
});
