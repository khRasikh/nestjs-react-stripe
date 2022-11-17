import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";

type Data = {
  id: string;
  name: string;
  email: string;
};

const UserPage: NextPage<{ data: Data }> = (props) => {
  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(props.data);

  return (
    <div>
      {props.data.map((post: any) => (
        <li key={props.id}>{post.name}</li>
      ))}
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:z-50 hover:bg-white hover:p-2  duration-300">
        <div className="relative my-2">
          <img
            className="w-96 h-80 overflow-hidden"
            src="https://via.placeholder.com/600/92c952"
          />
        </div>
        <a href={"/more-video/"}>
          <span className="absolute">
            <img
              src="https://via.placeholder.com/600/92c952"
              className="inline-block h-7 w-8 rounded-full ring-2 ring-white mr-10"
              alt="NO"
            />
          </span>
          <div className="justify-between">
            <span className="inline-block  px-2 leading-none text-black font-bold tracking-wide text-base uppercase ml-8">
              dfsdfsdfs
            </span>
          </div>
          <p className="mt-2 mb-2 mx-2 text-gray-500">sdfsfsfs</p>
          <p className="text-xs text-gray-500 mx-2 w-full overflow-hidden h-5">
            views &nbsp; * &nbsp; 2 weeks ago
          </p>
        </a>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data: Data = await result.json();
    return {
      props: { data },
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {},
    };
  }
};

export default UserPage;
