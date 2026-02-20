import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {personal.name}
        </span>
      </div>
    </footer>
  );
}
