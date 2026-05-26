/**
 * Gallery dataset — vintage calisthenics & physical culture archive.
 *
 * Each entry holds the image path (under /public/images/...) and a short
 * Italian description that runs alongside it in the homepage gallery.
 *
 * All descriptions are written in the spirit of @vintage_calisthenics:
 * concise, historical, lightly poetic.
 *
 * Years/eras are best-effort historical context; image licensing comes from
 * Wikimedia Commons public-domain entries or Francesco's own Instagram posts
 * (folder: francesco-ig).
 */

export type GalleryCategory =
  | 'francesco'
  | 'strongmen'
  | 'gymnastics'
  | 'indian-clubs'
  | 'outdoor'
  | 'drawings'
  | 'magazines';

export interface GalleryItem {
  /** Path under /public — absolute web path */
  src: string;
  /** Title (used as image alt and overlay heading) */
  title: string;
  /** Short Italian description (1-3 sentences) */
  description: string;
  /** Era label (e.g. "1894", "anni '70", "1902") */
  era?: string;
  /** Source attribution shown in modal */
  source?: string;
  /** Visual category for filtering */
  category: GalleryCategory;
  /** Mark a few items as featured for the hero rotation */
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // ------------- Francesco's own Instagram posts -------------
  {
    src: '/images/francesco-ig/sigmund-klein-1.png',
    title: 'Sigmund Klein',
    era: 'anni Trenta',
    description:
      "La storia di Sigmund Klein, uno dei maestri silenziosi della cultura fisica del primo Novecento. Forza, equilibrio e proporzioni: la sua palestra a New York fu un laboratorio di rigore.",
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/sigmund-klein-2.png',
    title: 'Klein — il metodo',
    era: 'anni Trenta',
    description:
      "Il lavoro a corpo libero come strumento di disciplina del carattere. Klein insegnava che la postura precede il sollevamento, e che la pazienza precede la forza.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-1.png',
    title: 'Amburgo, 1902',
    era: '1902',
    description:
      "Strutture esterne della società ginnica St. Pauli. L'allenamento ginnico avanzato si svolgeva all'aperto, indipendentemente dalle condizioni atmosferiche.",
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-2.png',
    title: "Hamburg — sbarra all'aperto",
    era: '1902',
    description:
      "Un atleta in volo sulla sbarra fissa. La scena fissa un'epoca in cui la ginnastica era un fatto pubblico, civile, urbano.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-3.png',
    title: 'Hamburg — la scuola tedesca',
    era: '1902',
    description:
      "Il Turnverein come istituzione: ordine, ripetizione, comunità. Le strutture in legno e ferro venivano montate stagionalmente nei cortili delle scuole.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-4.png',
    title: 'Hamburg — il gruppo',
    era: '1902',
    description:
      "L'allenamento collettivo era un atto civico: ginnastica come ginnastica della cittadinanza, prima ancora che del corpo.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-1.png',
    title: 'Planche — Londra 1908',
    era: '1908',
    description:
      "Olimpiadi di Londra. La planche è già una statua vivente: tutto il peso del corpo distribuito su due punti, sospeso nell'aria orizzontale.",
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-2.png',
    title: 'Londra 1908 — anelli',
    era: '1908',
    description:
      "Gli anelli, il banco di prova più antico del controllo del corpo. Il silenzio prima dell'esecuzione vale quanto l'esecuzione stessa.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-3.png',
    title: 'Londra 1908 — sbarra',
    era: '1908',
    description:
      "Un atleta in posizione di leva. Le tute lunghe, le scarpe leggere: l'eleganza era parte del gesto sportivo.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-4.png',
    title: 'Londra 1908 — la squadra',
    era: '1908',
    description:
      "La squadra ginnica fotografata in posa ufficiale. L'idea moderna di atleta nasceva qui: rigore della forma, identità di gruppo.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-5.png',
    title: 'Londra 1908 — combinata',
    era: '1908',
    description:
      "La ginnastica combinata, con corpo libero, attrezzi e marcia, era il vero termometro della cultura fisica di un Paese.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-1.png',
    title: 'Trazione a un braccio',
    era: "fine anni '60",
    description:
      "Allenamento outdoor essenziale: una sbarra, un atleta, una sola spalla. Niente attrezzi, solo gravità — la forma più pura della calisthenia.",
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-2.png',
    title: 'Outdoor essenziale',
    era: "fine anni '60",
    description:
      "Lo sfondo è anonimo, il gesto è universale. Una generazione cresce con la convinzione che il corpo si educa fuori, non al chiuso.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-3.png',
    title: 'La trazione come misura',
    era: "fine anni '60",
    description:
      "Il pull-up a un braccio resta uno dei test più severi della forza relativa. È anche il punto in cui la tecnica diventa indistinguibile dal carattere.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-4.png',
    title: 'Tensione e calma',
    era: "anni '70",
    description:
      "Il volto fermo, il respiro lento, la presa decisa. Tre cose che valgono più di qualsiasi programma scritto.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-5.png',
    title: 'La sbarra è ovunque',
    era: "anni '70",
    description:
      "Parchi, cantieri, cortili: la cultura calistenica degli anni Settanta non aspettava l'attrezzo, lo trovava.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-cover.png',
    title: 'P.E., Inghilterra anni \'70',
    era: "anni '70",
    description:
      "L'ora di Educazione Fisica era sinonimo di rigore e semplicità. Una palestra spoglia, una corda da arrampicata, e tutti a piedi nudi.",
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-1.png',
    title: 'P.E. — corda e cavallina',
    era: "anni '70",
    description:
      "L'arrampicata sulla fune e il cavallo erano test di passaggio. Insegnavano un principio scomparso: il corpo si fida solo della propria forza.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-2.png',
    title: 'P.E. — la squadra',
    era: "anni '70",
    description:
      "Bambini in fila per la lezione. L'estetica disadorna delle scuole britanniche ha allevato generazioni di atleti perché non offriva scorciatoie.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-3.png',
    title: 'P.E. — al chiuso',
    era: "anni '70",
    description:
      "Le travi sospese al soffitto sostituivano i moderni rig. Stesso principio: appendersi, salire, scendere lentamente.",
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-4.png',
    title: "P.E. — l'apprendimento",
    era: "anni '70",
    description:
      "Il maestro mostra, l'allievo prova. Una pedagogia del corpo che non aveva ancora bisogno di video, app o spiegazioni.",
    category: 'francesco',
  },

