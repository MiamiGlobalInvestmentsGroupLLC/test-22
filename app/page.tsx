// Route-group aware home page: redirect to /login
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/login");
  return null;
}
