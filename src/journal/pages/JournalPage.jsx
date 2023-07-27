import { useDispatch, useSelector } from "react-redux";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothinSelectedView } from "../views";
import { IconButton } from "@mui/material";
import { AddOutlined } from "@mui/icons-material";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active } = useSelector((state) => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothinSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          background: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
