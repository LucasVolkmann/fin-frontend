import { useState } from 'react';

import { MethodsEnum } from '../enumerations/methods.enum';
import ConnectionAPI from '../functions/connection/connectionAPI';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const request = async <T>(
    url: string,
    method: MethodsEnum,
    saveGlobal?: (object: T) => void,
    body?: unknown,
  ): Promise<T | undefined> => {
    setLoading(true);

    const response: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((res) => {
        if (saveGlobal) {
          saveGlobal(res);
        }
        return res;
      })
      .catch(() => {
        //FIXME: handle this
        return undefined;
      });

    setLoading(false);
    return response;
  };

  return {
    loading,
    request,
  };
};
