import { JSX } from "react";
import { cn } from "../cn";
import { cva, VariantProps } from "class-variance-authority";

const myButtonVariants = cva(
  // Base class string that applies to all variants
  "px-7 py-2 rounded-2xl cursor-pointer transition-colors duration-500 ",
  {
    // default variants define the default values for each variant. MUST BE ADDED FOR EVERY VARIANT
    defaultVariants: {
      variant: "primary",
      animation: "stringy",
    },
    // Self explanatory design variants. These variants will appear as component props
    variants: {
      /** Main variant 
       * @type "primary" | "secondary" */
      variant: {
        primary: "bg-primary-base text-primary-foreground active:bg-red-300",
        secondary: "bg-secondary-base text-secondary-foreground",
      },
      /** Animator variant */
      animation: {
        bouncy: "",
        stringy: "",
      },
    },
  }
);


export interface MyButtonProps
  extends Omit<React.ComponentProps<"button">, "variant" | "animation">,
  VariantProps<typeof myButtonVariants> {
  ref?: React.Ref<HTMLButtonElement>;
  // insert any additional props here
}


/**
 * Description placeholder
 *
 * @example {
 *  <MyButton variant="primary">Hello World</MyButton>
 * }
 * @param {MyButtonProps} props 
 * @returns {JSX.Element} 
 */
export const MyButton = (props: MyButtonProps): JSX.Element => {
  const { className, ref, ...rest } = props;

  return (
    <button className={cn(myButtonVariants(rest), "", className)} ref={ref} {...rest} />
  );
};