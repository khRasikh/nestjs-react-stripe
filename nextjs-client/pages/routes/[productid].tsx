import { GetServerSideProps, NextPage } from "next";
import fetch from "node-fetch";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

type Data = {
  id: string;
  product: string;
  amount: number;
  currency: string;
  date: string;
};

const UserPage: NextPage<{ data: Data[], params: any }> = (props) => {
  const router = useRouter();
  const { productid } = router.query;

  if (!props.data) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      Welcome to Dynamic Web Page:<br></br>
      <button
        className="bg-blue-700 rounded-md text-white px-3"
        onClick={() => router.push("/dashboard")}
      >
        Dashboard
      </button>
      Hi{props.data.map((i) => i.currency)}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  res,
}) => {

  try {
    const result = await fetch(`http://localhost:3001/mongodb`);
    const data: Data = await result.json();
    console.log(params)
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
