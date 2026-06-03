# TALENS — Function "contact" (form → Discord)

Function serverless DigitalOcean che riceve la POST del form **Richiedi una demo**
e la inoltra a un canale Discord via webhook. Questa cartella **non fa parte del
sito statico**: va esclusa dall'upload del sito e deployata a parte con `doctl`.

## 1. Crea il webhook Discord

Nel server Discord: canale → ⚙️ *Modifica canale* → *Integrazioni* → *Webhook* →
*Nuovo webhook* → copia l'URL.

## 2. Configura l'ambiente

```
copy .env.example .env
```

e incolla l'URL del webhook in `.env` (il file è gitignorato).

## 3. Deploy

Prerequisiti (una tantum):

```
doctl serverless install
doctl serverless namespaces create --label talens --region fra1
doctl serverless connect
```

Deploy (da questa cartella):

```
doctl serverless deploy .
```

## 4. Collega il sito

Recupera l'URL pubblico della function:

```
doctl serverless functions get talens/contact --url
```

e incollalo in `js/talens.js` nella costante `CONTACT_ENDPOINT`.

## Note

- `web: true` → l'endpoint è pubblico e la piattaforma gestisce da sola il
  preflight CORS (OPTIONS); la function aggiunge `Access-Control-Allow-Origin: *`
  alle risposte.
- Anti-spam: campo honeypot `website` (se compilato, la richiesta viene
  scartata con finto successo) + validazione email lato server.
- Per testare in locale: `doctl serverless functions invoke talens/contact -p email:test@example.com`
