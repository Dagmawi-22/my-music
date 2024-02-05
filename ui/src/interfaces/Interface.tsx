import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export interface Song {
  id?: number;
  title: string;
  album: string;
  artist: string;
  genre: string;
}

export interface SongState {
  songs: Song[];
  loading: boolean;
  error: null | string;
}
