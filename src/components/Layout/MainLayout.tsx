import Image from "next/image";

import { Head } from "../Elements";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => (
  <>
    <Head title="Create Next App" />

    <div className="py-0 px-8">
      <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-16 px-0">
        {children}
      </main>

      <footer className="flex flex-1 items-center justify-center border-t border-solid border-gray-200 py-8 px-0">
        <a
          className="flex flex-grow items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="ml-2 h-4">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  </>
);
