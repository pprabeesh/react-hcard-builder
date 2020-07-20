import { HCardState, FileProps } from "common/types";

export interface Props {
  hCardState: HCardState;
  setAvatarState: (avatarState: FileProps) => void;
  handleChange: (value: any, name: any) => void;
}
