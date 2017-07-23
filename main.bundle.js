webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%;\n  border: solid #2C7396 2px;\n}\n\n.header-image {\n\n}\n\n.page-title {\n  color: #0C1828;\n  text-decoration: underline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <h1 class=\"page-title\">About Me</h1>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col s12 m7\">\n    <p>The journey to San Francisco did not happen overnight. Originally I am from Wilmington, DE, a suburban town just outside of Philadelphia, Pennsylvania. As far as programming goes, in middle school I started experimenting with BASIC language on my TI-83 calculator. I made simple applications like a homework logger and a casino game but nothing too robust. In high school, I started working with Visual Basic creating smaller applications. I enjoyed math and science in high school and found myself naturally drawn towards programming.</p><p class=\"about-text\">For college, I made my way to Los Angeles to attend the University of Southern California. My major, Interactive Entertainment, was in the School of Cinematic Arts. It focused mainly on video game design but also had elements of cinema and television. Many of my course projects involved designing board games and video game programs. It was here where I realized I enjoy both the creative front-end aspect of design and the back-end programming elements necessary to support an application.</p>\n    <p class=\"about-text\">After college, I worked at Activision Publishing, the publishers of <span class=\"underline\">Call of Duty</span>, as an intern on a new game called <span class=\"underline\">Skylanders</span>. I enjoyed the experience, because it was valuable working in a dynamic environment like that. I knew even before the internship that the video game industry was not for me at that point in my life. If I was going to work with video games I would rather be a developer than working in production.</p>\n  </div>\n  <div class=\"col s12 m5\">\n    <img src=\"assets/images/grand-canyon.jpg\">\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n\n      <p class=\"about-text\">\n      I found myself moving towards real estate as so many of my friends were. I started as an analyst for a startup real estate investment firm. The firm invested in apartment complexes all over California. I created financial models in Microsoft Excel to show whether properties were good potential ventures. I also had to do a wide variety of other tasks because it was such a small company. This was a great learning experience as well because the company was so small and vertical. I had full accessibility to everyone who worked there. I learned lots of things regarding managing a small business from property accounting to developing a budget. However, after a year and a half in real estate, I could sense myself losing interest in the field. I desired something a little more creative.</p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12 m5\">\n    <img src=\"assets/images/berlin-wall.jpg\">\n  </div>\n  <div class=\"col s12 m7\">\n    <p class=\"about-text\">\n    I started creating websites for family members using Squarespace.com to set up online stores for their artwork. Squarespace is very powerful, and the sites look great. Feel free to check them out at <a id='lisa' class='fire-link' href=\"http://lisa-david.squarespace.com/\">Lisa-David.com</a> and <a id='kristina' class='fire-link' href=\"https://kristina-zallinger.squarespace.com/\">KristinaZallinger.com</a>. Soon though, I felt compelled to make more custom sites where I could design the layouts from scratch. I started using Lynda.com to teach myself HTML, CSS, JavaScript, and Photoshop. As an experiment, I made my first site <a id='coc-calc' class='fire-link' target='_blank' href=\"http://clashofclanscalculator.com/\">ClashOfClansCalculator.com</a> around the popular mobile game, Clash of Clans. It was kind of ambitious but it proved to be a worthy learning experience. I really enjoyed the entire process of designing a site from start to finish. This proved that I want to pursue web development as a career.</p>\n    <p class=\"about-text\">\n    I continued to practice by making additional sites for myself and others. I know that in order to become a good web developer you need more and more experience. Teaching myself online using Lynda.com was great, but I desired to be around others in classroom environment. Working on projects and discussing ideas is something I missed from my college experience.</p>\n    <p class=\"about-text\">\n    This is why I decided to attend DevBootcamp and get a head start on a career as a web developer. DevBootcamp provided me with a solid environment to learn as much as I could within a short period of time. The program consisted of 10 weeks of preparation (Phase 0) reviewing basic OO concepts and fundamentals of Ruby and JavaScript. Following the 10 weeks of prep, we spent 9 weeks on site programming for more than 1,000 hours! It was a great experience as I believe there is no better way to learn this stuff than to just dive right into it. It is up to me now to use what I have learned and apply it in the real world!</p>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n\n    <p class=\"about-text\">\n  Personally, I love to stay active and explore the world around me. Some of the photos you see on this site are from trips to Germany, Israel, Prague, and even Utah. I enjoy traveling, but now it is time for me to focus on my career. To stay in shape I bike quite often around the city. When I'm not biking, I golf, ping-pong, practice yoga, ski, play lacrosse, tennis, and racquetball. As far as sports teams go, I'm very partial to Philadelphia teams because I grew up in that area. I like to cook my own meals whenever I can, not just to save money but because I enjoy creating all kinds of new dishes. I like to create things in as many ways as I can in my daily life.</p>\n  </div>\n</div>\n\n<img src=\"assets/images/sanfranfooter.jpg\" class=\"header-image\">\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blogs_blogs_component__ = __webpack_require__("../../../../../src/app/blogs/blogs.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        redirectTo: '/skills',
        pathMatch: 'full'
    },
    {
        path: 'skills',
        component: __WEBPACK_IMPORTED_MODULE_5__skills_skills_component__["a" /* SkillsComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */]
    },
    {
        path: 'resume',
        component: __WEBPACK_IMPORTED_MODULE_4__resume_resume_component__["a" /* ResumeComponent */]
    },
    {
        path: 'blogs',
        component: __WEBPACK_IMPORTED_MODULE_6__blogs_blogs_component__["a" /* BlogsComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  width: 90%;\n}\n\n.container {\n  width: 85%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skills_components_skill_card_component__ = __webpack_require__("../../../../../src/app/skills/components/skill-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__skills_components_skill_box_component__ = __webpack_require__("../../../../../src/app/skills/components/skill-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__skills_components_third_party_box_component__ = __webpack_require__("../../../../../src/app/skills/components/third-party-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__blogs_blogs_component__ = __webpack_require__("../../../../../src/app/blogs/blogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__projects_components_project_card_component__ = __webpack_require__("../../../../../src/app/projects/components/project-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* unused harmony export DoublePipe */
/* unused harmony export TriplePipe */
/* unused harmony export EachSlicePipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var DoublePipe = (function () {
    function DoublePipe() {
    }
    DoublePipe.prototype.transform = function (value) {
        var newArr = [];
        for (var i = 0; i < value.length; i += 2) {
            newArr.push(value.slice(i, i + 2));
        }
        return newArr;
    };
    return DoublePipe;
}());
DoublePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* Pipe */])({ name: 'doubles' })
], DoublePipe);

