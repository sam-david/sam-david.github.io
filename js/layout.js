$(document).ready(function() {
  setTopNav();
  setFooter();
  setProjects();
})

var topNav = [
'<div class="fixed">',
'<nav class="top-bar" data-topbar role="navigation">',
'    <ul class="title-area">',
'      <li class="name">',
'        <h1><a id="home" href="/index.html" class="nav-title fire-link">Sam David</a></h1>',
'      </li>',
'       <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->',
'      <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>',
'    </ul>',
'    <section class="top-bar-section">',
'      <!-- Right Nav Section -->',
'      <ul class="right">',
'        <li><a id="about" class="nav-button fire-link" href="/about.html">About</a></li>',
'        <li><a id="blog" class="nav-button fire-link" href="/blog.html">Blog</a></li>',
'        <li><a id="resume" class="nav-button fire-link" target="_blank" href="/Sam David Resume.pdf">Resume</a></li>',
'        <li><a id="projects" class="nav-button fire-link" href="/projects.html">Projects</a></li>',
'      </ul>',
'    </section>',
'  </nav>',
'</div>',
'<div class="top-nav-bottom-padding"></div>'
].join('');

var footer = [
'<footer class="wide-row">',
'    <div class="large-4 columns footer-box">',
'      <img src="/images/skills/mail.png" class="linkedin-footer-image">',
'      <a id="email" class="footer-text fire-links" href="mailto:sfd1987@gmail.com">E-mail Me</a>',
'    </div>',
'    <div class="large-4 columns footer-box">',
'      <img src="/images/skills/linkedin.png" class="linkedin-footer-image">',
'      <a id="linkedin" class="footer-text fire-links" href="http://www.linkedin.com/in/samdavid21/">LinkedIn</a>',
'    </div>',
'    <div class="large-4 columns footer-box">',
'      <img src="/images/skills/github.png" class="linkedin-footer-image">',
'      <a id="github" class="footer-text fire-link" href="https://github.com/sam-david">GitHub</a>',
'    </div>',
'  </footer>',
'<img src="/images/sanfranfooter.jpg" class="footer-image">'
].join('');

function Project(args) {
  this.name = args.name;
  this.url = args.url;
  this.image_path = args.image_path;
  this.id = args.id;
  this.description = args.description;
  this.tech = args.tech;
}

Project.prototype.templateHTML = function() {
  var projectHTML = ['<div class="row">',
    '<div class="large-6 large-centered columns project-title-box">',
      '<h2 class="project-title"><a id="' + this.id + '"  class="project-title fire-link" target="_blank" href="' + this.url + '">' + this.name + '</a></h2>',
    '</div>',
  '</div>',
  '<div class="row">',
    '<div class="large-8 large-centered columns project-link fire-link"><a id="' + this.id + '" class="fire-link" target="_blank" href="' + this.url + '"><img src="' + this.image_path + '" class="project-image"></a></div>',
  '</div>',
  '<div class="row">',
    '<div class="large-9 large-centered columns project-box">',
      '<h2 class="project-description">' + this.description + '</h2>',
      '<p class="tech-title-text">Tech Used:</p>',
      '<ul>']

  for (var t=0; t<this.tech.length; t++) {
    projectHTML.push("<li class='code-text'>" + this.tech[t] + "</li>")
  }

  projectHTML.push("</ul>");
  projectHTML.push("</div>");
  projectHTML.push("</div>");

  return projectHTML.join("");
}

var quickQuack = new Project({
  name: "Quick Quack Car Wash (Backend / Point of Sale)",
  url: "https://www.dontdrivedirty.com/",
  image_path: "",
  id: "quick-quack",
  description: "Point of Sale iOS iPad application created for car wash chain. Running on an Angular",
  tech: ['Ruby on Rails', 'AngularJS', 'ActiveAdmin', 'Ionic', 'Cardflight']
})

var eyesOn = new Project({
  name: "Eyes On",
  url: "",
  image_path: "",
  id: "eyes-on",
  description: "Video survallieance application that can be used by public safety or emergency personal to get 'eyes on the ground' for large events where there is concern for public safety. The app allows public safefy official on phone to stream video to a central backend Ruby on Rails application. Here an HQ can monitor the agents, inform, and react.",
  tech: ['Swift', 'Twilio Video SDK', 'Ruby on Rails']
})

