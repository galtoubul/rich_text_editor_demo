/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const flexCenter = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const flexCol = css({ flexDirection: "column" });

export const flexCenterCol = css([flexCenter, flexCol]);
