var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2024",
  "page_title": "Crescendo",
  "pitConfig": "true",
  "prematch": [
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
    { "name": "Scoring Method<br> (ask them)",
      "code": "sm",
      "type": "text",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Main Form<br> of Intake",
      "code": "i",
      "type": "radio",
      "choices": {
        "gu": "Ground (Under Bumper)<br>",
        "ga": "Ground (Above Bumper)<br>",
        "so": "Source<br>"
      },
      "defaultValue":"so"
    },
    { "name": "Score on Amp?",
      "code": "sa",
      "type": "bool"
    },
    { "name": "How?",
      "code": "hsa",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Score on Speaker?",
      "code": "ss",
      "type": "bool"
    },
    { "name": "How?",
      "code": "hss",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Best Shot",
      "code": "bs",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Farthest Shot",
      "code": "fs",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Cycles Per Match",
      "code": "cpm",
      "type": "number",
      "defaultValue": "0"
    },
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
    { "name": "How?",
      "code": "hc",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
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
    { "name": "Observations(No More Questions)<br><br><br>Wiring<br><br><br><br><br><br><br><br><br>",
      "code": "w",
      "type": "radio",
      "choices": {
        "fantastic": "Fantastic<br>",
        "great": "Great<br>",
        "good": "Good<br>",
        "okay": "Okay<br>",
        "not great": "Not Great<br>",
        "bad": "Bad<br>",
        "terrible": "Terrible<br>"
      },
      "defaultValue":"ok"
    },
    { "name": "Bumper<br>Quality",
      "code": "bq",
      "type": "radio",
      "choices": {
        "fantastic": "Fantastic<br>",
        "great": "Great<br>",
        "good": "Good<br>",
        "okay": "Okay<br>",
        "not great": "Not Great<br>",
        "bad": "Bad<br>",
        "terrible": "Terrible<br>"
      },
      "defaultValue":"ok"
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
    { "name": "How is Battery<br>Attached",
      "code": "hba",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Who Answered",
      "code": "wa",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Answer<br>Quality",
      "code": "aq",
      "type": "radio",
      "choices": {
        "fantastic": "Fantastic<br>",
        "great": "Great<br>",
        "good": "Good<br>",
        "okay": "Okay<br>",
        "not great": "Not Great<br>",
        "bad": "Bad<br>",
        "terrible": "Terrible<br>"
      },
      "defaultValue":"ok"
    },
    { "name": "How Does<br>Robot Operate<br>(Just Try)",
      "code": "ro",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Potential Failures",
      "code": "pf",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "How Stable<br>(Just Try)",
      "code": "hs",
      "type": "text",
      "defaultValue": "N/A",
      "size": 20,
      "maxSize": 100
    },
    { "name": "Take a Picture?<br>(Copy and Paste into<br>Google Sheets)",
      "code": "p",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "defaultValue": "none",
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