  // ------------- Strongmen (Wikimedia PD) -------------
  {
    src: '/images/vintage/strongmen/sandow-portrait-1894.jpg',
    title: 'Eugen Sandow',
    era: 'c. 1894',
    description:
      "Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone laiche di un'estetica nuova: il corpo allenato, codificato, esibito.",
    source: 'Wikimedia Commons / Library of Congress (PD)',
    category: 'strongmen',
    featured: true,
  },
  {
    src: '/images/vintage/strongmen/sandow-aged-52.jpg',
    title: 'Sandow a 52 anni',
    era: 'c. 1919',
    description:
      "La maturità del fondatore. La stessa silhouette dei suoi vent'anni — frutto di una pratica continua, non di una giovinezza miracolosa.",
    source: 'Wellcome Collection L0034497 (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-wellcome-l0033351.jpg',
    title: 'Sandow — studio',
    era: 'fine Ottocento',
    description:
      "Lo studio fotografico come palestra di posa. Sandow trasformò la performance ginnica in immagine: ogni muscolo era titolo, ogni titolo era una vendita.",
    source: 'Wellcome Collection L0033351 (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-a-new-sandow-pose-vii-eugen-sandow-wellcome-l0035269.jpg',
    title: 'New Sandow Pose VII',
    era: 'c. 1900',
    description:
      "Una delle sequenze fotografiche con cui Sandow insegnava per corrispondenza. La pedagogia del corpo arrivava per posta.",
    source: 'Wellcome L0035269 (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-a-new-sandow-pose-viii-eugen-sandow-wellcome-l0035270.jpg',
    title: 'New Sandow Pose VIII',
    era: 'c. 1900',
    description:
      "Posa numero otto della stessa serie. La ripetizione, il numero, la sequenza: il primo manuale moderno di body-building.",
    source: 'Wellcome L0035270 (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-a-new-sandow-pose-viii-eugen-sandow-wellcome-l0035270-restoration.jpg',
    title: 'Sandow — restauro',
    era: 'c. 1900',
    description:
      "Restauro fotografico moderno. L'archivio della cultura fisica continua a vivere grazie a chi lo cura.",
    source: 'Wellcome L0035270 — restored (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-033-brookes-sandow-c-1900.jpg',
    title: 'Sandow & Brookes',
    era: 'c. 1900',
    description:
      "Sandow accanto a uno dei suoi mecenati e collaboratori. Il primo professionista della forma fisica costruì anche la prima rete d'affari attorno a essa.",
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-daily-mirror-2july1904.jpg',
    title: 'Georg Hackenschmidt',
    era: '1904',
    description:
      "Il Leone Russo, primo campione mondiale di lotta professionistica e teorico della forza. Le sue spalle furono per decenni il riferimento iconografico del lottatore.",
    source: 'Daily Mirror, 2 luglio 1904 (PD)',
    category: 'strongmen',
    featured: true,
  },
  {
    src: '/images/vintage/strongmen/macfadden-strength-from-eating-frontispiece.jpg',
    title: 'Bernarr Macfadden',
    era: 'c. 1900',
    description:
      "L'apostolo americano della cultura fisica. Fondò la rivista Physical Culture nel 1899 e cambiò per sempre il modo in cui l'Occidente parlò del corpo.",
    source: '«Strength from Eating» — frontespizio (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-harvard-theatre-collection-bernarr-macfadden-tcs-1-2397.jpg',
    title: 'Macfadden in posa',
    era: 'c. 1903',
    description:
      "L'editore che esibiva ciò che predicava. La sua immagine pubblicitaria conteneva tutto il messaggio: il maestro deve essere visibilmente vivo.",
    source: 'Harvard Theatre Collection (PD)',
    category: 'strongmen',
  },

