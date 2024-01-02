import Link from "next/link";
import styles from "./styles.module.scss";

export default function Links() {
  return (
    <div className={styles.footer__links}>
      {links.map((link, i) => (
        <ul>
          {i === 0 ? (
            <img src="https://res.cloudinary.com/thepanunblog/image/upload/v1692382579/etaibnobfcsigyc5oxda.png" alt="" />
          ) : (
            <b>{link.heading}</b>
          )}
          {link.links.map((link) => (
            <li>
              <Link href={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
const links = [
  {
    heading: "The Panun Blog",
    links: [
      {
        name: "About us",
        link: "/pages/about",
      },
      {
        name: "Contact us",
        link: "mailto:contact@thepanunblog.com",
      },
      {
        name: "Social Responsibility",
        link: "/pages/socialResponsibility",
      },
      {
        name: "",
        link: "",
      },
    ],
  },
  {
    heading: "Resources",
    links: [
      {
        name: "Blog",
        link: "",
      },
      {
        name: "Authors",
        link: "/pages/authors",
      },
      {
        name: "How To Post",
        link: "/pages/HTP",
      },
      {
        name: "Babbles",
        link: "/pages/babbles",
      },
      {
        name: "Founders",
        link: "/pages/teams",
      },
    ],
  },
  {
    heading: "Customer service",
    links: [
      {
        name: "Privacy Policy",
        link: "",
      },
      {
        name: "Terms and Conditions",
        link: "",
      },
      {
        name: "Delete Your Account",
        link: "",
      },
      {
        name: "Take our feedback survey",
        link: "",
      },
    ],
  },
];
