
export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {currentYear} Gordon Hatcher Engineering Portfolio. All rights reserved.</p>
        <p className="text-sm mt-1">Designed with a touch of minimalism.</p>
      </div>
    </footer>
  );
}
