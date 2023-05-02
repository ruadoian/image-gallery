import Search from "./navbar_components/Search";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between px-3">
      <a className="navbar-brand">Navbar</a>
      <Search />
    </nav>
  );
}
