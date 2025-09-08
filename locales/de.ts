export default {
    "auth": {
        "done": "✅Abgeschlossen",
        "login": "Anmelden mit Google",
        "logout": "Abmelden: {email}",
        "markdone": {
            "login": "Du musst eingeloggt sein, um dieses Rätsel als abgeschlossen zu markieren: [{login}]",
            "marking": "Rätsel wird als abgeschlossen markiert...",
            "done": "Rätsel abgeschlossen am {timestamp}",
        },

    },
    "footer": {
        "github": "GitHub",
        "vercel": "Vercel",
        "license": "MIT-Lizenz",
    },
    "game": {
        "title": "Kontrollkästchenalbtraum",
        "support": "Unterstütze mich",
        "emailme": "Hast du eine Idee für ein Rätsel? Schick mir eine E-Mail an {email} mit dem Betreff \"CHECKBOX IDEA\"!",
    },
    "homepage": {
        "checkbox": {
            "1": "Um weiterzukommen, aktiviere jedes",
            "2": "Kontrollkästchen",
            "3": "auf der Seite."
        },
        "simple": "Nein, wirklich - so einfach ist das! ;)",
        "playnow": "Jetzt spielen",
        "readblog": "Lies meinen Blog",
        "imagealt": "Kontrollkästchen-Albtraum-Logo",
        "imgsrc": "/checkbox nightmare de.png",
    },
    "navbar": {
        "home": "startseite",
        "game": "spiel",
        "blog": "der blog",
    },
    "notfound": {
        "title": "404 - Seite nicht gefunden",
        "message": "Die gesuchte Seite existiert nicht. Hier ist eine Katze für dich... (Quelle: {link})",
        "gameLink": "Falls du das Spiel suchst, findest du es {link}.",
        "here": "hier",
        "loading": "Katze wird geladen...",
    },
    "privacypolicy": {
        "title": "Datenschutzrichtlinie Kontrollkästchenalbtraum",
        "lastupdated": "Letzte Aktualisierung: {date}",
        "oauth": "Checkbox Nightmare ('wir') verwendet Google OAuth zur Authentifizierung.",
        "dataUsage": "Wir sammeln nur deine E-Mail-Adresse und Profildaten für Anmeldezwecke.",
        "dataProtection": "Wir geben deine Daten nicht an Dritte weiter und ergreifen angemessene Maßnahmen, um sie zu schützen.",
        "contact": "Bei Fragen oder Bedenken kontaktiere uns bitte unter {email}.",
    },
    "puzzles": {
        "box": "Kästchen {num}",
        "clicks": {
            "reset": "ZURÜCKSETZEN",
            "clicks": "Aktuelle Klicks: {num}",
        },
        "congratulations": {
            "title": "Glückwunsch!",
            "message": "Du hast das Rätsel gelöst! 🎉",
            "next": "Nächstes Rätsel spielen",
            "last": "Zurück zum Startbildschirm",

        },
        "number": "Rätsel {num}",
        "puzzle": "Rätsel",
        "rules": {
            "rules": "Regeln:",
            "checkall": "Aktiviere alle Kästchen, um das Rätsel zu lösen :)",
            "limit": "Löse das Rätsel mit nur {limit} Klicks.",
            "limit-reset": "Klicke auf „zurücksetzen“, um neu zu starten.",
            "shuffle": "Alle {num} Klicks gibt es eine lustige Überraschung :)",
            "uncheck": "Deaktiviere alle Kästchen, um das Rätsel zu lösen.",
            "chord": "Wähle nur die Noten in diesem Akkord, um das Rätsel zu lösen.",
            "chord-notes": "Für Nicht-Musiker: Dieser Akkord enthält die Noten {notes1} und {notes2}.",
            "shuffle-checked": "Der Aktivierungszustand der Kästchen wird alle {num} Klicks gemischt.",
            "decrease": "Jedes Mal, wenn du zurücksetzt, verringert sich die maximale Klickanzahl um {amount}.",

            "all-previous": "Durch Klicken können mehrere Felder entfernt werden!",
            "num-resets": "Sie können nur noch {num} Mal zurücksetzen!",
            "delay": "Die Wirkung von Klicks wird um {num} verzögert.",
            "shuffle-names": "Die Namen der Boxen werden alle {num} Klicks neu gemischt.",
            "hidden": {
                "hidden": "Sie kennen {info} nicht!",
                "clicks": "die Anzahl der Klicks pro Reset",
            },
        },
        "title": {
            "1": "Tutorial",
            "2": "Tutorial (Lang)",
            "3": "Die Grenze",
            "4": "Mini-Golf",
            "5": "Tanzen",
            "6": "Sag einfach Nein",
            "7": "Kurtág wäre stolz",
            "8": "Tennessee-Waltz",
            "9": "Verkleinern",
            "10": "Amnesie!",
            "11": "777",
            "12": "Blind Reingehen",
            "13": "Drei Schläge",
            "14": "Ach nein",
            "15": "Wer was wo wann",
            "16": "E = mc²",

        },
    },
} as const;