import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

// register Handsontable's modules
registerAllModules();

export const SampleNestedRow = () => {
  const sourceDataObject = [
    {
      group: "User Management",
      idMenu: null,
      namaMenu: null,
      read: null,
      create: null,
      update: null,
      delete: null,
      __children: [
        {
          idMenu: 12,
          namaMenu: "MENU HEADER",
          delete: true,
          read: true,
          create: true,
          update: true,
        },
        {
          idMenu: 13,
          namaMenu: "MENU",
          delete: false,
          read: false,
          create: true,
          update: false,
        },
        {
          idMenu: 14,
          namaMenu: "AKSES",
          delete: false,
          read: false,
          create: false,
          update: true,
        },
        {
          idMenu: 15,
          namaMenu: "USER",
          delete: true,
          read: true,
          create: true,
          update: true,
        },
      ],
    },
    {
      group: "Member",
      __children: [
        {
          idMenu: 1,
          namaMenu: "Member Welcome",
          delete: false,
          read: false,
          create: false,
          update: false,
        },
      ],
    },
  ];

  return (
    <HotTable
      data={sourceDataObject}
      preventOverflow="horizontal"
      rowHeaders={true}
      colHeaders={["Group", "ID Menu", "Nama Menu", "Delete", "Read", "Create", "Update"]}
      nestedRows={true}
      contextMenu={true}
      bindRowsWithHeaders={true}
      autoWrapRow={true}
      autoWrapCol={true}
      licenseKey="non-commercial-and-evaluation"
    />
  );
};
