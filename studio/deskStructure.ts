// ./src/desk-structure/index.js (or similar)

import S from "@sanity/desk-tool/structure-builder";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { DocumentIcon, CogIcon } from "@sanity/icons";

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
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(
          S.editor()
            .documentId("settings")
            .title("Settings")
            .schemaType("settings")
        ),
    ]);
