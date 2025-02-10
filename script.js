document.addEventListener("DOMContentLoaded", function () {
    let currentLocation = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});


/* ----- HOME PAGE -----*/
const socialsData = [
	{
		"name": "LinkedIn",
		"link": "https://www.linkedin.com/in/rohan-phadnis-0b82611b0/",
		"svg": '<svg xmlns="http://www.w3.org/2000/svg" fill="white" width="64" height="64" viewBox="0 0 50 50"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg>',
	},
	{
		"name": "GitHub",
		"link": "https://github.com/RohanPhadnis",
		"svg": '<svg role="img" fill="white" width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
	},
	{
		"name": "Gmail",
		"link": "mailto:rohan.phadnis.usa@gmail.com",
		"svg": '<svg role="img" fill="white" width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>',
	},
]

const socialsContainer = document.getElementById("socials");
if (socialsContainer !== null) {
	socialsData.forEach(social => {
		
		const link = document.createElement('a');
		link.href = social.link;
		link.innerHTML = social.svg;
		link.style.margin = "15px";
		socialsContainer.appendChild(link);
		
	});
}


/* ----- EXPERIENCES PAGE -----*/
const experiencesData = [
  {
    "title": "Research Intern",
    "company": "Georgia Tech",
    "start_date": "May 2024",
    "end_date": "Present",
    "location": "Atlanta, GA",
    "notes": [
      "Developing a distributed file system for research infrastructure.",
      "Implementation uses Apache Airavata Managed File Transfer protocol with FUSE, gRPC.",
      "Uses locking mechanisms to ensure consistency, while unifying various file transfer protocols."
    ]
  },
  {
    "title": "Software Engineer Intern",
    "company": "Vitrina.AI",
    "start_date": "May 2023",
    "end_date": "August 2023",
    "location": "San Francisco, California",
    "notes": [
      "Developed data mining algorithms using Selenium and BeautifulSoup HTML parsing.",
      "Developed LLM-based entity recognition pipeline for supply-chain insights extraction from unstructured text.",
      "Built document indexing and search solutions using vector search and text matching to power platform search engines using ElasticSearch for high speed hybrid search solutions."
    ]
  }
];

const experienceContainer = document.getElementById('experience-list');
if (experienceContainer !== null) {
experiencesData.forEach(experience => {
  const experienceItem = document.createElement('div');
  experienceItem.className = 'experience-item';

  const title = document.createElement('h3');
  title.textContent = `${experience.title} at ${experience.company}`;

  const dates = document.createElement('p');
  dates.textContent = `${experience.start_date} - ${experience.end_date}`;

  const location = document.createElement('p');
  location.textContent = `Location: ${experience.location}`;

  const notesList = document.createElement('ul');
  experience.notes.forEach(note => {
    const noteItem = document.createElement('li');
    noteItem.textContent = note;
    notesList.appendChild(noteItem);
  });

  experienceItem.appendChild(title);
  experienceItem.appendChild(dates);
  experienceItem.appendChild(location);
  experienceItem.appendChild(notesList);
  experienceItem.appendChild(document.createElement("br"));

  experienceContainer.appendChild(experienceItem);
});
}



/* ----- PROJECTS PAGE -----*/
const projectsData = [
  {
    "title": "Airavata MFT",
    "start_date": "May 2024",
    "end_date": "Present",
    "projectUrl": "https://airavata.apache.org/",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1000/1*8IEaaGlSIPAsTgVL7jNZVw.png",
    "notes": [
      "Developed a new API endpoint that improved data retrieval speed by 30%",
      "Worked with a team of 5 engineers to migrate legacy code to a modern stack",
      "Implemented unit tests that increased code coverage by 20%"
    ],
    "description": "Apache Airavata is a project under the Apache Software Foundation. It aims to unify all scientific computing workflows into one single tool, managing compute resources, storage, authentication, and several other microservices needed for researchers. I am contributing to this project as part of my research here at GT. I am specifically working on a distributed file system called Airavata-MFT and integrating it as a mount on personal computers."
  },
  {
  	"title": "AlphaMine",
  	"start_date": "October 2022",
  	"end_date": "October 2022",
  	"projectUrl": "https://github.com/AbstractVectors/AlphaMine",
  	"imageUrl": "https://raw.githubusercontent.com/AbstractVectors/AlphaMine/refs/heads/main/AlphaMine%20Logo.png",
  	"notes": [
  		"Won 1st place out of 45 teams in the HackGT 2022 in the Cheat Code Hacks category.",
  		"Built an open source web-mining framework for compiling labeled text and image datasets for machine learning.",
  		"Mined data from Bing search engine results using Selenium, URLLib, BeautifulSoup."
  	],
  	"description": "AlphaMine is an open-source web mining engine that is able to compile labeled datasets for Machine Learning developers. All the user has to do is input a file with all of the different objects they want in their classifier. AlphaMine will then use search engines to mine relevant text and image data for that classification task. I built AlphaMine with Shikhar Ahuja, Alex Wang, and Jon Wang -- some of my closest friends. This was our project for HackGT 2022 and won the 1st place in the CheatCodeHacks category."
  }
];

