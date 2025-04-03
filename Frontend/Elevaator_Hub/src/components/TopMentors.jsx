import React, { useEffect, useState } from "react";
import useMentorStore from "../store/mentor";
import mentorApi from "../apiManager/mentor";
import MentorCard from "./MentorCard";
import { Button, Spin } from "antd";
const TopMentors = () => {
  const [topMentors, setTopMentors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setMentorsData } = useMentorStore();
  console.log("from mentor component");
  const selectTopMentor = (mentors) => {
    const topselectedmentors = [];
    const totalMentors = mentors.length;

    while (topselectedmentors < 4 && topselectedmentors.length < totalMentors) {
      const randomIndex = Math.floor(Math.random() * totalMentors);
      const randomMentor = mentors[randomIndex];
      if (!topselectedmentors.includes(randomMentor)) {
        topselectedmentors.push(randomMentor);
      }
    }
    return topselectedmentors;
  };
  const fetchAllMentors = async () => {
    try {
      console.log("inside");
      const response = await mentorApi.getAllMentors();
      console.log("getting data from mentor api");
      console.log(response);

      const allMentors = response?.data?.mentors || [];
      setMentorsData(allMentors);
      setTopMentors(selectTopMentor(allMentors));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    console.log("useeffect");
    fetchAllMentors();
  }, []);
  return (
    <>
      <div>
        <h1>Top Mentors</h1>
        <div>
          {topMentors.map((mentor) => {
            return <MentorCard mentor={mentor} key={mentor?._id} />;
          })}
        </div>
      </div>
    </>
  );
};
export default TopMentors;
