import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have done wide range of projects. Here are some latest projects done
          by me
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Group Projects" ? (
            <ToggleButton
              active
              value="Group Projects"
              onClick={() => setToggle("Group Projects")}
            >
              Group Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Group Projects"
              onClick={() => setToggle("Group Projects")}
            >
              Group Projects
            </ToggleButton>
          )}
          <Divider />
          {toggle === "Personal Projects" ? (
            <ToggleButton
              active
              value="Personal Projects"
              onClick={() => setToggle("Personal Projects")}
            >
              Personal Projects
            </ToggleButton>
          ) : (
            <ToggleButton
              value="Personal Projects"
              onClick={() => setToggle("Personal Projects")}
            >
              Personal Projects
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
