import { Projects } from "./assets/images/index.js";
import "./css/style.css";

class App {
  constructor() {
    this._render();
  }

  _displayImagesProjects() {
    const cardProjects = document.querySelector(
      ".projects_area .projects_wrapper"
    );

    Projects.map((item, index) => {
      const box = document.createElement("li");
      console.log(document.hasOwnProperty("createElement"));
      box.hover = item.hover;
      box.className = item.hover ? "box_project shadow" : "box_project";

      const imgProject = document.createElement("img");
      imgProject.className = "project_img";
      imgProject.alt = "project_src";
      imgProject.src = `${item.img}`;

      box.appendChild(imgProject);

      const layer = document.createElement("div");
      layer.className = "overlap_content";
      layer.id = item.id;
      /* layer.style.visibility = item.hover ? "visible" : "hidden"; */

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

  _render() {
    this._displayImagesProjects();
  }
}

const app = new App();
