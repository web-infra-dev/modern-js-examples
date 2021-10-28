import { useLoader } from '@modern-js/runtime';

function useUserInfoLoader(username: string) {
  return useLoader(
    async (context, _username) => {
      const res = await fetch(`/api/user?username=${_username}`);
      return res.json();
    },
    {
      params: username,
    },
  );
}

function Home() {
  const { data, loading, error } = useUserInfoLoader('bob');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{data.username}</div>;
}

function About() {
  const { data, loading, error } = useUserInfoLoader('bob');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>{data.username}</div>;
}

function App() {
  return (
    <div>
      <Home />
      <About />
    </div>
  );
}

export default App;
