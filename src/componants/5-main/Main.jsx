import "./Main.css";
import { useState } from "react";
import { myProjects } from "./myProject";
import { AnimatePresence, motion } from "framer-motion";

function Main() {
  const [currentActive, setcorrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);
  const handleClick = (buttonCategory) => {
    setcorrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return zzz === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <main id="main" className="flex">
      <section className=" flex left-section">
        <button
          onClick={() => {
            setcorrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("node & express");
          }}
          className={currentActive === "node & express" ? "active" : null}
        >
          Node & Express
        </button>
        
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React js
        </button>
      </section>

      <section className="flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 55 }}
                key={item.imgPath}
                className="card"
              >
                <img
                  width={224}
                  style={{ marginLeft: "0.5px" }}
                  src={item.imgPath}
                  alt=""
                />

                <div style={{ width: "225px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.subTitle}</p>

                  <div>
                    <div style={{ gap: "11px" }} className="flex icons">
                      <a href={item.iconLink}>
                        <i className="icon-link"></i>
                      </a>
                      <a href={item.linkGithub}>
                        <i className="icon-github-square"></i>
                      </a>
                    </div>

                    {/* <a className="link flex" href={item.moreLink}>
                    More
                    <i className="icon-arrow-right"></i>
                  </a> */}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
