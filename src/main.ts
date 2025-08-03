console.log("Test")

// 🏆 Snack 1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

let datoApi: unknown;

if (typeof datoApi === "string") {
  console.log(datoApi.toLowerCase())
} else if (typeof datoApi === "number") {
  console.log(datoApi * 2)
} else if (typeof datoApi === "boolean") {
  console.log(datoApi ? "Sì" : "No")
} else {
  console.log("Tipo non supportato")
}

// 🏆 Snack 2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:
// nome → stringa
// cognome → stringa
// annoNascita → numero
// sesso → Può essere solo "m" o "f".
//   anniDiServizio(array di numeri, es. [2014, 2015, 2017, 2018])
// 🎯 BONUS
// Il type alias Dipendente, ha anche i seguenti dati:
// emailAziendale → Email assegnata al dipendente(non si può modificare)
// contratto → Specifica il tipo di contratto del dipendente, con valori limitati a “indeterminato”, “determinato” o “freelance”.
type TipoContratto = "indeterminato" | "determinato" | "freelance";

type Dipendente = {
  nome: string;
  cognome: string;
  annoNascita: number;
  sesso: "m" | "f";
  anniDiServizio: number[];
  readonly emailAziendale: string;
  contratto: TipoContratto;
};

const lavoratore: Dipendente = {
  nome: "Carlo",
  cognome: "Costa",
  annoNascita: 1992,
  sesso: "m",
  anniDiServizio: [2014, 2015, 2017, 2018],
  emailAziendale: "carlo.costa@azienda.com",
  contratto: "indeterminato",
};

console.log(lavoratore)

// 🏆 Snack 3
// Estendiamo Dipendente per definire due ruoli specifici all'interno dell'azienda:

// Developer
// livelloEsperienza → Il livello di esperienza del developer(le scelte possibili sono solo “Junior”, “Mid” o “Senior”).
//   linguaggi → Un array contenente i linguaggi di programmazione utilizzati dal developer in azienda(opzionale, perché i neo assunti non hanno ancora dei linguaggi assegnati).
//     certificazioni → Un array di stringhe contenente certificazioni tecniche ottenute dal developer(può essere vuoto).
//       ProjectManager
// teamSize → Il numero di persone nel team gestito dal Project Manager(può essere null se non ha ancora un team assegnato).
//   budgetGestito → Il totale del budget annuale gestito dal PM(opzionale).
//     stakeholderPrincipali → Un array di stringhe con i nomi dei principali stakeholder con cui il PM collabora(può essere vuoto).
// 🎯 BONUS
// Definiamo un nuovo type alias Team, che rappresenta un gruppo di lavoro all'interno dell'azienda:

// nome → Nome del team(stringa).
//   progettoAttuale → Nome del progetto su cui lavora il team(può essere null se il team è in attesa di assegnazione).
//     budget → Importo numerico del budget assegnato al team(sempre presente).
//       membri → Una tuple in cui il primo elemento è sempre un Project Manager, seguito da uno o più Developers(almeno un developer obbligatorio).

type LivelloEsperienza = "Junior" | "Mid" | "Senior";

type Developer = Dipendente & {
  livelloEsperienza: LivelloEsperienza;
  linguaggi?: string[];
  certificazioni: string[];
};

type ProjectManager = Dipendente & {
  numeroPersone: number | null,
  budgetGestito?: number,
  stakeholderPrincipali: string[]
}

type Team = {
  nome: string,
  progettoAttuale: string | null,
  budget: number,
  membri: [ProjectManager, Developer, ...Developer[]]
}

const dev1: Developer = {
  nome: "Anna",
  cognome: "Chiara",
  annoNascita: 1995,
  sesso: "f",
  anniDiServizio: [2021, 2022],
  emailAziendale: "anna.chiara@azienda.com",
  contratto: "indeterminato",
  livelloEsperienza: "Mid",
  linguaggi: ["TypeScript", "Python"],
  certificazioni: ["AWS Certified Developer"]
};

const dev2: Developer = {
  nome: "Luca",
  cognome: "Vergnano",
  annoNascita: 1990,
  sesso: "m",
  anniDiServizio: [2023],
  emailAziendale: "luca.vergnano@azienda.com",
  contratto: "determinato",
  livelloEsperienza: "Junior",
  certificazioni: []
};

const pm: ProjectManager = {
  nome: "Mario",
  cognome: "Brega",
  annoNascita: 1987,
  sesso: "f",
  anniDiServizio: [2016, 2017, 2018, 2019],
  emailAziendale: "maria.bianchi@azienda.com",
  contratto: "indeterminato",
  numeroPersone: 5,
  budgetGestito: 100000,
  stakeholderPrincipali: ["CEO", "CTO"]
};

const teamA: Team = {
  nome: "Boolean Team",
  progettoAttuale: "Tuple",
  budget: 150000,
  membri: [pm, dev1, dev2]
};

console.log(teamA)