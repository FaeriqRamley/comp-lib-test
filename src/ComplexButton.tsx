import { cn } from "./cn";
import { cva, VariantProps } from "class-variance-authority";

const complexButtonVariants = cva(
  // Common styling that applies across all variants
  "px-7 py-2 rounded-2xl",
  {
    // default variants define the default values for each variant. MUST BE ADDED FOR EVERY VARIANT
    defaultVariants: {
      variant: "primary",
      animation: "stringy"
    },
    // Self explanatory design variants. These variants will appear as component props
    variants: {
      variant: {
        primary: "bg-primary-base",
        secondary: "bg-yellow-200 rounded-none",
      },
      animation: {
        bouncy: "",
        stringy: "",
      },
    },
  });

const iconVariants = cva(
  // Base class string that applies to all variants
  "",
  {
    // default variants define the default values for each variant. MUST BE ADDED FOR EVERY VARIANT
    defaultVariants: {
      iconVariant: "primary",
    },
    // Self explanatory design variants. These variants will appear as component props
    variants: {
      iconVariant: {
        primary: "bg-blue-500",
        secondary: "bg-yellow-200 rounded-none",
      },
    },
  });

interface ComplexButton
  extends React.ComponentProps<"button">,
  VariantProps<typeof complexButtonVariants>, VariantProps<typeof iconVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  // insert any additional props here
}

export const ComplexButton = ({ className, ref, iconVariant, ...rest }: ComplexButton) => {
  return (
    <button className={cn(complexButtonVariants(rest), className)} ref={ref} {...rest}>
      <img id="icon" className={cn(iconVariants({ iconVariant }), "")} />
      <span id="text-label" className="">{rest.children}</span>
    </button>
  );
};

export default ComplexButton;
