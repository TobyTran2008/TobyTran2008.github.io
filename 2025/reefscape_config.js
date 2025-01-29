var config_data = `
{
  "enable_google_sheets": "true",
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "gsCol": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "gsCol": "e",
      "type": "event",
      "defaultValue": "2025Pinnacles",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "gsCol": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "gsCol": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "gsCol": "r",
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
      "code": "t",
      "gsCol": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "gsCol": "as",
      "type": "clickable_image",
      "filename": "2025/half_field.png",
      "clickRestriction": "one",
      "dimensions": "6 6",
      "allowableResponses": "1 7 13 19 25 31",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "gsCol": "al",
      "type": "bool"
    },
    { "name": "Coral L1",
      "code": "ac1",
      "gsCol": "ac1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "ac2",
      "gsCol": "ac2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "ac3",
      "gsCol": "ac3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "ac4",
      "gsCol": "ac4",
      "type": "counter"
    },
    { "name": "Auto Scoring Position",
      "code": "asp",
      "gsCol": "asp",
      "type": "clickable_image",
      "filename": "2025/reef.png",
      "dimensions": "6 6",
      "allowableResponses": "8 10 17 19 27 28",
      "shape": "circle 5 black lightblue true"
    },
    { "name": "Processor Score",
      "code": "aps",
      "gsCol": "aps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "ans",
      "gsCol": "ans",
      "type": "counter"
    }
  ],
  "teleop": [
    { "name": "Barge Timer",
      "code": "ebt",
      "gsCol": "ebt",
      "type": "timer"
    },
    { "name": "Coral L1",
      "code": "tc1",
      "gsCol": "tc1",
      "type": "counter"
    },
    { "name": "Coral L2",
      "code": "tc2",
      "gsCol": "tc2",
      "type": "counter"
    },
    { "name": "Coral L3",
      "code": "tc3",
      "gsCol": "tc3",
      "type": "counter"
    },
    { "name": "Coral L4",
      "code": "tc4",
      "gsCol": "tc4",
      "type": "counter"
    },
    { "name": "Processor Score",
      "code": "tps",
      "gsCol": "tps",
      "type": "counter"
    },
    { "name": "Net Score",
      "code": "tns",
      "gsCol": "tns",
      "type": "counter"
    },
    { "name": "Pickup From",
      "code": "tpu",
      "gsCol": "tpu",
      "type": "radio",
      "choices": {
        "s": "Coral Station<br>",
        "f": "Floor<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Scored in<br>Opponent<br>Processor",
      "code": "opp",
      "gsCol": "opp",
      "type": "bool"
    },
    { "name": "Final Robot Status",
      "code": "efs",
      "gsCol": "efs",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "ba": "Parked/Failed Climb<br>",
        "bs": "Shallow Cage<br>",
        "bd": "Deep Cage<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
  ],
  "postmatch": [
    { "name": "Attained Coopertition Pt",
      "code": "cop",
      "gsCol": "cop",
      "type": "bool"
    },
    { "name": "Algae Left in Reef",
      "code": "alr",
      "gsCol": "alr",
      "type": "number",
      "min": 0,
      "max": 9,
      "defaultValue": 0
    },
    { "name": "Driver Skill",
      "code": "ds",
      "gsCol": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Human Player Skill",
      "code": "hps",
      "gsCol": "hps",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "gsCol": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "gsCol": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "gsCol": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "gsCol": "tip",
      "type": "bool"
    },
    { "name": "Dropped Coral (>2)",
      "code": "dc",
      "gsCol": "dc",
      "type": "bool"
    },
    { "name": "Dropped Algae (>2)",
      "code": "da",
      "gsCol": "da",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "gsCol": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "defaultValue": "none",
      "code": "co",
      "gsCol": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
