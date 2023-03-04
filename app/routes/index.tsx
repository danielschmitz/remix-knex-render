
import type { User } from "~/model/User";
import type { LoaderArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react";
import db from '../db'

export async function loader({ request }: LoaderArgs) {
  return db("users").select("id", "name", "email");
};

export default function Index() {
  const users = useLoaderData<User[]>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hello World!!!!</h1>
      <ul>
        {users.map((user:User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
