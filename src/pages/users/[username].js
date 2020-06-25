import axios from "axios";
import { useRouter } from "next/router";

// importing components
import Users from "../../components/Users";

const User = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading ....</div>;
  }

  if (!data) {
    return <h1>Not Found</h1>;
  }

  return <Users data={data} />;
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const username = context.params.username;

  try {
    const [{ data }, response] = await Promise.all([
      axios.get(
        `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      ),
      axios.get(
        `https://api.github.com/users/${username}/repos?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
      ),
    ]);

    data.respositories = response.data;

    return {
      props: {
        data,
      },
    };
  } catch (err) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export default User;
