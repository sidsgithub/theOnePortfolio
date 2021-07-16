import React from "react";
import './work-time-line.scss';

const Projects = () => {
  return (
    <section class="timeline">
      <ol>
        <li>
          <div>
            <time>1934</time>
            Some content here
          </div>
        </li>

        <li></li>
      </ol>

      <div class="arrows">
        <button class="arrow arrow__prev disabled" disabled>
          <img src="arrow_prev.svg" alt="prev timeline arrow" />
        </button>
        <button class="arrow arrow__next">
          <img src="arrow_next.svg" alt="next timeline arrow" />
        </button>
      </div>
    </section>
  );
};
export default Projects;