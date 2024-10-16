"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface OptionProps {
  value: string;
  children: ReactNode;
}

const Option: React.FC<OptionProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface SelectProps {
  children: React.ReactNode;
  placeholder?: string;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  children,
  placeholder = "Collections",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    onChange?.(value);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const options = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === Option) {
      const isSelected = child.props.value === selectedValue;
      return (
        <div
          role="option"
          aria-selected={isSelected}
          tabIndex={0}
          className={cn(
            "p-2 cursor-pointer transition-colors",
            isSelected ? "bg-muted-foreground" : "hover:bg-muted-foreground"
          )}
          onClick={() => handleOptionClick(child.props.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOptionClick(child.props.value);
            }
          }}
        >
          {child}
        </div>
      );
    }
    return null;
  });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown") {
      setIsOpen(true);
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      setIsOpen(false);
      event.preventDefault();
    } else if (event.key === "Enter" && !isOpen) {
      setIsOpen(true);
      event.preventDefault();
    }
  };

  return (
    <div
      className="relative w-64"
      ref={selectRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="p-2 border border-neutral-400 cursor-pointer bg-white flex justify-between items-center"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>
          {selectedValue
            ? React.Children.toArray(children)
                .filter((child): child is React.ReactElement<any> =>
                  React.isValidElement(child)
                )
                .find((child) => child.props.value === selectedValue)?.props
                .children
            : placeholder}
        </span>
        {/* <span className="ml-2">{isOpen ? "▲" : "▼"}</span> */}
      </div>

      {isOpen && (
        <div
          role="listbox"
          className="absolute mt-1 w-full bg-primary border border-neutral-400 z-10"
        >
          {options}
        </div>
      )}
    </div>
  );
};

export { Select, Option };
