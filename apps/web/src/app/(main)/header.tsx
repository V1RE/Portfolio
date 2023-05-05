import Logo from './logo';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-sm backdrop-saturate-200 dark:bg-black/50">
      <nav className="container grid grid-rows-1 items-center justify-start py-4">
        <Logo />
      </nav>

      <div className="border-b border-gray-200" />
    </header>
  );
}
