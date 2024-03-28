var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "background": [
    { "name": "Team Number",
      "code": "t",
      "type": "number",
      "required": "true"
    },
    { "name": "Scouter Initials",
      "code": "s",
      "type": "text",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Length",
      "code": "len",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Min Height",
      "code": "mih",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Max Height",
      "code": "mah",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "t": "Tank<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Module Type<br> (ie swerve X or SDS)",
      "code": "mt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Drive Team<br>Experience<br>(Years)",
      "code": "dte",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Practice<br>This Year",
      "code": "pty",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "How are Bumpers<br>Attached?",
      "code": "nb",
      "type": "text",
      "defaultValue": "N/A"
    },
    { "name": "Reversible<br>Bumpers?",
      "code": "rb",
      "type": "bool"
    },
    { "name": "Are Bumpers<br>Secure?",
      "code": "bs",
      "type": "bool"
    },
    { "name": "# of Batteries",
      "code": "nob",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "# of Chargers",
      "code": "noc",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Battery Connector Zip Tied?",
      "code": "bz",
      "type": "bool"
    },
    { "name": "Is Battery<br>in Secure<br>Spot?",
      "code": "bas",
      "type": "bool"
    }
  ],
  "Amp&Speaker": [
    { "name": "Intake From Ground?",
      "code": "ifg",
      "type": "radio",
      "choices": {
        "Under Bumper": "Under Bumper<br>",
        "Above Bumper": "Above Bumper<br>",
        "No": "No<br>"
      },
      "defaultValue":"No"
    },
    { "name": "Intake From Source?",
      "code": "ifs",
      "type": "bool"
    },
    { "name": "Score on Amp?",
      "code": "sa",
      "type": "bool"
    },
    { "name": "How?",
      "code": "hsa",
      "type": "radio",
      "choices": {
        "Side Rollers": "Side Rollers<br>",
        "Top/Bottom Rollers": "Top/Bottom Rollers<br>",
        "Claw": "Claw<br>",
        "Other": "Other<br>"
      },
      "defaultValue":"Other"
    },
    { "name": "LimeLight Aim?",
      "code": "ala",
      "type": "bool"
    },
    { "name": "Comments (Other<br>type, Uneven Wheel<br>Size, Aiming<br>etc.)",
      "code": "aco",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 1000
    },
    { "name": "Score on Speaker?",
      "code": "ss",
      "type": "bool"
    },
    { "name": "How?",
      "code": "hss",
      "type": "radio",
      "choices": {
        "Side Rollers": "Side Rollers<br>",
        "Top/Bottom Rollers": "Top/Bottom Rollers<br>",
        "Other": "Other<br>"
      },
      "defaultValue":"Other"
    },
    { "name": "LimeLight Aim?",
      "code": "sla",
      "type": "bool"
    },
    { "name": "Comments (Other<br>type, Uneven Wheel<br>Size, Aiming<br>etc.)",
      "code": "sco",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 1000
    },
    { "name": "How Note Travels<br>Through Robot<br>(intake to scoring)",
      "code": "hnt",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 1000
    },
    { "name": "Most Common<br>Speaker Shot?",
      "code": "mcs",
      "type": "radio",
      "choices": {
        "Subwoofer": "Subwoofer<br>",
        "Podium": "Podium<br>",
        "Between Stage & Amp": "Between<br>Stage & Amp<br>",
        "Between Stage & Source": "Between<br>Stage & Source<br>",
        "Other": "Other<br>",
        "No": "No<br>"
      },
      "defaultValue":"No"
    },
    { "name": "Comments",
      "code": "ssco",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 1000
    },
    { "name": "Farthest Shot",
      "code": "fs",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 1000
    },

    { "name": "Comments",
      "code": "fsco",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 1000
    },
    { "name": "Cycles Per Match",
      "code": "cpm",
      "type": "number",
      "defaultValue": "0"
    },
  ],
  "OverallStrategy": [
    { "name": "Starting Position",
      "code": "sp",
      "type": "radio",
      "choices": {
        "ns": "Near Source<br>",
        "is": "Infront of Speaker<br>",
        "bes": "Below Speaker<br>"
      },
      "defaultValue":"ns"
    },
    { "name": "Climb?",
      "code": "c",
      "type": "bool"
    },
    { "name": "How (LimeLight,<br>Extend Mechanism,<br>Pull Up)?",
      "code": "hc",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 1000
    },
    { "name": "Climb Time<br>(Seconds)",
      "code": "ct",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Climb With<br>Other Robots?",
      "code": "cwr",
      "type": "bool"
    },
    { "name": "Trap?",
      "code": "tr",
      "type": "bool"
    },
    { "name": "How?",
      "code": "ht",
      "type": "bool"
    },
    { "name": "Describe Usual<br?Auto",
      "code": "dua",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 5000
    },
    { "name": "Describe Usual<br>Teleop",
      "code": "dut",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 5000
    }
  ],
  "Wrap Up<br>(No Questions)": [
    { "name": "Knowledgeable<br>About Robot?",
      "code": "kab",
      "type": "radio",
      "choices": {
        "Yes": "Yes<br>",
        "Ok": "Okay<br>",
        "Bad": "Bad<br>"
      },
      "defaultValue":"Yes"
    },
    { "name": "Coopertive<br>(friendly)?",
      "code": "fri",
      "type": "bool"
    },
    { "name": "Final Comments?",
      "code": "fco",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 5000
    }
  ],
  "postmatch": [
  ]
}`;
