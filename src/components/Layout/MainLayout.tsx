import Image from "next/image";
import { Head } from "../Elements";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Head title="Create Next App" />

      <div className="py-0 px-8">
        <main className="flex flex-1 flex-col justify-center items-center min-h-screen py-16 px-0">
          {children}
        </main>

        <footer className="flex flex-1 justify-center items-center py-8 px-0 border-t border-solid border-gray-200">
          <a
            className="flex flex-grow justify-center items-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className="h-4 ml-2">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};
