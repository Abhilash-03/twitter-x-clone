'use client';

import { modalState } from "@/atom/modalAtom";
import { useRecoilState } from "recoil";

const CommentModal = () => {
    const [open, setOpen] = useRecoilState(modalState);
  return (
    <div>
      <h1>Comment Modal</h1>
      {
        open && <h1>Modal is open</h1>
      }
    </div>
  )
}

export default CommentModal
