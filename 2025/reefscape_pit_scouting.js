var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "pitConfig": "true",
  "prematch": [
    {
      "name": "Scouter",
      "code": "s",
      "type": "text"
    },
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "defaultValue": "N/A",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drive Team Experience (years)",
      "code": "dte",
      "type": "number"
    },
    {
      "name": "Max Coral Lvl",
      "code": "mcl",
      "type": "number"
    },
    {
      "name": "Cycles Per Match",
      "code": "cpm",
      "type": "number"
    },
    {
      "name": "Climb",
      "code": "cli",
      "type": "radio",
      "choices": {
        "d": "Deep Cage<br>",
        "s": "Shallow Cage<br>",
        "x": "No climb<br>"
      },
      "defaultValue": "x"
    },
    { "name": "Drivetrain Motor",
      "code": "mot",
      "type": "radio",
      "choices": {
        "n": "Neo<br>",
        "f": "Falcon<br>",
        "c": "CIM<br>",
        "x": "Other<br>"
      },
      "defaultValue":"x"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number"
    },
    { "name": "Secure Battery",
      "code": "sb",
      "type": "bool"
    },
    { "name": "Camera",
      "code": "cam",
      "type": "bool"
    },
    { "name": "Trough Scoring",
      "code": "ts",
      "type": "bool"
    },
    { "name": "Floor pickup Coral",
      "code": "fpc",
      "type": "bool"
    },
    {
      "name": "Net algae",
      "code": "na",
      "type": "bool"
    },
    {
      "name": "Processor algae",
      "code": "pa",
      "type": "bool"
    },
    { "name": "Floor pickup Algae",
      "code": "fpa",
      "type": "bool"
    },
    { "name": "Best Consistent Auto",
      "defaultValue": "N/A",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Scouting Method /<br>Program (ScoutingPASS?)",
      "defaultValue": "N/A",
      "code": "sct",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    { "name": "Comments",
      "defaultValue": "N/A",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
