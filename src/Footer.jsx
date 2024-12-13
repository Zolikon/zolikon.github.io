import { useRef } from "react";
import { VERSION, BUILD_DATE } from "./environment";

function Footer() {
  const dialogRef = useRef(null);

  const openDialog = () => {
    dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <footer className="h-[30px] xl:h-[40px] text-xs md:text-xl bg-gray-200 bg-gradient-to-b from-teal-950 to-teal-800 flex justify-end gap-4 px-2 items-center">
        <button onClick={openDialog}>About</button>
        <p className="">
          Version: {VERSION} | Built at: {BUILD_DATE}
        </p>
      </footer>
      <dialog ref={dialogRef} className="rounded-md">
        <div className="w-[80vw] h-[80vh] p-4 flex flex-col items-center justify-between bg-stone-500">
          <p className="font-bold text-2xl">WorkDesk</p>
          <div>
            <p>Collection of development tools/configurations/shortcuts</p>
          </div>
          <button onClick={closeDialog} className="bg-green-600 py-2 px-4 rounded-md text-stone-200">
            Close
          </button>
        </div>
      </dialog>
    </>
  );
}

export default Footer;
