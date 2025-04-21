// Načteme potřebné balíčky
const express = require("express"); // Webový server
const cors = require("cors"); // Aby frontend mohl s backendem komunikovat bez výkřiků browseru
const axios = require("axios"); // Pro budoucí API volání (např. OpenAI)

// Vytvoříme aplikaci (server)
const app = express();

// Zapneme CORS = povolí přístup z frontendu
app.use(cors());

// Řekneme serveru, aby zpracovával JSON v těle požadavku
app.use(express.json());

// Endpoint, na který frontend pošle zprávu
app.post("/api/chat", async (req, res) => {
  const { message } = req.body; // Získáme text od uživatele

  try {
    // ⚠️ Tohle je dočasná odpověď – zatím neděláme volání do reálného API
    const response = {
      data: {
        reply: `Odpověď AI: "${message}"? To je otázka, na kterou ani Bůh nemá trpělivost.`,
      },
    };

    // Vrátíme odpověď zpět do frontendu
    res.json(response.data);
  } catch (err) {
    // Když se něco pokazí, dáme vědět
    console.error("Chyba v backendu:", err.message);
    res.status(500).json({ error: "Backend se rozplakal." });
  }
});

// Spustíme server na portu 3001
app.listen(3001, () => {
  console.log("🎧 Backend běží na http://localhost:3001");
});
