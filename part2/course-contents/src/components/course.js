import React from "react";
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"


const Course = ({ courses }) => {
  const displayer = () => courses.map((course) => {
    return (
      <div key={course.id}>
        <Header title={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>);
  });

  return (
    <div>
      {displayer()}
    </div>
  )
}

export default Course;