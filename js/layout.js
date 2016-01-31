$(document).ready(function() {
  setTopNav();
  setFooter();
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

function setTopNav() {
  $('nav').empty();
  $('nav').replaceWith(topNav);
}

function setFooter() {
  $('footer').empty();
  $('footer').replaceWith(footer);
}


