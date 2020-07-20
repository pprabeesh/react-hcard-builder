import React, { useState } from "react";
import { HCardBuilderLayout } from "./styled";
import { HCardForm } from "components/HCardForm";
import { HCardView } from "components/HCardView";
import { HCardState, FileProps } from "common/types";
import { INITIAL_STATE, IMAGE_PROPS } from "./constants";

export const HCardBuilder = () => {
  const [hCardState, setHCardState] = useState<HCardState>(INITIAL_STATE);

  const [avatarState, setAvatarState] = useState<FileProps>(IMAGE_PROPS);

  const handleChange = (value: string, name: string) => {
    setHCardState({ ...hCardState, [name]: value });
  };

  return (
    <HCardBuilderLayout>
      <HCardForm
        hCardState={hCardState}
        handleChange={handleChange}
        setAvatarState={setAvatarState}
      />
      <HCardView hCardState={hCardState} avatarState={avatarState} />
    </HCardBuilderLayout>
  );
};
