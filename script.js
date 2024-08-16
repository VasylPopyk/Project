const editor = grapesjs.init({
  container: "#gjs",
  fromElement: true,
  storageManager: false,
  styleManager: {
    sectors: [
      {
        name: "Spacing",
        open: true,
        properties: [
          {
            name: "Padding Top",
            property: "padding-top",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
          {
            name: "Padding Right",
            property: "padding-right",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
          {
            name: "Padding Bottom",
            property: "padding-bottom",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
          {
            name: "Padding Left",
            property: "padding-left",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
          {
            name: "Margin Top",
            property: "margin-top",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
          {
            name: "Margin Right",
            property: "margin-right",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
          {
            name: "Margin Bottom",
            property: "margin-bottom",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
          {
            name: "Margin Left",
            property: "margin-left",
            type: "number",
            units: ["px"],
            defaults: "0",
          },
        ],
      },
    ],
  },
});
