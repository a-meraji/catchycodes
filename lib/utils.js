import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export class Data {
  constructor(title, subTitle, image) {
    this.title = title;
    this.subTitle = subTitle;
    this.image = image;
  }
}
