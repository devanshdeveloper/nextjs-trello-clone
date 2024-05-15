import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex justify-center h-[60px] w-screen bg-white">
      <div className="flex items-center justify-between h-full w-[min(1320px,100vw)] ">
        <div className="flex gap-5 h-full">
          <Link href="" className="flex items-center">
            <Image
              src="trello.svg"
              width={100}
              height={100}
              alt="Atlassian Trello"
            />
          </Link>
          <ul className="flex gap-5 h-full">
            {[
              { text: "Features", comp: <Features /> },
              { text: "Solutions", comp: <Features /> },
              { text: "Plans", comp: <Features /> },
              { text: "Pricing" },
              { text: "Resources", comp: <Features /> },
            ].map((item) => (
              <li key={item.text} className="flex items-center h-full">
                <Link href="" className="flex items-center gap-2">
                  {item.comp ? (
                    <>
                      {item.text}
                      <FaAngleDown />
                    </>
                  ) : (
                    item.text
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-full flex justify-center items-center">
          <Link href="" className="px-6 py-2">
            Log in
          </Link>
          <Link
            href=""
            className="h-full flex items-center px-6 py-2 bg-[#0065ff] hover:bg-[#0747a6] text-white"
          >
            Get Trello For Free
          </Link>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return <div></div>;
}
function NavDropdown() {
  return <div></div>;
}

export default Navbar;
