import { useState } from "react";
import CommandContainer from "./CommandContainer";
import Switch from "./Switch";

function GitAlias() {
  const branchNameOptions = ["Master", "Main"];
  const [nameOfMasterBranch, setNameOfMasterBranch] = useState(branchNameOptions[0]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-around">
      <div className="flex gap-3 items-center justify-center">
        <p className="font-bold text-sm md:text-xl">Primary branch</p>
        <Switch values={branchNameOptions} selected={nameOfMasterBranch} onSelect={setNameOfMasterBranch} />
      </div>
      <div className="flex flex-col items-center justify-start w-full h-[95%] md:h-4/5 gap-4 overflow-y-auto">
        <CommandContainer
          title="Enhanced log"
          command="git log --oneline --decorate --graph -n 10"
          alias="log --oneline --decorate --graph -n 10"
        />
        <CommandContainer
          title="Save changes"
          command="git add . && git commit --amend --no-edit"
          alias="!f() { git add . && git commit --amend --no-edit; }; f"
        />
        <CommandContainer
          title="Current branch name (used as dependency for other commands)"
          command="git rev-parse --abbrev-ref HEAD"
          alias="rev-parse --abbrev-ref HEAD"
        />
        <CommandContainer
          title="Pulls current branch"
          command='git pull origin "$(git bname)"'
          alias='!f() { git pull origin "$(git bname)"; };f'
        />
        <CommandContainer
          title="Pushes current branch"
          command='git git push origin "$(git bname)"'
          alias='!f() { git push origin ∗ "$(git bname)"; }; f'
        />
        <CommandContainer
          title="List of aliases"
          command="git config --global -l | grep alias"
          alias="!f() { git config --global -l | grep alias; };f"
        />
        <CommandContainer
          title="Changed files"
          command="git diff __main__ --name-only"
          alias="diff __main__ --name-only"
          nameOfMasterBranch={nameOfMasterBranch}
        />
        <CommandContainer
          title="Restore"
          command="git checkout __main__"
          alias="checkout __main__"
          nameOfMasterBranch={nameOfMasterBranch}
        />
      </div>
    </div>
  );
}

export default GitAlias;