var TriplePipe = (function () {
    function TriplePipe() {
    }
    TriplePipe.prototype.transform = function (value) {
        var newArr = [];
        for (var i = 0; i < value.length; i += 3) {
            newArr.push(value.slice(i, i + 3));
        }
        return newArr;
    };
    return TriplePipe;
}());
TriplePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* Pipe */])({ name: 'triples' })
], TriplePipe);

var EachSlicePipe = (function () {
    function EachSlicePipe() {
    }
    EachSlicePipe.prototype.transform = function (value, chunk) {
        var newArr = [];
        for (var i = 0; i < value.length; i += chunk) {
            newArr.push(value.slice(i, i + chunk));
        }
        return newArr;
    };
    return EachSlicePipe;
}());
EachSlicePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* Pipe */])({ name: 'each_slice' })
], EachSlicePipe);

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__skills_components_skill_card_component__["a" /* SkillCardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__skills_components_skill_box_component__["a" /* SkillBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_9__skills_components_third_party_box_component__["a" /* ThirdPartyBoxComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__blogs_blogs_component__["a" /* BlogsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__resume_resume_component__["a" /* ResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__projects_components_project_card_component__["a" /* ProjectCardComponent */],
            TriplePipe,
            DoublePipe,
            EachSlicePipe,
            __WEBPACK_IMPORTED_MODULE_15__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_materialize__["a" /* MaterializeModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/blogs/blogs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blogs/blogs.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  blogs works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/blogs/blogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogsComponent = (function () {
    function BlogsComponent() {
    }
    BlogsComponent.prototype.ngOnInit = function () {
    };
    return BlogsComponent;
}());
BlogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-blogs',
        template: __webpack_require__("../../../../../src/app/blogs/blogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blogs/blogs.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogsComponent);

//# sourceMappingURL=blogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-footer {\n  background-color: #E53600;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Hiring Information</h5>\n        <p class=\"grey-text text-lighten-4\">If you think we could work together, or have an exciting opportunity you want to share, please reach out!</p>\n      </div>\n      <div class=\"col l4 offset-l2 s12\">\n        <h5 class=\"white-text\">Links</h5>\n        <ul>\n          <li><a class=\"grey-text text-lighten-3\" href=\"mailto:sfd1987@gmail.com\">Email</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"http://www.linkedin.com/in/samdavid21/\">LinkedIn</a></li>\n          <li><a class=\"grey-text text-lighten-3\" href=\"https://github.com/sam-david\">Github</a></li>\n          <li><a class=\"grey-text text-lighten-3\" [routerLink]=\"['resume']\">Resume</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n    <span class=\"right\">© 2017</span>\n\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav .brand-logo {\n  padding-left: 5px;\n  font-size: 3.5em;\n  color: #0c213e;\n  font-weight: bold;\n}\n\n@media screen and (max-width: 600px) {\n    nav .brand-logo {\n        font-size: 2.5em;\n    }\n}\n\nnav a {\n  font-size: 1em;\n}\n\nnav ul a {\n  color: #D4E5F5;\n}\n\n.nav-wrapper {\n  background-color: #2C7396;\n}\n\n.nav-block {\n  height: 3px;\n  background-color: #449AC5;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"navbar-fixed\">\n        <nav>\n            <div class=\"nav-wrapper\">\n                <a [routerLink]=\"['']\" class=\"brand-logo\">Sam David</a>\n                <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n                <ul class=\"right hide-on-med-and-down\">\n                    <li> <a [routerLink]=\"['projects']\">Projects</a></li>\n                    <li> <a [routerLink]=\"['about']\">About</a></li>\n                    <li> <a [routerLink]=\"['resume']\">Resume</a></li>\n                </ul>\n            </div>\n            <div class='row'>\n              <div class=\"col s12 nav-block\">\n              </div>\n            </div>\n        </nav>\n    </div>\n    <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li><a [routerLink]=\"['projects']\"><i class=\"fa fa-archive\" aria-hidden=\"true\"></i>Projects</a></li>\n        <li><a [routerLink]=\"['about']\">About</a></li>\n        <li><a [routerLink]=\"['resume']\">Resume</a></li>\n    </ul>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/components/project-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skill-icon, .skill-icon-large {\n  /*display: block;*/\n  -webkit-margin-before: 1em;\n  /*-webkit-margin-after: 1em;*/\n  /*-webkit-margin-start: 0px;*/\n  /*-webkit-margin-end: 0px;*/\n}\n\n.card-action {\n  background-color: #D4E5F5;\n}\n\n.card-action .col {\n  text-align: center;\n}\n\n.skill-icon {\n  width: 25px;\n}\n\n.skill-icon-large {\n  width: 50px;\n}\n\n.row {\n  margin-bottom: 0;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\n  /*color: #ED4246;*/\n}\n\n.card .card-title {\n  font-size: 34px;\n  font-weight: 500;\n  color: #0c213e !important;\n}\n\n.fa {\n  margin-left: 5%;\n}\n\n.card-content {\n  background-color: #449AC5;\n}\n\n.card-image img {\n  border: solid #2C7396 1px;\n}\n\n.heading {\n  font-weight: bold;\n  font-size: 1.2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/components/project-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=\"assets/images/projects/{{ imagePath }}\">\n  </div>\n  <div class=\"card-content\">\n    <span class=\"card-title activator grey-text text-darken-4\">{{ title }}<i class=\"material-icons right\">more_vert</i></span>\n  </div>\n  <div class=\"card-action\">\n    <div class=\"row\">\n      <div class=\"col s3\" *ngIf=\"publicLink != ''\">\n        <p><a href=\"{{ publicLink }}\" target=\"_blank\">Link    <i class=\"fa fa-external-link\" aria-hidden=\"true\"></i></a></p>\n      </div>\n      <div class=\"col s1\" *ngIf=\"railsUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/rails.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Ruby on Rails\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"angularUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/angularjs.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"AngularJS\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"jsUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/js.png\"  data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"JavaScript\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"phaserUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/phaser2.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Phaser.io\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"laravelUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/laravel.svg\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Laravel\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"famousUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/famous.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Famo.us\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"swiftUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/swift.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"iOS Swift\">\n      </div>\n      <div class=\"col s2\" *ngIf=\"ionicUsed\">\n        <img class=\"skill-icon-large tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/ionic.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Ionic\">\n      </div>\n      <div class=\"col s2\" *ngIf=\"nodeUsed\">\n        <img class=\"skill-icon-large tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/node-js.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Node.js\">\n      </div>\n      <div class=\"col s2\" *ngIf=\"nodeUsed\">\n        <img class=\"skill-icon-large tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/mongodb.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"MongoDB\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"herokuUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/heroku.svg\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Heroku\">\n      </div>\n      <div class=\"col s2\" *ngIf=\"awsUsed\">\n        <img class=\"skill-icon-large tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/aws.png\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"Amazon Web Services\">\n      </div>\n      <div class=\"col s1\" *ngIf=\"postgresUsed\">\n        <img class=\"skill-icon tooltipped\" materialize=\"tooltip\" src=\"assets/images/skills/postgres.svg\" data-position=\"bottom\" data-delay=\"50\" data-tooltip=\"PostgreSQL\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card-reveal\">\n    <span class=\"card-title grey-text text-darken-4\">{{ title }}<i class=\"material-icons right\">close</i></span>\n    <p>{{ description }}</p>\n    <p class=\"heading\">Tech Used:</p>\n    <ul>\n      <li *ngFor=\"let tech of parsedTechUsed\">\n        {{ tech }}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectCardComponent = (function () {
    function ProjectCardComponent() {
    }
    ProjectCardComponent.prototype.ngOnInit = function () {
        this.parsedTechUsed = this.techUsed.split(',');
        console.log("New card: ", this.title, this.description, this.techUsed, this.parsedTechUsed);
        if (this.parsedTechUsed.includes('Ruby on Rails')) {
            this.railsUsed = true;
        }
        if (this.parsedTechUsed.includes('JavaScript')) {
            this.jsUsed = true;
        }
        if (this.parsedTechUsed.includes('AngularJS')) {
            this.angularUsed = true;
        }
        if (this.parsedTechUsed.includes('Heroku')) {
            this.herokuUsed = true;
        }
        if (this.parsedTechUsed.includes('Amazon Web Services')) {
            this.awsUsed = true;
        }
        if (this.parsedTechUsed.includes('PostgreSQL')) {
            this.postgresUsed = true;
        }
        if (this.parsedTechUsed.includes('Phaser.io (Game engine)')) {
            this.phaserUsed = true;
        }
        if (this.parsedTechUsed.includes('Famo.us (Rebranded Since)')) {
            this.famousUsed = true;
        }
        if (this.parsedTechUsed.includes('Node.js')) {
            this.nodeUsed = true;
        }
        if (this.parsedTechUsed.includes('MongoDB')) {
            this.mongoUsed = true;
        }
        if (this.parsedTechUsed.includes('Swift')) {
            this.swiftUsed = true;
        }
        if (this.parsedTechUsed.includes('Ionic')) {
            this.ionicUsed = true;
        }
        if (this.parsedTechUsed.includes('Laravel')) {
            this.laravelUsed = true;
        }
    };
    return ProjectCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ProjectCardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ProjectCardComponent.prototype, "description", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ProjectCardComponent.prototype, "imagePath", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ProjectCardComponent.prototype, "techUsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ProjectCardComponent.prototype, "publicLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ProjectCardComponent.prototype, "idTag", void 0);
ProjectCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-project-card',
        template: __webpack_require__("../../../../../src/app/projects/components/project-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/components/project-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectCardComponent);

//# sourceMappingURL=project-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project(title, description, imagePath, techUsed, publicLink, idTag) {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.techUsed = techUsed;
        this.publicLink = publicLink;
        this.idTag = idTag;
    }
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-heading {\n  text-align: center;\n  background-color: rgba(68,154,197,.7);\n  padding: 2%;\n  color: #0c213e;\n}\n\n.page-info {\n  font-size: 1.7em;\n  text-align: justify;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-heading\">Companies and Contracts</h2>\n\n<p class=\"page-info\">\n  These are companies that I have worked with recently. Some of these are contracts as a product consultant and others are full time projects.\n</p>\n\n<div class=\"row\" *ngFor=\"let projectGroup of companyProjects | each_slice:2 \">\n  <div class=\"col s12 m6\" *ngFor=\"let project of projectGroup\">\n    <app-project-card\n      title=\"{{project.title}}\"\n      description=\"{{ project.description }}\"\n      imagePath=\"{{ project.imagePath }}\"\n      techUsed=\"{{ project.techUsed }}\"\n      publicLink=\"{{ project.publicLink }}\"\n      idTag=\"{{ project.idTag }}\"\n    >\n    </app-project-card>\n  </div>\n</div>\n\n<h2 class=\"page-heading\">Personal Projects</h2>\n\n<p class=\"page-info\">\n  Always looking to explore new technologies and apply them to projects. Here are a few examples of that exploration.\n</p>\n\n<div class=\"row\" *ngFor=\"let projectGroup of personalProjects | each_slice:2 \">\n  <div class=\"col s12 m6\" *ngFor=\"let project of projectGroup\">\n    <app-project-card\n      title=\"{{project.title}}\"\n      description=\"{{ project.description }}\"\n      imagePath=\"{{ project.imagePath }}\"\n      techUsed=\"{{ project.techUsed }}\"\n      publicLink=\"{{ project.publicLink }}\"\n      idTag=\"{{ project.idTag }}\"\n    >\n    </app-project-card>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project__ = __webpack_require__("../../../../../src/app/projects/project.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
    function ProjectsComponent() {
        this.companyProjects = [
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Quick Quack Car Wash", "Point of Sale iOS iPad application created for car wash chain. Running on an Angular JS, we used Ionic to compile app to iOS. To process payments we used Cardflight card swipers with the iPad. We dealt with both one time charges and subscription based payments. All point of sale iPads talk to the backend Rails API.", "quick-quack1.png", [
                'Ruby on Rails',
                'AngularJS',
                'ActiveAdmin',
                'Ionic',
                'Cardflight',
                'PostgreSQL'
            ], "https://www.dontdrivedirty.com/", "quick-quack"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Payment Lock", "Porting over and existing legacy application written in a custom PHP framework that was proven to be flawed and insecure. We took the existing legacy app and moved over code to a Laravel application piece by piece, fixing as we went along. Because of budget concerns, we could not simply do the entire app in one go. Instead we executed feature by feature and kept both apps running simultaneously. In addition, the data had to be synced across both databases constantly.", "paymentlock.png", [
                'Laravel',
                'PostgreSQL',
                'Amazon Web Services'
            ], "https://www.paymentlock.com/", "paymentlock"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Paid Labs", "This YC startup is a customer invoicing platform where you can get paid through virtually any means. As a contractor on this project, I helped design features from invoice templating, to OAuth connection models.", "paid-labs.png", [
                'Ruby on Rails',
                'JavaScript'
            ], "https://www.paidlabs.com/", "paid-labs"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Eyes On", "Video surveillance application that can be used by public safety or emergency personal to get 'eyes on the ground' for large events where there is concern for public safety. The app allows public safety official on phone to stream video to a central backend Ruby on Rails application. Here an HQ official can monitor the agents, inform, and react.", "eyes-on.png", [
                'Swift',
                'Twilio Video SDK',
                'Ruby on Rails',
                'Heroku'
            ], "", "eyes-on"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Rentjoy", "Rentjoy is a real estate start up focusing automating the property management process online. The platform can process tenant applications, accept rental payments, handle maintenance requests, and more.", "rentjoy.png", [
                "Ruby on Rails",
                "Stripe API",
                "Amazon Web Services",
                "Heroku",
                "Mixpanel"
            ], "", "rentjoy"),
        ];
        this.personalProjects = [
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Microservice Work-life API", "This is really a network of microsevice Rails APIs I have built out that are accessed currently through an admin portal. I have also created a Swift application to communicate with the APIs to create a mobile client as well.", "microservice.png", [
                'AngularJS',
                'Ruby on Rails',
                'Amazon Web Services',
                'PostgreSQL'
            ], "", "microservice"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Real Estate Underwriter", "Examine cash flow analysis and project returns of potential property investments. AngularJS based project. MongoDB used to store user info and their investment models with assumptions. Look up property info and map with Google API. Zillow API provides real estate data and mortgage rates.", "real-estate-underwriter2.png", [
                'AngularJS',
                'Node.js',
                'MongoDB',
                'Express',
                'Google API',
                'Zillow API'
            ], "https://real-estate-underwriter.herokuapp.com/#/start", "rentjoy"),
            // new Project(
            //   "EDM Index",
            //   "This project was made to interface with the Spotify API and OAuth flow. Using the SoundCloud API as well, users are able to play music and add songs to their Spotify playlists that they like.",
            //   "edm-index.png",
            //   [
            //     "Ruby on Rails",
            //     "JavaScript/jQuery",
            //     "Spotify API",
            //     "SoundCloud API",
            //     "Twitter API"
            //   ],
            //   "http://edm-index.herokuapp.com/",
            //   "edm-index"
            // ),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Code Crush", "Final project of DevBootcamp, a coding typing game with a full back-end using Node.js to save high scores. The game itself is built with Phaser.io. We chose Phaser.io because it is one of the most popular JavaScript based game engines for 2D games. We also use OAuth Login for Google and Facebook to allow users to login with these accounts. I was the team lead of this project which we made it about a week.", "code-crush.png", [
                "M.E.A.N Stack:",
                "MongoDB",
                "Express",
                "AngularJS",
                "Node.js",
                "Phaser.io (Game engine)"
            ], "http://code-crush.herokuapp.com/", "code-crush"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Tesla Car Comparison", "Using Edmunds.com's API (vast automotive database), this site compares the Tesla Model S to any car on the market across a variety of statistics. Inspired from my time as an employee at Tesla, I made this tool so people could see the costs and energy usage of the electric car versus their gas guzzlers. These were very common questions and concerns we would get from customers.", "tesla-comp.png", [
                "HTML/CSS",
                "JavaScript/jQuery",
                "Foundation"
            ], "http://www.teslacomparison.com/", "tesla"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Clash of Clans Calculator", "What started as my very first website, I have continued to iterate upon. Most recently, I introduced Angular.js to the site which vastly simplified my original vanilla JS version. It also made the UI components much more flexible and interactive. This was great practice to learn core CSS and HTML principles as there is plenty of formatting in the UI elements.", "coc-calc.png", [
                "HTML/CSS",
                "JavaScript/jQuery",
                "AngularJS",
                "Firebase"
            ], "http://clashofclanscalculator.com/", "coc-calc"),
            new __WEBPACK_IMPORTED_MODULE_1__project__["a" /* Project */]("Famo.us Bike App", "My First app made with the Famo.us platform during a 3-day workshop. Still at very early stages of development but shows the power of Famo.us transitions and draggable properties.", "bike-famous.png", [
                "Famo.us (Rebranded Since)"
            ], "http://sam-david.github.io/bike-famous.html", "bike-famous")
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectsComponent);

