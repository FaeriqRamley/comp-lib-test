import { JSX } from "react";
import { cn } from "./cn";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  // Base class string that applies to all variants
  "px-7 py-2 rounded-2xl cursor-pointer ",
  {
    // default variants define the default values for each variant. MUST BE ADDED FOR EVERY VARIANT
    defaultVariants: {
      variant: "primary",
      animation: "bouncy",
    },
    // Self explanatory design variants. These variants will appear as component props
    variants: {
      variant: {
        primary: "bg-primary-base text-primary-foreground",
        secondary: "bg-secondary-base text-secondary-foreground",
      },
      animation: {
        bouncy: "",
        stringy: "",
      },
    },
  });

interface ButtonProps
  extends Omit<React.ComponentProps<"button">, "variant" | "animation">,
  VariantProps<typeof buttonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  // insert any additional props here
}



/**
 * Description placeholder
 *
 * @param {ButtonProps} props 
 * @returns {JSX.Element} 
 */
export const Button = (props: ButtonProps): JSX.Element => {
  const { className, ref, ...rest } = props;
  return (
    <button className={cn(buttonVariants(rest), "", className)} ref={ref} {...rest} />
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
