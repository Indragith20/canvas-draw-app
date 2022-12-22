import { json } from "@remix-run/node";

export async function loader({ request }) {
  return json({ message: 'resource rout' })
}