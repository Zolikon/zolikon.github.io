import PropTypes from "prop-types";
import Button from "../components/Button";
import { useRef, useState } from "react";
import IconButton from "../components/IconButton";

function CommandContainer({ title, note, command, alias, nameOfMasterBranch = "" }) {
  const dialog = useRef(null);
  const [aliasName, setAliasName] = useState("");

  const commandToDisplay = command.replaceAll("__main__", nameOfMasterBranch.toLowerCase());

  function createAliasCommand() {
    return `git config --global alias.${aliasName} '${alias}'`.replaceAll("__main__", nameOfMasterBranch.toLowerCase());
  }

  return (
    <>
      <div className="flex flex-col md:flex-row  gap-2 bg-stone-700 p-4 rounded-lg items-center justify-between w-3/5">
        <div className="flex flex-col items-start">
          <p className="font-bold select-none">{title}</p>
          {note && <p className="text-stone-300 text-xs">{note}</p>}
        </div>
        <div className="flex flex-col md:flex-row  gap-2 items-center">
          <code className="bg-stone-950 p-2 rounded-md"> {commandToDisplay}</code>
          <Button name={"Create alias"} onClick={() => dialog.current.showModal()} />
        </div>
      </div>
      <dialog ref={dialog} className=" rounded-lg" onClose={() => setAliasName("")}>
        <div className="h-[60vh] w-[60vw] flex flex-col justify-center items-center bg-stone-500">
          <div className="h-full w-[90%] flex flex-col items-center gap-2 justify-center">
            <input
              value={aliasName}
              onChange={(e) => setAliasName(e.target.value)}
              className="rounded-md p-2"
              placeholder="Alias name"
            />
            {aliasName ? (
              <div className="flex gap-2 items-center w-full h-20">
                <code className="bg-stone-950 text-stone-300 p-2 rounded-md w-[90%] text-center">
                  {createAliasCommand()}
                </code>
                <IconButton
                  iconName={"content_copy"}
                  onClick={() => navigator.clipboard.writeText(createAliasCommand())}
                />
              </div>
            ) : (
              <div className="h-20 w-full flex items-center justify-center">Name your alias</div>
            )}
            <Button
              name={"Close"}
              onClick={() => {
                setAliasName("");
                dialog.current.close();
              }}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}

CommandContainer.propTypes = {
  title: PropTypes.string.isRequired,
  note: PropTypes.string,
  command: PropTypes.string.isRequired,
  alias: PropTypes.string.isRequired,
  nameOfMasterBranch: PropTypes.string,
};

export default CommandContainer;