  // ------------- Gymnastics -------------
  {
    src: '/images/vintage/gymnastics/artistic-gymnastics-vintage-gym-combination.jpg',
    title: 'Combinata ginnica',
    era: 'inizio Novecento',
    description:
      "Esercizio di combinata. La ginnastica artistica nasce come prova di completezza: forza, agilità, controllo, eleganza.",
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/artistic-gymnastics-vintage-gym-combination-2.jpg',
    title: 'Gymnastik — esercizio',
    era: 'inizio Novecento',
    description:
      "La parola tedesca Gymnastik designava una totalità: il lavoro sul corpo come educazione del carattere.",
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/artistic-gymnastics-vintage-gym-combination1.jpg',
    title: 'Esercizio dimostrativo',
    era: 'inizio Novecento',
    description:
      "Una posa di chiusura. Nella ginnastica classica il finale aveva la stessa importanza dell'inizio.",
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/artistic-gymnastics-vintage-stefanopatron.jpg',
    title: 'Patron',
    era: 'inizio Novecento',
    description:
      "Il ginnasta come patrono di una disciplina pubblica. La fotografia ginnica era documento e propaganda al tempo stesso.",
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },

  // ------------- Indian clubs -------------
  {
    src: '/images/vintage/indian-clubs/indian-clubs-carlisle-students-in-school-uniform-exercising-inside-gymnas.jpg',
    title: 'Carlisle, 1879',
    era: '1879',
    description:
      "Studenti in uniforme con clave indiane (Indian clubs). L'allenamento mobilitava spalle, schiena e polsi in modo che ancora oggi nessun attrezzo replica con la stessa eleganza.",
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
    featured: true,
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cartedevisitesimdkehoelate1800s.jpg',
    title: 'S.D. Kehoe',
    era: 'fine Ottocento',
    description:
      "Carte de visite di Simon D. Kehoe, autore di uno dei primi manuali fotografici di esercizio con le clave (1866).",
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-champeen-indian-club-swinger-washington-d-c-sept-13-after-35.jpg',
    title: 'Campione di club swinging',
    era: 'inizio Novecento',
    description:
      "Washington D.C., dopo 35 minuti consecutivi: il club swinging era anche sport di resistenza. I record si misuravano in minuti e ripetizioni.",
    source: 'Library of Congress / Wikimedia (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-1889-poster-for-health-literacy-month-15353598361.jpg',
    title: 'Manifesto del 1889',
    era: '1889',
    description:
      "Manifesto del XIX secolo per la diffusione dell'esercizio con le clave. La salute pubblica si insegnava con la grafica e con il corpo.",
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-drills-hand-grenade-instruction-a-member-of-the-hollywood-of.jpg',
    title: 'Drill con la clava',
    era: 'inizio Novecento',
    description:
      "L'esercizio collettivo con le clave. Le scuole americane lo usavano per insegnare coordinazione di gruppo e disciplina del movimento.",
    source: 'Library of Congress (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-stereoscopic-case-partially-nude-strongman-holding-indian-cl.jpg',
    title: 'Atleta con clave',
    era: 'fine Ottocento',
    description:
      "Foto stereoscopica d'epoca. Le clave erano insegna dello strongman come la barra lo è oggi del calistenico.",
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/clubs-soviet.jpg',
    title: 'Clave sovietiche',
    era: 'metà Novecento',
    description:
      "Produzione moscovita di clave indiane. La tradizione attraversa i continenti e i regimi: il gesto resta lo stesso.",
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },

