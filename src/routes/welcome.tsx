import { Outlet } from 'react-router';


export function meta({}: Route.MetaArgs) {
  return [
    { title: 'React Router v7' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

export async function loader({ params }: Route.LoaderArgs) {
  // ToDo: load some data
  return {
    info: "Welcome!"
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);

  return (
    <div className="flex flex-1 flex-col h-full items-center justify-center text-center">
      <h2 className="text-5xl font-bold">{loaderData.info}</h2>

      Check out the navigation on the left
    </div>
  );
};
