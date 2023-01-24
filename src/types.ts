// types.ts
export type Status = "todo" | "doing" | "done";
export interface TodoPayload {
  id: number;
  status: Status;
}
export type Todo = {
  id: number;
  title: string;
  status: Status;
};
export const statusArr: Status[] = ["todo", "doing", "done"];