//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-heading {\n  text-align: center;\n  background-color: rgba(68,154,197,.7);\n  padding: 2%;\n  color: #0C1828;\n}\n\n.resume-embed-wrapper {\n  height: 800px;\n  margin-bottom: 2%;\n}\n\n.download-wrapper {\n  text-align: center;\n  margin-bottom: 2%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-heading\">My Resume</h2>\n\n<div class=\"row\">\n  <div class=\"col s12 resume-embed-wrapper\">\n    <object data=\"assets/resume.pdf\" type=\"application/pdf\" width=\"100%\" height=\"100%\">\n       <p><b>Example fallback content</b>: This browser does not support PDFs. Please download the PDF to view it: <a href=\"/resume.pdf\">Download PDF</a>.</p>\n    </object>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12 download-wrapper\">\n    <a class=\"waves-effect waves-light btn-large blue darken-2\" download href=\"assets/resume.pdf\"><i class=\"fa fa-download right\" aria-hidden=\"true\"></i>Download PDF</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-resume',
        template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resume/resume.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/components/skill-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-height: 40px;\n}\n\n.row {\n  text-align: center;\n  margin-bottom: 0;\n}\n\n.card-panel {\n  padding: 5%;\n  background-color: #B2C9DB;\n  /*cursor: pointer;*/\n}\n\n.card-panel:hover {\n  box-shadow:         inset 0 0 10px #000000;\n}\n\n.title {\n  font-weight: bold;\n  color: #0c213e;\n}\n\nhr {\n  background-color: black;\n  border: solid #0c213e 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/components/skill-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel\">\n  <div class=\"row\">\n    <img class=\"responsive-img\" src=\"assets/images/skills/{{ imagePath }}\">\n  </div>\n  <hr>\n  <div class=\"row title\">\n    {{ title }}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skills/components/skill-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillBoxComponent = (function () {
    function SkillBoxComponent() {
    }
    SkillBoxComponent.prototype.ngOnInit = function () {
        console.log("New card: ", this.title, this.description, this.imagePath);
    };
    return SkillBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], SkillBoxComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], SkillBoxComponent.prototype, "description", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], SkillBoxComponent.prototype, "imagePath", void 0);
SkillBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-skill-box',
        template: __webpack_require__("../../../../../src/app/skills/components/skill-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/components/skill-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SkillBoxComponent);

//# sourceMappingURL=skill-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/components/skill-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-content {\n  padding: 15px;\n}\n\n.card-image {\n  text-align: center;\n  background-color: #cacaca;\n  max-width: 30% !important;\n}\n\n.card-image img {\n  width: 50%;\n  margin: 2%;\n  display:block;\n  margin: auto;\n  padding: 7%;\n\n  vertical-align: middle;\n}\n\n.card-title {\n  font-size: 1.3em;\n  margin-bottom: 0;\n  margin-top: 1%;\n}\n\n.card.horizontal {\n  /*min-height: 100px;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/components/skill-card.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"card-title\">{{ title }}</h3>\n<div class=\"card horizontal\">\n  <div class=\"card-image\">\n    <img class=\"responsive-img\" src=\"assets/images/skills/{{ imagePath }}\">\n  </div>\n  <div class=\"card-stacked\">\n    <div class=\"card-content\">\n      <p>{{ description }}</p>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">{{ title }}<i class=\"material-icons right\">close</i></span>\n      <p>{{ description }}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skills/components/skill-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillCardComponent = (function () {
    function SkillCardComponent() {
    }
    SkillCardComponent.prototype.ngOnInit = function () {
        console.log("New card: ", this.title, this.description, this.imagePath);
    };
    return SkillCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], SkillCardComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], SkillCardComponent.prototype, "description", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], SkillCardComponent.prototype, "imagePath", void 0);
SkillCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-skill-card',
        template: __webpack_require__("../../../../../src/app/skills/components/skill-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/components/skill-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SkillCardComponent);

//# sourceMappingURL=skill-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/components/third-party-box.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  max-height: 40px;\n}\n\n.row {\n  text-align: center;\n  margin-bottom: 0;\n}\n\n.card-panel {\n  padding: 5%;\n  background-color: #D4E5F5;\n  /*cursor: pointer;*/\n}\n\n.card-panel:hover {\n  /*box-shadow:         inset 0 0 10px #000000;*/\n}\n\n.title {\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/components/third-party-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-panel\">\n  <div class=\"row\">\n    <img class=\"responsive-img\" src=\"assets/images/skills/{{ imagePath }}\">\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skills/components/third-party-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdPartyBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThirdPartyBoxComponent = (function () {
    function ThirdPartyBoxComponent() {
    }
    ThirdPartyBoxComponent.prototype.ngOnInit = function () {
        console.log("New card: ", this.title, this.description, this.imagePath);
    };
    return ThirdPartyBoxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ThirdPartyBoxComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ThirdPartyBoxComponent.prototype, "description", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", String)
], ThirdPartyBoxComponent.prototype, "imagePath", void 0);
ThirdPartyBoxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-third-party-box',
        template: __webpack_require__("../../../../../src/app/skills/components/third-party-box.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/components/third-party-box.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ThirdPartyBoxComponent);

//# sourceMappingURL=third-party-box.component.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skill.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
var Skill = (function () {
    function Skill(title, description, imagePath) {
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
    }
    return Skill;
}());

//# sourceMappingURL=skill.js.map

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-heading {\n  text-align: center;\n  color: #0C1828;\n  text-decoration: underline;\n}\n\n.page-blurb {\n  font-size: 1.6em;\n}\n.row {\n  margin-bottom: 2px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = " <p class=\"page-blurb\">Welcome to my portfolio page! I'm a software engineer based in the Bay Area. On this site you can find some of my recent <a [routerLink]=\"['/projects']\">projects</a>, both professional and experimental. Below here you can find some of the technical skills I have acquired. Please feel free to reach out!</p>\n\n<h2 class=\"page-heading\">Technical Skills</h2>\n\n<div class=\"row\" *ngFor=\"let skillGroup of skills | each_slice:6 \">\n  <div class=\"col s12 m2\" *ngFor=\"let skill of skillGroup\" (click)=\"showSkill(skill);\" on-mouseover=\"showSkill(skill);\">\n    <app-skill-box\n      title=\"{{skill.title}}\"\n      description=\"{{ skill.description }}\"\n      imagePath=\"{{ skill.imagePath }}\"\n    >\n    </app-skill-box>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col s12\">\n    <p> {{ skillDescription }} </p>\n  </div>\n</div>\n\n<h2 class=\"page-heading\">Third Party Services Used</h2>\n\n<div class=\"row\" *ngFor=\"let skillGroup of thirdParties | each_slice:6 \">\n  <div class=\"col s12 m2\" *ngFor=\"let skill of skillGroup\" (click)=\"showSkill(skill);\" on-mouseover=\"showSkill(skill);\">\n    <app-third-party-box\n      title=\"{{skill.title}}\"\n      description=\"{{ skill.description }}\"\n      imagePath=\"{{ skill.imagePath }}\"\n    >\n    </app-third-party-box>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skill__ = __webpack_require__("../../../../../src/app/skills/skill.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = (function () {
    function SkillsComponent() {
        this.skills = [
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Ruby', "Because of how often I'm working in projects with Rails, I use Ruby quite often. Ruby was one of the first object oriented languages I learned. The syntax is very intuitive as there are many powerful built in methods and classes. Ruby will remain one of the core languages I practice for years to come as I continue to use Rails moving forward.", 'ruby.png'),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('JavaScript', "The very first interpreted language I chose to learn was JavaScript. I had experimented with HTML and CSS but wanted to add functionality and interactivity to my pages. JavaScript has become one of my more comfortable languages. I love how adaptable it is, and how many frameworks use it. At first I would use JavaScript in conjunction with jQuery, but these days I'm using js with frameworks like AngularJS or ReactJS.", 'js.png'),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Ruby on Rails', "My current software engineering position has many projects using Ruby on Rails for APIs or for the full MVC pattern. In both of my previous positions, we used Rails as the backend framework. I'm comfortable with the MVC structure, configuring, and deploying Rails apps. With the support for Rails out there, and the amount of Ruby gems it is easy to apply Rails to many different applications. Deploying Rails apps to AWS or Heroku environments is fairly common to me now. ", 'rails.png'),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Node.js', "Node is something that I often use for smaller microservice type projects or a project using the M.E.A.N. stack. At my current employer we might use node to set up a quick server for websockets or webhooks. ", "node-js.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Laravel', "Working with Rails has made working with Laravel extremely easy transition. Working with PHP has similar elements to Ruby as they are both object oriented.", "laravel.svg"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('HTML5', 'HTML remains at the core of web development I do every day. .', 'html5.png'),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('CSS3', 'HTML and CSS were some of the first languages I studied, as you would expect. I began teaching myself online, mainly through Lynda.com, Codeacademy.com, but desired to return to a classroom environment to accelerate my learning. Before I applied to a full-stack immersive class, I attended a front-end part-time course in Austin, TX at Makersquare. This was great initial exposure to HTML, CSS, Javascript, and CSS frameworks like Zurb Foundation to build responsive environments. HTML and CSS remain at the core of all my front end development.', 'css3.svg'),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('jQuery', "jQuery is a technology that I still find myself using from time to time. Mostly I rely on jQuery for ajax calls, DOM manipulation and search, or existing third party plugins.", "jquery.gif"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('AngularJS', "Angular is currently my preferred frontend framework. This site was designed with Angular 4. I have worked with both Angular 1 and 2/4. The power of the component design with Angular 2 is really compelling.", "angularjs.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('PostgreSQL', "Most of the Rails appliations I have used have a Postgres or MySQL based database. I've become use to setting up postgres on servers and working with existing databases using psql.", "postgres.svg"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('MongoDB', "Mongo is something that I frequently use with Node applications. When making apps in the M.E.A.N stack, Mongo with NoSQL is the way to go. I prefer SQL based databases, however.", "mongodb.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Sinatra', "If I want to spin up a quick web serve with Ruby, Sintra is the way to go. Most of the time I'm using Rails but this light frameworks has it's advantages.", "sinatra.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Swift', "Swift is preferred to me over objective-c when programming iOS. Working with Xcode, I have developed a few apps and worked on legacy code as well.", "swift.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Adobe Photoshop', "Photoshop remains a tool I use mostly for modifying page assets on the frontend. I use it sometimes for web mock ups as well.", "photoshop.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Adobe InDesign', "InDesign is great for creating marketing material or quick mock ups.", "indesign.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('PHP', "PHP is used mainly with Laravel. In terms of server side languages, PHP is secondary to Ruby.", "php.png")
        ];
        this.thirdParties = [
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Stripe', "", "stripe.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('CardFlight', "", "cardflight2.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Payeezy', "", "payeezy.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Heroku', "", "heroku2.svg"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Amazon Web Services', "", "aws.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Firebase', "", "firebase.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Atlassian', "", "atlassian.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Mixpanel', "", "mixpanel.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Twitter API', "", "twitter.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Facebook API', "", "facebook.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Codeship', "", "codeship.png"),
            new __WEBPACK_IMPORTED_MODULE_1__skill__["a" /* Skill */]('Ionic', "", "ionic.png"),
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent.prototype.showSkill = function (skill) {
        this.skillDescription = skill.description;
        setTimeout(function () { }, 150);
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SkillsComponent);

//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map