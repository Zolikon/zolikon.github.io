import Tool from "./Tool";

function DesignTools() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-6">Design Tools</h1>
      <div className="flex flex-col w-full h-full items-center justify-start gap-2 my-6">
        <Tool name="Material Icons" link="https://fonts.google.com/icons" desc="Google's Material Icons" />
        <Tool name="Figma" link="https://www.figma.com/" desc="Design tool for UI/UX" />
        <Tool name="Excalidraw" link="https://excalidraw.com/" desc="Collaborative whiteboard tool" />
        <Tool name="Canva" link="https://www.canva.com/" desc="Graphic design platform" />
        <Tool name="Maketext" link="https://maketext.io/" desc="Can generate text as SVG" />
        <Tool name="xicon" link="https://www.xiconeditor.com/" desc="Icon editor" />
        <Tool name="SVGL" link="https://svgl.app/" desc="SVG icon collection" />
      </div>
    </div>
  );
}

export default DesignTools;