  // ------------- New PD additions (Sandow magazine + Turners) -------------
  {
    src: '/images/vintage/strongmen/sandow-mag-photograph-of-eugen-sandow-instructing-bendig.jpg',
    title: 'Sandow istruisce a Bendigo',
    era: '1902',
    description:
      "Sandow durante una dimostrazione a Bendigo, Australia. La sua tournée mondiale insegnò a un'intera generazione la disciplina del corpo come fatto pubblico.",
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-mag-sandow-and-fire-brigade-fitness-drill-wellcom.jpg',
    title: 'Sandow con i vigili del fuoco',
    era: 'c. 1902',
    description:
      "Esercitazione di forma fisica con un corpo dei vigili del fuoco. La calistenia entrava nelle istituzioni: pompieri, polizia, esercito.",
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/magazines/physical-culture-sandow-and-fire-brigade-fitness-drill-wellcom.jpg',
    title: 'Sandow\'s Magazine — istruzione collettiva',
    era: 'c. 1902',
    description:
      "Una pagina del Sandow's Magazine of Physical Culture. Le sequenze fotografiche andavano stampate, distribuite e seguite a casa.",
    source: 'Sandow\'s Magazine of Physical Culture / Wellcome (PD)',
    category: 'magazines',
  },
  {
    src: '/images/vintage/magazines/physical-culture-sandow-instructing-a-boy-s-institute-adelaide.jpg',
    title: 'Adelaide — Boys\' Institute',
    era: 'c. 1902',
    description:
      "Sandow istruisce gli allievi di un Boys' Institute di Adelaide. L'educazione fisica come servizio sociale, un secolo prima delle palestre commerciali.",
    source: 'Sandow\'s Magazine / Wellcome (PD)',
    category: 'magazines',
  },
  {
    src: '/images/vintage/outdoor/turners-festival-gymnaestrada-d-monstration-de-grand-groupe.jpg',
    title: 'Turners Festival — grande gruppo',
    era: 'metà Novecento',
    description:
      "Dimostrazione collettiva del movimento Turners (Turnverein). La sincronia di centinaia di corpi era prova civica di un Paese che si manteneva sano.",
    source: 'Wikimedia Commons (PD)',
    category: 'outdoor',
  },

  // ------------- Optional standalone untitled poster (Francesco IG) -------------
  {
    src: '/images/francesco-ig/untitled-project-12.png',
    title: 'Vintage Calisthenics',
    description:
      "Manifesto contemporaneo della tradizione calistenica. Le radici sono lunghe; il presente le rinnova.",
    category: 'francesco',
  },
];

export const featuredItems = galleryItems.filter((g) => g.featured);

export const itemsByCategory = (cat: GalleryCategory) =>
  galleryItems.filter((g) => g.category === cat);
