import { FOOTER_TEXT } from "@/lib/constants";

export function Colophon() {
  return (
    <footer className="mt-12 border-t border-hairline pb-12 pt-8 text-center font-mono text-xs text-body">
      <p>{FOOTER_TEXT.signature}</p>
      <p className="mt-6">
        © {new Date().getFullYear()} {FOOTER_TEXT.copyrightHolder}
      </p>
    </footer>
  );
}