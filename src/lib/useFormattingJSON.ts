import { decompressFromBase64 } from "lz-string";
import { useRouter } from "vue-router";
import { deserializeFlatObject } from "./base64Form";

export function useFormattingJSONProvider() {
  const router = useRouter();
  const encodedForm = router.currentRoute.value.params.encodedForm as string;
  return getJSONFromBase64(encodedForm);
}

function getJSONFromBase64(base64Tune: string) {
  const json = decompressFromBase64(base64Tune);
  if (!json) {
    throw new Error('Decompressed string is empty');
  }
  const flattened = deserializeFlatObject(json);
  return unflatten(flattened);
}

function unflatten(data: any) {
  "use strict";
  if (Object(data) !== data || Array.isArray(data))
      return data;
  var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
      resultholder: any = {};
  for (var p in data) {
      var cur : any = resultholder,
          prop = "",
          m;
      while (m = regex.exec(p)) {
          cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
          prop = m[2] || m[1];
      }
      cur[prop] = data[p];
  }
  return resultholder[""] || resultholder;
};
