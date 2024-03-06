import m from "mithril";

const skills = [
  {
    "name": "Python",
    "intro": "It's been over 10 years since I first learned python in my 'Intro to Computer Science 1' at American University. How time flies.",
    "confidence": 10,
    "years": 10,
    "daily": "yes",
  },
  {
    "name": "Django",
    "intro": "Since I started working as a backend web developer in 2019, Django has been by my side every day of the way.",
    "confidence": 10,
    "years": 5,
    "daily": "yes",
  },
  {
    "name": "Django Rest Framework",
    "intro": "At first I hated it. Now I can't imagine building Django APIs without it.",
    "confidence": 9,
    "years": 2,
    "daily": "yes",
  },
  {
    "name": "OpenSearch",
    "intro": "One of the most fun tools to use BY FAR.",
    "confidence": 7,
    "years": 2,
    "daily": "no",
  },
  {
    "name": "React / React Native",
    "intro": "I've worked on one ios app. I primarily worked on the backend, but did play around with the UI.",
    "confidence": 2,
    "years": 1,
    "daily": "no",
  }
];

var Skills = {
  view: function (vnode) {
    return m("div",
      skills.map((skill, index) => {
        return [
          m("h5", skill["name"]),
          m("p", skill["intro"]),
          m("p", "confidence: " + skill["confidence"] + " / 10"),
          m("p", "years: " + skill["years"]),
          m("p", "daily use? " + skill["daily"]),
          m("hr")
        ]
      })
    )
  }
}

export default Skills;