import { useMemo } from 'react';
import { Params, useParams as _useParams } from 'react-router-dom';

// ----------------------------------------------------------------------

export function useParams(): Params {
  const params = _useParams();

  return useMemo(() => params, [params]);
}
