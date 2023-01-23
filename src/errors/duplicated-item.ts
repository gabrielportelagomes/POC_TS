import { Error } from "../protocols";

export function DuplicatedItem(): Error {
    return {
      name: "DuplicatedItem",
      message: "Item already registered",
    };
  }