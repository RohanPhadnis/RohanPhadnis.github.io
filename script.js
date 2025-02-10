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


// Sample data (replace this with your actual experiences data)
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



// Sample data (replace this with your actual experiences data)
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




// Sample data (you will replace this with actual JSON data)
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
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
  	"link": "https://rust-lang.org/"
  },
  {
  	"name": "HTML",
  	"imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  	"link": "https://www.w3schools.com/html/html_intro.asp"
  },
  {
    "name": "JavaScript",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
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

