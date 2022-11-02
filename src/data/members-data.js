const membersData = {
  title: "Members",
  image: {
    caption: "Lab Photo 2022",
    src: "/images/LabPhoto.jpg",
  },
  members: [
    [
      {
        src: process.env.PUBLIC_URL + "/images/anitha.gif",
        name: "Anitha Pasupathy, Ph.D.",
        title: "Principal Investigator",
        blurb: "",
      },
      {
        src: process.env.PUBLIC_URL + "/images/amber.jpg",
        name: "Amber Fyall, M.Sc.",
        title: "Research Technician",
        blurb: "",
      },
    ],
    [
      {
        src: process.env.PUBLIC_URL + "/images/taekjun.jpg",
        name: "Taekjun Kim, Ph.D.",
        title: "Acting Instructor",
        blurb: "",
      },
      {
        src: process.env.PUBLIC_URL + "/images/scientist.jpg",
        name: "Dean Pospisil",
        title: "Postdoctoral Fellow (joint with Jonathan Pillow)",
        blurb: "",
      },
      
    ],
    [
      {
        src: process.env.PUBLIC_URL + "/images/tony-b.jpg",
        name: "Tony Bigelow",
        title: "Grad Student Neuroscience",
        blurb: "",
      },
      {
        src: process.env.PUBLIC_URL + "/images/scientist.jpg",
        name: "Rohit Kamath ",
        title: "Grad Student Neuroscience",
        blurb: "",
      },
    ],
    [
      {
        src: process.env.PUBLIC_URL + "/images/scientist.jpg",
        name: "Erin Kempkes",
        title: "Research Scientist",
        blurb: "",
      },
      {
        src: process.env.PUBLIC_URL + "/images/scientist.jpg",
        name: "Kayla Kerr",
        title: "Research Scientist",
        blurb: "",
      },
    ],
    [
      {
        src: process.env.PUBLIC_URL + "/images/tony-y.jpg",
        name: "Tony Yuan",
        title: "Undergrad, CS",
        blurb: "",
      },
    ],
  ],
  previousMembers: [
    {
      classification: "Graduate Students",
      people: [
        { name: "Phil Harding (NeuBeh)", caption: "now software developer " },
        { name: "Marci Kalif (Masters, Applied Math)", caption: "" },
        {
          name: "Dina Popovkina (Neuro)",
          caption: "now postdoc, UW psychology",
        },
        {
          name: "Timothy D Oleskiw (Applied Math)",
          caption: "now postdoc NYU ",
        },
      ],
    },
    {
      classification: "Postdoctoral Fellows ",
      people: [
        { name: "Anarta Ghosh", caption: "now Research Scientist, Ireland " },
        {
          name: "Yasmine El-Shamayleh",
          caption: "now Assistant Professor, Columbia Univ. ",
        },
        {
          name: "Majid Moshtagh",
          caption: "now Research Associate, King's College London ",
        },
        {
          name: "Hannah Choi",
          caption: "now Assistant Professor, Georgia Tech ",
        },
        {
          name: "Tomoyuki Namima",
          caption: "now Assistant Professor, Osaka University, Japan ",
        },
      ],
    },
    {
      classification: "Undergraduate Students",
      people: [
        {
          name: "Polina Zamarashkina (UW; Math & CS)",
          caption: "",
        },
        {
          name: "Alex Rockhill (Neurobiology)",
          caption: "",
        },
        {
          name: "Celia Gorbman (Neurobiology)",
          caption: "",
        },
        {
          name: "Kali Coubrough (BioEngineering)",
          caption: "",
        },
        {
          name: "Natalia Owen (Math/Economics)",
          caption: "",
        },
      ],
    },
    {
      classification: "Post-Baccalaureate Trainees",
      people: [
        {
          name: "Jalal Baruni",
          caption: "MD/PhD Columbia University",
        },
        {
          name: "Yoshito Kosai",
          caption: "MD Case Western",
        },
        {
          name: "Brittany Bushnell",
          caption: "PhD NYU",
        },
        {
          name: "Vinh Le",
          caption: "",
        },
        {
          name: "Polina Zamarashkina",
          caption: "",
        },
      ],
    },
  ],
};

export default membersData;
