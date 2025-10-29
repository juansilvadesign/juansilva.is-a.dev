import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, checked, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false);

    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = event.target.checked;
      setIsChecked(newChecked);
      onChange?.(event);
    };

    return (
      <div className="flex items-start gap-3">
        <div className="relative">
          <input
            type="checkbox"
            id={id}
            ref={ref}
            checked={isChecked}
            onChange={handleChange}
            className={cn(
              "sr-only",
              className
            )}
            {...props}
          />
          <div 
            className={cn(
              "w-5 h-5 mt-1 border-2 rounded transition-all duration-200 flex items-center justify-center cursor-pointer",
              isChecked 
                ? "bg-primary border-primary" 
                : "bg-white border-border hover:border-primary/50"
            )}
            onClick={() => {
              const input = document.getElementById(id || '') as HTMLInputElement;
              input?.click();
            }}
          >
            <Check 
              className={cn(
                "w-4 h-4 text-white transition-opacity duration-200",
                isChecked ? "opacity-100" : "opacity-0"
              )} 
            />
          </div>
        </div>
        {label && (
          <label htmlFor={id} className="text-[#344054] text-sm leading-relaxed cursor-pointer">
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }