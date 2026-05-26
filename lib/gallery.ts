/**
 * Gallery dataset — vintage calisthenics & physical culture archive.
 * Auto-curated from Wikimedia / Wellcome / Library of Congress + Francesco's IG.
 * Italian descriptions in the @vintage_calisthenics voice.
 */

export type GalleryCategory =
  | 'francesco'
  | 'strongmen'
  | 'gymnastics'
  | 'indian-clubs'
  | 'calisthenics'
  | 'outdoor'
  | 'drawings'
  | 'magazines';

export interface GalleryItem {
  src: string;
  title: string;
  description: string;
  era?: string;
  source?: string;
  category: GalleryCategory;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // ------------- Francesco's own Instagram posts -------------
  {
    src: '/images/francesco-ig/sigmund-klein-1.png',
    title: 'Sigmund Klein',
    era: 'anni Trenta',
    description:
      'La storia di Sigmund Klein, uno dei maestri silenziosi della cultura fisica del primo Novecento. Forza, equilibrio e proporzioni: la sua palestra a New York fu un laboratorio di rigore.',
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/sigmund-klein-2.png',
    title: 'Klein — il metodo',
    era: 'anni Trenta',
    description:
      'Il lavoro a corpo libero come strumento di disciplina del carattere. Klein insegnava che la postura precede il sollevamento.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-1.png',
    title: 'Amburgo, 1902',
    era: '1902',
    description:
      'Strutture esterne della società ginnica St. Pauli. L\'allenamento ginnico avanzato si svolgeva all\'aperto, indipendentemente dalle condizioni atmosferiche.',
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-2.png',
    title: 'Hamburg — sbarra all\'aperto',
    era: '1902',
    description:
      'Un atleta in volo sulla sbarra fissa. La scena fissa un\'epoca in cui la ginnastica era un fatto pubblico, civile, urbano.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-3.png',
    title: 'Hamburg — la scuola tedesca',
    era: '1902',
    description:
      'Il Turnverein come istituzione: ordine, ripetizione, comunità. Le strutture in legno e ferro venivano montate stagionalmente nei cortili delle scuole.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/hamburg-st-pauli-1902-4.png',
    title: 'Hamburg — il gruppo',
    era: '1902',
    description:
      'L\'allenamento collettivo era un atto civico: ginnastica come ginnastica della cittadinanza, prima ancora che del corpo.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-1.png',
    title: 'Planche — Londra 1908',
    era: '1908',
    description:
      'Olimpiadi di Londra. La planche è già una statua vivente: tutto il peso del corpo distribuito su due punti, sospeso nell\'aria orizzontale.',
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-2.png',
    title: 'Londra 1908 — anelli',
    era: '1908',
    description:
      'Gli anelli, il banco di prova più antico del controllo del corpo. Il silenzio prima dell\'esecuzione vale quanto l\'esecuzione stessa.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-3.png',
    title: 'Londra 1908 — sbarra',
    era: '1908',
    description:
      'Un atleta in posizione di leva. Le tute lunghe, le scarpe leggere: l\'eleganza era parte del gesto sportivo.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-4.png',
    title: 'Londra 1908 — la squadra',
    era: '1908',
    description:
      'La squadra ginnica fotografata in posa ufficiale. L\'idea moderna di atleta nasceva qui: rigore della forma, identità di gruppo.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/london-olympics-1908-5.png',
    title: 'Londra 1908 — combinata',
    era: '1908',
    description:
      'La ginnastica combinata, con corpo libero, attrezzi e marcia, era il vero termometro della cultura fisica di un Paese.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-1.png',
    title: 'Trazione a un braccio',
    era: 'fine anni \'60',
    description:
      'Allenamento outdoor essenziale: una sbarra, un atleta, una sola spalla. Niente attrezzi, solo gravità — la forma più pura della calistenia.',
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-2.png',
    title: 'Outdoor essenziale',
    era: 'fine anni \'60',
    description:
      'Lo sfondo è anonimo, il gesto è universale. Una generazione cresce con la convinzione che il corpo si educa fuori, non al chiuso.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-3.png',
    title: 'La trazione come misura',
    era: 'fine anni \'60',
    description:
      'Il pull-up a un braccio resta uno dei test più severi della forza relativa.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-4.png',
    title: 'Tensione e calma',
    era: 'anni \'70',
    description:
      'Il volto fermo, il respiro lento, la presa decisa. Tre cose che valgono più di qualsiasi programma scritto.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/one-arm-pullup-late60s-early70s-5.png',
    title: 'La sbarra è ovunque',
    era: 'anni \'70',
    description:
      'Parchi, cantieri, cortili: la cultura calistenica degli anni Settanta non aspettava l\'attrezzo, lo trovava.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-cover.png',
    title: 'P.E., Inghilterra anni \'70',
    era: 'anni \'70',
    description:
      'L\'ora di Educazione Fisica era sinonimo di rigore e semplicità. Una palestra spoglia, una corda da arrampicata, e tutti a piedi nudi.',
    category: 'francesco',
    featured: true,
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-1.png',
    title: 'P.E. — corda e cavallina',
    era: 'anni \'70',
    description:
      'L\'arrampicata sulla fune e il cavallo erano test di passaggio.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-2.png',
    title: 'P.E. — la squadra',
    era: 'anni \'70',
    description:
      'Bambini in fila per la lezione. L\'estetica disadorna delle scuole britanniche ha allevato generazioni di atleti.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-3.png',
    title: 'P.E. — al chiuso',
    era: 'anni \'70',
    description:
      'Le travi sospese al soffitto sostituivano i moderni rig. Stesso principio: appendersi, salire, scendere lentamente.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/uk-physical-education-1970s-4.png',
    title: 'P.E. — l\'apprendimento',
    era: 'anni \'70',
    description:
      'Il maestro mostra, l\'allievo prova. Una pedagogia del corpo che non aveva ancora bisogno di video o app.',
    category: 'francesco',
  },
  {
    src: '/images/francesco-ig/untitled-project-12.png',
    title: 'Vintage Calisthenics',
    description:
      'Manifesto contemporaneo della tradizione calistenica. Le radici sono lunghe; il presente le rinnova.',
    category: 'francesco',
  },
  // ------------- Public-domain vintage archive (Wikimedia/Wellcome/LoC) -------------
  {
    src: '/images/vintage/calisthenics/calisthenics-cat-631136102-gra-8045.jpg',
    title: 'Atleta calistenico',
    description:
      'Ritratto moderno della tradizione calistenica.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/calisthenics-cat-adams-school-students-doing-exercises-seattle-ca-1911-m.jpg',
    title: 'Adams School, Seattle, 1911',
    era: '1911',
    description:
      'Studenti della Adams School di Seattle. La ginnastica come materia scolastica.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/calisthenics-cat-airplanes-miscellaneous-training-camp-activities-equili.jpg',
    title: 'Campo d\'addestramento aviatori',
    era: 'anni 1910',
    description:
      'Cultura fisica nei campi d\'addestramento dell\'aviazione, prima della Grande Guerra.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/calisthenics-cat-all-american-girls-professional-baseball-league-members.jpg',
    title: 'All-American Girls Baseball, anni \'40',
    era: 'anni \'40',
    description:
      'Le giocatrici della All-American Girls Professional Baseball League: forma fisica, disciplina, eleganza.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/calisthenics-cat-atleta-calistenia-mexico.jpg',
    title: 'Calistenia — Messico',
    description:
      'Atleta moderno nella tradizione calistenica messicana.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/calisthenics-cat-brooklyn-dodgers-spring-training-vero-beach-florida-713.jpg',
    title: 'Brooklyn Dodgers — spring training',
    era: 'anni \'40',
    description:
      'Allenamenti dei Brooklyn Dodgers a Vero Beach. Ginnastica generale prima della specializzazione sportiva.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/physical-education-00.jpg',
    title: 'Educazione fisica — d\'epoca',
    description:
      'Le scuole moderne hanno ereditato l\'attrezzistica dalla ginnastica tedesca del primo Novecento.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/physical-education-6-personnes-dans-une-cole-d-ducation-physique.jpg',
    title: 'Sei allievi — école d\'éducation physique',
    description:
      'Sei allievi in una scuola francese di educazione fisica. La pedagogia del corpo come architettura civile.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/physical-education-a-feature-on-schools-in-the-wrexham-area-18896618320.jpg',
    title: 'Scuole della contea di Wrexham',
    description:
      'Reportage sulle scuole della zona di Wrexham — il corpo si educava in aula come si educava la mente.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/physical-education-a-new-sandow-pose-vii-eugen-sandow-wellcome-l0035269-cr.jpg',
    title: 'Sandow — Posa VII',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wellcome Collection (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/physical-exercise-1831-roper-s-gymnasium-274-market-st-philadelphia.jpg',
    title: 'Roper\'s Gymnasium, Filadelfia, 1831',
    era: '1831',
    description:
      'Il Roper\'s Gymnasium di Filadelfia, 1831. Una delle prime palestre pubbliche d\'America.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/calisthenics/physical-exercise-207th-military-intelligence-brigade-conducts-lightning-.jpg',
    title: 'Esercitazione militare',
    description:
      'Calistenia militare contemporanea. La tradizione ginnica continua a passare per le caserme.',
    source: 'Wikimedia Commons (PD)',
    category: 'calisthenics',
  },
  {
    src: '/images/vintage/drawings/muller-ip-m-ller.jpg',
    title: 'J.P. Müller — «My System»',
    description:
      'Jørgen Peter Müller, ginnasta danese, scrisse «My System» (1904): quindici minuti al giorno, mai più. Vendette milioni di copie.',
    source: 'Wikimedia Commons (PD)',
    category: 'drawings',
    featured: true,
  },
  {
    src: '/images/vintage/drawings/muller-j-p-m-ller-s-children-ib-bror-and-per.jpg',
    title: 'J.P. Müller — «My System»',
    description:
      'Jørgen Peter Müller, ginnasta danese, scrisse «My System» (1904): quindici minuti al giorno, mai più. Vendette milioni di copie.',
    source: 'Wikimedia Commons (PD)',
    category: 'drawings',
  },
  {
    src: '/images/vintage/drawings/muller-j-p-m-ller.jpg',
    title: 'J.P. Müller — «My System»',
    description:
      'Jørgen Peter Müller, ginnasta danese, scrisse «My System» (1904): quindici minuti al giorno, mai più. Vendette milioni di copie.',
    source: 'Wikimedia Commons (PD)',
    category: 'drawings',
  },
  {
    src: '/images/vintage/drawings/muller-j-p-muller-my-system-15-minutes-wellcome-l0026309.jpg',
    title: 'J.P. Müller — «My System»',
    description:
      'Jørgen Peter Müller, ginnasta danese, scrisse «My System» (1904): quindici minuti al giorno, mai più. Vendette milioni di copie.',
    source: 'Wellcome Collection (PD)',
    category: 'drawings',
  },
  {
    src: '/images/vintage/gymnastics/artistic-gymnastics-vintage-gym-combination-2.jpg',
    title: 'Ginnastica artistica — combinata',
    description:
      'Esercizio di combinata. La ginnastica artistica nasce come prova di completezza: forza, agilità, controllo, eleganza.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/artistic-gymnastics-vintage-stefanopatron.jpg',
    title: 'Ginnastica artistica — combinata',
    description:
      'Esercizio di combinata. La ginnastica artistica nasce come prova di completezza: forza, agilità, controllo, eleganza.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1908-finland-gymnastic-team-event-1908-olympics.png',
    title: 'Finlandia, ginnastica 1908',
    era: '1908',
    description:
      'Le squadre olimpiche del 1908 a Londra. La ginnastica come prova nazionale: postura, ordine, sincronia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
    featured: true,
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1908-finland-team-event-gymnasts-1908.png',
    title: 'Finlandia, ginnastica 1908',
    era: '1908',
    description:
      'Le squadre olimpiche del 1908 a Londra. La ginnastica come prova nazionale: postura, ordine, sincronia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1908-l-quipe-de-france-de-gymnastique-lors-des-jo-de-1908.jpg',
    title: 'Francia, ginnastica 1908',
    era: '1908',
    description:
      'Le squadre olimpiche del 1908 a Londra. La ginnastica come prova nazionale: postura, ordine, sincronia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1908-london-1908-gymnastics-women.jpg',
    title: 'Donne ginnaste, Londra 1908',
    era: '1908',
    description:
      'Le squadre olimpiche del 1908 a Londra. La ginnastica come prova nazionale: postura, ordine, sincronia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1912-5th-olympic-games-1912-stockholm-sfa222004383.jpg',
    title: 'Stoccolma 1912',
    era: '1912',
    description:
      'V Olimpiade — Stoccolma. La Svezia aveva codificato la propria scuola di ginnastica decenni prima.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1920-l-quipe-fran-aise-de-gymnastique-sans-ou-avec-agr-s-tro.jpg',
    title: 'Anversa 1920',
    era: '1920',
    description:
      'La squadra francese di ginnastica alle Olimpiadi del 1920. Dopo la Grande Guerra, il corpo torna a essere materia di studio.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1928-de-nederlandse-dames-turnploeg-en-het-military-team-sta.jpg',
    title: 'Amsterdam 1928 — Olanda',
    era: '1928',
    description:
      'Le Olimpiadi del 1928. La ginnastica artistica come disciplina nazionale: squadre, divise, attrezzi standardizzati.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1928-gymnastics-at-the-1928-summer-olympics-dutch-men-team.jpg',
    title: 'Amsterdam 1928 — Olanda',
    era: '1928',
    description:
      'Le Olimpiadi del 1928. La ginnastica artistica come disciplina nazionale: squadre, divise, attrezzi standardizzati.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1928-olympische-spelen-1928-amsterdam-sfa001014394.jpg',
    title: 'Amsterdam 1928',
    era: '1928',
    description:
      'Le Olimpiadi del 1928. La ginnastica artistica come disciplina nazionale: squadre, divise, attrezzi standardizzati.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1932-heikki-savolainen-1932-olympics-2.jpg',
    title: 'Heikki Savolainen — Los Angeles 1932',
    era: '1932',
    description:
      'Heikki Savolainen, ginnasta finlandese, una carriera che attraversò quattro Olimpiadi (1928-1952). La longevità della disciplina.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1936-1936-berlin-gymnastics-men-german-and-finland-teams.jpg',
    title: 'Berlino 1936',
    era: '1936',
    description:
      'Olimpiadi del 1936. Le immagini dell\'attrezzistica restano nonostante il contesto politico — la tecnica sopravvive alla storia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1936-alfred-schwarzmann-1936.jpg',
    title: 'Alfred Schwarzmann — Berlino 1936',
    era: '1936',
    description:
      'Olimpiadi del 1936. Le immagini dell\'attrezzistica restano nonostante il contesto politico — la tecnica sopravvive alla storia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1936-gymnastics-men-team-medallists-in-berlin-1936.jpg',
    title: 'Berlino 1936',
    era: '1936',
    description:
      'Olimpiadi del 1936. Le immagini dell\'attrezzistica restano nonostante il contesto politico — la tecnica sopravvive alla storia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1936-hikoroku-arimoto-1936.jpg',
    title: 'Hikoroku Arimoto — Berlino 1936',
    era: '1936',
    description:
      'Olimpiadi del 1936. Le immagini dell\'attrezzistica restano nonostante il contesto politico — la tecnica sopravvive alla storia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1936-hikoroku-arimoto-gymnastics-1936.jpg',
    title: 'Hikoroku Arimoto — Berlino 1936',
    era: '1936',
    description:
      'Olimpiadi del 1936. Le immagini dell\'attrezzistica restano nonostante il contesto politico — la tecnica sopravvive alla storia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/gymnastics-1936-waldb-hne-lel-t-i-az-1936-vi-ny-ri-olimpiai-j-t-kok-ala.jpg',
    title: 'Berlino 1936',
    era: '1936',
    description:
      'Olimpiadi del 1936. Le immagini dell\'attrezzistica restano nonostante il contesto politico — la tecnica sopravvive alla storia.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-arve-j-rgensen-nmturn2.jpg',
    title: 'Sbarra fissa',
    description:
      'La sbarra fissa è la madre di tutti gli attrezzi calistenici moderni.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-athentroppens-ankomst-den-13de-mai-1906-5383384809.jpg',
    title: 'Sbarra fissa, 1906',
    era: '1906',
    description:
      'Documentazione del 1906: la sbarra come strumento di formazione fisica civile.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-bundesarchiv-bild-121-0190-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-bundesarchiv-bild-121-0191-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-bundesarchiv-bild-121-0192-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-bundesarchiv-bild-121-0193-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-bundesarchiv-bild-121-0194-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/horizontal-bar-bundesarchiv-bild-121-0195-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/parallel-bars-4-landen-gymnastiek-van-simson-te-amsterdam-bestanddeel.jpg',
    title: 'Parallele',
    description:
      'Le parallele insegnano la spinta verticale, l\'equilibrio chiuso, la postura del busto.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/parallel-bars-bundesarchiv-bild-121-0188-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/parallel-bars-bundesarchiv-bild-121-0189-berlin-italienische-polizeif.jpg',
    title: 'Polizia italiana — Berlino, ginnastica',
    era: 'anni \'30',
    description:
      'Esercitazione ginnica della polizia italiana documentata dal Bundesarchiv. L\'allenamento al chiuso, in formazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/pommel-horse-blind-athletes-at-overbrook-pa-loc-2162649923.jpg',
    title: 'Atleti non vedenti, Overbrook PA',
    description:
      'Library of Congress: atleti non vedenti su cavallo con maniglie. La ginnastica come pratica universale del corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/pommel-horse-bundesarchiv-bild-102-12352-ltestes-turnpferd.jpg',
    title: 'Bundesarchiv — vecchio cavallo da volteggio',
    description:
      'Documentazione del Bundesarchiv: l\'attrezzo più antico tra i cavalli da volteggio. Conservare la forma significava conservare la tecnica.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/pommel-horse-bundesarchiv-bild-146-2003-0046-turnen-auf-sportplatz.jpg',
    title: 'Cavallo con maniglie',
    description:
      'Il cavallo è l\'attrezzo dove la ginnastica diventa scrittura: ogni passaggio è una lettera nell\'alfabeto della rotazione.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/still-rings-anillas.jpg',
    title: 'Anelli',
    description:
      'Gli anelli, il banco di prova più antico del controllo del corpo. Forza e immobilità si misurano nello stesso istante.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/still-rings-bundesarchiv-bild-183-16873-0004-alfred-m-ller.jpg',
    title: 'Alfred Müller — anelli',
    description:
      'Esercizio agli anelli, anni \'50. La leva, il blocco, la croce: tre stati del corpo che servono sempre come metro.',
    source: 'Bundesarchiv (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/still-rings-concert-lillehammer-24596829543.jpg',
    title: 'Anelli',
    description:
      'Gli anelli, il banco di prova più antico del controllo del corpo. Forza e immobilità si misurano nello stesso istante.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/gymnastics/still-rings-phyiscal-education-uic-ia-catalog196364univ.jpg',
    title: 'Anelli',
    description:
      'Gli anelli, il banco di prova più antico del controllo del corpo. Forza e immobilità si misurano nello stesso istante.',
    source: 'Wikimedia Commons (PD)',
    category: 'gymnastics',
  },
  {
    src: '/images/vintage/indian-clubs/clubs-soviet.jpg',
    title: 'Clave sovietiche',
    description:
      'Produzione moscovita di clave indiane. La tradizione attraversa i continenti e i regimi: il gesto resta lo stesso.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-1889-poster-for-health-literacy-month-15353598361.jpg',
    title: 'Manifesto del 1889',
    era: '1889',
    description:
      'Manifesto del XIX secolo per la diffusione dell\'esercizio con le clave. La salute pubblica si insegnava con la grafica e con il corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-carlisle-students-in-school-uniform-exercising-inside-gymnas.jpg',
    title: 'Carlisle, 1879',
    era: '1879',
    description:
      'Studenti in uniforme con clave indiane. L\'allenamento mobilitava spalle, schiena e polsi in modo che ancora oggi nessun attrezzo replica con la stessa eleganza.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cartedevisitesimdkehoelate1800s.jpg',
    title: 'S.D. Kehoe — clave indiane',
    description:
      'Carte de visite di Simon D. Kehoe, autore del primo manuale fotografico di esercizio con le clave (1866).',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
    featured: true,
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-1889-poster-for-health-literacy-month-15353598361.jpg',
    title: 'Manifesto del 1889',
    era: '1889',
    description:
      'Manifesto del XIX secolo per la diffusione dell\'esercizio con le clave. La salute pubblica si insegnava con la grafica e con il corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-carlisle-students-in-school-uniform-exercising-inside-g.jpg',
    title: 'Carlisle, 1879',
    era: '1879',
    description:
      'Studenti in uniforme con clave indiane. L\'allenamento mobilitava spalle, schiena e polsi in modo che ancora oggi nessun attrezzo replica con la stessa eleganza.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-cartedevisitesimdkehoelate1800s.jpg',
    title: 'S.D. Kehoe — clave indiane',
    description:
      'Carte de visite di Simon D. Kehoe, autore del primo manuale fotografico di esercizio con le clave (1866).',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-champeen-indian-club-swinger-washington-d-c-sept-13-aft.jpg',
    title: 'Campione di club swinging',
    description:
      'Washington D.C., dopo 35 minuti consecutivi: il club swinging era anche sport di resistenza. I record si misuravano in minuti e ripetizioni.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-drills-hand-grenade-instruction-a-member-of-the-hollywo.jpg',
    title: 'Drill con la clava',
    description:
      'L\'esercizio collettivo con le clave. Le scuole americane lo usavano per insegnare coordinazione di gruppo e disciplina del movimento.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-group-of-young-women-students-in-school-uniform-at-gym-.jpg',
    title: 'Allieve in palestra',
    description:
      'Gruppo di studentesse in uniforme. L\'educazione fisica femminile, dalla seconda metà dell\'Ottocento, era atto rivoluzionario.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-gus-hill-circa-1880.jpg',
    title: 'Gus Hill, c. 1880',
    era: '1880',
    description:
      'Gus Hill, campione americano di club swinging del XIX secolo. Le sue performance riempivano i teatri di Broadway prima del cinema.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-gymnasium-wood-engraving-young-mens-christian-associati.jpg',
    title: 'Palestra YMCA — incisione',
    description:
      'Incisione su legno: una palestra YMCA di fine Ottocento. La cultura fisica come istituzione civica.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-indian-club-psf.png',
    title: 'Clava indiana — diagramma',
    description:
      'Schema tecnico della clava indiana. L\'attrezzo più semplice possibile e uno dei più ricchi di varianti gestuali.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-cat-stereoscopic-case-partially-nude-strongman-holding-indi.jpg',
    title: 'Strongman con clave (stereo)',
    description:
      'Fotografia stereoscopica d\'epoca. Le clave erano l\'insegna dello strongman come la barra lo è oggi del calistenico.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-champeen-indian-club-swinger-washington-d-c-sept-13-after-35.jpg',
    title: 'Campione di club swinging',
    description:
      'Washington D.C., dopo 35 minuti consecutivi: il club swinging era anche sport di resistenza. I record si misuravano in minuti e ripetizioni.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-drills-hand-grenade-instruction-a-member-of-the-hollywood-of.jpg',
    title: 'Drill con la clava',
    description:
      'L\'esercizio collettivo con le clave. Le scuole americane lo usavano per insegnare coordinazione di gruppo e disciplina del movimento.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/indian-clubs/indian-clubs-stereoscopic-case-partially-nude-strongman-holding-indian-cl.jpg',
    title: 'Strongman con clave (stereo)',
    description:
      'Fotografia stereoscopica d\'epoca. Le clave erano l\'insegna dello strongman come la barra lo è oggi del calistenico.',
    source: 'Wikimedia Commons (PD)',
    category: 'indian-clubs',
  },
  {
    src: '/images/vintage/magazines/physical-culture-mag-edna-tempest-physical-culture-sept-1900-p-249.jpg',
    title: 'Edna Tempest — «Physical Culture», 1900',
    era: '1900',
    description:
      'Pagina dal «Physical Culture Magazine», settembre 1900. La rivista educava una nazione al corpo.',
    source: 'Sandow\'s Magazine / Wellcome (PD)',
    category: 'magazines',
  },
  {
    src: '/images/vintage/magazines/physical-culture-sandow-and-fire-brigade-fitness-drill-wellcom.jpg',
    title: 'Sandow con i vigili del fuoco',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'magazines',
  },
  {
    src: '/images/vintage/magazines/physical-culture-sandow-instructing-a-boy-s-institute-adelaide.jpg',
    title: 'Sandow ad Adelaide',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'magazines',
  },
  {
    src: '/images/vintage/magazines/sandow-mag-a-new-sandow-pose-viii-eugen-sandow-wellcome-l0035270-r.jpg',
    title: 'Sandow — Posa VII',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wellcome Collection (PD)',
    category: 'magazines',
  },
  {
    src: '/images/vintage/magazines/sandow-mag-photograph-of-eugen-sandow-instructing-bendigo-police-w.jpg',
    title: 'Sandow a Bendigo',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Sandow\'s Magazine / Wellcome (PD)',
    category: 'magazines',
  },
  {
    src: '/images/vintage/outdoor/outdoor-gym-adizone-egerton-park-bexhill-on-sea.jpg',
    title: 'Adizone Egerton Park, Bexhill-on-Sea',
    description:
      'Stazione di allenamento all\'aperto. La calistenia urbana è erede diretta del Sokol.',
    source: 'Wikimedia Commons (PD)',
    category: 'outdoor',
  },
  {
    src: '/images/vintage/outdoor/outdoor-gym-bench-press-at-an-outdoor-fitness-station.jpg',
    title: 'Bench press all\'aperto',
    description:
      'Stazione di allenamento outdoor — la palestra senza tetto.',
    source: 'Wikimedia Commons (PD)',
    category: 'outdoor',
  },
  {
    src: '/images/vintage/outdoor/outdoor-gym-bliuvi-ki-mokykla-3.jpg',
    title: 'Calistenia scolastica, Lituania',
    description:
      'Stazione calistenica nei giardini di una scuola lituana.',
    source: 'Wikimedia Commons (PD)',
    category: 'outdoor',
  },
  {
    src: '/images/vintage/outdoor/sokol-pam-tn-deska-na-rodn-m-dom-v-nymburku.jpg',
    title: 'Placca del Sokol — Nymburk',
    description:
      'Il movimento ginnico Sokol, fondato a Praga nel 1862, fu modello civile in tutta l\'Europa centro-orientale.',
    source: 'Wikimedia Commons (PD)',
    category: 'outdoor',
  },
  {
    src: '/images/vintage/outdoor/sokol-russia-vologda-sokol-maly-krivets-wmid2607601.jpg',
    title: 'Sokol, Russia',
    description:
      'Il movimento ginnico Sokol, fondato a Praga nel 1862, fu modello civile in tutta l\'Europa centro-orientale.',
    source: 'Wikimedia Commons (PD)',
    category: 'outdoor',
  },
  {
    src: '/images/vintage/outdoor/sokol-russia-vologda-sokol-wmid2607597.jpg',
    title: 'Sokol, Russia',
    description:
      'Il movimento ginnico Sokol, fondato a Praga nel 1862, fu modello civile in tutta l\'Europa centro-orientale.',
    source: 'Wikimedia Commons (PD)',
    category: 'outdoor',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-daily-mirror-2july1904.jpg',
    title: 'Hackenschmidt — Daily Mirror, 1904',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
    featured: true,
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-eliseev-gakkenshmidt.jpg',
    title: 'Hackenschmidt — fotografia d\'epoca',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-frank-gotch-vs-georg-hackenschmidt-1908.jpg',
    title: 'Hackenschmidt vs. Frank Gotch',
    era: '1908',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-geo-hacken-schmidt-lccn2014680730.jpg',
    title: 'Georg Hackenschmidt',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Library of Congress (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-georg-gakkenschmidt-the-way-to-strength-and-health-1911.jpg',
    title: '«The Way to Strength and Health»',
    era: '1911',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-georg-hackenschmidt-c-1910.jpg',
    title: 'Hackenschmidt (1910)',
    era: '1910',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-georg-hackenschmidt-c1905-colorized.png',
    title: 'Hackenschmidt (c. 1905)',
    era: 'c. 1905',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/hackenschmidt-georg-hackenschmidt-ca-1905-cropped.jpg',
    title: 'Hackenschmidt (1905)',
    era: '1905',
    description:
      'Il Leone Russo, primo campione mondiale di lotta professionistica. Le sue spalle furono per decenni il riferimento iconografico del lottatore.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-cyrlouis.jpg',
    title: 'Louis Cyr',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-front-cover-of-la-culture-physique-featuring-louis-cyr-.jpg',
    title: 'Cyr — La Culture Physique',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-louis-cyr-centro-su-esposa-m-lina-courtois-derecha-su-h.jpg',
    title: 'Louis Cyr',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-louis-cyr-et-famille.jpg',
    title: 'Cyr in famiglia',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-louis-cyr-homme-fort.jpg',
    title: 'Cyr — l\'homme fort',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-louis-cyr-nu.jpg',
    title: 'Cyr — studio di figura',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-louis-cyr-retenant-deux-chevaux-01.jpg',
    title: 'Cyr tiene due cavalli',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-louis-cyr-strongest-man-on-earth-1898.jpg',
    title: 'Louis Cyr — l\'uomo più forte del mondo',
    era: '1898',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
    featured: true,
  },
  {
    src: '/images/vintage/strongmen/louis-cyr-louis-cyr-vers-les-ann-es-1890.jpg',
    title: 'Louis Cyr, anni 1890',
    era: '1890',
    description:
      'Quebec, anni \'90 dell\'Ottocento. Louis Cyr — uno degli uomini più forti mai documentati — sollevava cavalli e cavalcò la prima stagione moderna degli strongman.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-bernarr-macfadden-1923.jpg',
    title: 'Macfadden, 1923',
    era: '1923',
    description:
      'L\'apostolo americano della cultura fisica. Fondò la rivista «Physical Culture» nel 1899 e cambiò per sempre il modo in cui l\'Occidente parlò del corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-bernarr-macfadden-c1910.jpg',
    title: 'Macfadden, c. 1910',
    era: 'c. 1910',
    description:
      'L\'apostolo americano della cultura fisica. Fondò la rivista «Physical Culture» nel 1899 e cambiò per sempre il modo in cui l\'Occidente parlò del corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-harvard-theatre-collection-bernarr-macfadden-tcs-1-2397.jpg',
    title: 'Macfadden — Harvard Theatre Collection',
    description:
      'L\'apostolo americano della cultura fisica. Fondò la rivista «Physical Culture» nel 1899 e cambiò per sempre il modo in cui l\'Occidente parlò del corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-portrait-of-b-adolphus-macfadden-wellcome-l0005593.jpg',
    title: 'Ritratto di Bernarr Macfadden',
    description:
      'L\'apostolo americano della cultura fisica. Fondò la rivista «Physical Culture» nel 1899 e cambiò per sempre il modo in cui l\'Occidente parlò del corpo.',
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-portrait-of-bernarr-adolphus-macfadden.jpg',
    title: 'Ritratto di Bernarr Macfadden',
    description:
      'L\'apostolo americano della cultura fisica. Fondò la rivista «Physical Culture» nel 1899 e cambiò per sempre il modo in cui l\'Occidente parlò del corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-sarony-napoleon-1821-1896-bernarr-macfadden-as-boxer-19.jpg',
    title: 'Macfadden in posa da pugile',
    era: '1896',
    description:
      'L\'apostolo americano della cultura fisica. Fondò la rivista «Physical Culture» nel 1899 e cambiò per sempre il modo in cui l\'Occidente parlò del corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/macfadden-strength-from-eating-frontispiece.jpg',
    title: '«Strength from Eating» — frontespizio',
    description:
      'L\'apostolo americano della cultura fisica. Fondò la rivista «Physical Culture» nel 1899 e cambiò per sempre il modo in cui l\'Occidente parlò del corpo.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-033-brookes-sandow-c-1900.jpg',
    title: 'Sandow & Brookes',
    era: '1900',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-aged-52.jpg',
    title: 'Sandow a 52 anni',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-1902-keithstheatre-bostonglobe-1902.png',
    title: 'Sandow al Keith\'s Theatre, 1902',
    era: '1902',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-academische-figuurstudie-van-eugen-sandow-sandow-titel-.jpg',
    title: 'Studio di figura — Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-1867-1925-lccn2002697563.jpg',
    title: 'Sandow — Library of Congress',
    era: '1867',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Library of Congress (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-accession-number-1982-0816-0001-2720788942.jpg',
    title: 'Eugen Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-aged-52-wellcome-l0034497.jpg',
    title: 'Sandow a 52 anni',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-body-builder-full-length-portrait-standing.jpg',
    title: 'Eugen Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-body-building-wellcome-l0026308.jpg',
    title: 'Sandow — Body Building',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-cnews-btv1b531551239.jpg',
    title: 'Sandow — stampa francese',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-full-length-nude-portrait-standing-facing-.jpg',
    title: 'Eugen Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-holding-pillar-cph-3b11215.jpg',
    title: 'Sandow — la colonna',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Library of Congress (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-signature.png',
    title: 'Firma di Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-wellcome-l0033351.jpg',
    title: 'Eugen Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-eugen-sandow-wellcome-l0034499.jpg',
    title: 'Eugen Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-extra-nat-pendleton-in-the-great-ziegfeld-trailer.jpg',
    title: 'Sandow & Ziegfeld',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
  },
  {
    src: '/images/vintage/strongmen/sandow-portrait-1894.jpg',
    title: 'Eugen Sandow',
    era: '1894',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wikimedia Commons (PD)',
    category: 'strongmen',
    featured: true,
  },
  {
    src: '/images/vintage/strongmen/sandow-wellcome-l0033351.jpg',
    title: 'Eugen Sandow',
    description:
      'Il padre della cultura fisica moderna. Le sue fotografie circolavano come icone di un\'estetica nuova: il corpo allenato, codificato, esibito al pubblico.',
    source: 'Wellcome Collection (PD)',
    category: 'strongmen',
  },
];

export const featuredItems = galleryItems.filter((g) => g.featured);
export const itemsByCategory = (cat: GalleryCategory) =>
  galleryItems.filter((g) => g.category === cat);
