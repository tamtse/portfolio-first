import { Projects, profileOne } from "./assets/images/index.js";
import IconGit from "../github.svg";
import IconTwit from "../twitter.svg";
import "./css/style.css";

class App {
  constructor() {
    this._github = document.getElementById("img_github");
    this._twitter = document.getElementById("img_twitter");
    this._render();
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
                        <a href="" class="live_url" target="_blank">
                          Live URL <span class="bubble" style="color: ${item.bulbColor}"></span
                        ></a>
                      </div>
                    </div>
                  </div>`;

      box.appendChild(layer);

      cardProjects.appendChild(box);
    });

    /* linkLive = document.createElement("a");
    linkLive.className = "live_url"; */
  }

  _displayMediaImg() {
    const imgOne = document.createElement("img");
    const imgTwo = document.createElement("img");

    imgOne.src = `${IconGit}`;
    imgTwo.src = `${IconTwit}`;

    this._github.appendChild(imgOne);
    this._twitter.appendChild(imgTwo);
  }

  _displayMobProfile() {
    const wrapper = document.querySelector(".picture_img_mobile");

    const img = document.createElement("img");
    img.className = "rule_img_mob";

    const imgb = document.createElement("img");
    imgb.className = "rule_img_mob";

    img.src = profileOne;

    wrapper.appendChild(img);
  }

  _render() {
    this._displayImagesProjects();
    this._displayMediaImg();
    this._displayMobProfile();
  }
}

const app = new App();
