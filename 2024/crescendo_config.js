var config_data = `
{
  "dataFormat": "tsv",
  "enable_google_sheets": "true",
  "title": "Scouting PASS 2024",
  "page_title": "ScoutingPASS",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "gsCol": "s",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "gsCol": "e",
      "code": "e",
      "type": "event",
      "defaultValue": "2024OCR",
      "required": "true"
    },
    { "name": "Match Level",
      "gsCol": "l",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "e": "Eliminations<br>"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "gsCol": "m",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "gsCol": "r",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "gsCol": "t",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "gsCol": "as",
      "code": "as",
      "type": "clickable_image",
      "filename": "2024/field_image.png",
      "clickRestriction": "one",
      "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Zone",
      "gsCol": "al",
      "code": "al",
      "type": "bool"
    },
    { "name": "Amp Scores",
      "gsCol": "aas",
      "code": "aas",
      "type": "counter"
    },
    { "name": "Amp Missed",
      "gsCol": "aam",
      "code": "aam",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "gsCol": "ass",
      "code": "ass",
      "type": "counter"
    },
    { "name": "Speaker Missed",
      "gsCol": "asm",
      "code": "asm",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Amp Scores",
      "gsCol": "tas",
      "code": "tas",
      "type": "counter"
    },
    { "name": "Amp Missed",
      "gsCol": "tam",
      "code": "tam",
      "type": "counter"
    },
    { "name": "Speaker Scores",
      "gsCol": "tss",
      "code": "tss",
      "type": "counter"
    },
    { "name": "Speaker Missed",
      "gsCol": "tsm",
      "code": "tsm",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "gsCol": "fs",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "o": "Onstage<br>",
        "h": "Harmony<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Note in Trap",
      "gsCol": "nit",
      "code": "nit",
      "type": "bool"
    }
  ],
  "postmatch": [
    { "name": "Didn't Show?",
      "gsCol": "rds",
      "code": "rds",
      "type": "bool"
    },
    { "name": "If played defense, explain: ",
      "gsCol": "de",
      "code": "de",
      "type": "text",
      "defaultValue": "none",
      "size": 15,
      "maxSize": 1000
    },
    { "name": "Pickup From",
      "gsCol": "tpu",
      "code": "tpu",
      "type": "radio",
      "choices": {
        "s": "Source<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Neither"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "gsCol": "sr",
      "code": "sr",
      "type": "radio",
      "choices": {
        "slow": "Slow<br>",
        "average": "Average<br>",
        "fast": "Fast<br>"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "gsCol": "die",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "gsCol": "tip",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Notes (>2)",
      "gsCol": "dn",
      "code": "dn",
      "type": "bool"
    },
    { "name": "Comments",
      "gsCol": "co",
      "code": "co",
      "type": "text",
      "defaultValue": "none",
      "size": 15,
      "maxSize": 1000
    }
  ]
}`;