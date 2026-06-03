/* =========================================================================
   TALENS — demo request relay
   DigitalOcean Function (web: true): riceve la POST del form "Richiedi una
   demo" e la inoltra a un canale Discord tramite webhook.
   ========================================================================= */
"use strict";

var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clip(v, max) { return String(v == null ? "" : v).trim().slice(0, max); }

function reply(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  };
}

exports.main = async function (args) {
  var method = String(args.__ow_method || "").toUpperCase();
  if (method === "OPTIONS") return reply(204, "");
  if (method !== "POST") return reply(405, { ok: false, error: "method_not_allowed" });

  /* Honeypot: i bot compilano anche il campo nascosto — finto successo e scarto. */
  if (clip(args.website, 10)) return reply(200, { ok: true });

  var email = clip(args.email, 320);
  if (!EMAIL_RE.test(email)) return reply(400, { ok: false, error: "invalid_email" });

  var webhook = process.env.DISCORD_WEBHOOK_URL;
  if (!webhook) return reply(500, { ok: false, error: "not_configured" });

  var fields = [
    { name: "Email", value: email },
    { name: "Nome", value: clip(args.name, 200) || "—", inline: true },
    { name: "Società", value: clip(args.company, 200) || "—", inline: true }
  ];
  var message = clip(args.message, 1024); /* limite Discord per field value */
  if (message) fields.push({ name: "Messaggio", value: message });

  var res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "TALENS",
      embeds: [{
        title: "📩 Nuova richiesta demo",
        color: 0x2563eb,
        fields: fields,
        timestamp: new Date().toISOString()
      }]
    })
  });

  if (!res.ok) return reply(502, { ok: false, error: "discord_error" });
  return reply(200, { ok: true });
};