const projectsContainer = document.getElementById('project-list');
if (projectsContainer !== null) {
projectsData.forEach(project => {
  const projectItem = document.createElement('div');
  projectItem.className = 'project-item';

  const title = document.createElement('h3');
  title.textContent = `${project.title}`;

  const dates = document.createElement('p');
  dates.textContent = `${project.start_date} - ${project.end_date}`;
  
  const link = document.createElement('a');
  link.textContent = `${project.title} Home Page`;
  link.href = `${project.projectUrl}`;
  
  const image = document.createElement('img');
  image.src = project.imageUrl;
  image.alt = `${project.title} logo`
  image.className = 'project-image';
  

  const notesList = document.createElement('ul');
  project.notes.forEach(note => {
    const noteItem = document.createElement('li');
    noteItem.textContent = note;
    notesList.appendChild(noteItem);
  });
  
  const description = document.createElement('p');
  description.textContent = `${project.description}`;

  projectItem.appendChild(title);
  projectItem.appendChild(dates);
  projectItem.appendChild(link);
  projectItem.appendChild(document.createElement('br'));
  projectItem.appendChild(image);
  // projectItem.appendChild(notesList);
  projectItem.appendChild(description);
  projectItem.appendChild(document.createElement("br"));

  projectsContainer.appendChild(projectItem);
});
}




/* ----- SKILLS PAGE -----*/
const languagesData = [
  {
  	"name": "C",
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
  	"link": "https://en.cppreference.com/w/c"
  },
  {
  	"name": "C++",
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  	"link": "https://en.cppreference.com/w/cpp"
  },
  {
    "name": "Python",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0a/Python.svg",
    "link": "https://www.python.org"
  },
  {
  	"name": "Java",
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  	"link": "https://docs.oracle.com/javase/8/docs/technotes/guides/language/#:~:text=The%20Java%E2%84%A2%20Programming%20Language,the%20Java%20Virtual%20Machine%20Specification."
  },
  {
  	"name": "Go",
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
  	"link": "https://go.dev/"
  },
  {
  	"name": "Rust",
  	"imageUrl": "https://www.rust-lang.org/logos/rust-logo-64x64.png",
  	"link": "https://rust-lang.org/"
  },
  {
  	"name": "HTML",
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  	"link": "https://www.w3schools.com/html/html_intro.asp"
  },
  {
    "name": "JavaScript",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg",
    "link": "https://www.javascript.com"
  },
  {
  	"name": "CSS",
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  	"link": "https://www.w3schools.com/css/default.asp",
  }
];

const languagesContainer = document.getElementById('languages-container');
if (languagesContainer !== null) {
languagesData.forEach(language => {
  const languageItem = document.createElement('div');
  languageItem.className = 'language-item';

  const anchor = document.createElement('a');
  anchor.href = language.link;
  anchor.target = '_blank';

  const img = document.createElement('img');
  img.src = language.imageUrl;
  img.alt = language.name;

  const label = document.createElement('label');
  label.textContent = language.name;

  anchor.appendChild(img);
  languageItem.appendChild(anchor);
  languageItem.appendChild(label);

  languagesContainer.appendChild(languageItem);
});
}

