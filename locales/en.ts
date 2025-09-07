export default {
    "auth": {
        "done": "✅Done",
        "login": "Login with Google",
        "logout": "Logout ({email})",
        "markdone": {
            "login": "Log in to track progress: [{login}]",
            "marking": "Marking puzzle as done...",
            "done": "Puzzle marked as done: {timestamp}",
        },

    },
    "footer": {
        "github": "github",
        "vercel": "vercel",
        "license": "MIT License",
    },
    "game": {
        "title": "Checkbox Nightmare",
        "support": "Support me",
        "emailme": "Have an idea for a puzzle? Email me at {email} with the subject \"CHECKBOX IDEA\"!",
    },
    "homepage": {
        "checkbox": {
            "1": "To progress, select each",
            "2": "checkbox",
            "3": "on the page."
        },
        "simple": "No, really - it's as simple as that! ;)",
        "playnow": "Play now",
        "readblog": "Read my blog",
        "imagealt": "Checkbox Nightmare logo",
        "imgsrc": "/checkbox nightmare.png",
    },
    "navbar": {
        "home": "home",
        "game": "game",
        "blog": "the blog",
    },
    "notfound": {
        "title": "404 - Page Not Found",
        "message": "The page you are looking for does not exist. Have a kitty... (Sourced from {link})",
        "gameLink": "If you are looking for the game, it can be found {link}.",
        "here": "here",
        "loading": "Loading cat...",
    },
    "privacypolicy": {
        "title": "Privacy Policy",
        "lastupdated": "Last updated: {date}",
        "oauth": "Checkbox Nightmare ('we') uses Google OAuth for authentication.",
        "dataUsage": "We only collect your email and profile data for login purposes.",
        "dataProtection": "We do not share your data with third parties and take reasonable measures to protect it.",
        "contact": "For any questions or concerns, please contact {email}.",
    },
    "puzzles": {
        "box": "Box {num}",
        "clicks": {
            "reset": "RESET",
            "clicks": "Current clicks: {num}",
        },
        "congratulations": {
            "title": "Congratulations!",
            "message": "You solved the puzzle! 🎉",
            "next": "Play Next Puzzle",
            "last": "Return to Home Screen"
        },
        "number": "Puzzle {num}",
        "puzzle": "Puzzle",
        "rules": {
            "rules": "Rules:",
            "checkall": "Check all the boxes to solve the puzzle :)",
            "limit": "Finish the puzzle in only {limit} clicks.",
            "limit-reset": "Hit \"reset\" to reset.",
            "shuffle": "You get a fun surprise every {num} clicks :)",
            "uncheck": "Uncheck all the boxes to solve the puzzle.",
            "chord": "Select only the notes in this chord to solve the puzzle.",
            "chord-notes": "For non-musicians, this chord contains the notes {notes1} and {notes2}.",
            "shuffle-checked": "Checked state of boxes is shuffled every {num} clicks.",
            "decrease": "Every time you reset, the maximum click count decreases by {amount}.",

            "all-previous": "Clicks may remove multiple boxes!",
            "num-resets": "You can only reset {num} more times!",
            "delay": "Clicks' effects are delayed by {num}.",
            "shuffle-names": "Box names are shuffled every {num} clicks.",
            "hidden": {
                "hidden": "You don't know {info}!",
                "clicks": "the number of clicks per reset",
            },

        },
        "title": {
            "1": "Tutorial",
            "2": "Tutorial (Long)",
            "3": "The Limit",
            "4": "Mini Golf",
            "5": "Dancing",
            "6": "Just Say No",
            "7": "Kurtág Would Be Proud",
            "8": "Tennessee Waltz",
            "9": "Decrease",
            "10": "Amnesia!",
            "11": "777",
            "12": "Going In Blind",
            "13": "Three Strikes",
            "14": "Oh No",
            "15": "Who What Where When",
            "16": "E = mc²",

        },
    },

} as const;
