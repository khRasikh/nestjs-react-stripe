import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";

type Data = {
  id: string;
  name: string;
  email: string;
};

const UserPage: NextPage<{ data: Data }> = props => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
        Hi{props.data.name}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res
}) => {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    console.log(result)
    const data: Data = await result.json();

    return {
      props: { data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
};

export default UserPage;
