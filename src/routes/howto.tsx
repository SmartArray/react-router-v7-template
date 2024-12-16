import {
  NavLink,
} from "react-router";

export default function HowTo({ loaderData }: Route.ComponentProps) {
  return (
    <div className="flex flex-1 flex-col h-full items-center justify-center text-center gap-10">
      <h2 className="text-5xl font-semibold">Get Started</h2>

      <div>
        <h3 className="text-xl font-bold">React-Router-v7 Docs</h3>
        <NavLink to="https://reactrouter.com/start/framework/routing">Click Here</NavLink>
      </div>

      <div>
        <h3 className="text-xl font-bold">Tailwind Docs</h3>
        <NavLink to="https://tailwindcss.com/docs">Click Here</NavLink>
      </div>
    </div>
  );
};
