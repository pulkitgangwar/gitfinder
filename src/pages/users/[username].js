import axios from "axios";

const User = ({ data }) => {
  if (!data) {
    return <h1>Not Found</h1>;
  }

  return <div>Users page</div>;
};

export const getServerSideProps = async (context) => {
  const username = context.params.username;

  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );

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
