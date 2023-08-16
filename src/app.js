import moment from "moment";
import {
  Projects,
  profileOne,
  profileTwo,
  bubbleOne,
} from "./assets/images/index.js";
import { Quotes } from "./Quotes/Quotes.js";
import IconGit from "../github.svg";
import IconTwit from "../twitter.svg";
import IconLinkedIn from "../linkedin.svg";
import "./css/style.css";

class App {
  constructor() {
    this._github = document.getElementById("img_github");
    this._linkedIn = document.getElementById("img_linkedin");
    this._twitter = document.getElementById("img_twitter");
    this._indexElt = 0;
    this._roomQuote = document.querySelector(".room_quote");
    this._firstQuote();
    this._render();

    setInterval(this._displayQuote.bind(this), 12000);
    this.keen = console.log(document.querySelector(".keen_interest"));
  }

  _quoteTransition() {
    setTimeout(() => {
      this._roomQuote.style.transition = `all 1s ease-in-out`;
      this._roomQuote.style.opacity = 0.5;
      this._roomQuote.innerHTML = "";
    }, 1000);
  }

  _firstQuote() {
    setTimeout(() => {
      this._roomQuote.innerHTML = `<span class="label_quote">Quote :</span>
            <div class="quote_frame">
              <q id="0" class="quote_highlighted">
                The Two Most Important Day In Your Life are the Day you are born
                and the day you know why.</q
              >
              <span id="author_name" class="author"><i>Mark Twain</i></span>
            </div>`;
    }, 1000);
  }

  _displayQuote() {
    this._indexElt += 1;
    if (this._indexElt > 5) this._indexElt = 0;
    for (let i = 0; i < 6; i++) {
      if (i === this._indexElt) {
        this._roomQuote.innerHTML = "";

        const newQuote = Quotes[i];
        const labelQuote = document.createElement("span");
        labelQuote.className = "label_quote";
        labelQuote.innerHTML = "Quote :";

        this._roomQuote.appendChild(labelQuote);

        const quoteBox = document.createElement("div");
        quoteBox.className = "quote_frame";
        quoteBox.innerHTML = `
        <q id=${i} class="quote_highlighted">
                ${newQuote.quote}</q
              >
              <span id="author_name" class="author"><i>${newQuote.author}</i></span>`;

        this._roomQuote.appendChild(quoteBox);
      }
    }
  }

  _displayImagesProjects() {
    const cardProjects = document.querySelector(
      ".projects_area .projects_wrapper"
    );

    const propTitle = document.querySelector(":root");

    Projects.map((item, index) => {
      const box = document.createElement("li");
      console.log(document.hasOwnProperty("createElement"));
      box.hover = item.hover;
      box.className = item.hover ? "box_project shadow" : "box_project";
      box.order = item.id;

      const imgProject = document.createElement("img");
      imgProject.className = "project_img";
      imgProject.alt = "project_src";
      imgProject.src = `${item.img}`;

      const title = document.createElement("span");
      title.className = "current_title";
      title.innerText = `${item.title}`;

      box.appendChild(imgProject);
      box.appendChild(title);

      const layer = document.createElement("div");
      layer.className = "overlap_content";
      layer.id = item.id;

      layer.innerHTML = `
     <span class="title_pro">${item.title}</span>
                  <div class="features_project">
                    <span class="lab_ft">Features :</span>
                    <ul class="list_features">
                      <li class="feature">${item.features.one}</li>
                      <li class="feature">${item.features.two}</li>
                      <li class="feature">${item.features.three}</li>
                    </ul>
                    <div class="link_field">
                      <div class="mini_content">
                        <img
                          id="breakout"
                          src=${item.img}
                          class="mini_img"
                          alt="mini opps "
                        />
                        <a href=${item.linkLive} class="live_url" target="_blank">
                          Live URL</a>
                      </div>
                    </div>
                  </div>`;

      box.appendChild(layer);

      cardProjects.appendChild(box);
    });
  }

  _displayProBackground() {
    const about = document.getElementById("about_me");

    /*  about.style.background = `url(${bubbleOne})`; */
  }

  _displayMediaImg() {
    const imgOne = document.createElement("img");
    const imgTwo = document.createElement("img");
    const imgThree = document.createElement("img");

    imgOne.src = `${IconGit}`;
    imgTwo.src = `${IconTwit}`;
    imgThree.src = `${IconLinkedIn}`;

    this._github.appendChild(imgOne);
    this._twitter.appendChild(imgTwo);
    this._linkedIn.appendChild(imgThree);
  }

  _displayMobProfile() {
    const wrapper = document.querySelector(".picture_img_mobile");

    const img = document.createElement("img");
    img.className = "rule_img_mob";

    img.src = profileTwo;

    wrapper.appendChild(img);
  }

  _displayDeskProfile() {
    const wrapper = document.querySelector(".picture_img");

    const img = document.createElement("img");
    img.className = "rule_img";

    img.src = profileOne;

    wrapper.appendChild(img);
  }

  _displayReviewDate() {
    const day = document.querySelector(".current_day");
    const date = document.querySelector(".current_date");
    const week = document.querySelector(".week_count");
    day.innerHTML = moment().format("ddd,");
    date.innerHTML = moment().format("DD MMM");
    week.innerHTML = moment().format("W");
  }

  _render() {
    this._displayProBackground();
    this._displayImagesProjects();
    this._displayMediaImg();
    this._displayMobProfile();
    this._displayDeskProfile();
    this._displayReviewDate();
  }
}

const app = new App();
