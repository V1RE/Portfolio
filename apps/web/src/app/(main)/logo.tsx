import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="relative grid grid-cols-1 gap-1 overflow-hidden py-1 font-mono text-lg leading-none after:absolute after:inset-0 after:my-0.5 after:block after:translate-y-full after:transform after:bg-purple-600 after:transition-transform after:duration-300 hover:after:translate-y-[-100%]">
      <span>Niels</span>

      <span>Mentink</span>
    </Link>
  );
}
