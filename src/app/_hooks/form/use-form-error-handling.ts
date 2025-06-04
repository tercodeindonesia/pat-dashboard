import { useEffect } from "react";

import { TResponseError } from "@/commons/types/response";

export const useFormErrorHandling = (
  error?: TResponseError | null,
  onError?: (error: TResponseError["errors"][number]) => void,
) => {
  useEffect(() => {
    error?.errors?.forEach((value) => onError?.(value));
  }, [error]);
};
