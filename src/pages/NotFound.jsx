import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
}
