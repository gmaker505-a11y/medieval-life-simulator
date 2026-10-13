/* Event catalogue: edit this file to add and balance life events. */
window.MEDIEVAL_EVENTS = [
  {
    "title": "A travelling peddler",
    "text": "A peddler arrives with bright ribbons, curious trinkets and rumours from distant roads.",
    "choices": [
      [
        "🪙",
        "Trade a few coins for a useful tool",
        "money",
        -8,
        "The tool may serve you well."
      ],
      [
        "👂",
        "Listen to the rumours",
        "intellect",
        2,
        "You learn something useful about the wider world."
      ],
      [
        "🚶",
        "Move along",
        "happiness",
        1,
        "You spend the afternoon in peace."
      ]
    ],
    "id": "a-travelling-peddler",
    "category": "market",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A village feast",
    "text": "The harvest is in, and the village gathers around a long table beneath lanterns.",
    "choices": [
      [
        "🍲",
        "Join the feast",
        "happiness",
        9,
        "Good food and company lift your spirits."
      ],
      [
        "🤝",
        "Make useful connections",
        "reputation",
        5,
        "A few villagers remember your kindness."
      ],
      [
        "💰",
        "Sell food and drink",
        "money",
        12,
        "You turn the crowd into a tidy profit."
      ]
    ],
    "id": "a-village-feast",
    "category": "community",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A difficult neighbour",
    "text": "A neighbour claims your family owes them a debt. The whole lane is watching.",
    "choices": [
      [
        "🗣️",
        "Talk it out calmly",
        "charm",
        3,
        "A calm conversation keeps the dispute from growing."
      ],
      [
        "⚔️",
        "Threaten to settle it by force",
        "health",
        -7,
        "The argument becomes a scuffle."
      ],
      [
        "🪙",
        "Pay a small settlement",
        "money",
        -10,
        "The neighbour leaves, though the cost stings."
      ]
    ],
    "id": "a-difficult-neighbour",
    "category": "relationships",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A letter from the lord",
    "text": "A sealed letter calls for able hands at the manor. It could be an opportunity—or trouble.",
    "choices": [
      [
        "🏰",
        "Offer your service",
        "reputation",
        6,
        "The steward takes note of your willingness."
      ],
      [
        "📜",
        "Ask what the work involves",
        "intellect",
        2,
        "You learn the details before committing."
      ],
      [
        "🙈",
        "Stay out of it",
        "happiness",
        -1,
        "You avoid the risk, but wonder what might have been."
      ]
    ],
    "id": "a-letter-from-the-lord",
    "category": "nobility",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A sick villager",
    "text": "A family nearby is struggling with a fever. They ask whether you can help.",
    "choices": [
      [
        "🫶",
        "Help them with what you can",
        "reputation",
        8,
        "The family will remember your generosity."
      ],
      [
        "🧪",
        "Search for herbs",
        "intellect",
        3,
        "You learn about a useful local remedy."
      ],
      [
        "🚪",
        "Keep your distance",
        "health",
        1,
        "You avoid exposure, though some neighbours judge you."
      ]
    ],
    "id": "a-sick-villager",
    "category": "community",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A tempting shortcut",
    "text": "You spot an unattended purse near the market well. Nobody seems to have noticed it.",
    "choices": [
      [
        "🪙",
        "Take it quietly",
        "money",
        18,
        "The coins are useful, but you feel eyes on your back."
      ],
      [
        "📣",
        "Find its owner",
        "reputation",
        9,
        "The grateful owner speaks well of you."
      ],
      [
        "🚶",
        "Leave it alone",
        "happiness",
        2,
        "You walk away with a clear conscience."
      ]
    ],
    "id": "a-tempting-shortcut",
    "category": "crime",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A hard winter",
    "text": "The cold settles in early. Wood is scarce, food costs more and everyone is anxious.",
    "choices": [
      [
        "🪵",
        "Spend savings on supplies",
        "money",
        -12,
        "Your stores should see you through."
      ],
      [
        "🤝",
        "Share resources with neighbours",
        "reputation",
        7,
        "The village grows closer in a difficult season."
      ],
      [
        "🥶",
        "Make do with little",
        "health",
        -6,
        "You get through the worst of it, but the cold takes its toll."
      ]
    ],
    "id": "a-hard-winter",
    "category": "survival",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A chance to learn",
    "text": "A travelling scholar offers lessons in exchange for help with their luggage.",
    "choices": [
      [
        "📚",
        "Take the lessons",
        "intellect",
        8,
        "You gain knowledge that may open new doors."
      ],
      [
        "💪",
        "Ask for physical training instead",
        "health",
        5,
        "The scholar introduces you to a retired soldier."
      ],
      [
        "💼",
        "Ask about paid work",
        "money",
        8,
        "You earn a little coin carrying books and supplies."
      ]
    ],
    "id": "a-chance-to-learn",
    "category": "education",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A public tournament",
    "text": "The lord hosts a tournament. Crowds cheer, wagers fly and reputations can change overnight.",
    "choices": [
      [
        "🛡️",
        "Enter the contest",
        "health",
        -4,
        "You leave bruised, but people admire your courage."
      ],
      [
        "🎲",
        "Place a small wager",
        "money",
        8,
        "A lucky guess brings a modest return."
      ],
      [
        "👀",
        "Watch and make introductions",
        "reputation",
        5,
        "You meet people who may prove useful."
      ]
    ],
    "id": "a-public-tournament",
    "category": "combat",
    "weight": 1,
    "minAge": 13,
    "maxAge": 120
  },
  {
    "title": "A rumour of war",
    "text": "Riders bring word that neighbouring lords are gathering their forces.",
    "choices": [
      [
        "⚔️",
        "Volunteer for service",
        "reputation",
        8,
        "Your willingness to serve earns notice."
      ],
      [
        "🌾",
        "Secure food and supplies",
        "money",
        -7,
        "You prepare your household for uncertain times."
      ],
      [
        "🕊️",
        "Encourage peace",
        "happiness",
        3,
        "You do what you can to keep fear from spreading."
      ]
    ],
    "id": "a-rumour-of-war",
    "category": "world",
    "weight": 1,
    "minAge": 13,
    "maxAge": 120
  },
  {
    "title": "An unexpected inheritance",
    "text": "A distant relative has died and left a small sum to your family.",
    "choices": [
      [
        "🏠",
        "Invest in your home",
        "money",
        -10,
        "Your home becomes a little more secure."
      ],
      [
        "🪙",
        "Keep every coin",
        "money",
        22,
        "The unexpected money strengthens your purse."
      ],
      [
        "🍞",
        "Share with those in need",
        "reputation",
        10,
        "Your generosity earns lasting goodwill."
      ]
    ],
    "id": "an-unexpected-inheritance",
    "category": "wealth",
    "weight": 1,
    "minAge": 0,
    "maxAge": 120
  },
  {
    "title": "A private invitation",
    "text": "Someone influential invites you to a private supper. A new alliance may be possible.",
    "choices": [
      [
        "🍷",
        "Attend and be charming",
        "reputation",
        7,
        "You leave with a promising new connection."
      ],
      [
        "🎁",
        "Bring a thoughtful gift",
        "money",
        -6,
        "The gesture is well received."
      ],
      [
        "🛏️",
        "Decline and rest",
        "health",
        4,
        "A quiet evening does you good."
      ]
    ],
    "id": "a-private-invitation",
    "category": "nobility",
    "weight": 1,
    "minAge": 16,
    "maxAge": 120
  }
];
