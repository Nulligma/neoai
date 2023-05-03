import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ol>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
        <li>
          <Link href="/about/location">location</Link>
        </li>
        <li>
          <Link href="/about/goals">goals</Link>
        </li>
      </ol>
      {children}
    </section>
  );
}
