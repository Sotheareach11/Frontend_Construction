const size = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl"
] as const

export default {
  "slots": {
    "root": "data-[disabled]:opacity-75",
    "picker": "flex gap-4",
    "selector": "rounded-md touch-none",
    "selectorBackground": "w-full h-full relative rounded-md",
    "selectorThumb": "-translate-y-1/2 -translate-x-1/2 absolute size-4 ring-2 ring-(--color-white) rounded-full cursor-pointer data-[disabled]:cursor-not-allowed",
    "track": "w-[8px] relative rounded-md touch-none",
    "trackThumb": "absolute transform -translate-y-1/2 -translate-x-[4px] rtl:translate-x-[4px] size-4 rounded-full ring-2 ring-(--color-white) cursor-pointer data-[disabled]:cursor-not-allowed"
  },
  "variants": {
    "size": {
      "xs": {
        "selector": "w-38 h-38",
        "track": "h-38"
      },
      "sm": {
        "selector": "w-40 h-40",
        "track": "h-40"
      },
      "md": {
        "selector": "w-42 h-42",
        "track": "h-42"
      },
      "lg": {
        "selector": "w-44 h-44",
        "track": "h-44"
      },
      "xl": {
        "selector": "w-46 h-46",
        "track": "h-46"
      }
    }
  },
  "compoundVariants": [],
  "defaultVariants": {
    "size": "md" as typeof size[number]
  }
}