# Joentvhuolto - React + Vite + TypeScript Project

Tämä on React-sovellus, joka käyttää Vite-kehityspalvelinta, TypeScriptiä ja Tailwind CSS:ää.

## Asennus ja käynnistys

### 1. Avaa projekti VS Codessa

**Vaihtoehto 1: Avaa workspace-tiedosto**
1. Avaa VS Code
2. Valitse `File > Open Workspace from File...`
3. Valitse `joentvhuolto-main.code-workspace` tiedosto

**Vaihtoehto 2: Avaa kansio suoraan**
1. Avaa VS Code
2. Valitse `File > Open Folder...`
3. Valitse `joentvhuolto-main` kansio

### 2. Asenna riippuvuudet

Jos riippuvuudet eivät ole vielä asennettu, suorita:

```bash
npm install
```

### 3. Käynnistä kehityspalvelin

```bash
npm run dev
```

Sovellus käynnistyy osoitteessa: `http://localhost:8080`

## VS Code -konfiguraatio

Projekti sisältää valmiit VS Code -konfiguraatiot:

### Tasks (Ctrl+Shift+P > Tasks: Run Task)
- **npm: dev** - Käynnistää kehityspalvelimen
- **npm: build** - Rakentaa tuotantoversion
- **npm: preview** - Esikatselupalvelin
- **npm: lint** - Suorittaa ESLint-tarkistuksen

### Debug-konfiguraatio (F5)
- **Launch Chrome** - Käynnistää Chrome-selaimen debug-tilassa
- **Attach to Chrome** - Liittää olemassa olevaan Chrome-prosessiin

## Käytettävät teknologiat

- **React 18** - UI-kirjasto
- **Vite** - Kehityspalvelin ja bundler
- **TypeScript** - Tyypitetty JavaScript
- **Tailwind CSS** - CSS-framework
- **Radix UI** - Komponenttikirjasto
- **Framer Motion** - Animaatiot
- **React Router** - Reititys
- **React Hook Form** - Lomakkeiden hallinta

## Projektin rakenne

```
joentvhuolto-main/
├── src/
│   ├── components/     # React-komponentit
│   ├── pages/         # Sivut
│   ├── hooks/         # Custom React-hookit
│   ├── lib/           # Apufunktiot
│   └── main.tsx       # Sovelluksen pääsyö
├── public/            # Staattiset tiedostot
├── .vscode/           # VS Code -konfiguraatio
└── package.json       # Projektin riippuvuudet
```

## Kehitystyökalut

### Suositellut VS Code -laajennukset
Projekti sisältää automaattiset suositukset seuraaville laajennuksille:
- Prettier (koodin muotoilu)
- ESLint (koodin laadun tarkistus)
- Tailwind CSS IntelliSense
- TypeScript ja JavaScript Language Features
- Auto Rename Tag
- Path Intellisense

### Käytettävät komennot

```bash
# Kehityspalvelin
npm run dev

# Tuotantoversion rakentaminen
npm run build

# Esikatselu tuotantoversion rakentamisesta
npm run preview

# Koodin laadun tarkistus
npm run lint
```

## Ongelmatilanteet

### Portti 8080 on varattu
Jos portti 8080 on jo käytössä, Vite käyttää automaattisesti seuraavaa vapaata porttia.

### Riippuvuuksien ongelmat
Jos kohtaat ongelmia riippuvuuksien kanssa:

```bash
# Poista node_modules ja package-lock.json
rm -rf node_modules package-lock.json

# Asenna uudelleen
npm install
```

### TypeScript-virheet
Jos näet TypeScript-virheitä, varmista että:
1. VS Code käyttää oikeaa TypeScript-versiota (`Ctrl+Shift+P > TypeScript: Select TypeScript Version`)
2. Valitse "Use Workspace Version"

## Lisätietoja

- [Vite dokumentaatio](https://vitejs.dev/)
- [React dokumentaatio](https://react.dev/)
- [Tailwind CSS dokumentaatio](https://tailwindcss.com/)
- [Radix UI dokumentaatio](https://www.radix-ui.com/)