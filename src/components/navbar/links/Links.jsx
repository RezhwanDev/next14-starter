import Link from "next/link";

const Links = () => {
  const Navs = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  return (
    <div>
      {Navs.map((nav) => (
        <Link href={nav.path} key={nav.title}>
          {nav.title}
        </Link>
      ))}
    </div>
  );
};
export default Links;
