import editorMobile from "./images/illustration-editor-mobile.svg";
import editorDesktop from "./images/illustration-editor-desktop.svg";
import phone from "./images/illustration-phones.svg";
import laptopMobile from "./images/illustration-laptop-mobile.svg";
import laptopDesktop from "./images/illustration-laptop-desktop.svg";

const Main = () => {
  return (
    <main>
      <h1>Designed for the future</h1>
      <section className="first-section">
        <div>
          <picture>
            <source media="(min-width:1000px)" srcSet={editorDesktop}></source>
            <img src={editorMobile} alt="editor"></img>
          </picture>
        </div>
        <div>
          <h2>Introducing an extensible editor</h2>
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div>
          <h2>Robust content management</h2>
          <p>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
      </section>

      <section className="second-section">
        <div className="second-section-content">
          <div>
            <img src={phone} alt="smartphones"></img>
          </div>
          <div>
            <h1>State of the Art Infrastructure</h1>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>

      <section className="third-section">
        <div>
          <picture>
            <source
              className="laptop-img"
              media="(min-width:1000px)"
              srcSet={laptopDesktop}
            ></source>
            <img src={laptopMobile} alt="laptop"></img>
          </picture>
        </div>
        <div>
          <h1>Free, open, simple</h1>
          <p>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h1>Powerful tooling</h1>
          <p>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
