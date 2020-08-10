export const ROLES = {
  PASSPORT_SCOPE: {
    'Root': 'Root',
    'Admin': 'Admin',
  },
  ID: {
    'Root': 1,
    'Admin': 2,
  },
};

export const PAGINATION = {
  'TotalVisible': 7,
};

export const MASK_PHONE = '8 (###) ###-##-##';

export const PASSPORT_TYPE = {
  oldNumberPassport: 0,
  newNumberPassport: 1,
};

export const SEX_TYPE = {
  Man: 1,
  Woman: 0,
};

export const CONSTANTS = {
  DescriptionTextUser: 500,
}

export const TEXT_EDITOR_TOOLBAR_USER = [
  ["bold", "italic", "underline", "strike"],
  [{
    align: ""
  }, {
    align: "center"
  }, {
    align: "right"
  }, {
    align: "justify"
  }],
  [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    list: "check"
  }], [{
    indent: "-1"
  }, {
    indent: "+1"
  }], // outdent/indent
  [{
    color: []
  }],
  ["link"], ["clean"] // remove formatting button
]