var reu = new Project({
  name: "Real Estate Underwriter",
  url: "https://real-estate-underwriter.herokuapp.com",
  image_path: "images/projects/real-estate-underwriter.png",
  id: "real-estate-app",
  description: "Examine cash flow analysis and project returns of potential property investments. AngularJS based project. MongoDB used to store user info and their investment models with assumptions. Look up property info and map with Google API. Zillow API provides real estate data and mortgage rates.",
  tech: ['AngularJS', 'Node.js', 'MongoDB', 'Express', 'Google API', 'Zillow API']
})

var rj = new Project({
  name: "Rentjoy",
  url: "http://www.rentjoy.co/",
  image_path: "images/projects/rentjoy.png",
  description: "Rentjoy is a real estate start up focusing automating the property management process online. The platform can process tenant applications, accept rental payments, handle maintenance requests, and more.",
  tech: ["Ruby on Rails","Stripe API","Amazon Web Services","Heroku","Mixpanel"]
})

var edm = new Project({
  name: "EDM Index",
  url: "http://edm-index.herokuapp.com/",
  image_path: "images/projects/edm-index.png",
  description: "This project was made to interface with the Spotify API and OAuth flow. Using the SoundCloud API as well, users are able to play music and add songs to their Spotify playlists that they like.",
  tech: ["Ruby on Rails","JavaScript/jQuery","Spotify API","SoundCloud API","Twitter API"]
})

var codeCrush = new Project({
  name: "Code Crush",
  url: "http://code-crush.herokuapp.com/",
  image_path: "images/projects/code-crush.png",
  description: "Final project of DevBootcamp, a coding typing game with a full back-end using Node.js to save high scores. The game itself is built with Phaser.io. We chose Phaser.io because it is one of the most popular JavaScript based game engines for 2D games. We also use OAuth Login for Google and Facebook to allow users to login with these accounts. I was the team lead of this project which we made it about a week.",
  tech: ["M.E.A.N Stack:","MongoDB","Express","AngularJS","Node.js","Phaser.io (Game engine)"]
})

var tesla = new Project({
  name: "Tesla Car Comparison",
  url: "http://www.teslacomparison.com/",
  image_path: "images/projects/tesla-comp.png",
  description: "Using Edmunds.com's API (vast automotive database), this site compares the Tesla Model S to any car on the market across a variety of statistics. Inspired from my time as an employee at Tesla, I made this tool so people could see the costs and energy usage of the electric car versus their gas guzzlers. These were very common questions and concerns we would get from customers.",
  tech: ["HTML/CSS","JavaScript/jQuery","Foundation",]
})

var cocCalc = new Project({
  name: "Clash of Clans Calculator",
  url: "http://clashofclanscalculator.com/",
  image_path: "images/projects/coc-calc.png",
  description: "What started as my very first website, I have continued to iterate upon. Most recently, I introduced Angular.js to the site which vastly simplified my original vanilla JS version. It also made the UI components much more flexible and interactive. This was great practice to learn core CSS and HTML principles as there is plenty of formatting in the UI elements.",
  tech: ["HTML/CSS","JavaScript/jQuery","Angular.js","Firebase"]
})

var bikeFamous = new Project({
  name: "Famo.us Bike App",
  url: "http://sam-david.github.io/bike-famous.html",
  image_path: "images/projects/bike-famous.png",
  description: "My First app made with the Famo.us platform during a 3-day workshop. Still at very early stages of development but shows the power of Famo.us transitions and draggable properties.",
  tech: ["Famo.us (Rebranded Since)"]
})

function setTopNav() {
  $('nav').empty();
  $('nav').replaceWith(topNav);
}

function setFooter() {
  $('footer').empty();
  $('footer').replaceWith(footer);
}

function pageTitle(title) {
  return "<div class='row'> <div class='large-10 large-centered columns'><h1 id='pagetitle'>" + title + "</h1></div></div>"
}

function setProjects() {
  $projectContainer = $('.project-container');
  $projectContainer.append(pageTitle("Work Related Projects"))
  $projectContainer.append(reu.templateHTML());
  $projectContainer.append(eyesOn.templateHTML());
  $projectContainer.append(quickQuack.templateHTML());
  $projectContainer.append(rj.templateHTML());
  $projectContainer.append(pageTitle("Personal Projects"))
  $projectContainer.append(codeCrush.templateHTML());
  $projectContainer.append(edm.templateHTML());
  $projectContainer.append(tesla.templateHTML());
  $projectContainer.append(cocCalc.templateHTML());
  $projectContainer.append(pageTitle("Archived"))
  $projectContainer.append(bikeFamous.templateHTML());
}


