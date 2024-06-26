/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "yusuf80216",
  title: "Hi all, I'm Yusuf",
  subTitle: emoji(
    "Artificial Intelligence | Generative AI | Machine Learning | Data Science"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1HUDcIRO7_7PXqQcSpszdlQlh4pH3PM7D/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Yusuf80216",
  kaggle: "https://www.kaggle.com/yusufansari802",
  linkedin: "https://www.linkedin.com/in/yusuf-ansari/",
  gmail: "yusuf80216@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A DEVELOPER WHO WANTS TO EXPLORE DATA AND BUILD Generative AI Applications!",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fab fa-brain-circuit",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pillai College of Engineering, Mumbai University",
      logo: require("./assets/images/CollegeLogo.webp"),
      subHeader: "B. Tech in Computer Science | Specialization in Artificial Intelligence and Data Science | Honours Degree in BlockChain",
      duration: "July 2020 - May 2024 | CGPA - 8.5",
      desc: "Machine Learning | Artificial Intelligence | NLP | Software Engineering | Operating Systems | DBMS",
      // descBullets: [
      //   "",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Generative AI", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },  
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },  
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },  
    {
      Stack: "Deep Learning",
      progressPercentage: "75%"
    },
    {
      Stack: "Data Science", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "LLMs",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "AI Freelance",
      company: "Saleman",
      companylogo: require("./assets/images/freelance.jpg"),
      date: "April 2024 – Present",
      desc: "Working on building AI based solutions in Legal sector",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Team Leader | Artificial Intelligence Intern",
      company: "IIT Bombay",
      companylogo: require("./IIT.png"),
      date: "December 2023 – Present",
      desc: "Working on building AI based solutions in healthcare sector. Managing a team of 10 members",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Team Leader | ML Dev",
      company: "Smart India Hackathon",
      companylogo: require("./assets/images/sihLogo.webp"),
      date: "March 2022 – August 2022",
      desc: "Led the team, one of the few teams across the country to get qualified for Grand Finale for National Hackathon.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Software Developer Intern",
      company: "Alegria - The Festival of Joy",
      companylogo: require("./assets/images/alegriaLogo.webp"),
      date: "September 2022 – February 2023",
      desc: "Created the app for one of the largest college festival events in India. Developed the app using Flutter & Dart. Designed on Figma."
    },
    {
      role: "Team Leader | ML/Backend Dev",
      company: "Deep Blue Hackathon by Mastek",
      companylogo: require("./assets/images/deepblueLogo.webp"),
      date: "December 2022 – April 2023",
      desc: "Lead the team, qualified for Semi-finale. Worked as a Backend Developer in the team. Built necessary APIs for Machine Learning Models."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "NOTABLE PROJECTS THAT I HAVE BUILT SO FAR...",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Google Gemini Chatbot",
      projectDesc: "An AI based chatbot for question answering with custom system prompts, and Image-based and Document-based question answering",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Yusuf80216/Gemini-Bot"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Meetings Transcriber & Summarizer",
      projectDesc: "Meeting Transcription & Summary Generator Tool",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Yusuf80216/Meet---Transcriptor-Summarizer"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "QnATables: An Intelligent Question Answering System",
      projectDesc: "Question Answering System to answer question over tables in a document",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Yusuf80216/QnATables-An-Intelligent-Question-Answering-System"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "AI Farmer's Assistant",
      projectDesc: "An AI based Farmers Assistant tool that detects whether a crop is infected or healthy and gives farmers a suggestive crop for best production returns",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Yusuf80216/AI-Farmers-Assistant"
        }
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Tweets Sentiment Analyzer",
      projectDesc: "A sentiment analyzer model which can detect based on the given tweet input, whether it is a positive tweet or a negative tweet",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Yusuf80216/Tweets-Sentiment-Analysis/blob/main/Natural_Language_Processing_with_Disaster_Tweets.ipynb"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Email Spam Detection",
      projectDesc: "A Spam detector model, that classifies whether a particular message is spam or not.",
      footerLink: [
        {
          name: "View Code",
          url: "https://github.com/Yusuf80216/Email-Spam-Detection"
        }
      ]
    },
    // {
    //   image: require("./assets/images/Reminders_App.webp"),
    //   projectName: "Reminders' App",
    //   projectDesc: "A Basic reminder noting app, created using Flutter & Dart",
    //   footerLink: [
    //     {
    //       name: "View Code",
    //       url: "https://github.com/Yusuf80216/Reminders-App"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/To-Do_App.webp"),
    //   projectName: "To-Do App",
    //   projectDesc: "A Basic note taking app, created using Flutter & Dart",
    //   footerLink: [
    //     {
    //       name: "View Code",
    //       url: "https://github.com/Yusuf80216/TO-DO--APP"
    //     }
    //   ]
    // },{
    //   image: require("./assets/images/Calculator App.webp"),
    //   projectName: "Simple Calculator",
    //   projectDesc: "A simple operation solver calculator app, created using Flutter & Dart",
    //   footerLink: [
    //     {
    //       name: "View Code",
    //       url: "https://github.com/Yusuf80216/Calculator-App"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/Blood_Donation_App.webp"),
    //   projectName: "Blood Donation App",
    //   projectDesc: "A UI design implementation for a blood donation app, created using Flutter & Dart",
    //   footerLink: [
    //     {
    //       name: "View Code",
    //       url: "https://github.com/Yusuf80216/Blood-Donation_App"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  // subtitle:
  //   "Achievements & Certifications",

  achievementsCards: [
    {
      title: "Smart India Hackathon",
      subtitle:
        "Qualified Grand Finale of the National Hackathon",
      image: require("./assets/images/sihLogo.webp"),
      imageAlt: "SIH Logo",
      footerLink: [
        {
          name: "Internal Hackathon Certificate",
          url: "https://drive.google.com/file/d/1n71phnhszCJBnIQh8ARHiO3i5VKP63qB/view?usp=sharing"
        },
        {
          name: "Grand Finale Certificate",
          url: "https://drive.google.com/file/d/1mulcnxw9BezhqwFv1TOpnuyXN3gzrvW0/view?usp=sharing"
        },
        {
          name: "CSI Appreciation Certificate",
          url: "https://drive.google.com/file/d/1muXa220gBYdzGQSan17CBW2SodCIl93z/view?usp=sharing"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Deep Blue Hackathon",
      subtitle:
        "Qualified Semi-Finale of the hackathon",
      image: require("./assets/images/deepblueLogo.webp"),
      imageAlt: "Deep Blue Hackathon Logo",
      footerLink: [
        {
          name: "Semi-Finalist Certificate",
          url: "https://drive.google.com/file/d/1flCPPp2sGaght5Ilt46CDF20lXA2Luw0/view?usp=sharing"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@yusuf80216/flutter-introduction-7efed5caa565",
      title: "An introduction to Flutter Cross-Platform Development!",
      description:
        "An brief introduction and overview of what Flutter is, and how it is one of the best App Development technology!"
    },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaker Session",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "Flutter App Development",
      subtitle: "Conducted workshop on Flutter to 100+ engineering students across Mumbai",
      // slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.linkedin.com/feed/update/urn:li:activity:7051618187854962689/"
    },
    {
      title: "SIH Guidance",
      subtitle: "Guided 200+ students for Smart India Hackathon and received salutations from CSI (Computer Society of India)",
      // slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://csi.pce.ac.in/events/5-5"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 99672 94776",
  email_address: "yusuf80216@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
