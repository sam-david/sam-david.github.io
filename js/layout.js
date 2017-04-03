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

function projectTemplateHTML(name, url, image_path, id, description, tech_array) {


}

var reu = new Project({
  name: "Real Estate Underwriter",
  url: "https://real-estate-underwriter.herokuapp.com",
  image_path: "images/projects/real-estate-underwriter.png",
  id: "real-estate-app",
  description: "Examine cash flow analysis and project returns of potential property investments. AngularJS based project. MongoDB used to store user info and their investment models with assumptions. Look up property info and map with Google API. Zillow API provides real estate data and mortgage rates.",
  tech: ['AngularJS', 'Node.js', 'MongoDB', 'Express', 'Google API', 'Zillow API']
})

function setTopNav() {
  $('nav').empty();
  $('nav').replaceWith(topNav);
}

function setFooter() {
  $('footer').empty();
  $('footer').replaceWith(footer);
}

function setProjects() {
  console.log(reu.templateHTML())
  $('.project-container').append(reu.templateHTML());
}


