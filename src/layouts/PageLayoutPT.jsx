import Header from "../components/Header";
import NavbarPT from "../components/NavbarPT";

export default function PageLayout({ children, pageName, style }) {
  const styling = `w-screen ${style}`;
  return (
    <div className={styling}>
      <Header pageName={pageName} />
      <div className="p-3 rounded-lg h-screen w-full overflow-x-visible max-w-full">
        <main className="pb-20">{children}</main>
      </div>
      <NavbarPT />
    </div>
  );
}
