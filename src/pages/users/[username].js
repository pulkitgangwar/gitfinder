import axios from "axios";

// importing components
import UserDetails from "../../components/UserDetails";

const User = ({ data }) => {
  if (!data) {
    return <h1>Not Found</h1>;
  }

  return <UserDetails data={data} />;
};

export const getServerSideProps = async (context) => {
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
