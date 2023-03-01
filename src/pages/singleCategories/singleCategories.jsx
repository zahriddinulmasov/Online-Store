import { useParams } from "react-router-dom";

export const SingleCategories = () => {
  const params = useParams()
  return (
    <>
      <h1>SingleCategories {params.id}</h1>
    </>
  );
};
