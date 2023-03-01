import {  useSelector } from "react-redux";

export const Announcements = () => {
  const informations = useSelector((state) => state.commonData.information);

  return (
    <>
      {informations.map(item => (<h1>{item.title}</h1>))}
    </>
  );
};
