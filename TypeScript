import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import cors from "cors";
import yahooFinance from "yahoo-finance2";

const yf = new (yahooFinance as any)();

const normalizeTicker = (ticker: string) => ticker.replace(/\./g, "-");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/stock/:ticker", async (req, res) => {
    try {
      const ticker = normalizeTicker(req.params.ticker);
      const [quote, summary] = await Promise.all([
        yf.quote(ticker),
        (yf.quoteSummary(ticker, { modules: ["assetProfile"] }) as any).catch(() => null)
      ]);

      if (!quote) return res.status(404).json({ error: "Stock not found" });

      res.json({
        ...(quote as any),
        longBusinessSummary: summary?.assetProfile?.longBusinessSummary || null
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  app.get("/api/history/:ticker", async (req, res) => {
    try {
      const ticker = normalizeTicker(req.params.ticker);
      const end = new Date();
      const start = new Date();
      start.setFullYear(end.getFullYear() - 1);

      const result = await yf.historical(ticker, {
        period1: start,
        period2: end,
        interval: "1d",
      });
      res.json(result);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => res.sendFile(path.join(distPath, "index.html")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
