export const color = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Black",
  "White",
  "Pink",
  "Purple",
  "Orange",
  "Brown",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "Red", label: "Red" },
      { value: "Blue", label: "Blue" },
      { value: "Green", label: "Green" },
      { value: "Yellow", label: "Yellow" },
      { value: "Black", label: "Black" },
      { value: "White", label: "White" },
      { value: "Pink", label: "Pink" },
      { value: "Purple", label: "Purple" },
      { value: "Orange", label: "Orange" },
      { value: "Brown", label: "Brown" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilters = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "Rs 159 - Rs 399" },
      { value: "400-999", label: "Rs 400 - Rs 999" },
      { value: "1000-1999", label: "Rs 1000 - Rs 1999" },
      { value: "2000-2999", label: "Rs 2000 - Rs 2999" },
      { value: "3000-5000", label: "Rs 3000 - Rs 5000" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and above" },
      { value: "20", label: "20% and above" },
      { value: "30", label: "30% and above" },
      { value: "40", label: "40% and above" },
      { value: "50", label: "50% and above" },
      { value: "60", label: "60% and above" },
      { value: "70", label: "70% and above" },
      { value: "80", label: "80% and above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out of Stock" },
    ],
  },
];

export const sortOption = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
