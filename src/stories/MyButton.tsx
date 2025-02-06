import { JSX } from "react";
import { cn } from "../cn";
import { cva, VariantProps } from "class-variance-authority";

// Define a type for the button variants
type ButtonVariants = {
  variant: "primary" | "secondary";
  animation: "bouncy" | "stringy";
};

export const myButtonConfig = {
  // default variants define the default values for each variant. MUST BE ADDED FOR EVERY VARIANT
  defaultVariants: {
    variant: "primary" as ButtonVariants["variant"],
    animation: "stringy" as ButtonVariants["animation"],
  },
  // Self explanatory design variants. These variants will appear as component props
  variants: {
    /** Main variant 
     * @type "primary" | "secondary" */
    variant: {
      primary: "bg-primary-base text-primary-foreground",
      secondary: "bg-secondary-base text-secondary-foreground",
    },
    /** Animator variant */
    animation: {
      bouncy: "",
      stringy: "",
    },
  },
}

const myButtonVariants = cva(
  // Base class string that applies to all variants
  "px-7 py-2 rounded-2xl cursor-pointer ",
  myButtonConfig
);


interface MyButtonProps
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