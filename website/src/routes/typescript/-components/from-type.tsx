import type { FromTypeResult } from "@schema-benchmarks/bench";

import { fromTypeStyleLabels } from "#src/routes/typescript/-constants.ts";
import { MdSymbol } from "#src/shared/components/symbol/index.tsx";

/**
 * A library that accepts a schema not matching the type is worse than one with no way at all: the
 * annotation reads like a guarantee and isn't one, so it is called out rather than ticked.
 */
export function FromTypeText({ fromType }: { fromType: FromTypeResult | undefined }) {
  if (!fromType) return "No";
  const { label, icon } = fromTypeStyleLabels[fromType.style];
  return (
    <span className="types-from-type">
      <MdSymbol size={18}>{fromType.checked ? icon : "warning"}</MdSymbol>
      {fromType.checked ? label : "Unchecked"}
    </span>
  );
}
