import { JSX } from "react";
import { cn } from "./cn";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  // Base class string that applies to all variants
  "px-7 py-2 rounded-2xl", 
  {
  // default variants define the default values for each variant. MUST BE ADDED FOR EVERY VARIANT
  defaultVariants: {
    variant: "primary",
    animation: "bouncy",
  },
  // Self explanatory design variants. These variants will appear as component props
  variants: {
    variant: {
      primary: "bg-blue-500",
      secondary: "bg-yellow-200 rounded-none",
    },
    animation: {
      bouncy: "",
      stringy: "",
    },
  },
});

interface ButtonProps
  extends Omit<React.ComponentProps<"button">,"variant"|"animation">,
    VariantProps<typeof buttonVariants> {
      ref?: React.Ref<HTMLButtonElement>;
      // insert any additional props here
}

export const Button = ({ className, ref, ...rest }: ButtonProps):JSX.Element => {
  return (
    <button className={cn(buttonVariants(rest), className)} ref={ref} {...rest} />
  );
};

export default Button;


// const exampleCva = cva(
//   // Common styling that applies across all variants
//   "", 
//   {
//   // default variants define the default values for each variant. MUST BE ADDED FOR EVERY VARIANT
//   defaultVariants: {
//     variant: "default",
//   },
//   // Self explanatory design variants. These variants will appear as component props
//   variants: {
//     variant: {
//       default: "bg-blue-500",
//     },
//   },
// });
