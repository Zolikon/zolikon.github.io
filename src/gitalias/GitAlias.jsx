import CommandContainer from "./CommandContainer";

function GitAlias() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-start w-full h-full gap-4">
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
          title="Current branch name"
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
      </div>
    </div>
  );
}

export default GitAlias;
