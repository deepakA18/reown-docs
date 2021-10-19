/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

//module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //mainSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
//};


module.exports = {
  mainSidebar: [
    'readme',
    {
      type: 'category',
      label: 'Quick Start',
      collapsible: false,
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Dapps',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'quick-start/dapps', 
            },
          ],
        },
        {
          type: 'category',
          label: 'Wallets',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'autogenerated',
              dirName: 'quick-start/wallets', 
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        {
          type: 'autogenerated',
          dirName: 'protocol', 
        },
      ],
    },
    'migration',
    'mobile-linking',
    {
      type: 'category',
      label: 'JSON-RPC Methods',
      items: [
        {
          type: 'autogenerated',
          dirName: 'json-rpc', 
        },
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'api', 
        },
      ],
    },
  ],
};