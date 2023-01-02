export default interface ScrollSidewaysProps {
  children: React.ReactNode;
  offset?: number;
  isEffectActive?: boolean;
  direction: "left" | "right";
  initialX?: number;
  cssClass?: string;
}
