// ./src/desk-structure/index.js (or similar)

import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { DocumentIcon } from "@sanity/icons";

export default () =>
  S.list()
    .title("Content")
    .items([
      // Optional configuration
      orderableDocumentListDeskItem({
        type: "page",
        title: "Pages",
        icon: DocumentIcon,
      }),
    ]);
